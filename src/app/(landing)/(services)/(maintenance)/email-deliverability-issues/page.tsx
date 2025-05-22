import React from 'react';
import { getProduct } from '@/lib/product/get-product';
import PricingTable from './pricing-table';

import { getServiceMetadata } from '@/app/seo';
import HeroSection from '@/components/common/hero-section';
import Quiz from '@/components/comment/quiz';
import { questions } from './data';
import Video from '@/components/common/video';
import Hero from '@/components/common/Hero';
import { generateSchemaMarkup } from '@/app/schema-markup-generator';
import Script from 'next/script';
import ComponentWrapper from '@/components/common/component-wrapper';

export const dynamic = 'force-static';

const slug = 'email-deliverability-issues';

export const metadata = getServiceMetadata(slug);

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

const EmailDeliverabilityIssues = async () => {
  const { origPrice, price, productId } = await getProduct(slug);
  const jsonLd = generateSchemaMarkup(slug);

  return (
    <ComponentWrapper>
      <Hero
        subHeadline='Ensure Your Emails Reach the Inbox, Not the Spam Folder!'
        headline='Struggling with Email Deliverability? We Have the Solution!'
        description="<strong className='text-black dark:text-white'>
    Our expert team specializes in optimizing email deliverability
  </strong>, ensuring your messages reach your audience effectively. Did you know that 53% of users abandon a site that takes more than 3 seconds to load? Similarly, emails that don't land in the inbox can cost you valuable engagement."
      />

      <Video videoId='na2iB6nBzIc' pageSlug={slug} />

      <h2 className='mt-32 mb-8 font-bold text-zinc-800 dark:text-zinc-200 text-3xl md:text-5xl text-center'>
        Email Deliverability Solutions
      </h2>

      <p className='mb-10 text-zinc-600 dark:text-zinc-400 text-lg md:text-xl text-center'>
        Resolve your email deliverability challenges with our expert services.
        Identify and fix issues that prevent your emails from reaching the
        inbox.
      </p>

      <PricingTable
        origPrice={origPrice!}
        price={price}
        productId={productId}
      />

      <div className='gap-8 grid grid-cols-1 md:grid-cols-2'>
        {issues.map((issue, index) => (
          <div
            key={index}
            className='flex items-start bg-gray-50 dark:bg-gray-800 shadow-md hover:shadow-lg p-6 border border-gray-200 dark:border-gray-900 rounded-lg transition-shadow'>
            <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-r from-[#614385] to-[#516395] mr-4 rounded-full w-12 h-12 text-white'>
              <span className='font-semibold text-lg'>{index + 1}</span>
            </div>
            <div>
              <h3 className='font-semibold text-lg'>{issue}</h3>
              <p className='mt-2 text-zinc-600 dark:text-zinc-400 text-sm'>
                {index % 2 === 0
                  ? 'Our experts will identify this issue and provide targeted solutions to improve your email deliverability.'
                  : 'We’ll help you mitigate this problem to ensure your emails land in the inbox, not the spam folder.'}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Quiz questions={questions} />

      <Script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </ComponentWrapper>
  );
};

export default EmailDeliverabilityIssues;
