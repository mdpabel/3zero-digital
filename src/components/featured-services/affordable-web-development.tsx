import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Checkout from '../payment/checkout';
import ComponentWrapper from '../common/component-wrapper';

const FeaturedService = ({
  productId,
  title,
  description,
  lightImage,
  darkImage,
}: {
  productId: string;
  title: string;
  description: string;
  lightImage: StaticImageData;
  darkImage: StaticImageData;
}) => {
  return (
    <ComponentWrapper className='py-14'>
      <div className='items-center gap-8 md:gap-12 grid grid-cols-1 lg:grid-cols-5'>
        {/* Text Section */}
        <div className='lg:col-span-2 lg:text-left text-center'>
          <h3 className='mb-4 font-bold text-zinc-800 dark:text-zinc-200 text-2xl md:text-3xl'>
            {title}
          </h3>
          <h4 className='mb-8 text-base md:text-lg'>{description}</h4>
          <Checkout
            productId={productId}
            paymentMode='payment'
            quantity={1}
            className='w-full'
            label='Get Started'
          />
        </div>

        {/* Image Section */}
        <div className='lg:col-span-3'>
          {/* Light Theme Image */}
          <Image
            src={lightImage}
            alt='Website prototype'
            className='dark:hidden block shadow-md rounded-lg'
          />
          {/* Dark Theme Image */}
          <Image
            src={darkImage}
            alt='Website prototype (dark)'
            className='shadow-md rounded-lg affordable-web-dev-dark'
          />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default FeaturedService;
