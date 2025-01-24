'use server';
import { createStripeProduct } from '@/lib/stripe/create-product';
import prisma from '@/prisma/db';
import { productFormSchema } from '@/schema/product/product-form-schema';
import { revalidatePath } from 'next/cache';
import slugify from 'slugify';

// Main function to handle the product creation
export async function createProduct(formData: FormData) {
  try {
    const formDataObj = Object.fromEntries(formData.entries());

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
      metaDescription,
      metaKeywords,
      metaTitle,
      icon,
    } = result.data;

    const slug = slugify(name, {
      lower: true,
      trim: true,
    });

    const product = await prisma.product.create({
      data: {
        name,
        description,
        imageUrl,
        categoryId,
        icon,
        origPrice,
        slug,
        price,
        metaTitle,
        metaDescription,
        metaKeywords,
      },
    });

    revalidatePath(`/${product.slug}`);
    revalidatePath('/admin/products');

    return {
      message: 'Product successfully added',
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
