import prisma from '@/prisma/db';
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  if (!id) {
    return <div>No ID provided</div>;
  }

  const report = await prisma.websiteHealthReport.findFirst({
    where: { id },
  });

  if (!report) {
    return <div>No website health report found for ID: {id}</div>;
  }

  return (
    <div className='mx-auto px-6 py-10 max-w-4xl'>
      <h1 className='mb-8 font-bold text-zinc-900 dark:text-zinc-200 text-3xl'>
        Website Health Report
      </h1>

      <Card className='my-10'>
        <CardHeader>
          <CardTitle className='font-semibold text-zinc-900 dark:text-zinc-200 text-xl'>
            Email
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className='p-6 font-sans text-gray-900 primary-color'>
            <div className='bg-white shadow-lg mx-auto p-6 rounded-lg max-w-lg'>
              <h1 className='mb-4 font-bold text-purple-700 text-2xl text-center'>
                Website Health Report
              </h1>
              <p className='text-gray-700'>Hi {report.name},</p>

              {report.additionalNotes && (
                <p className='text-gray-700'>{report.additionalNotes}</p>
              )}

              <p className='mt-4 text-gray-700'>
                Here’s a quick summary of your website health for{' '}
                <strong>{report.websiteUrl}</strong>:
              </p>

              <ul className='space-y-2 mt-4 text-gray-700'>
                {report.blacklistVendors.length > 0 && (
                  <li>
                    <strong>Blacklisted by:</strong>{' '}
                    {report.blacklistVendors.join(', ')}
                  </li>
                )}
                <li>
                  <strong>Infected with malware:</strong>{' '}
                  {report.isInfected ? 'Yes' : 'No'}
                </li>
                <li>
                  <strong>SEO Issues Found:</strong>{' '}
                  {report.hasSeoIssues ? 'Yes' : 'No'}
                </li>
                <li>
                  <strong>Performance Score:</strong>{' '}
                  {report.performanceScore ?? 'Not Available'}
                </li>
              </ul>

              <a
                href='https://www.3zerodigital.com/me/website-health-report/'
                className='block hover:opacity-90 mt-6 px-6 py-3 rounded-lg font-semibold text-white text-center primary-color'>
                Explore Full Website Audit
              </a>

              <p className='mt-4 text-gray-700'>
                Based on our analysis, we recommend the following services:
              </p>

              {report.isInfected && (
                <a
                  href='https://www.3zerodigital.com/wordpress-malware-removal'
                  className='block bg-purple-700 hover:opacity-90 mt-3 px-6 py-3 rounded-lg font-semibold text-white text-center'>
                  Malware Removal Service
                </a>
              )}

              {report.performanceScore !== undefined &&
                report.performanceScore! < 50 && (
                  <a
                    href='https://www.3zerodigital.com/wordpress-speed-optimization'
                    className='block bg-blue-700 hover:opacity-90 mt-3 px-6 py-3 rounded-lg font-semibold text-white text-center'>
                    Speed Optimization Service
                  </a>
                )}

              {report.blacklistVendors.length > 0 && (
                <a
                  href='https://www.3zerodigital.com/blacklist-removal'
                  className='block bg-red-600 hover:opacity-90 mt-3 px-6 py-3 rounded-lg font-semibold text-white text-center'>
                  Blacklist Removal Service
                </a>
              )}

              {report.hasSeoIssues && (
                <a
                  href='https://www.3zerodigital.com/seo-optimization'
                  className='block bg-green-600 hover:opacity-90 mt-3 px-6 py-3 rounded-lg font-semibold text-white text-center primary-color'>
                  SEO Optimization Service
                </a>
              )}

              <a
                href='https://www.3zerodigital.com/ongoing-wordpress-maintenance'
                className='block bg-gray-800 hover:opacity-90 mt-3 px-6 py-3 rounded-lg font-semibold text-white text-center primary-color'>
                Ongoing Maintenance
              </a>

              <img
                alt='Email tracker'
                height={1}
                width={1}
                src={`${process.env.FRONTEND_URL}/api/track-email?id=${id}`}
                className='hidden'
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className='shadow-lg border border-zinc-200 dark:border-zinc-700'>
        <CardHeader className='bg-zinc-100 dark:bg-zinc-800 p-5 rounded-t-xl'>
          <CardTitle className='font-semibold text-zinc-900 dark:text-zinc-200 text-xl'>
            {report.websiteUrl}
          </CardTitle>
          <CardDescription className='text-zinc-500 dark:text-zinc-400 text-sm'>
            Generated on: {new Date(report.createdAt).toLocaleDateString()}
          </CardDescription>
        </CardHeader>

        <CardContent className='space-y-4 p-5'>
          <div className='space-y-2 text-sm'>
            <p>
              <span className='font-medium text-zinc-900 dark:text-zinc-200'>
                Blacklisted By:{' '}
              </span>
              {report.blacklistVendors.length > 0
                ? report.blacklistVendors.join(', ')
                : 'None'}
            </p>

            <p>
              <span className='font-medium text-zinc-900 dark:text-zinc-200'>
                Website Infected:{' '}
              </span>
              <span
                className={`font-semibold ${
                  report.isInfected ? 'text-red-500' : 'text-green-500'
                }`}>
                {report.isInfected ? 'Yes' : 'No'}
              </span>
            </p>

            <p>
              <span className='font-medium text-zinc-900 dark:text-zinc-200'>
                SEO Issues:{' '}
              </span>
              <span
                className={`font-semibold ${
                  report.hasSeoIssues ? 'text-red-500' : 'text-green-500'
                }`}>
                {report.hasSeoIssues ? 'Yes' : 'No'}
              </span>
            </p>

            <p>
              <span className='font-medium text-zinc-900 dark:text-zinc-200'>
                Performance Score:{' '}
              </span>
              <span className='font-semibold text-blue-600 dark:text-blue-400'>
                {report.performanceScore ?? 'N/A'}
              </span>
            </p>
          </div>

          {/* Malware Report */}
          {report.malwareScanDetails && (
            <div className='pt-4 border-t'>
              <h2 className='font-semibold text-lg'>Malware Report</h2>
              <p className='text-zinc-500 dark:text-zinc-400 text-sm'>
                {report.malwareScanDetails}
              </p>
            </div>
          )}

          {/* SEO Report */}
          {report.seoDetails && (
            <div className='pt-4 border-t'>
              <h2 className='font-semibold text-lg'>SEO Report</h2>
              <p className='text-zinc-500 dark:text-zinc-400 text-sm'>
                {report.seoDetails}
              </p>
            </div>
          )}

          {/* Performance Report */}
          {report.performanceDetails && (
            <div className='pt-4 border-t'>
              <h2 className='font-semibold text-lg'>Performance Report</h2>
              <p className='text-zinc-500 dark:text-zinc-400 text-sm'>
                {report.performanceDetails}
              </p>
            </div>
          )}
        </CardContent>

        <CardFooter className='flex justify-between p-5'>
          <Link href='/me/website-health-report'>
            <Button variant='outline'>Back to Reports</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
