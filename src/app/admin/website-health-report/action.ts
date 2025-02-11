'use server';

import WebsiteHealthEmail from '@/components/email/website-health-email-template';
import { sendEmail } from '@/lib/send-email';
import { WebsiteHealthReport } from '@prisma/client';

export const sendWebsiteReport = async (report: WebsiteHealthReport) => {
  try {
    await sendEmail({
      name: report.name,
      subject: 'Your Website Health Report: Key Insights & Recommendations',
      to: report.email,
      replyTo: 'info@3zerodigital.com',
      react: WebsiteHealthEmail({
        email: report.email,
        hasSeoIssues: report.hasSeoIssues,
        isInfected: report.isInfected,
        name: report.name,
        websiteUrl: report.websiteUrl,
        additionalNotes: report.additionalNotes!,
        blacklistVendors: report.blacklistVendors!,
        performanceScore: report.performanceScore!,
      }),
    });
    return {
      success: true,
      message: 'Email sent successfully',
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      message: 'Failed to send email',
    };
  }
};
