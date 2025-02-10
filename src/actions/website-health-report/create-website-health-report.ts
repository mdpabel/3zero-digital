import { WebsiteHealthReportFormData } from '@/app/admin/website-health-report/add/page';
import prisma from '@/prisma/db';

export const createWebsiteHealthReport = async (
  data: WebsiteHealthReportFormData,
) => {
  console.log('Received data:', data);

  if (!data || typeof data !== 'object') {
    console.error('Invalid data received:', data);
    return {
      success: false,
      message: 'Invalid data format. Please try again.',
    };
  }

  if (
    !data.additionalNotes ||
    !data.blacklistVendors ||
    !data.email ||
    !data.malwareScanDetails ||
    !data.malwareScanScreenshot ||
    !data.name ||
    !data.performanceDetails ||
    !data.performanceScreenshot ||
    !data.seoDetails ||
    !data.seoScreenshot ||
    !data.websiteUrl ||
    data.isInfected === undefined ||
    data.hasSeoIssues === undefined ||
    data.performanceScore === undefined ||
    data.opened === undefined
  ) {
    console.error('Validation failed. Data:', data);
    return {
      success: false,
      message: 'Please fill in all fields',
    };
  }

  try {
    await prisma.websiteHealthReport.create({
      data,
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
