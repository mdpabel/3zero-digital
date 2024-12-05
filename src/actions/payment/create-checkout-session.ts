'use server';

import { stripe } from '@/lib/stripe/stripe';
import prisma from '@/prisma/db';
import { paymentIntentSchema } from '@/schema/payment/payment-intent-schema';
import { currentUser } from '@clerk/nextjs/server';
import { z } from 'zod';

export const createStripeSession = async (_: any, formData: FormData) => {
  try {
    const { productId, quantity, paymentMode, metaData } =
      paymentIntentSchema.parse(Object.fromEntries(formData.entries()));

    const session = await currentUser();

    if (!session || !session.id) {
      return { success: false, message: 'You are not authorized' };
    }

    if (parseInt(quantity) <= 0) {
      return { success: false, message: 'Quantity must be greater than zero' };
    }

    const email = session.emailAddresses[0].emailAddress;
    const name = `${session.firstName} ${session.lastName}`;
    const userId = session.id;

    const user = await prisma.user.findUnique({
      where: { clerkUserId: userId },
    });

    if (!user) {
      return { success: false, message: 'User not found' };
    }

    let stripeCustomerId = user.stripeCustomerId;
    if (!stripeCustomerId) {
      const customer = await stripe.customers.create({
        email,
        name,
        metadata: { clerkUserId: userId },
      });
      stripeCustomerId = customer.id;
      await prisma.user.update({
        where: { clerkUserId: userId },
        data: { stripeCustomerId },
      });
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
      include: { prices: true },
    });

    if (!product || !product.prices || product.prices.length === 0) {
      return { success: false, message: 'Product not found or has no price' };
    }

    const productPrice = product.prices[0].unitAmount;

    const order = await prisma.order.create({
      data: {
        userId: user.id,
        productId: productId,
        quantity: parseInt(quantity),
        total: productPrice * parseInt(quantity),
        metadata: metaData || '{}',
      },
    });

    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: paymentMode,
      customer_email: email,
      line_items: [
        {
          price: product.prices[0].stripePriceId,
          quantity: parseInt(quantity),
        },
      ],
      metadata: {
        userId,
        productId,
        orderId: order.id,
      },
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    await prisma.order.update({
      where: {
        id: order.id,
      },
      data: {
        paymentLink: stripeSession.url,
      },
    });

    return {
      success: true,
      message: 'Checkout session created successfully',
      sessionUrl: stripeSession.url,
    };
  } catch (error) {
    console.error('Error creating Stripe session:', error);

    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: `Validation Error: ${error.errors
          .map((e) => e.message)
          .join(', ')}`,
      };
    }

    return {
      success: false,
      message: 'Unable to create checkout session. Please try again later.',
    };
  }
};
