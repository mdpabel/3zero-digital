import { NextAuthConfig } from 'next-auth';
import Resend from 'next-auth/providers/resend';

export default {
  providers: [
    Resend({
      apiKey: process.env.RESEND_API_KEY,
      from:
        process.env.NODE_ENV === 'development'
          ? 'Acme <onboarding@resend.dev>'
          : 'info@3zerodigital.com',
    }),
  ],
} satisfies NextAuthConfig;
