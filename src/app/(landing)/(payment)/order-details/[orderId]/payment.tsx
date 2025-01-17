'use client';
import { useState } from 'react';
import { OrderStatus } from '@prisma/client';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import PayPal from './paypal';
import Stripe from './stripe';
import { FaPaypal, FaStripe } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import payPalImg from '@/../public/images/payment-gateway-logos/Paypal.png';
import stripeImg from '@/../public/images/payment-gateway-logos/stripe.png';

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
                <Image src={payPalImg} alt='PayPal' width={80} />
              </CardContent>
            </Card>
            <Card
              className='hover:shadow-lg cursor-pointer'
              onClick={() => handleMethodSelect('stripe')}>
              <CardContent className='flex flex-col justify-center items-center py-6'>
                <Image src={stripeImg} alt='PayPal' width={80} />
              </CardContent>
            </Card>
          </div>
        </>
      ) : (
        <Card className='py-8 w-full max-w-md'>
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
