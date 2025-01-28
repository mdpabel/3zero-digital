import prisma from '@/prisma/db';
import React from 'react';
import EditTemplateForm from './edit-template-form';

const EditPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  // Fetch the template by its ID
  const templates = await prisma.template.findFirst({
    where: {
      deleted: false,
      id,
    },
    include: {
      categories: true,
    },
  });

  if (!templates) {
    return <div>No template found</div>;
  }

  // Fetch all categories to display in the edit form
  const categories = await prisma.templateCategory.findMany();

  return <EditTemplateForm categories={categories} template={templates} />;
};

export default EditPage;
