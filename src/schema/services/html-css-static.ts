import { z } from 'zod';

export const htmlCssFormSchema = z.object({
  websiteType: z.string().min(1, 'Website Type is required'),
  budget: z.string().min(1, 'Budget is required'),
  pages: z.number().min(1, 'Number of pages must be at least 1'),
  timeline: z.string().min(1, 'Timeline is required'),
  functionalities: z.array(z.string()).optional(),
  sampleSites: z.string().url().optional(),
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format').min(1, 'Email is required'),
  message: z.string().optional(),
});
