import HostingFeatures from './hosting-features';
import ServicesProvided from './service-provided';
import FAQ from './FAQ';
import Video from '@/components/common/video';
import Hero from '@/components/common/Hero';
import PricingTable from './pricing-table';
import ProcessSteps from '@/components/comment/process-steps';
import { processes } from './data';
import Templates from '@/components/shop/templates';
import React from 'react';
import { getServiceMetadata } from '@/app/seo';
import Comparison from '@/components/development/comparison';
import { generateSchemaMarkup } from '@/app/schema-markup-generator';
import Script from 'next/script';

const slug = 'affordable-web-development';

export const metadata = getServiceMetadata(slug);

const page = () => {
  const jsonLd = generateSchemaMarkup(slug);

  return (
    <div className='mx-auto px-4 max-w-6xl'>
      <Hero
        subHeadline='Ready to create a professional website without the high costs or stress?'
        headline='Get Your Business Website in Just 7 Days for Only $79'
        description="<strong className='text-black dark:text-white'>
          security, hosting, domain, SSL, Email
        </strong>
        , and more—at a price that won’t break the bank."
      />
      <Video videoId='na2iB6nBzIc' pageSlug={slug} />
      <PricingTable />
      <HostingFeatures />
      <ServicesProvided />
      <Comparison />
      <Templates
        filterOptions={false}
        title='7,000+ Websites Built to Perfection – Yours Could Be Next!'
        subTitle='Wether your business is new or established, whether you need a blog site or newspaper or ecommerce or personal, we can served you'
        featured={true}
        limit={6}
        sortBy='shopify'
      />
      <ProcessSteps
        title='How We Build Your Dream Website'
        processes={processes}
      />
      <FAQ />

      <Script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default page;
