'use server';

import { updateStripePrices } from '@/lib/stripe/update-price';
import { updateStripeProduct } from '@/lib/stripe/update-product';
import prisma from '@/prisma/db';
import { productFormSchema } from '@/schema/product/product-form-schema';
import { revalidatePath } from 'next/cache';

export async function updateProduct(_: any, formData: FormData) {
  try {
    const formDataObj = Object.fromEntries(formData.entries());

    const productId = formDataObj.id as string;

    // Build the prices array before validation
    let prices = [];
    if (formDataObj.type === 'STANDARD') {
      if (!formDataObj.price) {
        throw new Error('Price is required for standard products');
      }

      prices.push({
        unitAmount: formDataObj.price,
        origPrice: formDataObj.origPrice,
        billingInterval: '',
        isRecurring: false,
      });
    } else if (formDataObj.type === 'SUBSCRIPTION') {
      if (formDataObj.monthly) {
        const monthlyPrice = parseFloat(formDataObj.monthly as string);
        const monthlyOrigPrice = formDataObj.monthlyOrigPrice
          ? parseFloat(formDataObj.monthlyOrigPrice as string)
          : undefined;

        if (monthlyPrice > 0) {
          prices.push({
            unitAmount: monthlyPrice,
            origPrice: monthlyOrigPrice,
            billingInterval: 'month',
            isRecurring: true,
          });
        }
      }

      if (formDataObj.quarterly) {
        const quarterlyPrice = parseFloat(formDataObj.quarterly as string);
        const quarterlyOrigPrice = formDataObj.quarterlyOrigPrice
          ? parseFloat(formDataObj.quarterlyOrigPrice as string)
          : undefined;

        if (quarterlyPrice > 0) {
          prices.push({
            unitAmount: quarterlyPrice,
            origPrice: quarterlyOrigPrice,
            billingInterval: 'quarter',
            isRecurring: true,
          });
        }
      }

      if (formDataObj.yearly) {
        const yearlyPrice = parseFloat(formDataObj.yearly as string);
        const yearlyOrigPrice = formDataObj.yearlyOrigPrice
          ? parseFloat(formDataObj.yearlyOrigPrice as string)
          : undefined;

        if (yearlyPrice > 0) {
          prices.push({
            unitAmount: yearlyPrice,
            origPrice: yearlyOrigPrice,
            billingInterval: 'year',
            isRecurring: true,
          });
        }
      }

      if (prices.length === 0) {
        return {
          message: 'Validation failed',
          success: false,
          errors: {
            prices: ['At least one subscription price must be provided.'],
          },
        };
      }
    }

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
      prices: prices.length > 0 ? prices : undefined,
    });

    if (!result.success) {
      const errors = result.error.flatten();
      return {
        message: 'Validation failed',
        success: false,
        errors: errors.fieldErrors,
      };
    }

    const { name, price, origPrice, description, imageUrl, categoryId, type } =
      result.data;

    // Fetch existing product from database
    const existingProduct = await prisma.product.findUnique({
      where: { id: productId },
      include: { prices: true },
    });

    if (!existingProduct) {
      return {
        message: 'Product not found.',
        success: false,
      };
    }

    // Update the product in Stripe
    await updateStripeProduct(
      existingProduct.stripeProductId!,
      name,
      categoryId,
    );

    // Update prices in Stripe and handle potential price creation
    const updatedStripePrices = await updateStripePrices(
      type,
      existingProduct.stripeProductId!,
      prices,
      existingProduct.prices, // Pass existing prices for comparison
    );

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
        type,
        prices: {
          deleteMany: {}, // Remove old prices
          create: updatedStripePrices.map((stripePrice, index) => {
            let billingInterval: 'MONTH' | 'QUARTER' | 'YEAR' | null = null;

            if (type === 'SUBSCRIPTION' && stripePrice.recurring?.interval) {
              if (stripePrice.recurring.interval === 'month') {
                billingInterval = 'MONTH';
              } else if (stripePrice.recurring.interval === 'quarter') {
                billingInterval = 'QUARTER';
              } else if (stripePrice.recurring.interval === 'year') {
                billingInterval = 'YEAR';
              }
            }

            return {
              stripePriceId: stripePrice.id,
              unitAmount: stripePrice.unit_amount / 100,
              origPrice:
                parseFloat(prices[index].origPrice as string) || undefined,
              currency: 'usd',
              billingInterval,
              isRecurring: type === 'SUBSCRIPTION',
            };
          }),
        },
      },
    });

    // Revalidate the path to update the products page
    revalidatePath('/admin/products');

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
