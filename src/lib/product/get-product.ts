import prisma from '@/prisma/db';

export const getProduct = async (name: string) => {
  const product = await prisma.product.findFirst({
    where: {
      name,
    },
    include: {
      prices: true,
    },
  });

  if (!product) {
    throw new Error('Product not found!');
  }

  const prices = product?.prices!;
  const price = prices[0].unitAmount;
  const origPrice = prices[0].origPrice!;
  const productId = product?.id!;

  return {
    price,
    origPrice,
    productId,
  };
};
