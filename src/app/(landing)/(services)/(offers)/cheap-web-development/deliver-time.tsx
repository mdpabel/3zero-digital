import React from 'react';
import { FaClock } from 'react-icons/fa';

const DeliveryTime = () => {
  const deliveryDetails = [
    {
      title: 'cPanel, Domain, Hosting',
      description: 'Delivered within 24 hours after purchase.',
      time: '24 Hours',
    },
    {
      title: 'Template Installation',
      description: 'Installed within 48 hours after purchase.',
      time: '48 Hours',
    },
    {
      title: 'Template Editing',
      description:
        'Edited within 24-48 hours after receiving the content from the customer.',
      time: '24-48 Hours',
    },
  ];

  return (
    <div className='px-6 py-16 text-center'>
      <h2 className='mb-6 font-bold text-4xl text-zinc-800 dark:text-zinc-200'>
        ⏱ Delivery Timeline
      </h2>
      <p className='mb-8 text-gray-600 text-lg dark:text-gray-400'>
        We ensure a swift and reliable delivery process for all your needs.
      </p>
      <div className='gap-6 grid grid-cols-1 sm:grid-cols-3 mx-auto max-w-5xl'>
        {deliveryDetails.map((item, index) => (
          <div
            key={index}
            className='bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl p-6 rounded-lg transition'>
            <div className='flex flex-col items-center'>
              <FaClock className='text-[#614385] text-3xl' />
              <h3 className='mt-4 font-semibold text-xl text-zinc-800 dark:text-zinc-200'>
                {item.title}
              </h3>
              <p className='mt-2 text-center text-gray-600 text-sm dark:text-gray-400'>
                {item.description}
              </p>
              <span className='mt-4 font-bold text-[#614385] text-lg'>
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeliveryTime;
