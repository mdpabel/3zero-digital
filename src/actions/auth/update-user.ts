'use server';

import { z } from 'zod';
import prisma from '@/prisma/db';
import { auth } from '@/auth';
import { revalidatePath } from 'next/cache';

const schema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First name must be at least 2 characters.' })
    .max(50, { message: 'First name cannot exceed 50 characters.' }),
  lastName: z
    .string()
    .min(2, { message: 'Last name must be at least 2 characters.' })
    .max(50, { message: 'Last name cannot exceed 50 characters.' }),
});

export const updateUser = async (data: z.infer<typeof schema>) => {
  try {
    // Validate input data
    const validatedData = schema.parse(data);

    // Get the current user session
    const session = await auth();
    if (!session || !session.user?.email) {
      throw new Error('User not authenticated');
    }

    // Update user in the database
    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        name: `${validatedData.firstName} ${validatedData.lastName}`,
      },
    });

    revalidatePath('/me/profile');

    return { success: true, user: updatedUser };
  } catch (error: any) {
    console.error('Error updating user:', error);
    return {
      success: false,
      error: error instanceof z.ZodError ? error.errors : error.message,
    };
  }
};
