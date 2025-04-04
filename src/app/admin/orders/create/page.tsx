import React from 'react';
import AdminOrderForm from './form';
import prisma from '@/prisma/db';

const page = async () => {
  const products = await prisma.product.findMany();
  const templates = await prisma.template.findMany();

  return <AdminOrderForm products={products} templates={templates} />;
};

export default page;
