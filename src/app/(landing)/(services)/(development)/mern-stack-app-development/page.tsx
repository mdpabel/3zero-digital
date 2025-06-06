import HeroSection from '@/components/common/hero-section';
import Quiz from '@/components/comment/quiz';
import { processes, questions } from './data';
import { getServiceMetadata } from '@/app/seo';
import DevelopmentServiceForm from '@/components/comment/development-service-form';
import { FaNode } from 'react-icons/fa';
import Video from '@/components/common/video';
import Hero from '@/components/common/Hero';
import Templates from '@/components/shop/templates';
import ProcessSteps from '@/components/comment/process-steps';
import Comparison from '@/components/development/comparison';
import { generateSchemaMarkup } from '@/app/schema-markup-generator';
import Script from 'next/script';
import CompaniesLogo from '@/components/home/company-logos';
import FeaturedServices from '@/components/featured-services/featured-services';
import ComponentWrapper from '@/components/common/component-wrapper';

export const dynamic = 'force-static';

const slug = 'mern-stack-app-development';

export const metadata = getServiceMetadata(slug);

const MernStack = () => {
  const jsonLd = generateSchemaMarkup(slug);

  return (
    <ComponentWrapper>
      <Hero
        subHeadline='Dynamic, Scalable, and Efficient Web Applications Built to Empower Your Business.'
        headline='Fullstack App Development with MERN Stack'
        description="<strong className='text-black dark:text-white'>
    Build powerful, scalable apps with our MERN stack expertise
  </strong>
  —from high-performance eCommerce to custom solutions, we craft dynamic applications that fuel growth and efficiency."
      />

      <Video videoId='na2iB6nBzIc' pageSlug='mern-stack-app-development' />

      <DevelopmentServiceForm
        Icon={<FaNode className='text-white text-2xl md:text-3xl' />}
        title='Fullstack MERN Solutions for Scalable, High-Performance Applications!'
      />

      <Templates
        filterOptions={false}
        title='7,000+ Websites Built to Perfection – Yours Could Be Next!'
        subTitle='Wether your business is new or established, whether you need a blog site or newspaper or ecommerce or personal, we can served you'
        featured={true}
        limit={6}
        sortBy='mern'
      />

      <Comparison />

      <CompaniesLogo />
      <FeaturedServices />

      <ProcessSteps
        title='How We Build Your Dream MERN Stack Site'
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

export default MernStack;
