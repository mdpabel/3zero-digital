'use server';

import { signIn } from '@/auth';
import prisma from '@/prisma/db';
import { LoginSchema } from '@/schema/auth/login-schmea';

export const loginAction = async (_: any, formData: FormData) => {
  // Validate the input data using the schema
  const parsedResult = LoginSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!parsedResult.success) {
    // Handle validation error
    return {
      success: false,
      message: `Validation error: ${parsedResult.error.errors
        .map((err) => `${err.path.join('.')}: ${err.message}`)
        .join(', ')}`,
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      email: parsedResult.data.email,
    },
  });

  if (!user) {
    return {
      success: false,
      message: 'User does not exist.',
    };
  }

  try {
    // Attempt to sign in using Auth.js
    const result = await signIn('resend', {
      email: parsedResult.data.email,
      redirect: false, // We are handling the redirection manually
      redirectTo: '/dashboard', // Specify the desired redirect
    });

    return {
      success: true,
      message: 'Login successful. Check your email for the magic link.',
    };
  } catch (error: any) {
    // Extract and return Resend error message
    console.error('Login Error:', error);

    const resendErrorMessage =
      error.message ||
      (error.response && error.response.data && error.response.data.message) ||
      'An unexpected error occurred.';

    return {
      success: false,
      message: resendErrorMessage,
    };
  }
};
