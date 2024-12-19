import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import Resend from 'next-auth/providers/resend';
import prisma from './prisma/db';
import { UserRole } from '@prisma/client';

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET!,
  session: {
    strategy: 'jwt',
  },
  providers: [
    Resend({
      apiKey: process.env.RESEND_API_KEY,
      from:
        process.env.NODE_ENV === 'development'
          ? 'Acme <onboarding@resend.dev>'
          : 'info@3zerodigital.com',
    }),
  ],

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        // Fetch the role from the database
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id },
          select: { role: true }, // Adjust field to match your schema
        });

        token.role = dbUser?.role; // Default to 'user' if no role is found
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.user.role = token.role as UserRole; // Pass role to session
      return session;
    },
  },
});
