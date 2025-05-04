import Link from 'next/link';
import { Button } from '../ui/button';
import { ReactNode } from 'react';

const Checkout = ({
  productId,
  metaData,
  quantity,
  paymentMode = 'payment',
  className = '',
  children,
}: {
  productId: string;
  metaData?: string[];
  quantity?: number;
  paymentMode?: 'subscription' | 'payment';
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <Button asChild className='py-6 w-full min-w-64'>
      <Link
        href={`/place-order?quantity=${quantity}&productId=${productId}&metaData=${metaData}&paymentMode=${paymentMode}`}>
        {children ?? 'Checkout'}
      </Link>
    </Button>
  );
};

export default Checkout;
