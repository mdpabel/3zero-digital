'use server';

import prisma from '@/prisma/db';
import { productFormSchema } from '@/schema/product/product-form-schema';
import { revalidatePath } from 'next/cache';

export async function updateProduct(_: any, formData: FormData) {
  try {
    const formDataObj = Object.fromEntries(formData.entries());

    const productId = formDataObj.id as string;

    // Validate form data
    const result = productFormSchema.safeParse({
      name: formDataObj.name,
      price: formDataObj.price
        ? parseFloat(formDataObj.price as string)
        : undefined,
      origPrice: formDataObj.origPrice
        ? parseFloat(formDataObj.origPrice as string)
        : undefined,
      description: formDataObj.description,
      imageUrl: formDataObj.imageUrl,
      categoryId: formDataObj.categoryId,
      type: formDataObj.type,
      metaTitle: formDataObj.metaTitle,
      metaDescription: formDataObj.metaDescription,
      metaKeywords: formDataObj.metaKeywords,
      icon: formDataObj.icon,
    });

    if (!result.success) {
      const errors = result.error.flatten();
      return {
        message: 'Validation failed',
        success: false,
        errors: errors.fieldErrors,
      };
    }

    const {
      name,
      price,
      origPrice,
      description,
      imageUrl,
      categoryId,
      metaTitle,
      metaDescription,
      metaKeywords,
      icon,
    } = result.data;

    // Fetch existing product from database
    const existingProduct = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!existingProduct) {
      return {
        message: 'Product not found.',
        success: false,
      };
    }

    // Update product in the database
    await prisma.product.update({
      where: {
        id: productId,
      },
      data: {
        name,
        description,
        imageUrl,
        categoryId,
        price,
        origPrice,
        metaTitle,
        metaDescription,
        metaKeywords,
        icon: icon,
      },
    });

    // Revalidate the path to update the products page
    revalidatePath('/admin/products');
    revalidatePath(existingProduct.slug);

    return {
      message: 'Product updated successfully.',
      success: true,
    };
  } catch (error) {
    console.error('Error updating product:', error);
    return {
      message:
        'An error occurred while updating the product. Please try again later.',
      success: false,
    };
  }
}
