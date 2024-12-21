import Image from 'next/image';
import React from 'react';
import websitePrototype from '@/../public/images/website-prototype.png';
import websitePrototypeDark from '@/../public/images/website-prototype-dark.png';
import { Button } from '../ui/button';
import { getProduct } from '@/lib/product/get-product';
import Checkout from '../payment/checkout';

const AffordableWebDevelopment = async () => {
  const { origPrice, price, productId } = await getProduct(
    'affordable-web-development',
  );

  return (
    <div className='mx-auto px-4 py-14 max-w-6xl'>
      <div className='items-center gap-8 grid grid-cols-1 lg:grid-cols-5'>
        {/* Text Section */}
        <div className='lg:col-span-2 text-center lg:text-left'>
          <h3 className='mb-4 font-bold text-2xl text-zinc-800 md:text-3xl dark:text-zinc-200'>
            Get Your Business Website in Just 7 Days for Only $79
          </h3>
          <h4 className='mb-8 text-base text-gray-600 md:text-lg dark:text-gray-400'>
            Website, domain, hosting, security, SSL, email, performance and
            more—at a price that won’t break the bank.
          </h4>
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
            src={websitePrototype}
            alt='Website prototype'
            className='block dark:hidden shadow-md rounded-lg'
            layout='responsive'
          />
          {/* Dark Theme Image */}
          <Image
            src={websitePrototypeDark}
            alt='Website prototype (dark)'
            className='dark:block hidden shadow-md rounded-lg'
            layout='responsive'
          />
        </div>
      </div>
    </div>
  );
};

export default AffordableWebDevelopment;
