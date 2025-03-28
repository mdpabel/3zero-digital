'use server';
import { stripe } from '@/lib/stripe/stripe';
import prisma from '@/prisma/db';

export const createStripeCheckoutSession = async (orderId: string) => {
  try {
    if (!orderId) {
      throw new Error('Missing order ID. Please provide a valid order ID.');
    }

    // ✅ Step 1: Retrieve the Order
    const order = await prisma.order.findUnique({
      where: { id: orderId },
      include: {
        product: true,
        user: true,
      },
    });

    if (!order) {
      throw new Error(`Order with ID ${orderId} was not found.`);
    }

    // ✅ Step 2: Retrieve or Create Payment Entry
    let payment = await prisma.payment.findFirst({
      where: { orderId: order.id },
    });

    if (!payment) {
      console.warn(
        `⚠️ No existing payment record found for order ${order.id}. Creating a new payment record...`,
      );

      // ✅ Create a Payment Record if it Doesn't Exist
      payment = await prisma.payment.create({
        data: {
          orderId: order.id,
          gateway: 'Stripe',
          transactionId: null,
          amount: order.total,
          currency: order.currency ?? 'USD',
          status: 'unpaid',
          metadata: null,
        },
      });

      console.info(`✅ Payment record created for order ${order.id}.`);
    }

    // ✅ Convert price to smallest currency unit (e.g., cents for USD)
    const totalInCents = Math.round(order.total * 100); // Round to avoid floating-point issues

    // ✅ Step 3: Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer_email: order.user.email ?? '',
      line_items: [
        {
          price_data: {
            currency: order.currency ?? 'USD',
            product_data: {
              name: order.product.name,
              description: order.product.description ?? '',
            },
            unit_amount: totalInCents,
          },
          quantity: order.quantity,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/order-details/${order.id}?stripe_payment_success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_FRONTEND_URL}/order-details/${order.id}`,
      metadata: {
        orderId: order.id,
      },
    });

    if (!session) {
      throw new Error(
        'Failed to create a Stripe checkout session. Please try again later.',
      );
    }

    console.info(
      `✅ Stripe checkout session created successfully. Session ID: ${session.id}`,
    );

    // ✅ Step 4: Update Payment Record with Stripe Session ID
    await prisma.payment.update({
      where: { id: payment.id },
      data: {
        transactionId: session.id,
        metadata: JSON.stringify(session),
        status: 'unpaid',
        gateway: 'Stripe',
      },
    });

    console.info(
      `✅ Payment record updated with Stripe session ID: ${session.id}`,
    );

    return {
      success: true,
      sessionId: session.id,
      sessionUrl: session.url,
      message: 'You will be redirected to the Stripe checkout page shortly.',
    };
  } catch (error: any) {
    console.error('❌ Error creating Stripe checkout session:', error.message);

    const userFriendlyMessage =
      'We encountered an issue while preparing your payment. Please try again later or contact support if the issue persists.';

    return {
      success: false,
      message: userFriendlyMessage,
    };
  }
};
