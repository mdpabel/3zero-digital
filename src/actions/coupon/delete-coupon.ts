'use server';

import prisma from '@/prisma/db';
import { revalidatePath } from 'next/cache';

export const deleteCoupon = async (couponId: string) => {
  try {
    await prisma.coupon.delete({
      where: {
        id: couponId,
      },
    });

    revalidatePath('/admin/coupons');

    return {
      success: true,
      message: 'Coupon deleted successfully!',
    };
  } catch (error) {
    console.log('Error deleting coupon:', error);

    return {
      success: false,
      message: 'Failed to delete coupon. Please try again later.',
    };
  }
};
