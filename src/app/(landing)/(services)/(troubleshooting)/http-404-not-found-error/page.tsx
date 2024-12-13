import { getServiceMetadata } from '@/app/seo';
import { getProduct } from '@/lib/product/get-product';
import Hero from '@/components/common/Hero';
import PricingTable from '../pricing-table';

export const metadata = getServiceMetadata('http-404-not-found-error');

export default async function Fix404ErrorService() {
  const { origPrice, price, productId } = await getProduct(
    'http-404-not-found-error',
  );

  return (
    <div className='flex flex-col justify-center items-center p-6 min-h-[100dvh]'>
      <Hero
        description='Ensure your website provides a seamless experience by fixing broken links and 404 errors.'
        headline='Fix 404 Errors Swiftly'
        subHeadline='Identify and resolve broken links to keep your site user-friendly.'
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
                Identification of broken links across your site.
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
                Redirect setup to guide users back to the right pages.
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
                Ongoing monitoring to prevent future 404 errors.
              </li>
            </ul>
          </div>

          <div className='flex justify-center items-center bg-gray-300 dark:bg-gray-900 shadow-xl p-6 rounded-lg'>
            <div>
              <h3 className='mb-4 font-bold text-2xl text-center text-zinc-800 dark:text-zinc-200'>
                Why Choose Us?
              </h3>
              <p className='text-center text-zinc-600 dark:text-zinc-400'>
                Our team specializes in identifying and fixing 404 errors
                quickly, ensuring your website remains functional and your users
                stay happy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
