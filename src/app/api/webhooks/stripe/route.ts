import { stripe } from '@/lib/stripe/stripe';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/db';
import Stripe from 'stripe';

export const POST = async (req: NextRequest) => {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature');
  const secret = process.env.STRIPE_WEBHOOK_SIGNING_SECRET;

  if (!sig || !secret) {
    return NextResponse.json(
      { error: 'Missing Stripe signature or secret' },
      { status: 400 },
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, secret);
  } catch (error: any) {
    console.error('⚠️  Webhook signature verification failed:', error.message);
    return NextResponse.json(
      { error: 'Invalid webhook signature' },
      { status: 400 },
    );
  }

  const eventType = event.type;
  const data = event.data.object as Stripe.Checkout.Session | Stripe.Charge;

  const payment = await prisma.payment.findFirst({
    where: {
      transactionId: data.id,
    },
  });

  if (!payment) {
    console.error(`���️ No existing payment record found for your order`);
    throw new Error('No existing payment record found.');
  }

  console.log({ eventType });

  try {
    switch (eventType) {
      case 'checkout.session.completed':
        if (isCheckoutSession(data)) {
          const orderId = data.metadata?.orderId;
          const paymentIntent = data.payment_intent as string;

          if (!orderId) {
            throw new Error('No orderId found in checkout session metadata');
          }

          // Update payment status to 'paid'
          await prisma.payment.update({
            where: { id: payment.id }, // Match the transactionId with session ID
            data: {
              status: 'paid', // Set the status to 'paid'
              transactionId: paymentIntent, // Store Payment Intent ID
              metadata: JSON.stringify(data), // Store the full session data
            },
          });

          console.log(
            `✅ Checkout session ${data.id} completed for order ${orderId}`,
          );
        }
        break;

      case 'payment_intent.succeeded':
        if (isPaymentIntent(data)) {
          const paymentIntent = data as Stripe.PaymentIntent;

          // Log the successful payment
          console.log(
            `✅ Payment Intent ${paymentIntent.id} succeeded for amount ${paymentIntent.amount}`,
          );
        }
        break;

      case 'payment_intent.payment_failed':
        if (isPaymentIntent(data)) {
          const paymentIntent = data as Stripe.PaymentIntent;
          const failureMessage = paymentIntent.last_payment_error?.message;

          console.error(
            `❌ Payment Intent ${paymentIntent.id} failed: ${failureMessage}`,
          );

          // Update the payment status to 'failed'
          await prisma.payment.update({
            where: { id: payment.id },
            data: {
              status: 'failed',
              metadata: JSON.stringify(data),
            },
          });
        }
        break;

      default:
        console.log(`⚠️ Unhandled event type: ${eventType}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('⚠️ Error processing webhook event:', error.message);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 },
    );
  }
};

// Type guard to check if the data is a Stripe Checkout Session
function isCheckoutSession(data: any): data is Stripe.Checkout.Session {
  return data.object === 'checkout.session';
}

// Type guard to check if the data is a Stripe Payment Intent
function isPaymentIntent(data: any): data is Stripe.PaymentIntent {
  return data.object === 'payment_intent';
}
