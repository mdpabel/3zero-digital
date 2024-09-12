import CaseStudies from '@/components/home/case-studies';
import Hero from '@/components/home/hero';
import ThreeZeroExplanation from '@/components/home/three-zero';
import Services from '@/components/home/services';
import CompanyLogosMarquee from '@/components/home/company-logos';

import React from 'react';

export const dynamic = 'force-static';

const Home = () => {
  return (
    <div>
      <Hero />
      <ThreeZeroExplanation />
      <CompanyLogosMarquee />
      <Services />
      <CaseStudies />
    </div>
  );
};

export default Home;
