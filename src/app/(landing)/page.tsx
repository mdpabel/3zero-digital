import React, { Suspense } from 'react';
import Hero from '@/components/home/hero';
import Services from '@/components/home/services';
import CaseStudies from '@/components/home/case-studies';
import Templates from '@/components/shop/templates';
import {
  BreadcrumbListSchema,
  OrganizationSchema,
  ProductSchema,
} from './schema';

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

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(OrganizationSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(BreadcrumbListSchema),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ProductSchema) }}
      />
    </div>
  );
};

export default Home;
