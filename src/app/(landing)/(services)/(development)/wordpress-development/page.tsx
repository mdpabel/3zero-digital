import Quiz from '@/components/comment/quiz';
import { processes, questions } from './data';
import { getServiceMetadata } from '@/app/seo';
import DevelopmentServiceForm from '@/components/comment/development-service-form';
import { FaWordpress } from 'react-icons/fa';
import ProcessSteps from '@/components/comment/process-steps';
import Hero from '@/components/common/Hero';
import Video from '@/components/common/video';
import Templates from '@/components/shop/templates';
import Comparison from '@/components/development/comparison';
import { generateSchemaMarkup } from '@/app/schema-markup-generator';
import Script from 'next/script';
import CompaniesLogo from '@/components/home/company-logos';
import FeaturedServices from '@/components/featured-services/featured-services';
import ComponentWrapper from '@/components/common/component-wrapper';

export const dynamic = 'force-static';

const slug = 'wordpress-development';

export const metadata = getServiceMetadata(slug);

const WordPressDevelopment = () => {
  const jsonLd = generateSchemaMarkup(slug);

  return (
    <ComponentWrapper>
      <Hero
        subHeadline='Custom, Scalable, and Secure Solutions for Your Business Growth.'
        headline='Expert WordPress Development'
        description="<strong className='text-black dark:text-white'>
    visually appealing, fast, secure, and scalable sites
  </strong>
  tailored for your eCommerce or business needs. Let us help you exceed expectations and meet your goals."
      />
      <Video videoId='na2iB6nBzIc' pageSlug='wordpress-development' />

      <DevelopmentServiceForm
        Icon={<FaWordpress className='text-white text-2xl md:text-3xl' />}
        title='Custom WordPress Solutions for Seamless Performance & Growth'
      />

      <Comparison />

      <CompaniesLogo />
      <FeaturedServices />

      <Templates
        filterOptions={false}
        title='7,000+ Websites Built to Perfection – Yours Could Be Next!'
        subTitle='Wether your business is new or established, whether you need a blog site or newspaper or ecommerce or personal, we can served you'
        featured={true}
        limit={6}
        sortBy='shopify'
      />

      <ProcessSteps
        title='How We Build Your Dream WordPress Site'
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

export default WordPressDevelopment;
