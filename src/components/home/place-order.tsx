'use client';
import React, { useActionState, useEffect, useTransition } from 'react';
import { Button } from '../ui/button';
import { FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { createStripeSession } from '@/actions/payment/create-checkout-session';
import Spinner from '../common/spinner';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

const PlaceOrder = ({ productId }: { productId: string }) => {
  const { status } = useSession();
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const [state, action] = useActionState(createStripeSession, {
    success: false,
    message: '',
    sessionUrl: '',
  });

  useEffect(() => {
    if (state.sessionUrl) {
      router.push(state.sessionUrl);
    }
  }, [router, state.sessionUrl]);

  return (
    <>
      {status === 'unauthenticated' && (
        <Button className='w-full' asChild>
          <Link href={`/login?redirect_url=/`}>
            <FaShoppingCart className='mr-2' />
            Place order
          </Link>
        </Button>
      )}
      {status == 'authenticated' && (
        <form
          action={() => {
            const formData = new FormData();
            formData.append('productId', productId);
            formData.append('paymentMode', 'payment');
            startTransition(() => action(formData));
          }}>
          <Button className='w-full'>
            {pending ? <Spinner /> : <FaShoppingCart className='mr-2' />}
            Place order
          </Button>
        </form>
      )}
    </>
  );
};

export default PlaceOrder;
