import React from 'react';
import PricingTable from './pricing-table';
import { getProduct } from '@/lib/product/get-product';
import { getServiceMetadata } from '@/app/seo';

export const metadata = getServiceMetadata('/ssl-installation');

export const dynamic = 'force-static';

const benefits = [
  'Encrypts data between your website and visitors',
  'Boosts search engine rankings with HTTPS',
  'Enhances trust with SSL padlock and certificate',
  'Secures online transactions and sensitive information',
  'Prevents data breaches and man-in-the-middle attacks',
  'Complies with industry standards and regulations',
  'Ensures compatibility with modern web browsers',
  'Provides ongoing support and SSL certificate renewal',
];

const SSLInstallation = async () => {
  const { origPrice, price, productId } = await getProduct(
    'SSL Installation & Configuration',
  );

  return (
    <div className='bg-gradient-to-b from-gray-100 dark:from-gray-900 to-white dark:to-gray-800 py-12'>
      <div className='mx-auto px-6 lg:px-8 max-w-7xl'>
        <div className='text-center'>
          <h2 className='font-extrabold text-4xl text-zinc-800 dark:text-zinc-200'>
            SSL Installation & Configuration
          </h2>
          <p className='mt-4 text-lg text-zinc-600 dark:text-zinc-400'>
            Secure your website with our comprehensive SSL installation service.
            We handle everything from setup to ongoing support.
          </p>
        </div>

        <PricingTable
          origPrice={origPrice}
          price={price}
          productId={productId}
          services={benefits}
        />

        <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 mt-8'>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className='border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl p-6 border rounded-lg transform transition-transform hover:scale-105'>
              <div className='flex justify-center items-center bg-gradient-to-r from-[#614385] to-[#516395] mb-4 rounded-full w-12 h-12 text-white'>
                <span className='font-bold text-xl'>{index + 1}</span>
              </div>
              <h3 className='font-semibold text-lg text-zinc-800 dark:text-zinc-200'>
                {benefit}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SSLInstallation;
