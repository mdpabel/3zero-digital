import React from 'react';
import { Metadata } from 'next';
import Checklist from './client-component';
import Services from '@/components/home/services';
import ComponentWrapper from '@/components/common/component-wrapper';

// Define metadata for the page
export const metadata: Metadata = {
  title: 'WordPress Security Checklist',
  description:
    'A comprehensive checklist to ensure your WordPress website is secure and optimized.',
  keywords: ['WordPress', 'Security', 'Checklist', 'WordPress Security'],
};

const Page = () => {
  return (
    <ComponentWrapper className='py-10'>
      <div className='mx-auto max-w-3xl'>
        {/* Main Title for the page */}
        <h1 className='mb-6 font-bold text-4xl text-center'>
          WordPress Security Checklist: Essential Steps for Securing Your
          Website
        </h1>

        {/* Subtitle with more information */}
        <p className='mb-8 text-lg text-center'>
          Follow this comprehensive checklist to improve the security and
          performance of your WordPress site. By following these best practices,
          you’ll ensure that your website is secure, stable, and well-optimized
          for the future.
        </p>
      </div>

      {/* The checklist component */}
      <Checklist />

      <Services />
    </ComponentWrapper>
  );
};

export default Page;
