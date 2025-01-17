'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { FaStripe } from 'react-icons/fa';
import { createStripeCheckoutSession } from '@/actions/stripe/create-checkout-session';
import Spinner from '@/components/common/spinner';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

const StripeCheckout = ({ orderId }: { orderId: string }) => {
  const router = useRouter();
  const [pending, setPending] = useState(false);
  const { toast } = useToast();

  const handleStripeCheckout = async () => {
    setPending(true);
    const { message, success, sessionUrl } = await createStripeCheckoutSession(
      orderId,
    );

    if (success && message) {
      toast({
        title: 'Stripe checkout completed',
        description: message,
      });

      if (sessionUrl) {
        router.push(sessionUrl);
      }
    } else if (!success && message) {
      toast({
        title: 'Payment failed',
        description: message,
        variant: 'destructive',
      });
    }

    setPending(false);
  };

  return (
    <div className='flex flex-col items-center space-y-4 mx-auto max-w-md'>
      <FaStripe size={50} className='text-blue-500' />
      <p className='text-center text-gray-600'>
        Complete your payment securely with Stripe, a trusted payment provider.
      </p>
      <Button onClick={handleStripeCheckout} className='w-full'>
        {pending ? <Spinner /> : 'Proceed to Payment'}
      </Button>
    </div>
  );
};

export default StripeCheckout;
