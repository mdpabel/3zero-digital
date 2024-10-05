import prisma from '@/prisma/db';
import ProductForm from './product-form';

const AddProduct = async () => {
  const categories = await prisma.category.findMany();

  return <ProductForm categories={categories} />;
};

export default AddProduct;
