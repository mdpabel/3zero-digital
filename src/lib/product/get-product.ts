import prisma from '@/prisma/db';
import { Category, Product } from '@prisma/client';

export const getProduct = async (slug: string) => {
  const product = await prisma.product.findFirst({
    where: {
      slug,
    },
  });

  if (!product) {
    throw new Error('Product not found!');
  }

  const price = product.price;
  const origPrice = product.origPrice;
  const productId = product?.id!;

  return {
    price,
    origPrice,
    productId,
  };
};

// Shape of the data passed to ServicesClient
export interface ServiceWithProducts extends Category {
  products: Product[];
}

export const getProductWithServices = async () => {
  const products = await prisma.product.findMany({
    where: {
      deleted: false,
    },
    include: {
      category: true, // This will give you the category for each product
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
