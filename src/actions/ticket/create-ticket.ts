'use server';
import prisma from '@/prisma/db';
import { Ticket } from '@prisma/client';
import { revalidatePath } from 'next/cache';

export async function createTicket({ title, description, userId }: Ticket) {
  // Perform basic validation
  if (!title || !description || !userId) {
    throw new Error('Missing required fields');
  }

  try {
    // Create a new ticket in the database
    const newTicket = await prisma.ticket.create({
      data: {
        title,
        description,
        userId,
        status: 'OPEN', // Default status
      },
    });

    // Revalidate cache for the path where tickets are displayed (optional)
    revalidatePath('/tickets'); // Adjust the path as necessary

    return { success: true, ticket: newTicket };
  } catch (error) {
    console.error('Error creating ticket:', error);
    return { success: false, error: 'Failed to create ticket' };
  }
}
