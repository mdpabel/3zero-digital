'use server';

import { payPalClient } from '@/lib/paypal';
import prisma from '@/prisma/db';
import {
  ApiError,
  CheckoutPaymentIntent,
  OrdersController,
} from '@paypal/paypal-server-sdk';

export const createPayPalOrder = async (orderId: string) => {
  if (!orderId) {
    throw new Error('Missing orderId');
  }

  // ✅ Step 1: Retrieve the Order
  const order = await prisma.order.findUnique({
    where: { id: orderId },
  });

  if (!order) {
    throw new Error('Order not found');
  }

  // ✅ Step 2: Retrieve or Create Payment Entry
  let payment = await prisma.payment.findFirst({
    where: { orderId: order.id },
  });

  if (!payment) {
    console.warn(
      `⚠️ Warning: No existing payment record found for order ${order.id}. Creating a new payment entry.`,
    );

    // ✅ Create a Payment Record if it Doesn't Exist
    payment = await prisma.payment.create({
      data: {
        orderId: order.id,
        gateway: 'PayPal',
        transactionId: null, // PayPal transaction ID will be updated later
        amount: order.total,
        currency: order.currency ?? 'USD',
        status: 'unpaid', // Payment hasn't been processed yet
        metadata: null, // Will be updated after PayPal order creation
      },
    });
  }

  // ✅ Step 3: Create a PayPal Order
  const ordersController = new OrdersController(payPalClient);
  const collect = {
    body: {
      intent: CheckoutPaymentIntent.Capture, // Capture funds immediately
      purchaseUnits: [
        {
          amount: {
            currencyCode: 'USD',
            value: order.total.toString(),
          },
        },
      ],
    },
    prefer: 'return=minimal',
  };

  try {
    const { result } = await ordersController.ordersCreate(collect);

    // ✅ Step 4: Update Payment Record with PayPal Transaction ID
    await prisma.payment.update({
      where: { id: payment.id },
      data: {
        transactionId: result.id, // Store PayPal Order ID
        metadata: JSON.stringify(result),
        status: 'unpaid',
        gateway: 'PayPal',
      },
    });

    return { success: true, orderID: result.id };
  } catch (error: any) {
    if (error instanceof ApiError) {
      console.error('PayPal API Error:', error.result);
      return {
        success: false,
        message: 'Error creating PayPal order. Please try again.',
      };
    }

    console.error('Unexpected Error Creating PayPal Order:', error);
    return {
      success: false,
      message:
        error.message ||
        'An unexpected error occurred while creating the PayPal order. Please try again later.',
    };
  }
};
