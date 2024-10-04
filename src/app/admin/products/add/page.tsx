import React from 'react';
import AddProductForm from './add-product-form';
import prisma from '@/prisma/db';

const AddProduct = async () => {
  const categories = await prisma.category.findMany();

  return (
    <div>
      <h1 className='mb-8 font-bold text-3xl'>Add New Product</h1>
      <AddProductForm categories={categories} />
    </div>
  );
};

export default AddProduct;
