import BlacklistRemovalVendors from './blacklist-removal-vendors';
import { getProduct } from '@/lib/product/get-product';

import { getServiceMetadata } from '@/app/seo';
import HeroSection from '@/components/comment/hero-section';
import Quiz from '@/components/comment/quiz';
import { questions } from './data';

export const metadata = getServiceMetadata('blacklist-removal');

const page = async () => {
  const { origPrice, price, productId } = await getProduct('blacklist-removal');

  return (
    <div className='mx-auto p-4 max-w-6xl'>
      <HeroSection
        title='Get Your Website Off Blacklists – Fast and Reliable!'
        subtitle='Being Blacklisted Costs You Traffic, Trust, and Revenue!'
        description='We’ve helped over 100+ websites recover from blacklists. Our expert team will remove your site from blacklists, secure it from future attacks, and restore your online reputation – guaranteed.'
        youtubeId='dQw4w9WgXcQ' // Replace with your actual video ID
        firstBtnLink='/contact-us'
        firstBtnText='Remove My Website Now'
      />

      <BlacklistRemovalVendors
        origPrice={origPrice}
        price={price}
        productId={productId}
      />

      <Quiz questions={questions} />
    </div>
  );
};

export default page;
