'use server';

import { ResetPasswordSchema } from '@/schema/auth/reset-password-schema'; // Your schema to validate email
import prisma from '@/prisma/db';
import { encrypt } from '@/lib/jwt/jwt-token';
import { sendEmail } from '@/lib/send-email';
import ResetPasswordEmailTemplate from '@/components/email/reset-password-email-template';
// Prisma client for database interaction

export const resetPassword = async (_: any, formData: FormData) => {
  try {
    // Validate the email using the ResetPasswordSchema
    const parsedEmail = ResetPasswordSchema.safeParse({
      email: formData.get('email'),
    });

    if (formData.get('honeypot')) {
      return {
        success: false,
        message: 'Bot detected!',
      };
    }

    if (!parsedEmail.success) {
      return { success: false, message: 'Invalid email address' };
    }

    // Check if the user exists in the database
    const user = await prisma.user.findUnique({
      where: { email: parsedEmail.data.email },
    });

    if (!user) {
      return {
        success: false,
        message: 'No user found with that email address',
      };
    }

    // Generate a JWT for the password reset with a 1-hour expiration
    const resetToken = await encrypt({
      userId: user.id,
    });

    // Create the reset URL with the JWT token
    const resetUrl = `${process.env.FRONTEND_URL}/update-password?token=${resetToken}`;

    // Send the reset password email with the token (use your email service)
    await sendEmail({
      to: user.email!,
      subject: 'Password Reset Request',
      replyTo: 'no-reply@3zerodigital.com',
      name: user.name!,
      react: ResetPasswordEmailTemplate({
        name: user.name ?? user.email!,
        resetLink: resetUrl,
      }),
    });

    return {
      success: true,
      message: `A password reset link has been sent to your email ${user.email}`,
    };
  } catch (error) {
    console.error('Error in resetPassword:', error);
    return {
      success: false,
      message: 'Something went wrong, please try again later.',
    };
  }
};
