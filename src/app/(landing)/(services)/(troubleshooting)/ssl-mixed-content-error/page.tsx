import { getServiceMetadata } from '@/app/seo';
import { getProduct } from '@/lib/product/get-product';
import Hero from '@/components/common/Hero';
import PricingTable from '../pricing-table';
import { generateSchemaMarkup } from '@/app/schema-markup-generator';
import Script from 'next/script';

const slug = 'ssl-mixed-content-error';

export const metadata = getServiceMetadata(slug);

export default async function FixMixedContentErrorService() {
  const { origPrice, price, productId } = await getProduct(slug);

  const jsonLd = generateSchemaMarkup(slug);

  return (
    <div className='flex flex-col justify-center items-center p-6 min-h-[100dvh]'>
      <Hero
        description="Are mixed content errors affecting your website's security and performance? Let us resolve these issues to ensure a fully secure and compliant website."
        headline='Fix Mixed Content Errors'
        subHeadline='Ensure a secure, HTTPS-compliant website with our expert solutions.'
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
                Identification of mixed content issues on your website.
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
                Correction of insecure content links (HTTP to HTTPS).
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
                Verification of website security and HTTPS status.
              </li>
            </ul>
          </div>

          <div className='flex justify-center items-center bg-gray-300 dark:bg-gray-900 shadow-xl p-6 rounded-lg'>
            <div>
              <h3 className='mb-4 font-bold text-2xl text-center text-zinc-800 dark:text-zinc-200'>
                Why Choose Us?
              </h3>
              <p className='text-center text-zinc-600 dark:text-zinc-400'>
                Our experts will ensure that your website is fully secured with
                HTTPS, eliminating mixed content errors that could compromise
                your site’s performance and security.
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
