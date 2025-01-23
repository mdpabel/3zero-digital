import React, { Suspense } from 'react';
import Hero from '@/components/home/hero';
import Services from '@/components/home/services';
import CaseStudies from '@/components/home/case-studies';
import Templates from '@/components/shop/templates';
import { organizationSchema } from './schema-markup';
import CustomerIssues from '@/components/home/customer-issues';
import CompaniesLogo from '@/components/home/company-logos';
import Comparison from '@/components/development/comparison';
import Script from 'next/script';
import FeaturedServices from '@/components/featured-services/featured-services';

export const dynamic = 'force-static';

const Home = () => {
  return (
    <div>
      <Hero />
      <CustomerIssues />
      <Services />
      <CompaniesLogo />
      <FeaturedServices />
      <Comparison />
      <Suspense fallback='loading...'>
        <Templates featured limit={6} />
      </Suspense>
      {process.env.NODE_ENV === 'production' && (
        <Suspense fallback='loading...'>
          <CaseStudies />
        </Suspense>
      )}

      <Script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </div>
  );
};

export default Home;
