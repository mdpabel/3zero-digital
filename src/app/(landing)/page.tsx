import React, { Suspense } from 'react';
import Hero from '@/components/home/hero';
import Services from '@/components/home/services';
import CaseStudies from '@/components/home/case-studies';
import Templates from '@/components/shop/templates';

export const dynamic = 'force-static';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Suspense fallback='loading...'>
        <Templates featured />
      </Suspense>
      <Suspense fallback='loading...'>
        <CaseStudies />
      </Suspense>
    </div>
  );
};

export default Home;
