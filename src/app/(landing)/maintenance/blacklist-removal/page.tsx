import prisma from '@/prisma/db';
import BlacklistRemovalVendors from './blacklist-removal-vendors';
import { getProduct } from '@/lib/product/get-product';

import { getServiceMetadata } from '@/app/seo';

export const metadata = getServiceMetadata('/maintenance/blacklist-removal');

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
