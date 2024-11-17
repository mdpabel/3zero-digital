import { z } from 'zod';

export const contactFormSchema = z.object({
  inquiryType: z.string({
    message: 'Inquiry type is required',
  }),
  name: z.string({
    message: 'Name is required',
  }),
  email: z.string().email('Invalid email address'),
  message: z.string().optional(),
});
