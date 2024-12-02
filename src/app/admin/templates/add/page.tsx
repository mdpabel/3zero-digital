import prisma from '@/prisma/db';
import React from 'react';
import AddTemplateForm from './add-template-form';

const AddTemplate = async () => {
  const categories = await prisma.templateCategory.findMany();

  return <AddTemplateForm categories={categories} />;
};

export default AddTemplate;
