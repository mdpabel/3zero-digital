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

  console.log({ eventType });

  try {
    switch (eventType) {
      case 'checkout.session.completed':
        if (isCheckoutSession(data)) {
          const orderId = data.metadata?.orderId;

          if (!orderId) {
            throw new Error('No orderId found in checkout session metadata');
          }

          await prisma.order.update({
            where: { id: orderId },
            data: {
              status: data.payment_status === 'paid' ? 'completed' : 'failed',
              paymentStatus: data.payment_status === 'paid' ? 'paid' : 'unpaid',
              transactionId: data.payment_intent as string,
            },
          });

          console.log(
            `Checkout session ${data.id} completed for order ${orderId}`,
          );
        }
        break;

      // Handle charge refunded
      case 'charge.refunded':
        if (isCharge(data)) {
          const paymentIntentId = data.payment_intent;

          if (!paymentIntentId) {
            throw new Error('No payment intent ID found in charge');
          }

          // Update the order status based on refund
          await prisma.order.updateMany({
            where: { transactionId: paymentIntentId as string },
            data: { paymentStatus: 'refunded' },
          });

          console.log(`Charge refunded for transaction ID: ${paymentIntentId}`);
        }
        break;

      default:
        console.log(`Unhandled event type: ${eventType}`);
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

// Type guard to check if the data is a Stripe Charge
function isCharge(data: any): data is Stripe.Charge {
  return data.object === 'charge';
}
