import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

const BlogPageSkeleton = () => {
  return (
    <article className='space-y-4 mx-auto px-4 py-8 max-w-3xl'>
      {/* Date */}
      <div className='bg-gray-300 dark:bg-gray-700 rounded-md w-40 h-4'></div>

      {/* Title */}
      <div className='bg-gray-300 dark:bg-gray-700 rounded-md w-3/4 h-8'></div>

      {/** Back to blog posts ------- Tags */}
      <div className='grid lg:grid-cols-2 w-full'>
        <div>
          <div className='flex items-center gap-1 mr-3 font-medium text-[#614385] text-sm transition'>
            <ArrowLeft className='text-gray-300 dark:text-gray-700' />
            <div className='bg-gray-300 dark:bg-gray-700 rounded-md w-32 h-4'></div>
          </div>
        </div>
        <div className='flex flex-wrap justify-end'>
          <div className='bg-gray-300 dark:bg-gray-700 rounded-md w-24 h-4'></div>
        </div>
      </div>

      {/* Content */}
      <div className='bg-gray-300 dark:bg-gray-700 rounded-md w-full h-4'></div>
      <div className='bg-gray-300 dark:bg-gray-700 mt-2 rounded-md w-5/6 h-6'></div>
      <div className='bg-gray-300 dark:bg-gray-700 mt-2 rounded-md w-3/4 h-6'></div>
      <div className='bg-gray-300 dark:bg-gray-700 mt-2 rounded-md w-5/6 h-6'></div>
      <div className='bg-gray-300 dark:bg-gray-700 mt-2 rounded-md w-full h-6'></div>

      {/* Comments Section */}
      <div className='mt-10'>
        <div className='bg-gray-300 dark:bg-gray-700 rounded-md w-32 h-4'></div>
        <div className='bg-gray-300 dark:bg-gray-700 mt-4 rounded-md w-full h-32'></div>
      </div>
    </article>
  );
};

export default BlogPageSkeleton;
