'use client';

import Link from 'next/link';
import Spinner from '../common/spinner';
import { useFormStatus } from 'react-dom';
import { createStripeSession } from '@/actions/payment/create-checkout-session';
import { useRouter } from 'next/navigation';
import { useActionState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

const Checkout = ({
  productId,
  metaData,
  quantity,
  paymentMode = 'payment',
  className = '',
}: {
  productId: string;
  metaData?: string[];
  quantity?: number;
  paymentMode?: 'subscription' | 'payment';
  className?: string;
}) => {
  return (
    <Button asChild className='py-6 w-full min-w-64'>
      <Link
        href={`/checkout?quantity=${quantity}&productId=${productId}&metaData=${metaData}&paymentMode=${paymentMode}`}>
        Checkout
      </Link>
    </Button>
  );
};

export const CheckoutButton = ({ className = '' }: { className?: string }) => {
  const { pending } = useFormStatus();
  const { status } = useSession();

  return (
    <div className='text-center'>
      {status === 'authenticated' && (
        <button
          className={cn(
            'flex justify-center items-center bg-gradient-to-r from-[#614385] to-[#516395] shadow-md mx-auto py-3 rounded-lg w-64 font-semibold text-center text-white transform transition-transform hover:scale-105',
            className,
          )}>
          <span>{pending ? <Spinner /> : 'Proceed to Checkout'}</span>
        </button>
      )}

      {status === 'unauthenticated' && (
        <Link
          href={`/login`}
          className={cn(
            'flex justify-center items-center bg-gradient-to-r from-[#614385] to-[#516395] shadow-md mx-auto py-3 rounded-lg w-64 font-semibold text-center text-white transform transition-transform hover:scale-105',
            className,
          )}>
          Login to proceed
        </Link>
      )}
    </div>
  );
};

export default Checkout;
