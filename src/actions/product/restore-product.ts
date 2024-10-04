'use server';
import prisma from '@/prisma/db';
import { revalidatePath } from 'next/cache';

export async function restoreProduct(productId: string) {
  try {
    await prisma.product.update({
      where: { id: productId },
      data: {
        deleted: false,
      },
    });
    revalidatePath('/admin/products/trash');
    return { success: true };
  } catch (error) {
    console.error('Error deleting product:', error);
    return { success: false, message: 'Failed to delete the product.' };
  }
}
