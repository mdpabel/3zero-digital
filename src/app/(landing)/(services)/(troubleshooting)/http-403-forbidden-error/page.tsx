import { getServiceMetadata } from '@/app/seo';
import { getProduct } from '@/lib/product/get-product';
import Link from 'next/link';
import { AiOutlineCheck } from 'react-icons/ai';
import PricingTable from '../pricing-table';
import Hero from '@/components/common/Hero';

export const metadata = getServiceMetadata('http-403-forbidden-error');

export default async function Fix403ErrorService() {
  const { origPrice, price, productId } = await getProduct(
    'http-403-forbidden-error',
  );

  return (
    <div className='flex flex-col justify-center items-center p-6 min-h-[100dvh]'>
      <Hero
        description='Say goodbye to frustrating 403 Forbidden errors with our expert resolution service.'
        headline='Fix 403 Forbidden Errors Quickly'
        subHeadline='Ensure your website remains accessible, secure, and error-free.'
      />
      <div className='p-8 w-full max-w-5xl'>
        <PricingTable
          origPrice={origPrice}
          price={price}
          productId={productId}
        />

        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 mt-12'>
          <div className='dark:bg-gray-900 shadow-md p-6'>
            <h3 className='mb-4 font-semibold text-xl text-zinc-800 dark:text-zinc-200'>
              What’s Included
            </h3>
            <ul className='space-y-4 text-zinc-600 dark:text-zinc-400'>
              <li className='flex items-start'>
                <AiOutlineCheck className='mr-3 w-6 h-6 text-green-500' />
                Diagnosis of permission issues causing 403 errors.
              </li>
              <li className='flex items-start'>
                <AiOutlineCheck className='mr-3 w-6 h-6 text-green-500' />
                Correction of file and directory permissions.
              </li>
              <li className='flex items-start'>
                <AiOutlineCheck className='mr-3 w-6 h-6 text-green-500' />
                Server configuration adjustments for access control.
              </li>
            </ul>
          </div>

          <div className='flex justify-center items-center dark:bg-gray-900 p-6shadow-xl shadow-md p-6 rounded-lg'>
            <div>
              <h3 className='mb-4 font-bold text-2xl text-center text-zinc-800 dark:text-zinc-200'>
                Why Choose Us?
              </h3>
              <p className='text-center text-zinc-600 dark:text-zinc-400'>
                Our team has the expertise to quickly identify and resolve 403
                Forbidden errors, ensuring your website remains accessible and
                secure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
