import React from 'react';
import Link from 'next/link';
import { fetchCaseStudies } from '@/lib/wordpress/case-study';
import { Button } from '@/components/ui/button';
import { genMetaData } from '@/app/seo';

export const metadata = genMetaData({
  title: 'Case studies',
});

export const dynamic = 'force-static';

const CaseStudyPage = async () => {
  const caseStudies = await fetchCaseStudies();

  return (
    <div className='px-4 md:px-20 py-12 md:py-24'>
      <div className='mx-auto max-w-6xl'>
        <h1 className='mb-10 font-bold text-4xl text-center text-zinc-800 dark:text-zinc-200'>
          Our Case Studies
        </h1>
        <p className='mb-16 text-center text-gray-600 text-lg dark:text-gray-400'>
          Explore how 3Zero Digital has empowered businesses with development,
          maintenance, troubleshooting, and more. Here are some of our recent
          projects:
        </p>

        <div className='gap-12 grid grid-cols-1 md:grid-cols-2'>
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className='bg-white dark:bg-gray-900 shadow-md p-8 rounded-lg'>
              <h2 className='mb-4 font-bold text-2xl text-zinc-800 dark:text-zinc-200'>
                {study.title}
              </h2>
              <p className='mb-4 text-gray-600 dark:text-gray-400'>
                {study.description}
              </p>
              <p className='mb-4 text-gray-600 dark:text-gray-400'>
                <strong className='text-zinc-800 dark:text-zinc-200'>
                  Services:
                </strong>{' '}
                {study.services.join(', ')}
              </p>
              <p className='mb-4 text-gray-600 dark:text-gray-400'>
                <strong className='text-zinc-800 dark:text-zinc-200'>
                  Outcome:
                </strong>{' '}
                {study.outcome}
              </p>
              <Button>
                <Link href={'/case-studies/' + study.slug}>
                  Read Full Case Study
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
