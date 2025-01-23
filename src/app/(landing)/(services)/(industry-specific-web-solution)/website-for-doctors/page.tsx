import FAQ from '../../../../../components/development/FAQ';
import Video from '@/components/common/video';
import Hero from '@/components/common/Hero';
import PricingTable from '../../../../../components/development/pricing-table';
import Templates from '@/components/shop/templates';
import React from 'react';
import { getServiceMetadata } from '@/app/seo';
import Comparison from '@/components/development/comparison';
import { generateSchemaMarkup } from '@/app/schema-markup-generator';
import Script from 'next/script';
import ProjectSteps from '../../../../../components/development/project-steps';
import { steps } from './data';

export const dynamic = 'force-static';

const slug = 'website-for-doctors';

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
      <PricingTable slug={slug} />
      <ProjectSteps steps={steps} />
      <Comparison />
      <Templates
        filterOptions={false}
        title='7,000+ Websites Built to Perfection – Yours Could Be Next!'
        subTitle='Wether your business is new or established, whether you need a blog site or newspaper or ecommerce or personal, we can served you'
        featured={true}
        limit={6}
        sortBy='shopify'
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
