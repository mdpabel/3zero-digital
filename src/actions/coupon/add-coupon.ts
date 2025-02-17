'use server';

import prisma from '@/prisma/db';
import { DiscountType } from '@prisma/client';

type CouponPayload = {
  code: string;
  discountType: DiscountType;
  discount: string;
  validFrom: string;
  validUntil: string;
  maxUsageCount: string;
  isActive: boolean;
  applicableCountries: string;
};

export const addCoupon = async (data: CouponPayload) => {
  try {
    // Parse and validate input data
    const {
      code,
      discountType,
      discount,
      validFrom,
      validUntil,
      maxUsageCount,
      isActive,
      applicableCountries,
    } = data;

    console.log({ data });

    if (!code || !discountType || !discount || !validFrom) {
      throw new Error(
        'Required fields are missing: code, discountType, discount, validFrom.',
      );
    }

    const parsedDiscount = parseFloat(discount);
    if (isNaN(parsedDiscount) || parsedDiscount <= 0) {
      throw new Error('Invalid discount value.');
    }

    const parsedValidFrom = new Date(validFrom);
    if (isNaN(parsedValidFrom.getTime())) {
      throw new Error('Invalid validFrom date.');
    }

    let parsedValidUntil: Date | null = null;
    if (validUntil) {
      parsedValidUntil = new Date(validUntil);
      if (isNaN(parsedValidUntil.getTime())) {
        throw new Error('Invalid validUntil date.');
      }
      if (parsedValidUntil < parsedValidFrom) {
        throw new Error('validUntil date cannot be earlier than validFrom.');
      }
    }

    const parsedMaxUsageCount = maxUsageCount
      ? parseInt(maxUsageCount, 10)
      : null;
    if (parsedMaxUsageCount !== null && parsedMaxUsageCount <= 0) {
      throw new Error('Invalid maxUsageCount value.');
    }

    // Convert applicableCountries string into an array
    const countries = applicableCountries
      ? applicableCountries
          .split(',')
          .map((country) => country.trim().toUpperCase())
      : [];

    // Create coupon in the database
    const newCoupon = await prisma.coupon.create({
      data: {
        code,
        discountType,
        discount: parsedDiscount,
        validFrom: parsedValidFrom,
        validUntil: parsedValidUntil,
        maxUsageCount: parsedMaxUsageCount,
        isActive,
        applicableCountries: countries,
      },
    });

    return {
      success: true,
      message: 'Coupon created successfully!',
      coupon: newCoupon,
    };
  } catch (error: any) {
    console.error('Error adding coupon:', error);

    return {
      success: false,
      message: error.message || 'Failed to create coupon.',
    };
  }
};
