'use server';

import EmailVerificationEmailTemplate from '@/components/email/verify-email-template';
import { generateToken } from '@/lib/auth/jwt-token';
import { sendEmail } from '@/lib/send-email';
import { stripe } from '@/lib/stripe/stripe'; // Ensure this is your initialized Stripe instance
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
    // Step 1: Create a Stripe customer
    const stripeCustomer = await stripe.customers.create({
      email: email,
      name: `${firstName} ${lastName}`,
    });

    // Step 2: Create the new user in the database
    const newUser = await prisma.user.create({
      data: {
        email,
        name: `${firstName} ${lastName}`,
        stripeCustomerId: stripeCustomer.id,
      },
    });

    // Step 4: Generate the JWT token for email verification
    // const token = await generateToken({ email });

    // Step 5: Construct the email verification link with the token
    // const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;

    // // Step 6: Send the email with the verification link
    // await sendEmail({
    //   name: `${firstName} ${lastName}`,
    //   subject: 'Email Verification',
    //   to: email,
    //   replyTo: 'noreply@3zerodigital.com',
    //   react: EmailVerificationEmailTemplate({
    //     verificationLink,
    //   }),
    // });

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
