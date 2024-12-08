'use client';

import Link from 'next/link';
import Spinner from '../common/spinner';
import { useFormStatus } from 'react-dom';
import { createStripeSession } from '@/actions/payment/create-checkout-session';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

const Checkout = ({
  productId,
  metaData,
  quantity,
  paymentMode = 'payment',
}: {
  productId: string;
  metaData?: string[];
  quantity?: number;
  paymentMode?: 'subscription' | 'payment';
}) => {
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
    <form
      action={() => {
        const formData = new FormData();
        formData.append('productId', productId);
        formData.append('paymentMode', paymentMode);
        if (quantity) {
          formData.append('quantity', quantity.toString());
        }
        if (metaData) {
          formData.append('metaData', JSON.stringify(metaData));
        }
        action(formData);
      }}>
      <CheckoutButton />
    </form>
  );
};

const CheckoutButton = () => {
  const { pending } = useFormStatus();
  const { status } = useSession();

  return (
    <div className='text-center'>
      {status === 'authenticated' && (
        <button className='flex justify-center items-center bg-gradient-to-r from-[#614385] to-[#516395] shadow-md mx-auto py-3 rounded-lg w-64 font-semibold text-center text-white transform transition-transform hover:scale-105'>
          <span>{pending ? <Spinner /> : 'Proceed to Checkout'}</span>
        </button>
      )}

      {status === 'unauthenticated' && (
        <Link
          href={`/login`}
          className='flex justify-center items-center bg-gradient-to-r from-[#614385] to-[#516395] shadow-md mx-auto py-3 rounded-lg w-64 font-semibold text-center text-white transform transition-transform hover:scale-105'>
          Login to proceed
        </Link>
      )}
    </div>
  );
};

export default Checkout;
