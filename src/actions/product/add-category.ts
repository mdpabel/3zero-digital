'use server';
import prisma from '@/prisma/db';
import { categoryFormSchema } from '@/schema/product/category-form-schema';
import { revalidatePath } from 'next/cache';
import slugify from 'slugify';

export async function createCategory(_: any, formData: FormData) {
  try {
    const formDataObj = Object.fromEntries(formData.entries());

    const result = categoryFormSchema.safeParse({
      name: formDataObj.name,
      description: formDataObj.description,
    });

    if (!result.success) {
      const errors = result.error.flatten();
      console.log(errors);
      return { message: 'Validation failed', success: false };
    }

    const { name, description } = result.data;

    const slug = slugify(name, {
      lower: true,
      trim: true,
    });

    await prisma.category.create({
      data: { name, description, slug },
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
