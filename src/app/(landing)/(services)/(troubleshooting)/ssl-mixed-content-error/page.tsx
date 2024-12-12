import { getServiceMetadata } from '@/app/seo';
import Link from 'next/link';

export const metadata = getServiceMetadata('ssl-mixed-content-error');

export default function FixMixedContentErrorService() {
  return (
    <div className='flex flex-col justify-center items-center p-6 min-h-[100dvh]'>
      <div className='shadow-lg p-8 rounded-lg w-full max-w-4xl'>
        <h1 className='mb-8 font-bold text-4xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
          Fix Mixed Content Errors
        </h1>

        <p className='mb-8 text-center text-lg text-zinc-600 md:text-xl dark:text-zinc-400'>
          Are mixed content errors affecting your website&apos;s security and
          performance? Let us resolve these issues to ensure a fully secure and
          compliant website.
        </p>

        <div className='flex md:flex-row flex-col justify-between items-center bg-gradient-to-r from-[#614385] to-[#516395] shadow-md p-6 rounded-lg text-white'>
          <div className='flex-1 mb-6 md:mb-0 text-center md:text-left'>
            <h2 className='font-bold text-3xl'>Mixed Content Error Fix</h2>
            <p className='mt-2 text-lg'>Only $30</p>
          </div>
          <Link
            href='/checkout'
            className='bg-white shadow-lg px-8 py-3 rounded-lg font-semibold text-[#614385] transform transition-transform hover:scale-105'>
            Purchase Now
          </Link>
        </div>

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
    </div>
  );
}