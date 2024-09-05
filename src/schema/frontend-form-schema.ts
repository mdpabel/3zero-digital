import { z } from 'zod';

// Define the Zod schema for validation
export const frontendFormSchema = z.object({
  websiteType: z.string().nonempty('Website type is required'),
  budget: z.string().nonempty('Budget is required'),
  pages: z.string().nonempty('Number of pages is required'),
  timeline: z.string().nonempty('Timeline is required'),
  functionalities: z
    .array(z.string())
    .nonempty('At least one functionality is required'),
  sampleSites: z.string().url('Sample site must be a valid URL').optional(),
  name: z.string().nonempty('Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().optional(),
});
