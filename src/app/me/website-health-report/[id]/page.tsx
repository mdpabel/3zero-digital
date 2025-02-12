import prisma from '@/prisma/db';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

const Page = async ({ params }: { params: { id: string } }) => {
  const report = await prisma.websiteHealthReport.findUnique({
    where: { id: params.id },
  });

  if (!report) {
    return notFound();
  }

  return (
    <div className='mx-auto px-6 py-10 max-w-4xl'>
      <h1 className='mb-8 font-bold text-zinc-900 dark:text-zinc-200 text-3xl'>
        Website Health Report
      </h1>

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

export default Page;
