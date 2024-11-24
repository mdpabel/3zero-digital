import { z } from 'zod';

export const headlessWordPressFormSchema = z.object({
  websiteType: z.string().min(1, 'Website type is required'),
  budget: z.string().min(1, 'Estimated budget is required'),
  pages: z.number().int().positive('Number of pages must be a positive number'),
  timeline: z.string().min(1, 'Project timeline is required'),
  functionalities: z
    .array(z.string())
    .nonempty('At least one functionality is required'),
  sampleSites: z.string().url().optional(),
  name: z.string().min(1, 'Your name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().optional(),
});
