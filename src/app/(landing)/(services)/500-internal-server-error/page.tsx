import { getServiceMetadata } from '@/app/seo';
import Link from 'next/link';

export const dynamic = 'force-static';

export const metadata = getServiceMetadata('/500');

export default function Fix500ErrorService() {
  return (
    <div className='flex flex-col justify-center items-center bg-gradient-to-b from-white dark:from-gray-900 to-gray-100 dark:to-gray-800 p-6 min-h-screen'>
      <div className='shadow-lg p-8 rounded-lg w-full max-w-4xl'>
        <h1 className='mb-8 font-bold text-4xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
          Fix 500 Errors
        </h1>

        <p className='mb-8 text-center text-lg text-zinc-600 md:text-xl dark:text-zinc-400'>
          Is your website showing 500 errors? Our professional service will
          quickly diagnose and fix the issues, ensuring your website remains
          reliable and operational.
        </p>

        <div className='flex md:flex-row flex-col justify-between items-center bg-gradient-to-r from-[#614385] to-[#516395] shadow-md p-6 rounded-lg text-white'>
          <div className='flex-1 mb-6 md:mb-0 text-center md:text-left'>
            <h2 className='font-bold text-3xl'>500 Error Fix</h2>
            <p className='mt-2 text-lg'>Only $30</p>
          </div>
          <Link
            href='/checkout'
            className='bg-white shadow-lg px-8 py-3 rounded-lg font-semibold text-[#614385] transform transition-transform hover:scale-105'>
            Purchase Now
          </Link>
        </div>

        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 mt-12'>
          <div className='bg-gray-50 dark:bg-gray-800 shadow-md p-6 rounded-lg'>
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

          <div className='flex justify-center items-center bg-gray-50 dark:bg-gray-800 shadow-md p-6 rounded-lg'>
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
    </div>
  );
}
