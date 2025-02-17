'use server';

import prisma from '@/prisma/db';
import { revalidatePath } from 'next/cache';

export const deleteReport = async (id: string) => {
  if (!id) {
    return {
      success: false,
      message: 'Id is missing',
    };
  }

  try {
    await prisma.websiteHealthReport.delete({
      where: {
        id,
      },
    });

    revalidatePath('/admin/website-health-report');

    return {
      success: true,
      message: 'Report deleted successfully',
    };
  } catch (error) {
    console.log({ error });
    return {
      success: false,
      message: 'Failed to delete report',
    };
  }
};
