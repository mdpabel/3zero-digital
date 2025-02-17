'use server';
import { z } from 'zod';
import prisma from '@/prisma/db';
import { WebsiteHealthReportSchema } from '@/app/admin/website-health-report/add/page';
import { Prisma } from '@prisma/client';
import { revalidatePath } from 'next/cache';

// Function to create a website health report
export const createWebsiteHealthReport = async (
  data: z.infer<typeof WebsiteHealthReportSchema>,
) => {
  console.log('Received data:', data);

  try {
    // Ensure unique constraints before inserting into the database
    const existingReport = await prisma.websiteHealthReport.findFirst({
      where: {
        websiteUrl: data.websiteUrl, // Checking if the report already exists for this URL
      },
    });

    if (existingReport) {
      return {
        success: false,
        message: 'A health report for this website URL already exists.',
      };
    }

    // Save the validated data to the database
    await prisma.websiteHealthReport.create({
      data: {
        ...data,
        performanceScore: parseInt(data.performanceScore, 10),
      },
    });

    revalidatePath('/admin/website-health-report');

    return {
      success: true,
      message: 'Website health report created successfully',
    };
  } catch (error) {
    console.error('Database error:', error);

    // Prisma error handling
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Unique constraint violation
      if (error.code === 'P2002') {
        return {
          success: false,
          message:
            'A record with the same value already exists. Please use a different value.',
        };
      }

      // Handle other known Prisma errors
      return {
        success: false,
        message: `Database error: ${error.message}`,
      };
    }

    // Generic error fallback
    return {
      success: false,
      message:
        'An unexpected error occurred while creating the website health report.',
    };
  }
};
