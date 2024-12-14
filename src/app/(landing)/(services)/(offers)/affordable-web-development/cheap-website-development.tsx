import HostingFeatures from './hosting-features';
import ServicesProvided from './service-provided';
import FAQ from './FAQ';
import Video from '@/components/common/video';
import Hero from '@/components/common/Hero';
import PricingTable from './pricing-table';

const CheapWebsiteDevelopment = () => {
  return (
    <div className='mx-auto px-4 max-w-6xl'>
      <Hero
        subHeadline='Ready to create a professional website without the high costs or stress?'
        headline='Get Your Business Website in Just 7 Days for Only $79'
        description="<strong className='text-black dark:text-white'>
          security, hosting, domain, SSL, Email
        </strong>
        , and more—at a price that won’t break the bank."
      />
      <Video videoId='na2iB6nBzIc' pageSlug='affordable-web-development' />
      <PricingTable />
      <HostingFeatures />
      <ServicesProvided />
      <FAQ />
    </div>
  );
};

export default CheapWebsiteDevelopment;
