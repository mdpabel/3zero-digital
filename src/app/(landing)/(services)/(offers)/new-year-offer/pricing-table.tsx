import React from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';

const PricingTable = () => {
  const plans = [
    {
      name: 'Free Plan',
      price: 'Free',
      features: {
        'cPanel Access': false,
        'Domain Name': false,
        'Free SSL': true,
        'Email Accounts': true,
        '1 Template Installation': false,
        'Website Templates': true,
        '1GB Storage': true,
        'WordPress Admin Access': true,
      },
    },
    {
      name: '$10 Plan',
      price: '$10',
      features: {
        'cPanel Access': true,
        'Domain Name': true,
        'Free SSL': true,
        'Email Accounts': true,
        '1 Template Installation': true,
        'Website Templates': true,
        '1GB Storage': true,
        'WordPress Admin Access': true,
      },
    },
  ];

  const prioritizedFeatures = [
    'cPanel Access',
    'Domain Name',
    'Free SSL',
    'Email Accounts',
    '1 Template Installation',
    'Website Templates',
    '1GB Storage',
    'WordPress Admin Access',
  ];

  return (
    <div id='pricing' className='bg-gray-50 dark:bg-gray-900 py-16 text-center'>
      <h2 className='mb-6 font-bold text-4xl text-zinc-800 dark:text-zinc-200'>
        🚀 Choose the Perfect Plan for You
      </h2>
      <p className='mb-8 text-gray-600 text-xl dark:text-gray-400'>
        Affordable options to kickstart your website journey.
      </p>

      <div className='gap-8 grid grid-cols-1 md:grid-cols-2 mx-auto max-w-5xl'>
        {plans.map((plan, index) => (
          <div
            key={index}
            className='bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden'>
            <div className='bg-[#614385] py-6 text-white'>
              <h3 className='font-bold text-2xl'>{plan.name}</h3>
              <p className='mt-2 font-extrabold text-5xl'>{plan.price}</p>
              <p className='mt-2 text-lg'>
                {plan.price === 'Free'
                  ? 'No cost. Just get started.'
                  : 'One-time fee. No hidden charges.'}
              </p>
            </div>

            <div className='flex flex-col justify-between p-8'>
              <ul className='space-y-4 text-left'>
                {prioritizedFeatures.map((feature, idx) => (
                  <li
                    key={idx}
                    className='flex items-center gap-3 text-zinc-800 dark:text-zinc-200'>
                    {plan.features[feature] ? (
                      <FaCheck className='text-[#614385] text-lg' />
                    ) : (
                      <FaTimes className='text-lg text-red-500' />
                    )}
                    {feature}
                  </li>
                ))}
              </ul>

              <button className='bg-[#614385] hover:bg-[#502e70] mt-8 py-3 rounded-lg w-full font-bold text-white transition'>
                Get Started for {plan.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;
