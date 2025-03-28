import { z } from 'zod';

export const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z
    .string()
    .min(6, {
      message: 'Password must be at least 6 characters long',
    })
    .max(50, {
      message: 'Password must be at most 50 characters long',
    }),
  honeypot: z.string().optional(),
});
