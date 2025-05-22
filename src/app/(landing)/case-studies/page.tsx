import React from 'react';
import Link from 'next/link';
import { fetchCaseStudies } from '@/lib/wordpress/case-study';
import { Button } from '@/components/ui/button';
import { genMetaData } from '@/app/seo';
import ComponentWrapper from '@/components/common/component-wrapper';

export const dynamic = 'force-static';

export const metadata = genMetaData({
  title: 'Case studies',
  url: '/case-studies',
});

const CaseStudyPage = async () => {
  const caseStudies = await fetchCaseStudies();

  return (
    <div className='px-4 md:px-20 py-12 md:py-24'>
      <ComponentWrapper>
        <h1 className='mb-10 font-bold text-4xl text-center'>
          Our Case Studies
        </h1>
        <p className='mb-16 text-lg text-center'>
          Explore how 3Zero Digital has empowered businesses with development,
          maintenance, troubleshooting, and more. Here are some of our recent
          projects:
        </p>

        <div className='gap-12 grid grid-cols-1 md:grid-cols-2'>
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className='bg-white dark:bg-gray-900 shadow-md p-8 rounded-lg'>
              <h2 className='mb-4 font-bold text-2xl'>{study.title}</h2>
              <p className='mb-4'>{study.description}</p>
              <p className='mb-4'>
                <strong className=''>Services:</strong>{' '}
                {study.services.join(', ')}
              </p>
              <p className='mb-4'>
                <strong className=''>Outcome:</strong> {study.outcome}
              </p>
              <Button>
                <Link href={'/case-studies/' + study.slug}>
                  Read Full Case Study
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default CaseStudyPage;
