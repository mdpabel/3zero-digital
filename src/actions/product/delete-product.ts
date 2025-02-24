'use server';
import { deleteStripeProduct } from '@/lib/stripe/delete-product';
import prisma from '@/prisma/db';
import { revalidatePath } from 'next/cache';

export async function deleteProduct(productId: string) {
  try {
    const product = await prisma.product.update({
      where: { id: productId },
      data: {
        deleted: true,
      },
    });

    revalidatePath('/admin/products');
    return { success: true };
  } catch (error) {
    console.error('Error deleting product:', error);
    return { success: false, message: 'Failed to delete the product.' };
  }
}
