import HeroSection from '@/components/comment/hero-section';
import KeyBenefits from '@/components/comment/key-benefits';
import Quiz from '@/components/comment/quiz';
import { benefits, questions } from './data';
import { getServiceMetadata } from '@/app/seo';

export const metadata = getServiceMetadata('/shopify');

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

      <KeyBenefits
        benefits={benefits}
        title='Key Benefits of Shopify for store development'
      />
      <Quiz questions={questions} />
    </div>
  );
};

export default ShopifyWebsiteDevelopment;
