import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import Resend from 'next-auth/providers/resend';
import prisma from './prisma/db';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET!,
  session: {
    strategy: 'jwt',
  },
  providers: [
    Resend({
      apiKey: process.env.RESEND_API_KEY,
      from: 'info@3zerodigital.com',
    }),
  ],
});
