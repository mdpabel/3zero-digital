import HeroSection from '@/components/comment/hero-section';
import Quiz from '@/components/comment/quiz';
import { questions } from './data';
import { getServiceMetadata } from '@/app/seo';
import DevelopmentServiceForm from '@/components/comment/development-service-form';
import { FaShopify } from 'react-icons/fa';

export const metadata = getServiceMetadata('shopify-store-development');

const ShopifyWebsiteDevelopment = () => {
  return (
    <div className='mx-auto px-4 w-full max-w-6xl container'>
      <HeroSection
        title='Shopify Store Development'
        subtitle='Custom, Scalable, and Conversion-Focused Shopify Solutions.'
        description='We specialize in Shopify store development to build fast, secure stores that maximize
sales. Whether you need a new store, custom features, a redesign, or want to clone a
Shopify store, our expert team delivers tailored solutions to achieve your business goals
and ensure a seamless shopping experience.'
        youtubeId='na2iB6nBzIc'
        firstBtnText='Launch Your Shopify Store Today'
        firstBtnLink='/get-a-quote?service=shopify'
      />

      <DevelopmentServiceForm
        Icon={<FaShopify className='text-2xl text-white md:text-3xl' />}
        title="Build a High-Converting Shopify Store for Your Brand's Success!"
      />

      <Quiz questions={questions} />
    </div>
  );
};

export default ShopifyWebsiteDevelopment;
