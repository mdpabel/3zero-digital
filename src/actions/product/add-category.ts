'use server';
import prisma from '@/prisma/db';
import { categoryFormSchema } from '@/schema/product/category-form-schema';
import { revalidatePath } from 'next/cache';

export async function createCategory(_: any, formData: FormData) {
  try {
    const formDataObj = Object.fromEntries(formData.entries());

    const result = categoryFormSchema.safeParse({
      name: formDataObj.name,
    });

    if (!result.success) {
      const errors = result.error.flatten();
      console.log(errors);
      return { message: 'Validation failed', success: false };
    }

    const { name } = result.data;

    await prisma.category.create({
      data: { name },
    });

    revalidatePath('/admin/category');
    return {
      message: 'Category added',
      success: true,
    };
  } catch (error) {
    console.error('Error creating category:', error);
    return {
      message:
        'An error occurred while creating the category. Please try again later.',
      success: false,
    };
  }
}
