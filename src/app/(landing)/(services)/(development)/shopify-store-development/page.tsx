import HeroSection from '@/components/common/hero-section';
import Quiz from '@/components/comment/quiz';
import { processes, questions } from './data';
import { getServiceMetadata } from '@/app/seo';
import DevelopmentServiceForm from '@/components/comment/development-service-form';
import { FaShopify } from 'react-icons/fa';
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

const slug = 'shopify-store-development';

export const metadata = getServiceMetadata(slug);

const ShopifyWebsiteDevelopment = () => {
  const jsonLd = generateSchemaMarkup(slug);

  return (
    <ComponentWrapper>
      <Hero
        subHeadline='Custom, Scalable, and Conversion-Focused Shopify Solutions.'
        headline='Shopify Store Development'
        description="<strong className='text-black dark:text-white'>
    fast, secure stores that maximize sales
  </strong>
  Whether you need a new store, custom features, a redesign, or want to clone a Shopify store, our expert team delivers tailored solutions to achieve your business goals and ensure a seamless shopping experience."
      />

      <Video videoId='na2iB6nBzIc' pageSlug='shopify-store-development' />

      <DevelopmentServiceForm
        Icon={<FaShopify className='text-white text-2xl md:text-3xl' />}
        title="Build a High-Converting Shopify Store for Your Brand's Success!"
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
        title='How We Build Your Dream Shopify store'
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

export default ShopifyWebsiteDevelopment;
