'use server';

import prisma from '@/prisma/db';
import { revalidatePath } from 'next/cache';

export const deleteTemplate = async (templateId: string) => {
  // Check if templateId is provided
  if (!templateId) {
    return {
      status: false,
      message: 'Template ID is required.',
    };
  }

  console.log({ templateId });

  try {
    // Attempt to mark the template as deleted
    const template = await prisma.template.update({
      where: {
        id: templateId,
      },
      data: {
        deleted: true,
      },
    });

    revalidatePath('/admin/templates');

    // If the update is successful, return a success response
    return {
      status: true,
      message: 'Template deleted successfully.',
    };
  } catch (error: any) {
    // Handle errors (e.g., template not found or database issue)
    console.error('Error deleting template:', error);

    return {
      status: false,
      message:
        error.message || 'An error occurred while deleting the template.',
    };
  }
};
