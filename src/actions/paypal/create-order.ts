'use server';

import { payPalClient } from '@/lib/paypal';
import {
  ApiError,
  CheckoutPaymentIntent,
  OrdersController,
} from '@paypal/paypal-server-sdk';

export const createOrder = async () => {
  const ordersController = new OrdersController(payPalClient);

  const collect = {
    body: {
      intent: CheckoutPaymentIntent.Capture,
      purchaseUnits: [
        {
          amount: {
            currencyCode: 'currency_code6',
            value: 'value0',
          },
        },
      ],
    },
    prefer: 'return=minimal',
  };

  try {
    const { result, ...httpResponse } = await ordersController.ordersCreate(
      collect,
    );
    // Get more response info...
    // const { statusCode, headers } = httpResponse;
  } catch (error) {
    if (error instanceof ApiError) {
      const errors = error.result;
      // const { statusCode, headers } = error;
    }
  }
};
