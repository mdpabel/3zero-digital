'use server';

import prisma from '@/prisma/db';

export const deleteCategory = (categoryId: string) => {
  try {
    if (!categoryId) {
      return {
        success: false,
        message: 'Category ID cannot be empty.',
      };
    }
  } catch (error) {}
};
