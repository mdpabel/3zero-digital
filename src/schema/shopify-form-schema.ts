import { z } from 'zod';

// Define the Zod schema for Shopify form validation
export const shopifyFormSchema = z.object({
  storeType: z.string().nonempty('Store type is required'),
  budget: z.string().nonempty('Budget is required'),
  products: z.string().nonempty('Number of products is required'),
  timeline: z.string().nonempty('Timeline is required'),
  functionalities: z
    .array(z.string())
    .nonempty('At least one functionality is required'),
  sampleSites: z.string().url('Sample site must be a valid URL').optional(),
  name: z.string().nonempty('Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().optional(),
});
