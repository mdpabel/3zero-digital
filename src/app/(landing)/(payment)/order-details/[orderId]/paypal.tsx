'use client';
import React from 'react';
import {
  OnApproveBraintreeData,
  PayPalButtons,
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from '@paypal/react-paypal-js';
import { createPayPalOrder } from '@/actions/paypal/create-order';
import { capturePayPalOrder } from '@/actions/paypal/capture-order';
import { useToast } from '@/hooks/use-toast';

const PrintLoadingState = () => {
  const [{ isPending, isRejected }] = usePayPalScriptReducer();

  let status = '';

  if (isPending) {
    status = 'Loading PayPal...';
  } else if (isRejected) {
    status = 'Failed to load PayPal. Please try again later.';
  }

  return status;
};

const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!;

if (!PAYPAL_CLIENT_ID) {
  throw new Error('PayPal PAYPAL_CLIENT_ID not found.');
}

const PayPal = ({ orderId }: { orderId: string }) => {
  const { toast } = useToast();

  const handleCreateOrder = async () => {
    const res = await createPayPalOrder(orderId);
    if (res.message && !res.success) {
      toast({
        description: res.message,
      });
      return '';
    }

    return res.orderID!;
  };

  const handleApproveOrder = async (data: any) => {
    if (!data || !data.orderID) {
      toast({
        description: 'PayPal Order ID is missing.',
        variant: 'destructive',
      });
      return;
    }

    const res = await capturePayPalOrder(orderId, data.orderID);
    if (res.message && !res.success) {
      toast({
        description: res.message,
        variant: 'destructive',
      });
      return;
    } else if (res.message && res.success) {
      toast({
        description: res.message,
      });
    }
  };

  return (
    <PayPalScriptProvider
      options={{
        clientId: PAYPAL_CLIENT_ID,
      }}>
      <PrintLoadingState />
      <PayPalButtons
        createOrder={handleCreateOrder}
        onApprove={handleApproveOrder}
      />
    </PayPalScriptProvider>
  );
};

export default PayPal;
