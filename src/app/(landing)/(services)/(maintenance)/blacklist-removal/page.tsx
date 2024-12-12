import BlacklistRemovalVendors from './blacklist-removal-vendors';
import { getProduct } from '@/lib/product/get-product';

import { getServiceMetadata } from '@/app/seo';
import HeroSection from '@/components/comment/hero-section';
import Quiz from '@/components/comment/quiz';
import { questions } from './data';
import Video from '@/components/common/video';
import Hero from '@/components/common/Hero';

export const metadata = getServiceMetadata('blacklist-removal');

const page = async () => {
  const { origPrice, price, productId } = await getProduct('blacklist-removal');

  return (
    <div className='mx-auto p-4 max-w-6xl'>
      <Hero
        subHeadline='Being Blacklisted Costs You Traffic, Trust, and Revenue!'
        headline='Get Your Website Off Blacklists – Fast and Reliable!'
        description="<strong className='text-black dark:text-white'>
    We’ve helped over 100+ websites recover from blacklists
  </strong>. Our expert team will remove your site from blacklists, secure it from future attacks, and restore your online reputation – guaranteed."
      />

      <Video videoId='na2iB6nBzIc' pageSlug='blacklist-removal' />

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
