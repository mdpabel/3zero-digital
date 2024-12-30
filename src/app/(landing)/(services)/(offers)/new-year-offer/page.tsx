import Hero from '@/components/common/Hero';
import React from 'react';
import PricingTable from './pricing-table';

const NewYearOffer = () => {
  return (
    <div className='mx-auto p-4 max-w-6xl'>
      <Hero
        description="Don't miss out on our exclusive New Year offer! Perfect for kickstarting your online journey with unbeatable deals."
        headline='🎉 New Year Special Offer 🎉'
        subHeadline='Start your online journey today with our free and premium plans. Hurry, this is a limited-time offer!'
      />

      <PricingTable />
    </div>
  );
};

export default NewYearOffer;
