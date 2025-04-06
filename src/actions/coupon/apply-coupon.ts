'use server';

import prisma from '@/prisma/db';

export const applyCoupon = async (code: string) => {
  console.log({ code });

  try {
    const coupon = await prisma.coupon.findFirst({
      where: {
        code,
      },
    });

    console.log({ coupon });

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
