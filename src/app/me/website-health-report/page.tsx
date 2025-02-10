import { auth } from '@/auth';
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
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
  const session = await auth();

  if (!session || !session.user?.email) {
    redirect('/login?callbackUrl=/admin/website-health-report');
  }

  const reports = await prisma.websiteHealthReport.findMany({
    where: {
      email: session.user?.email,
    },
  });

  return (
    <div className='mx-auto p-4 max-w-6xl'>
      <h1 className='mb-8 font-bold text-zinc-900 dark:text-zinc-200 text-4xl'>
        Your Website Health Reports
      </h1>
      {reports.length === 0 ? (
        <p className='text-zinc-500 dark:text-zinc-400 text-lg'>
          No reports available.
        </p>
      ) : (
        <ul className='space-y-4'>
          {reports.map((report) => (
            <Card className='w-[350px]'>
              <CardHeader>
                <CardTitle>{report.websiteUrl}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-zinc-500 dark:text-zinc-400'>
                  <strong className='text-black dark:text-white'>
                    Blacklisted By:{' '}
                  </strong>
                  {report.blacklistVendors.join(', ') || 'None'}
                </p>

                <p className='text-zinc-500 dark:text-zinc-400'>
                  <strong className='text-black dark:text-white'>
                    Website infected:{' '}
                  </strong>
                  {report.isInfected || 'None'}
                </p>

                <p className='text-zinc-500 dark:text-zinc-400'>
                  <strong className='text-black dark:text-white'>
                    SEO Issue:{' '}
                  </strong>
                  {report.hasSeoIssues || 'None'}
                </p>

                <p className='text-zinc-500 dark:text-zinc-400'>
                  <strong className='text-black dark:text-white'>
                    Performance Score:{' '}
                  </strong>
                  {report.performanceScore || 'None'}
                </p>
              </CardContent>
              <CardFooter className='flex justify-between'>
                <Button>View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </ul>
      )}
    </div>
  );
};

export default page;
