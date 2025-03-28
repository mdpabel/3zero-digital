'use server';

import { UpdatePasswordSchema } from '@/schema/auth/update-password-schema';
import bcrypt from 'bcryptjs'; // To hash passwords
import prisma from '@/prisma/db';
import { decrypt } from '@/lib/jwt/jwt-token';

export const updatePassword = async (_: any, formData: FormData) => {
  'use server';

  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;
  const token = formData.get('token') as string;

  if (formData.get('honeypot')) {
    return {
      success: false,
      message: 'Bot detected!',
    };
  }

  // Step 1: Validate the form data using UpdatePasswordSchema
  const validationResult = UpdatePasswordSchema.safeParse({
    password,
    confirmPassword,
  });

  if (!validationResult.success) {
    return { success: false, message: 'Password validation failed' };
  }

  // Step 2: Verify the token (assuming it's a JWT)
  let decodedToken;
  try {
    decodedToken = await decrypt(token); // This will verify and decode the token
  } catch (error) {
    return { success: false, message: 'Invalid or expired token' };
  }

  if (!decodedToken) {
    return { success: false, message: 'Invalid or expired token' };
  }

  // Step 3: Hash the new password
  const hashedPassword = await bcrypt.hash(password, 12); // 12 is the salt rounds for bcrypt

  // Step 4: Update the user's password in the database
  try {
    const user = await prisma.user.update({
      where: { id: decodedToken.userId as string }, // Ensure userId is part of the decoded JWT payload
      data: { password: hashedPassword },
    });

    return { success: true, message: 'Password updated successfully' };
  } catch (error) {
    console.error('Error updating password:', error);
    return {
      success: false,
      message: 'An error occurred while updating the password',
    };
  }
};
