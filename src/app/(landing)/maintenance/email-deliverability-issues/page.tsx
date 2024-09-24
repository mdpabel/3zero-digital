import React from 'react';
import EmailDeliverabilityIssueCheckoutButton from './email-deliverability-issues-checkout-button';
import { getProduct } from '@/lib/swell/product';
import { formatCurrency } from '@/lib/utils';

const EmailDeliverabilityIssues = async () => {
  const product = await getProduct('Email Deliverability');
  const price = product?.price!;
  const origPrice = product?.origPrice!;
  const productId = product?.id!;

  const issues = [
    'Blacklisted IP addresses',
    'Spammy content or keywords',
    'Incorrect DNS settings (SPF, DKIM, DMARC)',
    'Poor sender reputation',
    'Lack of email authentication protocols',
    'High bounce rates',
    'Low engagement rates (open/click-through rates)',
    'Email content flagged as suspicious',
  ];

  return (
    <div className='bg-white dark:bg-[#0B1120] shadow-lg mx-auto p-10 rounded-lg max-w-6xl'>
      <h2 className='mb-8 font-bold text-3xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
        Email Deliverability Solutions
      </h2>

      <p className='mb-10 text-center text-lg text-zinc-600 md:text-xl dark:text-zinc-400'>
        Resolve your email deliverability challenges with our expert services.
        Identify and fix issues that prevent your emails from reaching the
        inbox.
      </p>

      <div className='flex md:flex-row flex-col justify-between items-center my-12'>
        <div className='mb-8 md:mb-0 text-center md:text-left'>
          <h3 className='font-bold text-2xl text-zinc-800 dark:text-zinc-200'>
            Complete Email Audit Service
          </h3>
          <p className='text-lg text-zinc-600 dark:text-zinc-400'>
            Starting at just{' '}
            {origPrice > price && (
              <span className='mr-2 text-zinc-500 dark:text-zinc-400 line-through'>
                {formatCurrency({ amount: origPrice })}
              </span>
            )}
            <span className='font-bold text-zinc-800 dark:text-zinc-200'>
              {formatCurrency({ amount: price })}
            </span>
          </p>
        </div>
        <EmailDeliverabilityIssueCheckoutButton />
      </div>

      <div className='gap-8 grid grid-cols-1 md:grid-cols-2'>
        {issues.map((issue, index) => (
          <div
            key={index}
            className='flex items-start border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-md hover:shadow-lg p-6 border rounded-lg transition-shadow'>
            <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-r from-[#614385] to-[#516395] mr-4 rounded-full w-12 h-12 text-white'>
              <span className='font-semibold text-lg'>{index + 1}</span>
            </div>
            <div>
              <h3 className='font-semibold text-lg text-zinc-800 dark:text-zinc-200'>
                {issue}
              </h3>
              <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                {index % 2 === 0
                  ? 'Our experts will identify this issue and provide targeted solutions to improve your email deliverability.'
                  : 'We’ll help you mitigate this problem to ensure your emails land in the inbox, not the spam folder.'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailDeliverabilityIssues;
