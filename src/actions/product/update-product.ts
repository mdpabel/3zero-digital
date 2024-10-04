'use server';
import prisma from '@/prisma/db';
import { productFormSchema } from '@/schema/product/product-form-schema';
import { revalidatePath } from 'next/cache';

export async function updateProduct(_: any, formData: FormData) {
  try {
    const formDataObj = Object.fromEntries(formData.entries());

    const productId = formDataObj.id as string;

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

    await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        name,
        price,
        description,
        imageUrl,
        categoryId,
        origPrice,
      },
    });

    // Revalidate the path to update the products page
    revalidatePath('/admin/products');

    return {
      message: 'Product updated successfully.',
      success: true,
    };
  } catch (error) {
    // Catch and handle any unexpected errors, including database issues
    console.error('Error updating product:', error);

    // Return a more specific error message
    return {
      message:
        'An error occurred while updating the product. Please try again later.',
      success: false,
    };
  }
}
