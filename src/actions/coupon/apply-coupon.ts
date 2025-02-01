'use server';

import prisma from '@/prisma/db';

export const applyCoupon = async (code: string) => {
  try {
    const coupon = await prisma.coupon.findFirst({
      where: {
        code,
      },
    });

    if (!coupon) {
      return {
        success: false,
        message: 'Coupon not found',
      };
    }

    return {
      success: true,
      message: 'Coupon successfully applied',
      coupon: coupon,
    };
  } catch (error) {
    return {
      success: false,
      message: 'Coupon not found or expired',
    };
  }
};
