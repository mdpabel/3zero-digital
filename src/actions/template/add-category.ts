'use server';

import prisma from '@/prisma/db';

// Add a new category
export async function addCategory(_: any, formData: FormData) {
  const name = formData.get('name') as string;

  if (!name) {
    return { success: false, message: 'Category name cannot be empty.' };
  }

  try {
    // Check if the category already exists
    const existingCategory = await prisma.templateCategory.findUnique({
      where: { name },
    });

    if (existingCategory) {
      return { success: false, message: 'Category already exists.' };
    }

    // Create the category
    await prisma.templateCategory.create({
      data: { name },
    });

    return { success: true, message: 'Category added successfully.' };
  } catch (error) {
    console.error('Error adding category:', error);
    return {
      success: false,
      message: 'An error occurred while adding the category.',
    };
  }
}
