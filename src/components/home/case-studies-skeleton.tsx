'use client';

import { FaShieldAlt, FaClock } from 'react-icons/fa';
import { Button } from '../ui/button';

const CaseStudyCarouselSkeleton = () => {
  return (
    <div className='bg-gray-50 dark:bg-[#0B1120] px-6 md:px-16 py-12 animate-pulse'>
      {/* Title Section */}
      <div className='mb-8'>
        <div className='bg-gray-200 dark:bg-gray-700 mb-4 rounded w-48 h-6'></div>
        <div className='bg-gray-200 dark:bg-gray-700 rounded w-64 h-4'></div>
      </div>

      {/* Skeleton Content */}
      <div className='flex flex-col items-center gap-8'>
        <div className='relative w-full max-w-5xl'>
          <div className='flex md:flex-row flex-col items-center gap-8 bg-white dark:bg-gray-900 shadow-lg p-8 rounded-lg w-full'>
            {/* Skeleton Images */}
            <div className='flex-1'>
              <div className='relative bg-gray-200 dark:bg-gray-700 mb-4 rounded-lg h-48'></div>
              <div className='relative bg-gray-200 dark:bg-gray-700 rounded-lg h-48'></div>
            </div>

            {/* Skeleton Details */}
            <div className='flex-1 md:px-4'>
              <div className='bg-gray-200 dark:bg-gray-700 mb-4 rounded w-40 h-6'></div>
              <div className='bg-gray-200 dark:bg-gray-700 mb-2 rounded w-full h-4'></div>
              <div className='bg-gray-200 dark:bg-gray-700 mb-4 rounded w-5/6 h-4'></div>

              <div className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <FaShieldAlt className='text-gray-400' size={24} />
                  <div className='flex flex-col gap-2'>
                    <div className='bg-gray-200 dark:bg-gray-700 rounded w-24 h-4'></div>
                    <div className='bg-gray-200 dark:bg-gray-700 rounded w-40 h-3'></div>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <FaClock className='text-gray-400' size={24} />
                  <div className='flex flex-col gap-2'>
                    <div className='bg-gray-200 dark:bg-gray-700 rounded w-24 h-4'></div>
                    <div className='bg-gray-200 dark:bg-gray-700 rounded w-40 h-3'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skeleton Controls */}
        <div className='flex justify-center items-center gap-4'>
          <div className='bg-gray-200 dark:bg-gray-700 shadow-md px-6 py-2 rounded-full w-20 h-8'></div>
          <div className='bg-gray-200 dark:bg-gray-700 shadow-md px-6 py-2 rounded-full w-20 h-8'></div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCarouselSkeleton;
