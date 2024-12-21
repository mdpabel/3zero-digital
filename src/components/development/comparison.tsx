import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { MdCheck, MdClose } from 'react-icons/md';

const with3ZeroItems = [
  'Virtually Zero Vulnerability',
  'Virtually Zero Downtime',
  'Virtually Zero Errors',
  'Optimized for performance',
  'SEO-friendly structure',
  'Easy-to-use editor',
  'Free 1 year security maintenance',
  'Budget-friendly pricing',
  'No hidden fees',
];

const without3ZeroItems = [
  'Frequent vulnerabilities',
  'Regular downtime',
  'Recurring errors',
  'Suboptimal performance',
  'Poor SEO structure',
  'Complex or outdated editor',
  'No security maintenance included',
  'High and unpredictable pricing',
  'Hidden fees and charges',
];

const Comparison = () => {
  return (
    <div className='mx-auto my-10 p-4 max-w-6xl'>
      <div className='mb-8 text-center'>
        <h3 className='font-bold text-2xl'>Why Choose 3 Zero Digital?</h3>
      </div>

      <div className='gap-8 grid grid-cols-1 md:grid-cols-2'>
        {/* Card 1: With 3Zero */}
        <div className='bg-gray-50 dark:bg-gray-950 shadow-lg p-6 border rounded-lg'>
          <h4 className='pb-5 font-semibold text-2xl text-black text-center dark:text-white'>
            Websites with 3 Zero
          </h4>
          <ul className='pl-8 text-gray-700 list-none'>
            {with3ZeroItems.map((item, index) => (
              <li key={index} className='flex items-center mb-2'>
                <MdCheck className='border-green-600 mr-2 border text-green-600' />{' '}
                <span className='text-black dark:text-white'>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Card 2: Without 3Zero */}
        <div className='bg-gray-50 dark:bg-gray-950 shadow-lg p-6 border rounded-lg'>
          <h4 className='pb-5 font-semibold text-2xl text-black text-center dark:text-white'>
            Websites without 3 Zero
          </h4>
          <ul className='pl-8 text-gray-700 list-none'>
            {without3ZeroItems.map((item, index) => (
              <li key={index} className='flex items-center mb-2'>
                <MdClose className='mr-2 border border-red-600 text-red-600' />{' '}
                <span className='text-black dark:text-white'>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
