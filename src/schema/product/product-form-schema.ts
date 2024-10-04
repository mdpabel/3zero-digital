import { z } from 'zod';

export const productFormSchema = z.object({
  name: z.string().min(2, {
    message: 'Product name must be at least 2 characters.',
  }),
  price: z.coerce.number().min(0.01, {
    message: 'Price must be greater than 0.',
  }), // Coerce string to number
  origPrice: z.coerce.number().min(0.01, {
    message: 'Price must be greater than 0.',
  }), // Coerce string to number
  description: z.string().optional(),
  imageUrl: z.string().optional(),
  categoryId: z.string().optional(), // Assuming categories are selected by ID
});
