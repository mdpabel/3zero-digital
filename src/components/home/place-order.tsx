'use client';
import React, { useActionState, useEffect, useTransition } from 'react';
import { Button } from '../ui/button';
import { FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { createStripeSession } from '@/actions/payment/create-checkout-session';
import Spinner from '../common/spinner';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';

const PlaceOrder = ({ productId }: { productId: string }) => {
  const [pending, startTransition] = useTransition();
  const router = useRouter();
  const [state, action] = useActionState(createStripeSession, {
    success: false,
    message: '',
    sessionUrl: '',
  });

  console.log({ state });

  useEffect(() => {
    if (state.sessionUrl) {
      router.push(state.sessionUrl);
    }
  }, [router, state.sessionUrl]);

  return (
    <>
      <SignedOut>
        <Button asChild>
          <Link href={`/login?redirect_to=/`}>
            <FaShoppingCart className='mr-2' />
            Place order
          </Link>
        </Button>
      </SignedOut>
      <SignedIn>
        <form
          action={() => {
            const formData = new FormData();
            formData.append('productId', productId);
            formData.append('paymentMode', 'payment');
            startTransition(() => action(formData));
          }}>
          <Button>
            {pending ? <Spinner /> : <FaShoppingCart className='mr-2' />}
            Place order
          </Button>
        </form>
      </SignedIn>
    </>
  );
};

export default PlaceOrder;
