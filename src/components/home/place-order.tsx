import { Button } from '../ui/button';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

const PlaceOrder = ({ productId }: { productId: string }) => {
  return (
    <Button className='w-full' asChild>
      <Link
        href={`/place-order?quantity=1&productId=${productId}&paymentMode=payment`}>
        <FaShoppingCart className='mr-2' />
        Place order
      </Link>
    </Button>
  );
};

export default PlaceOrder;
