'use client';
import { useState } from 'react';
import { OrderStatus } from '@prisma/client';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import PayPal from './paypal';
import Stripe from './stripe';
import { FaPaypal, FaStripe } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const Payment = ({
  orderId,
  orderStatus,
}: {
  orderId: string;
  orderStatus: OrderStatus;
}) => {
  const [selectedMethod, setSelectedMethod] = useState<
    'paypal' | 'stripe' | null
  >(null);

  const handleMethodSelect = (method: 'paypal' | 'stripe') => {
    setSelectedMethod(method);
  };

  return (
    <div className='flex flex-col justify-center items-center space-y-6'>
      {!selectedMethod ? (
        <>
          <p className='font-medium text-lg'>
            Please choose a payment method and complete your payment to proceed.
          </p>
          <div className='gap-4 grid grid-cols-1 md:grid-cols-2'>
            <Card
              className='hover:shadow-lg cursor-pointer'
              onClick={() => handleMethodSelect('paypal')}>
              <CardContent className='flex flex-col justify-center items-center py-6'>
                <FaPaypal size={48} className='text-blue-600' />
                <CardTitle className='mt-4 text-xl'>PayPal</CardTitle>
              </CardContent>
            </Card>
            <Card
              className='hover:shadow-lg cursor-pointer'
              onClick={() => handleMethodSelect('stripe')}>
              <CardContent className='flex flex-col justify-center items-center py-6'>
                <FaStripe size={48} className='text-indigo-600' />
                <CardTitle className='mt-4 text-xl'>Stripe</CardTitle>
              </CardContent>
            </Card>
          </div>
        </>
      ) : (
        <Card className='w-full max-w-md'>
          <CardContent>
            <CardTitle className='mb-4 text-2xl text-center'>
              {selectedMethod === 'paypal'
                ? 'Pay with PayPal'
                : 'Pay with Stripe'}
            </CardTitle>
            {selectedMethod === 'paypal' ? (
              <PayPal orderId={orderId} />
            ) : (
              <Stripe orderId={orderId} />
            )}
          </CardContent>
          <CardFooter className='text-center'>
            <Button onClick={() => setSelectedMethod(null)}>Go Back</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default Payment;
