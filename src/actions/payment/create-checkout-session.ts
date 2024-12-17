'use server';

import { auth } from '@/auth';
import { stripe } from '@/lib/stripe/stripe';
import prisma from '@/prisma/db';
import { paymentIntentSchema } from '@/schema/payment/payment-intent-schema';
import { z } from 'zod';

export const createStripeSession = async (_: any, formData: FormData) => {
  try {
    const { productId, quantity, paymentMode, metaData, email } =
      paymentIntentSchema.parse(Object.fromEntries(formData.entries()));

    // Authenticate user (optional)
    const session = await auth();
    let user = null;

    // Use session if available
    if (session?.user) {
      user = await prisma.user.findUnique({
        where: { email: session.user.email! },
      });
    } else {
      // For unauthenticated users, use the provided email
      if (!email) {
        return { success: false, message: 'Email is required for checkout' };
      }

      user = await prisma.user.findUnique({ where: { email } });
    }

    if (!user) {
      return {
        success: false,
        message: 'User not found or could not be created',
      };
    }

    // Validate quantity
    if (parseInt(quantity) <= 0) {
      return { success: false, message: 'Quantity must be greater than zero' };
    }

    // Fetch product and ensure it has prices
    const product = await prisma.product.findUnique({
      where: { id: productId },
      include: { prices: true },
    });

    if (!product || !product.prices || product.prices.length === 0) {
      return { success: false, message: 'Product not found or has no price' };
    }

    const productPrice = product.prices[0].unitAmount;
    const parsedMetaData = metaData ? JSON.parse(metaData) : {};

    // Create the order in the database
    const order = await prisma.order.create({
      data: {
        userId: user.id,
        productId: product.id,
        quantity: parseInt(quantity),
        total: productPrice * parseInt(quantity),
        metadata: parsedMetaData,
      },
    });

    // Create Stripe session
    const stripeSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: paymentMode,
      customer_email: user.email!,
      line_items: [
        {
          price: product.prices[0].stripePriceId,
          quantity: parseInt(quantity),
        },
      ],
      metadata: {
        userId: user.id,
        productId,
        orderId: order.id,
      },
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
    });

    // Update the order with the Stripe session URL
    await prisma.order.update({
      where: { id: order.id },
      data: { paymentLink: stripeSession.url },
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
