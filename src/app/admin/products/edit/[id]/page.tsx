import prisma from '@/prisma/db';
import React from 'react';
import EditProductForm from './edit-product-form';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const EditProduct = async ({ params }: Props) => {
  const id = (await params).id;
  const [product, categories] = await Promise.all([
    prisma.product.findUnique({
      where: { id: id },
      include: {
        prices: true,
      },
    }),
    prisma.category.findMany(),
  ]);

  if (!product) {
    return <div>Product not found</div>;
  }

  console.log({
    price: product.prices,
  });

  return (
    <div>
      <EditProductForm
        categories={categories}
        prices={product.prices}
        product={product}
      />
    </div>
  );
};

export default EditProduct;
