import HeroSection from '@/components/common/hero-section';
import KeyBenefits from '@/components/comment/key-benefits';
import Quiz from '@/components/comment/quiz';
import { benefits, processes, questions } from './data';
import { getServiceMetadata } from '@/app/seo';
import DevelopmentServiceForm from '@/components/comment/development-service-form';
import { FaReact } from 'react-icons/fa';
import Video from '@/components/common/video';
import Hero from '@/components/common/Hero';
import Templates from '@/components/shop/templates';
import ProcessSteps from '@/components/comment/process-steps';
import Comparison from '@/components/development/comparison';
import Script from 'next/script';
import { generateSchemaMarkup } from '@/app/schema-markup-generator';
import CompaniesLogo from '@/components/home/company-logos';
import FeaturedServices from '@/components/featured-services/featured-services';
import ComponentWrapper from '@/components/common/component-wrapper';

export const dynamic = 'force-static';

const slug = 'fullstack-next-js-applications-development';

export const metadata = getServiceMetadata(slug);

const NextJsFullStack = () => {
  const jsonLd = generateSchemaMarkup(slug);

  return (
    <ComponentWrapper className='px-4 w-full'>
      <Hero
        subHeadline='Scalable, Performant, and Secure Applications Tailored for Your Business.'
        headline='Fullstack App Development with Next.js'
        description="<strong className='text-black dark:text-white'>
    high-performance fullstack apps built on Next.js
  </strong>
  with custom APIs, server-side rendering, and seamless user experiences. Boost efficiency, security, and success for your business."
      />

      <Video
        videoId='na2iB6nBzIc'
        pageSlug='fullstack-next-js-applications-development'
      />

      <DevelopmentServiceForm
        Icon={<FaReact className='text-white text-2xl md:text-3xl' />}
        title='Fullstack Next.js Solutions for Scalable and Blazing-Fast Applications!'
      />

      <Templates
        filterOptions={false}
        title='7,000+ Websites Built to Perfection – Yours Could Be Next!'
        subTitle='Wether your business is new or established, whether you need a blog site or newspaper or ecommerce or personal, we can served you'
        featured={true}
        limit={6}
        sortBy='next'
      />

      <Comparison />

      <CompaniesLogo />
      <FeaturedServices />

      <ProcessSteps
        title='How We Build Your Dream Fullstack Nextjs Site'
        processes={processes}
      />

      <Quiz questions={questions} />

      <Script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </ComponentWrapper>
  );
};

export default NextJsFullStack;
