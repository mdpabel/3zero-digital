'use server';

import prisma from '@/prisma/db';
import { SignUpSchema } from '@/schema/auth/create-user-schema';

export const signUpAction = async (_: any, formData: FormData) => {
  // Validate the input data using the schema
  const parsedResult = SignUpSchema.safeParse(
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

  const { email, firstName, lastName } = parsedResult.data;

  // Check if user already exists in the database
  const user = await prisma.user.findUnique({
    where: {
      email: parsedResult.data.email,
    },
  });

  if (user) {
    return {
      success: false,
      message: 'Email already exists.',
    };
  }

  try {
    // Step 1: Create the new user in the database
    const newUser = await prisma.user.create({
      data: {
        email,
        name: `${firstName} ${lastName}`,
      },
    });

    // Return success message
    return {
      success: true,
      message: 'User created successfully. Please login.',
    };
  } catch (error) {
    console.error('Error during sign-up process:', error);

    // Handle errors from Stripe or the Prisma database
    return {
      success: false,
      message:
        'An error occurred during the sign-up process. Please try again later.',
    };
  }
};
