import React from 'react';
import { cn } from '@/lib/utils';

const BlogCardSkeleton = () => {
  return (
    <article>
      <div className='space-y-2'>
        {/* Date */}
        <dl>
          <dt className='sr-only'>Published on</dt>
          <dd className='bg-gray-300 dark:bg-gray-700 rounded-md w-32 h-4'></dd>
        </dl>

        {/* Blog Content */}
        <div className='space-y-5'>
          <div className='space-y-6'>
            {/* Title and Tags */}
            <div>
              {/* Title */}
              <div className='bg-gray-300 dark:bg-gray-700 rounded-md w-64 h-8'></div>

              {/* Tags */}
              <div className='flex justify-between items-center'>
                <div className='flex flex-wrap'>
                  <div className='bg-gray-300 dark:bg-gray-700 rounded-md w-24 h-4'></div>
                  <div className='bg-gray-300 dark:bg-gray-700 mt-2 rounded-md w-24 h-4'></div>
                </div>

                {/* Author */}
                <div className='bg-gray-300 dark:bg-gray-700 rounded-md w-24 h-4'></div>
              </div>
            </div>

            {/* Description */}
            <div className='bg-gray-300 dark:bg-gray-700 rounded-md w-full h-4'></div>
            <div className='bg-gray-300 dark:bg-gray-700 mt-2 rounded-md w-3/4 h-4'></div>
          </div>

          {/* Read More */}
          <div className='bg-gray-300 dark:bg-gray-700 rounded-md w-32 h-4'></div>
        </div>
      </div>
    </article>
  );
};

const BlogListSkeleton = ({ style = 1 }: { style?: 1 | 2 }) => {
  return (
    <ul>
      {[...Array(5)].map((_, index) => (
        <li
          key={index}
          className={cn(
            'py-8',
            index !== 4 && 'border-b-neutral-400 border-b',
          )}>
          <BlogCardSkeleton />
        </li>
      ))}
    </ul>
  );
};

const BlogsSidebarSkeleton = () => {
  return (
    <aside className='max-h-screen overflow-y-auto'>
      <div>
        <h3 className='pb-4 border-b border-b-neutral-400 font-semibold text-lg'>
          Categories
        </h3>
        <ul className='flex flex-row lg:flex-col flex-wrap gap-3 py-4'>
          {[...Array(5)].map((_, index) => (
            <li key={index}>
              <div className='bg-gray-300 dark:bg-gray-700 rounded-md w-40 h-6'></div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className='pb-4 border-b border-b-neutral-400 font-semibold text-lg'>
          Tags
        </h3>
        <ul className='flex flex-row lg:flex-col flex-wrap gap-3 py-4'>
          {[...Array(5)].map((_, index) => (
            <li key={index}>
              <div className='bg-gray-300 dark:bg-gray-700 rounded-md w-40 h-6'></div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

const BlogPageSkeleton = () => {
  return (
    <div className='flex gap-10 mx-auto p-4 max-w-6xl'>
      {/* Sidebar Section */}
      <div className='w-full lg:w-1/4'>
        <BlogsSidebarSkeleton />
      </div>
      {/* Blog List Section */}
      <div className='w-full lg:w-3/4'>
        <BlogListSkeleton />
      </div>
    </div>
  );
};

export default BlogPageSkeleton;
