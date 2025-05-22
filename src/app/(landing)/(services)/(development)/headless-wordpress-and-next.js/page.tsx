import HeroSection from '@/components/common/hero-section';
import Quiz from '@/components/comment/quiz';
import { getServiceMetadata } from '@/app/seo';
import DevelopmentServiceForm from '@/components/comment/development-service-form';
import { FaCogs } from 'react-icons/fa';
import { processes, questions } from './data';
import PerformanceComparison from './performance-comparison';
import Hero from '@/components/common/Hero';
import Video from '@/components/common/video';
import Templates from '@/components/shop/templates';
import ProcessSteps from '@/components/comment/process-steps';
import Comparison from '@/components/development/comparison';
import { generateSchemaMarkup } from '@/app/schema-markup-generator';
import Script from 'next/script';
import CompaniesLogo from '@/components/home/company-logos';
import FeaturedServices from '@/components/featured-services/featured-services';
import ComponentWrapper from '@/components/common/component-wrapper';

export const dynamic = 'force-static';

const slug = 'headless-wordpress-and-next.js';

export const metadata = getServiceMetadata(slug);

const HeadlessWordPressAndNextJs = () => {
  const jsonLd = generateSchemaMarkup(slug);

  return (
    <ComponentWrapper className='w-full'>
      <Hero
        subHeadline='Build Faster, Safer Websites with Next.js and WordPress.'
        headline='Headless WordPress & Next.js'
        description="<strong className='text-black dark:text-white'>
    WordPress powers 43% of the web but is a prime target for hackers
  </strong>
  —90% of breached sites run WordPress. A hack means stolen data and lost trust. With headless WordPress and Next.js, we make your site virtually UNHACKABLE and secure."
      />

      <Video videoId='na2iB6nBzIc' pageSlug='headless-wordpress-and-next.js' />

      <PerformanceComparison />

      <DevelopmentServiceForm
        Icon={<FaCogs className='text-white text-2xl md:text-3xl' />}
        title='Headless WordPress & NextJs'
      />

      <Templates
        filterOptions={false}
        title='7,000+ Websites Built to Perfection – Yours Could Be Next!'
        subTitle='Wether your business is new or established, whether you need a blog site or newspaper or ecommerce or personal, we can served you'
        featured={true}
        limit={6}
        sortBy='headless'
      />

      <Comparison />

      <CompaniesLogo />
      <FeaturedServices />

      <ProcessSteps
        title='How We Build Your Dream Headless WordPress & Nextjs Site'
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

export default HeadlessWordPressAndNextJs;
