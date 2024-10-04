'use server';
import prisma from '@/prisma/db';
import { productFormSchema } from '@/schema/product/product-form-schema';
import { revalidatePath } from 'next/cache';

export async function createProduct(_: any, formData: FormData) {
  try {
    const formDataObj = Object.fromEntries(formData.entries());

    const result = productFormSchema.safeParse({
      name: formDataObj.name,
      price: parseFloat(formDataObj.price as string),
      origPrice: parseFloat(formDataObj.origPrice as string),
      description: formDataObj.description,
      imageUrl: formDataObj.imageUrl,
      categoryId: formDataObj.categoryId,
    });

    if (!result.success) {
      const errors = result.error.flatten();
      console.log(errors);
      return {
        message: 'Validation failed',
        success: false,
      };
    }

    const { name, price, description, imageUrl, categoryId, origPrice } =
      result.data;

    console.log({ categoryId });

    await prisma.product.create({
      data: {
        name,
        price,
        description,
        imageUrl,
        categoryId,
        origPrice,
      },
    });

    revalidatePath('/admin/products');
    return {
      message: 'Added product.',
      success: true,
    };
  } catch (error) {
    console.error('Error creating product:', error);

    return {
      message:
        'An error occurred while creating the product. Please try again later.',
      success: false,
    };
  }
}
