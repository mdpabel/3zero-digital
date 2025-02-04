import lazy from 'next/dynamic';
import Script from 'next/script';
import React, { Suspense } from 'react';
import Hero from '@/components/home/hero';
import { organizationSchema } from './schema-markup';
import CustomerIssues from '@/components/home/customer-issues';
import Comparison from '@/components/development/comparison';

const Services = lazy(() => import('@/components/home/services'));
const CaseStudies = lazy(() => import('@/components/home/case-studies'));
const Templates = lazy(() => import('@/components/shop/templates'));
const CompaniesLogo = lazy(() => import('@/components/home/company-logos'));
const FeaturedServices = lazy(
  () => import('@/components/featured-services/featured-services'),
);

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
