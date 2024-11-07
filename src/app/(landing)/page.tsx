import lazy from 'next/dynamic';
import React, { Suspense } from 'react';
import Hero from '@/components/home/hero';
import Services from '@/components/home/services';
import CompanyLogosMarquee from '@/components/home/company-logos';
import CaseStudyCarouselSkeleton from '@/components/home/case-studies-skeleton';
import CaseStudies from '@/components/home/case-studies';

export const dynamic = 'force-static';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <CompanyLogosMarquee />
      <Suspense fallback={<CaseStudyCarouselSkeleton />}>
        <CaseStudies />
      </Suspense>
    </div>
  );
};

export default Home;
