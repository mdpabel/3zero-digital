'use client';
import React, { useActionState, useEffect, useTransition } from 'react';
import { Button } from '../ui/button';
import { FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { createStripeSession } from '@/actions/payment/create-checkout-session';
import Spinner from '../common/spinner';
import { useSession } from '@clerk/nextjs';
import Link from 'next/link';

const PlaceOrder = ({ productId }: { productId: string }) => {
  const { isSignedIn } = useSession();
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
      {!isSignedIn && (
        <Button asChild>
          <Link href={`/login?redirect_url=/`}>
            <FaShoppingCart className='mr-2' />
            Place order
          </Link>
        </Button>
      )}
      {isSignedIn && (
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
      )}
    </>
  );
};

export default PlaceOrder;
