'use server';

import { payPalClient } from '@/lib/paypal';
import prisma from '@/prisma/db';
import { ApiError, OrdersController } from '@paypal/paypal-server-sdk';
import { revalidatePath } from 'next/cache';

export const capturePayPalOrder = async (
  orderId: string,
  paypalOrderId: string,
) => {
  if (!orderId || !paypalOrderId) {
    console.error('❌ Missing orderId or PayPal order ID:', {
      orderId,
      paypalOrderId,
    });
    throw new Error('Missing orderId or PayPal order ID');
  }

  // ✅ Step 1: Retrieve the Order
  const order = await prisma.order.findUnique({
    where: { id: orderId },
  });

  if (!order) {
    throw new Error('Order not found');
  }

  // ✅ Step 2: Retrieve Payment Record
  let payment = await prisma.payment.findFirst({
    where: { orderId: order.id },
  });

  if (!payment) {
    console.error(`⚠️ No existing payment record found for order ${order.id}`);
    throw new Error('No existing payment record found.');
  }

  // ✅ Step 3: Capture the Order via PayPal
  const ordersController = new OrdersController(payPalClient);

  try {
    const { result } = await ordersController.ordersCapture({
      id: paypalOrderId, // Capture the PayPal order
      prefer: 'return=minimal',
    });

    console.log({ result });

    // ✅ Step 4: Update Payment Record Only (No Change to Order Status)
    await prisma.payment.update({
      where: { id: payment.id },
      data: {
        transactionId: result.id, // Store PayPal Capture ID
        metadata: JSON.stringify(result), // Store PayPal response details
        status: 'paid', // Mark as successfully paid
        gateway: 'PayPal',
      },
    });

    revalidatePath(`/order-details/${order.id}`);

    return {
      success: true,
      message: 'Order payment captured successfully',
      result,
    };
  } catch (error: any) {
    if (error instanceof ApiError) {
      console.error('PayPal API Error:', error.result);
      return {
        success: false,
        message: 'Error capturing PayPal order. Please try again.',
      };
    }

    console.error('Unexpected Error Capturing Order:', error);
    return {
      success: false,
      message:
        error.message ||
        'An unexpected error occurred while capturing the PayPal order.',
    };
  }
};
