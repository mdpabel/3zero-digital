'use server';
import { z } from 'zod';
import prisma from '@/prisma/db';

// Define the validation schema using Zod
const WebsiteHealthReportSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email format'),
  websiteUrl: z.string().url('Invalid website URL'),
  blacklistVendors: z.array(z.string()).default([]),
  malwareScanDetails: z.string().optional(),
  malwareScanScreenshot: z.string().url('Invalid URL').optional(),
  isInfected: z.boolean(),
  seoDetails: z.string().optional(),
  seoScreenshot: z.string().url('Invalid URL').optional(),
  hasSeoIssues: z.boolean(),
  performanceDetails: z.string().optional(),
  performanceScreenshot: z.string().url('Invalid URL').optional(),
  performanceScore: z
    .number()
    .int()
    .min(0, 'Performance score must be a number'),
  additionalNotes: z.string().optional(),
  opened: z.number().int().default(0),
});

type User = {
  name: string;
  email: string;
};

// Function to create a website health report
export const createWebsiteHealthReport = async (
  data: z.infer<typeof WebsiteHealthReportSchema>,
) => {
  console.log('Received data:', data);

  // Validate data using Zod
  const result = WebsiteHealthReportSchema.safeParse(data);

  if (!result.success) {
    console.error('Validation failed:', result.error.format());
    return {
      success: false,
      message: 'Validation error. Please check your inputs.',
      errors: result.error.format(), // Return detailed errors
    };
  }

  try {
    // Save the validated data to the database
    await prisma.websiteHealthReport.create({
      data: result.data,
    });

    return {
      success: true,
      message: 'Website health report created successfully',
    };
  } catch (error) {
    console.error('Database error:', error);
    return {
      success: false,
      message: 'Failed to create website health report',
    };
  }
};
