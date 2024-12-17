'use server';

import { auth } from '@/auth';
import { stripe } from '@/lib/stripe/stripe';
import prisma from '@/prisma/db';
import { paymentIntentSchema } from '@/schema/payment/payment-intent-schema';
import { z } from 'zod';

export const createStripeSession = async (_: any, formData: FormData) => {
  try {
    const { productId, quantity, paymentMode, metaData } =
      paymentIntentSchema.parse(Object.fromEntries(formData.entries()));

    // Authenticate user
    const session = await auth();

    if (!session || !session.user) {
      return { success: false, message: 'You are not authorized' };
    }

    // Check session expiration
    if (session.expires && new Date(session.expires) < new Date()) {
      return {
        success: false,
        message: 'Your session has expired. Please log in again.',
      };
    }

    if (parseInt(quantity) <= 0) {
      return { success: false, message: 'Quantity must be greater than zero' };
    }

    const userId = session.user.id;
    const email = session.user.email;

    if (!email) {
      return { success: false, message: 'Email must be provided' };
    }

    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return { success: false, message: 'User not found' };
    }

    // Fetch product and ensure it has prices
    const product = await prisma.product.findUnique({
      where: { id: productId },
      include: { prices: true },
    });

    if (!product || !product.prices || product.prices.length === 0) {
      return { success: false, message: 'Product not found or has no price' };
    }

    // Extract product price
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
