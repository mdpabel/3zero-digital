'use server';

import { signIn } from '@/auth';
import prisma from '@/prisma/db';
import { LoginSchema } from '@/schema/auth/login-schmea';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

export const loginAction = async (_: any, formData: FormData) => {
  // Validate the input data using the schema
  const parsedResult = LoginSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (parsedResult.data?.honeypot) {
    return {
      success: false,
      message: 'Bot detected!',
    };
  }

  const callbackUrl = formData.get('callbackUrl') as string;

  // If validation fails, return the formatted error message
  if (!parsedResult.success) {
    return {
      success: false,
      message: `Validation error: ${parsedResult.error.errors
        .map((err) => `${err.path.join('.')}: ${err.message}`)
        .join(', ')}`,
    };
  }

  const { email, password } = parsedResult.data;

  try {
    // Check if the user exists in the database
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return {
        success: false,
        message: 'User does not exist.',
      };
    }

    // Attempt to sign in using Auth.js (Credentials Provider)
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false, // We are handling the redirection manually
      // redirectTo: callbackUrl || '/dashboard', // Redirect if provided, otherwise default to '/dashboard'
    });

    return {
      success: true,
      message: 'Login successful. Redirecting...',
    };
  } catch (error: any) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { message: 'Invalid credentials', success: false };
        case 'CredentialsSignin':
          throw error;
        default:
          return { message: 'Something went wrong', success: false };
      }
    }
    // Catch any unexpected errors that occur during the login process
    console.log('Login Error:', error);

    let errorMessage = 'An unexpected error occurred during the login process.';

    // Check if the error is from Auth.js
    if (error instanceof Error && error.message) {
      errorMessage = error.message;
    }

    return {
      success: false,
      message: errorMessage,
    };
  }
};
