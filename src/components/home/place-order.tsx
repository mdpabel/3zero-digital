import { Button } from '../ui/button';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const PlaceOrder = ({
  productId,
  children,
  productType = 'service',
  className,
}: {
  productId: string;
  children?: ReactNode;
  productType?: 'service' | 'product';
  className?: string;
}) => {
  return (
    <Button className={cn('w-full', className)} asChild>
      <Link
        href={`/place-order?quantity=1&productId=${productId}&productType=${productType}`}>
        {children ?? (
          <>
            <FaShoppingCart className='mr-2' /> Place order
          </>
        )}
      </Link>
    </Button>
  );
};

export default PlaceOrder;
