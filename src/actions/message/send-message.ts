'use server';

import { auth } from '@/auth';
import prisma from '@/prisma/db';
import { revalidatePath } from 'next/cache';
import DOMPurify from 'isomorphic-dompurify'; // Import DOMPurify for sanitization

// Server action to send a message
export async function sendMessage(orderId: string, content: string) {
  try {
    const session = await auth(); // Optional: Get user session for user info

    console.log({ session });

    if (!session) {
      return {
        success: false,
        message: 'User not authenticated',
      };
    }

    // Here, you could use session info to know who is sending the message
    const userId = session?.user?.id;

    if (!userId) {
      return {
        success: false,
        message: 'User not authenticated',
      };
    }

    // Sanitize the content to prevent XSS attacks
    const sanitizedContent = DOMPurify.sanitize(content);

    await prisma.message.create({
      data: {
        content: sanitizedContent, // Use sanitized content here
        orderId,
        userId,
        isAdmin: false, // Set to true for admin replies
      },
    });

    revalidatePath('/me/support/[orderId]');

    return {
      success: true,
      message: 'Message sent successfully',
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'Error sending message',
    };
  }
}
