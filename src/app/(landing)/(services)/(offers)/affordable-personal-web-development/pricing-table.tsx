import Checkout from '@/components/payment/checkout';
import { getProduct } from '@/lib/product/get-product';
import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

type Features = {
  'cPanel Access': boolean;
  'Domain Name (.xyz)': boolean;
  'Domain Name (.com)': boolean;
  'Free SSL': boolean;
  'Email Accounts': boolean;
  '1 Template Installation': boolean;
  'Website Templates': boolean;
  '1GB Storage': boolean;
  'WordPress Admin Access': boolean;
};

const plans = [
  {
    name: '$7.00 Plan',
    productId: '',
    price: 7.0, // Store price as a number for calculations
    features: {
      'cPanel Access': true,
      'Domain Name (.xyz)': true,
      'Domain Name (.com)': false,
      'Free SSL': true,
      'Email Accounts': true,
      '1 Template Installation': true,
      'Website Templates': true,
      '1GB Storage': true,
      'WordPress Admin Access': true,
    },
  },
  {
    name: '$12.00 Plan',
    productId: '',
    price: 12.0,
    features: {
      'cPanel Access': true,
      'Domain Name (.xyz)': false,
      'Domain Name (.com)': true,
      'Free SSL': true,
      'Email Accounts': true,
      '1 Template Installation': true,
      'Website Templates': true,
      '1GB Storage': true,
      'WordPress Admin Access': true,
    },
  },
];

const prioritizedFeatures: (keyof Features)[] = [
  'cPanel Access',
  'Domain Name (.xyz)',
  'Domain Name (.com)',
  'Free SSL',
  'Email Accounts',
  '1 Template Installation',
  'Website Templates',
  '1GB Storage',
  'WordPress Admin Access',
];

const PricingTable = async () => {
  const premium = await getProduct('affordable-personal-website-development');
  plans[1].productId = premium.productId;

  const basic = await getProduct(
    'affordable-personal-website-development-lite',
  );
  plans[0].productId = basic.productId;

  return (
    <div id='pricing' className='bg-gray-50 dark:bg-gray-900 py-16 text-center'>
      <h2 className='mb-6 font-bold text-4xl'>
        🚀 Choose the Perfect Plan for You
      </h2>
      <p className='mb-8 text-xl'>
        Affordable options to kickstart your website journey.
      </p>

      <div className='gap-8 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-5xl'>
        {plans.map((plan, index) => (
          <div
            key={index}
            className='bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden'>
            <div className='bg-[#614385] py-6 text-white'>
              <h3 className='font-bold text-2xl'>{plan.name}</h3>
              <p className='mt-2 font-extrabold text-5xl'>
                ${plan.price.toFixed(2)}
              </p>
              <p className='mt-2 text-lg'>
                {plan.price === 7
                  ? 'Affordable plan to get started.'
                  : 'One-time fee. No hidden charges.'}
              </p>
              <a
                href={`https://www.google.com/search?q=${plan.price}+USD+to+BDT`}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-2 text-sm hover:text-gray-200 underline'>
                Convert to BDT
              </a>
            </div>

            <div className='flex flex-col justify-between p-8'>
              <ul className='space-y-4 text-left'>
                {prioritizedFeatures.map((feature, idx) => (
                  <li key={idx} className='flex items-center gap-3'>
                    {plan.features[feature] ? (
                      <FaCheck className='text-[#614385] text-lg' />
                    ) : (
                      <FaTimes className='text-lg text-red-500' />
                    )}
                    {feature}
                  </li>
                ))}
              </ul>

              <div className='pt-10 w-full'>
                <Checkout
                  productId={plan.productId}
                  paymentMode='payment'
                  quantity={1}
                  className='w-full'
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
