import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const AffordablePricing = () => {
  const reasons = [
    {
      title: 'Affordable Domain Prices',
      description:
        'We source domains from trusted providers at competitive rates, ensuring affordability without compromising quality.',
    },
    {
      title: 'Cost-Effective Hosting',
      description:
        'Our hosting solutions are selected for their reliability and cost-effectiveness, tailored to meet your needs.',
    },
    {
      title: 'In-House Template Designs',
      description:
        'All website templates are crafted by our dedicated design team, eliminating the need for third-party services.',
    },
  ];

  return (
    <div className='px-6 py-16 text-center'>
      <h2 className='mb-6 font-bold text-4xl'>
        💡 How We Keep Prices Affordable
      </h2>
      <p className='mb-8 text-lg'>
        Transparency is key. Here’s how we provide quality services at an
        unbeatable price.
      </p>
      <div className='gap-6 grid grid-cols-1 sm:grid-cols-3 mx-auto max-w-5xl'>
        {reasons.map((reason, index) => (
          <div
            key={index}
            className='bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl p-6 rounded-lg transition'>
            <div className='flex flex-col items-center'>
              <FaCheckCircle className='text-[#614385] text-3xl' />
              <h3 className='mt-4 font-semibold text-xl'>{reason.title}</h3>
              <p className='mt-2 text-center text-sm'>{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AffordablePricing;
