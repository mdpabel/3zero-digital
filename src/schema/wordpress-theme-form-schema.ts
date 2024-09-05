import { z } from 'zod';

// Define the Zod schema for WordPress Theme form validation
export const wordpressThemeFormSchema = z.object({
  themeType: z.string().nonempty('Theme type is required'),
  budget: z.string().nonempty('Budget is required'),
  timeline: z.string().nonempty('Timeline is required'),
  functionalities: z
    .array(z.string())
    .nonempty('At least one functionality is required'),
  sampleSites: z.string().url('Sample site must be a valid URL').optional(),
  name: z.string().nonempty('Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().optional(),
});
