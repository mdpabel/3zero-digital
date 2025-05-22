import Hero from '@/components/common/Hero';
import React from 'react';
import PricingTable from './pricing-table';
import ContactUs from '../../../../../components/common/contact-us';
import DeliveryTime from './deliver-time';
import AffordablePricing from './affordable-pricing';
import TermsAndConditions from './terms-and-condition';
import Templates from '@/components/shop/templates';
import Policy from './policy';
import Countdown from './count-down';
import ComponentWrapper from '@/components/common/component-wrapper';

const NewYearOffer = () => {
  return (
    <ComponentWrapper>
      <Hero
        description="Don't miss out on our exclusive New Year offer! Perfect for kickstarting your online journey with unbeatable deals."
        headline='🎉 New Year Special Offer 🎉'
        subHeadline='Start your online journey today with our free and premium plans. Hurry, this is a limited-time offer!'
        secondBtnText='Contact Us'
        secondBtnLink='https://wa.me/+447878798374'
      />
      {/* <Countdown targetDate='2025-01-07T00:00:00' /> */}
      <PricingTable />
      <ContactUs />
      <DeliveryTime />
      <Templates />
      <AffordablePricing />
      <Policy />
    </ComponentWrapper>
  );
};

export default NewYearOffer;
