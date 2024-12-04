import HeroSection from '@/components/comment/hero-section';
import KeyBenefits from '@/components/comment/key-benefits';
import Quiz from '@/components/comment/quiz';
import { benefits, questions } from './data';
import { getServiceMetadata } from '@/app/seo';
import DevelopmentServiceForm from '@/components/comment/development-service-form';
import { FaShopify } from 'react-icons/fa';

export const dynamic = 'force-static';

export const metadata = getServiceMetadata('shopify-store-development');

const ShopifyWebsiteDevelopment = () => {
  return (
    <div className='mx-auto px-4 w-full max-w-6xl container'>
      <HeroSection
        title='Shopify Store Development'
        subtitle='Custom, Scalable, and Conversion-Focused Shopify Solutions.'
        description='Your online store is the foundation of your eCommerce success. We specialize in creating Shopify stores that are fast, secure, and designed to maximize sales. Whether you need a new store, custom features, or a redesign, our expert team delivers tailored solutions to meet your business goals and provide a seamless shopping experience for your customers.'
        youtubeId='na2iB6nBzIc'
        firstBtnText='Launch Your Shopify Store Today'
        firstBtnLink='/get-a-quote?service=shopify'
      />

      <DevelopmentServiceForm
        Icon={<FaShopify className='text-2xl text-white md:text-3xl' />}
        title="Build a High-Converting Shopify Store for Your Brand's Success!"
      />

      {/* <KeyBenefits
        benefits={benefits}
        title='Key Benefits of Shopify for store development'
      /> */}
      <Quiz questions={questions} />
    </div>
  );
};

export default ShopifyWebsiteDevelopment;
