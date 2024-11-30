import BlacklistRemovalVendors from './blacklist-removal-vendors';
import { getProduct } from '@/lib/product/get-product';

export const dynamic = 'force-static';

import { getServiceMetadata } from '@/app/seo';

export const metadata = getServiceMetadata('/blacklist-removal');

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
