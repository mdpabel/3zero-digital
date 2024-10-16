import prisma from '@/prisma/db';
import BlacklistRemovalVendors from './blacklist-removal-vendors';
import { getProduct } from '@/lib/product/get-product';

const page = async () => {
  const { origPrice, price, productId } = await getProduct(
    'Blacklist Removal Service',
  );

  return (
    <BlacklistRemovalVendors
      origPrice={origPrice}
      price={price}
      productId={productId}
    />
  );
};

export default page;
