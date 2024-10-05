import prisma from '@/prisma/db';
import BlacklistRemovalVendors from './blacklist-removal-vendors';

const page = async () => {
  const product = await prisma.product.findFirst({
    where: {
      name: 'Blacklist Removal Service',
    },
  });

  if (!product) {
    return <div>No products found</div>;
  }

  return <BlacklistRemovalVendors product={product} />;
};

export default page;
