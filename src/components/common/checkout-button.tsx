'use client';

import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Spinner from './spinner';

const CheckoutButton = ({
  handleCheckout,
  isPending,
}: {
  handleCheckout: () => void;
  isPending: boolean;
}) => {
  const pathname = usePathname();
  const redirectUrl = encodeURIComponent(pathname);

  return (
    <div className='text-center'>
      <SignedIn>
        <button
          onClick={handleCheckout}
          className='flex justify-center items-center bg-gradient-to-r from-[#614385] to-[#516395] shadow-md mx-auto py-3 rounded-lg w-64 font-semibold text-white transform transition-transform hover:scale-105 text-center'>
          <span>{isPending ? <Spinner /> : 'Proceed to Checkout'}</span>
        </button>
      </SignedIn>

      <SignedOut>
        <Link
          href={`/login?redirect_url=${redirectUrl}`}
          className='flex justify-center items-center bg-gradient-to-r from-[#614385] to-[#516395] shadow-md mx-auto py-3 rounded-lg w-64 font-semibold text-white transform transition-transform hover:scale-105 text-center'>
          Login to proceed
        </Link>
      </SignedOut>
    </div>
  );
};

export default CheckoutButton;
