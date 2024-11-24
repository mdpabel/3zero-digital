import { z } from 'zod';

// Define Zod schema for form validation
export const fullStackFormSchema = z.object({
  projectType: z.string().nonempty('Project type is required.'),
  budget: z.string().nonempty('Budget is required.'),
  timeline: z.string().nonempty('Timeline is required.'),
  functionalities: z.array(z.string()).optional().or(z.undefined()),
  sampleSites: z
    .string()
    .url('Sample site must be a valid URL.')
    .optional()
    .or(z.undefined()),
  name: z.string().nonempty('Name is required.'),
  email: z.string().email('Email must be valid.'),
  message: z.string().optional().or(z.undefined()),
});
