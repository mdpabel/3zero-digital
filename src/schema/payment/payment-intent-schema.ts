import { z } from 'zod';

export const paymentIntentSchema = z.object({
  productId: z.string().min(1, 'Product ID is required'),
  quantity: z
    .string()
    .regex(/^\d+$/, 'Quantity must be a number')
    .optional()
    .default('1'),
  paymentMode: z
    .enum(['payment', 'subscription'])
    .optional()
    .default('payment'),
  metaData: z.string().optional(),
  email: z.string().email(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  websites: z.string().optional(),
  note: z.string().optional(),
  productType: z.enum(['product', 'template']).default('product').optional(),
  paymentType: z.enum(['paypal', 'stripe', 'manual']),
});
