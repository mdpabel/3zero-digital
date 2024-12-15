import Checkout from '@/components/payment/checkout';
import { getProduct } from '@/lib/product/get-product';
import React from 'react';
import { FaCheck } from 'react-icons/fa';

const PricingTable = async () => {
  const { origPrice, price, productId } = await getProduct(
    'affordable-web-development',
  );

  return (
    <div
      id='getStarted'
      className='bg-gray-50 dark:bg-gray-900 mt-32 py-16 text-center'>
      <h2 className='mb-6 font-bold text-4xl text-zinc-800 dark:text-zinc-200'>
        🚀 Simple, Transparent Pricing
      </h2>
      <p className='mb-8 text-gray-600 text-xl dark:text-gray-400'>
        Everything you need to get your website up and running for just $79.
      </p>

      <div className='mx-auto max-w-4xl'>
        <div className='bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden'>
          <div className='bg-[#614385] py-6 text-white'>
            <h3 className='font-bold text-2xl'>
              Affordable Website development
            </h3>
            <p className='mt-2 font-extrabold text-5xl'>$79</p>
            <p className='mt-2 text-lg'>One-time fee. No hidden charges.</p>
          </div>

          <div className='p-8'>
            <ul className='space-y-4 text-left'>
              {[
                'Complete Website Development',
                'Free Domain Name',
                '20GB SSD Hosting',
                'Free SSL Certificate',
                'Backups Twice a Week',
                'cPanel Access',
                '30 Email Accounts',
                '50 MySQL Databases',
                '30 Subdomains',
                '4 Pages (Home, Contact, About, Blog)',
                'Essential Plugins Included',
                'Wordfence Security Setup',
                'Form Protection (reCAPTCHA/Turnstile)',
                'Speed & Image Optimization',
                'Domain, Hosting & DNS Setup',
                'SMTP for Better Email Deliverability',
              ].map((feature, index) => (
                <li
                  key={index}
                  className='flex items-center gap-3 text-zinc-800 dark:text-zinc-200'>
                  <FaCheck className='text-[#614385] text-lg' />
                  {feature}
                </li>
              ))}
            </ul>

            <div className='pt-10'>
              <Checkout
                productId={productId}
                paymentMode='payment'
                quantity={1}
                className='w-full'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingTable;
