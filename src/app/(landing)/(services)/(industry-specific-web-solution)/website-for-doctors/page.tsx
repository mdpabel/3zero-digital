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
import HeroSection from '@/components/common/hero-section';
import websiteForDoctors from '@/../public/images/services/website-for-doctors-hero-image.png';

export const dynamic = 'force-static';

const slug = 'website-for-doctors';

export const metadata = getServiceMetadata(slug);

const page = () => {
  const jsonLd = generateSchemaMarkup(slug);

  return (
    <div className='mx-auto px-4 max-w-6xl'>
      <HeroSection
        title='Website Development for Doctors'
        subtitle='Build a professional online presence with a custom website tailored for medical professionals.'
        description='Our websites help doctors connect with patients, manage appointments, and showcase their expertise with ease. Get a secure, fast, and SEO-friendly website today!'
        firstBtnText='Get Started'
        firstBtnLink='/contact'
        imgSrc={websiteForDoctors}
      />

      <Video videoId='na2iB6nBzIc' pageSlug={slug} />
      <PricingTable slug={slug} />
      <ProjectSteps
        title='🚀 Our Workflow to Build Your Dream Website'
        steps={steps}
        subtitle='Here’s how our company ensures a smooth and professional process for
        creating your website.'
      />
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
