import prisma from '@/prisma/db';
import React from 'react';
import EditProductForm from './edit-product-form';

type Props = {
  params: {
    id: string;
  };
};

const EditProduct = async ({ params }: Props) => {
  const [product, categories] = await Promise.all([
    prisma.product.findUnique({
      where: { id: params.id },
      include: {
        category: true,
      },
    }),
    prisma.category.findMany(),
  ]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <EditProductForm
        categories={categories}
        category={product?.category!}
        product={product}
      />
    </div>
  );
};

export default EditProduct;
