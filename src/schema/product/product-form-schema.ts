import { z } from 'zod';

// Define the schema for the individual prices in the subscription
const priceSchema = z.object({
  unitAmount: z.coerce.number().min(0.01, {
    message: 'Price must be greater than 0.',
  }), // Coerce string to number
  billingInterval: z.enum(['month', 'quarter', 'year', ''], {
    errorMap: () => ({
      message: 'Billing interval must be either month, quarter, or year.',
    }),
  }), // Allow 'month', 'quarter', or 'year'
  isRecurring: z.boolean(), // Ensure this is a boolean to indicate if it's recurring
});

// Main product schema
export const productFormSchema = z
  .object({
    name: z.string().min(2, {
      message: 'Product name must be at least 2 characters.',
    }),
    price: z.coerce
      .number()
      .min(0, {
        message: 'Price must be positive.',
      })
      .optional(), // Price is optional because subscriptions can have multiple prices

    origPrice: z.coerce
      .number()
      .min(0.01, {
        message: 'Original price must be greater than 0.',
      })
      .optional(),

    description: z.string().optional(),
    imageUrl: z.string().optional(),
    categoryId: z.string().optional(), // Assuming categories are selected by ID

    // Add product type to distinguish between standard and subscription products
    type: z.enum(['STANDARD', 'SUBSCRIPTION'], {
      errorMap: () => ({
        message: 'Product type must be either STANDARD or SUBSCRIPTION.',
      }),
    }),

    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    metaKeywords: z.string().optional(),
    icon: z.string().optional(),

    // Prices array for subscription products
    prices: z
      .array(priceSchema)
      .min(1, {
        message: 'At least one price is required for subscription products.',
      })
      .optional(), // This is optional; only required when type is SUBSCRIPTION
  })
  .refine(
    (data) => {
      // Ensure price is provided for standard products
      if (data.type === 'STANDARD' && !data.price) {
        return false;
      }
      return true;
    },
    {
      path: ['price'], // Error will show up under price
      message: 'Price is required for standard products.',
    },
  )
  .refine(
    (data) => {
      // Ensure prices array is provided for subscription products
      if (
        data.type === 'SUBSCRIPTION' &&
        (!data.prices || data.prices.length === 0)
      ) {
        return false;
      }
      return true;
    },
    {
      path: ['prices'], // Error will show up under prices array
      message: 'At least one price is required for subscription products.',
    },
  );
