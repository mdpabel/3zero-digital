import { getServiceMetadata } from '@/app/seo';
import { getProduct } from '@/lib/product/get-product';
import Hero from '@/components/common/Hero';
import PricingTable from '../pricing-table';
import { generateSchemaMarkup } from '@/app/schema-markup-generator';
import Script from 'next/script';

const slug = 'http-500-internal-server-error';

export const metadata = getServiceMetadata(slug);

export default async function Fix500ErrorService() {
  const { origPrice, price, productId } = await getProduct(slug);

  const jsonLd = generateSchemaMarkup(slug);

  return (
    <div className='flex flex-col justify-center items-center p-6 min-h-[100dvh]'>
      <Hero
        description='Is your website showing 500 errors? Our professional service will quickly diagnose and fix the issues, ensuring your website remains reliable and operational.'
        headline='Fix 500 Errors Swiftly'
        subHeadline='Ensure your site stays online and operational with expert fixes.'
      />

      <div className='p-8 w-full max-w-5xl'>
        <PricingTable
          origPrice={origPrice}
          price={price}
          productId={productId}
        />

        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 mt-12'>
          <div className='bg-gray-300 dark:bg-gray-900 shadow-xl p-6 rounded-lg'>
            <h3 className='mb-4 font-semibold text-xl text-zinc-800 dark:text-zinc-200'>
              What’s Included
            </h3>
            <ul className='space-y-4 text-zinc-600 dark:text-zinc-400'>
              <li className='flex items-start'>
                <svg
                  className='mr-3 w-6 h-6 text-green-500'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 13l4 4L19 7'></path>
                </svg>
                Diagnosis of server issues causing 500 errors.
              </li>
              <li className='flex items-start'>
                <svg
                  className='mr-3 w-6 h-6 text-green-500'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 13l4 4L19 7'></path>
                </svg>
                Fixes to server configurations and code issues.
              </li>
              <li className='flex items-start'>
                <svg
                  className='mr-3 w-6 h-6 text-green-500'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M5 13l4 4L19 7'></path>
                </svg>
                Post-fix monitoring to ensure stability.
              </li>
            </ul>
          </div>

          <div className='flex justify-center items-center bg-gray-300 dark:bg-gray-900 shadow-xl p-6 rounded-lg'>
            <div>
              <h3 className='mb-4 font-bold text-2xl text-center text-zinc-800 dark:text-zinc-200'>
                Why Choose Us?
              </h3>
              <p className='text-center text-zinc-600 dark:text-zinc-400'>
                We specialize in quickly diagnosing and resolving 500 server
                errors, ensuring your site remains online and fully functional.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
