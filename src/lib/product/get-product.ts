import prisma from '@/prisma/db';
import { Category, Price, Product } from '@prisma/client';

export const getProduct = async (slug: string) => {
  const product = await prisma.product.findFirst({
    where: {
      slug,
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

// Shape of the data passed to ServicesClient
export interface ServiceWithProducts extends Category {
  products: (Product & { prices: Price[] })[];
}

export const getProductWithServices = async () => {
  const products = await prisma.product.findMany({
    where: {
      deleted: false,
    },
    include: {
      category: true, // This will give you the category for each product
      prices: true,
    },
  });

  const categories = await prisma.category.findMany();

  // Create an array of services with products
  const services: ServiceWithProducts[] = categories.map((category) => ({
    ...category,
    products: products.filter((product) => product.categoryId === category.id),
  }));

  return services;
};
