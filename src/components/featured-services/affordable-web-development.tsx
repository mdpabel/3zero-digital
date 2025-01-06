import Image, { StaticImageData } from 'next/image';
import React from 'react';
import Checkout from '../payment/checkout';

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
    <div className='mx-auto px-4 py-14 max-w-6xl'>
      <div className='items-center gap-8 grid grid-cols-1 lg:grid-cols-5'>
        {/* Text Section */}
        <div className='lg:col-span-2 text-center lg:text-left'>
          <h3 className='mb-4 font-bold text-2xl text-zinc-800 md:text-3xl dark:text-zinc-200'>
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
            className='block dark:hidden shadow-md rounded-lg'
          />
          {/* Dark Theme Image */}
          <Image
            src={darkImage}
            alt='Website prototype (dark)'
            className='dark:block hidden shadow-md rounded-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedService;
