'use server';
import { createStripePrices } from '@/lib/stripe/create-price';
import { createStripeProduct } from '@/lib/stripe/create-product';
import prisma from '@/prisma/db';
import { productFormSchema } from '@/schema/product/product-form-schema';
import { revalidatePath } from 'next/cache';
import slugify from 'slugify';

// Main function to handle the product creation
export async function createProduct(_: any, formData: FormData) {
  try {
    const formDataObj = Object.fromEntries(formData.entries());

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
      type,
      metaDescription,
      metaKeywords,
      metaTitle,
      icon,
    } = result.data;

    const stripeProduct = await createStripeProduct(name, categoryId);
    const stripeProductId = stripeProduct.id;

    const stripePrices = await createStripePrices(
      type,
      stripeProductId,
      prices,
      price,
    );

    const slug = slugify(name);

    const product = await prisma.product.create({
      data: {
        name,
        description,
        imageUrl,
        categoryId,
        stripeProductId,
        type,
        icon,
        slug,
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
              origPrice:
                parseFloat(prices[index].origPrice as string) || undefined,
              currency: 'usd',
              billingInterval,
              isRecurring: type === 'SUBSCRIPTION',
            };
          }),
        },
        metaTitle,
        metaDescription,
        metaKeywords,
      },
    });

    revalidatePath(`/${product.slug}`);
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
