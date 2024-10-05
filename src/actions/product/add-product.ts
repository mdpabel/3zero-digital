'use server';
import { stripe } from '@/lib/stripe';
import prisma from '@/prisma/db';
import { productFormSchema } from '@/schema/product/product-form-schema';
import { revalidatePath } from 'next/cache';

export async function createProduct(_: any, formData: FormData) {
  try {
    const formDataObj = Object.fromEntries(formData.entries());

    // Build the prices array before validation
    let prices = [];
    if (formDataObj.type === 'SUBSCRIPTION') {
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

    // Now validate the form data, including the prices array for subscription products
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
      console.log(errors);
      return {
        message: 'Validation failed',
        success: false,
        errors: errors.fieldErrors,
      };
    }

    const { name, price, description, imageUrl, categoryId, origPrice, type } =
      result.data;

    // Create product in Stripe
    const stripeProduct = await stripe.products.create({
      name,
      metadata: { categoryId: categoryId || '' },
    });

    const stripeProductId = stripeProduct.id;
    let stripePricePromises: Promise<any>[] = [];

    if (type === 'STANDARD') {
      if (!price) {
        throw new Error('Price is required for standard products');
      }

      const stripePricePromise = stripe.prices.create({
        unit_amount: Math.round(price * 100),
        currency: 'usd',
        product: stripeProductId,
      });
      stripePricePromises.push(stripePricePromise);
    } else if (type === 'SUBSCRIPTION') {
      prices.forEach((subscriptionPrice) => {
        let interval: 'MONTH' | 'QUARTER' | 'YEAR';
        let interval_count: number = 1;

        if (subscriptionPrice.billingInterval === 'month') {
          interval = 'MONTH';
          interval_count = 1;
        } else if (subscriptionPrice.billingInterval === 'quarter') {
          interval = 'QUARTER';
          interval_count = 3;
        } else if (subscriptionPrice.billingInterval === 'year') {
          interval = 'YEAR';
          interval_count = 1;
        } else {
          throw new Error('Invalid billing interval');
        }

        const stripeSubscriptionPricePromise = stripe.prices.create({
          unit_amount: Math.round(subscriptionPrice.unitAmount * 100),
          currency: 'usd',
          recurring: {
            interval:
              subscriptionPrice.billingInterval === 'quarter'
                ? 'month'
                : subscriptionPrice.billingInterval,
            interval_count,
          },
          product: stripeProductId,
        });

        stripePricePromises.push(stripeSubscriptionPricePromise);
      });
    }

    const stripePrices = await Promise.all(stripePricePromises);

    const product = await prisma.product.create({
      data: {
        name,
        description,
        imageUrl,
        categoryId,
        stripeProductId,
        type,
        prices: {
          create: stripePrices.map((stripePrice, index) => {
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
              origPrice: prices[index].origPrice || undefined, // Store original price for each subscription tier
              currency: 'usd',
              billingInterval,
              isRecurring: type === 'SUBSCRIPTION',
            };
          }),
        },
      },
    });

    revalidatePath('/admin/products');

    return {
      message: 'Product successfully added and synced with Stripe.',
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
