import { auth } from '@/auth';
import ComponentWrapper from '@/components/common/component-wrapper';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import prisma from '@/prisma/db';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const Page = async () => {
  const session = await auth();

  if (!session || !session.user?.email) {
    redirect('/login?callbackUrl=/admin/website-health-report');
  }

  const reports = await prisma.websiteHealthReport.findMany({
    where: { email: session.user?.email },
  });

  return (
    <ComponentWrapper className='py-10'>
      <h1 className='mb-8 font-bold text-zinc-900 dark:text-zinc-200 text-4xl'>
        Your Website Health Reports
      </h1>

      {reports.length === 0 ? (
        <p className='text-zinc-500 dark:text-zinc-400 text-lg'>
          No reports available. Generate one to get started.
        </p>
      ) : (
        <div className='gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {reports.map((report) => (
            <Card
              key={report.id}
              className='hover:shadow-xl border border-zinc-200 dark:border-zinc-700 hover:scale-[1.02] transition-all duration-300'>
              <CardHeader className='bg-zinc-100 dark:bg-zinc-800 p-5 rounded-t-xl'>
                <CardTitle className='font-semibold text-zinc-900 dark:text-zinc-200 text-lg truncate'>
                  {report.websiteUrl}
                </CardTitle>
                <CardDescription className='text-zinc-500 dark:text-zinc-400 text-sm'>
                  Last updated:{' '}
                  {new Date(report.updatedAt).toLocaleDateString()}
                </CardDescription>
              </CardHeader>

              <CardContent className='space-y-3 p-5'>
                <div className='text-sm'>
                  <p className='flex justify-between'>
                    <span className='text-zinc-500 dark:text-zinc-400'>
                      Blacklisted By:
                    </span>
                    <span className='font-medium text-zinc-900 dark:text-zinc-200'>
                      {report.blacklistVendors.length > 0
                        ? report.blacklistVendors.join(', ')
                        : 'None'}
                    </span>
                  </p>

                  <p className='flex justify-between'>
                    <span className='text-zinc-500 dark:text-zinc-400'>
                      Website Infected:
                    </span>
                    <span
                      className={`font-medium ${
                        report.isInfected ? 'text-red-500' : 'text-green-500'
                      }`}>
                      {report.isInfected ? 'Yes' : 'No'}
                    </span>
                  </p>

                  <p className='flex justify-between'>
                    <span className='text-zinc-500 dark:text-zinc-400'>
                      SEO Issues:
                    </span>
                    <span
                      className={`font-medium ${
                        report.hasSeoIssues ? 'text-red-500' : 'text-green-500'
                      }`}>
                      {report.hasSeoIssues ? 'Yes' : 'No'}
                    </span>
                  </p>

                  <p className='flex justify-between'>
                    <span className='text-zinc-500 dark:text-zinc-400'>
                      Performance Score:
                    </span>
                    <span className='font-medium text-blue-600 dark:text-blue-400'>
                      {report.performanceScore ?? 'N/A'}
                    </span>
                  </p>
                </div>
              </CardContent>

              <CardFooter className='flex justify-end p-5 border-zinc-200 dark:border-zinc-700 border-t'>
                <Button asChild variant='outline' className='w-full'>
                  <Link href={`/me/website-health-report/${report.id}`}>
                    View Details
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </ComponentWrapper>
  );
};

export default Page;
