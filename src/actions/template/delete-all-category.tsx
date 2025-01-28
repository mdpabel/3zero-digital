'use server';

import prisma from '@/prisma/db';
import { revalidatePath } from 'next/cache';

export const deleteAllCategory = async () => {
  try {
    await prisma.templateCategory.deleteMany();
    revalidatePath('/admin/templates/category');
  } catch (error) {
    console.log(error);
  }
};
