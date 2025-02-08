import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import Link from 'next/link';
import { Button } from '../../../components/ui/button';
import CardBorder from '../../../components/common/card-border';

const TemplatesSkeleton = ({
  title = 'Explore Premium Templates for Your Business',
  subTitle = `Browse our collection of professionally designed templates, tailored
          to meet the needs of your business. Get started today and elevate your
          online presence.`,
}) => {
  return (
    <div className='relative mx-auto px-4 py-10 w-full max-w-6xl container'>
      {/* Header Section */}
      <div className='mb-10 text-center'>
        <h2 className='font-bold text-4xl'>{title}</h2>
        <p className='mt-2 text-lg'>{subTitle}</p>
      </div>

      {/* Skeleton Product Cards Section */}
      <section className='mb-10'>
        <h2 className='mb-6 font-semibold text-2xl'>Featured Products</h2>
        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className='border-slate-300 dark:border-slate-700 bg-white dark:bg-gray-900 shadow-md border rounded-lg animate-pulse'>
              <CardBorder />
              <div className='p-6'>
                {/* Placeholder for Image */}
                <div className='bg-gray-300 dark:bg-gray-700 rounded-md w-full h-48'></div>

                {/* Placeholder for Product Info */}
                <div className='bg-gray-300 dark:bg-gray-700 mt-4 rounded-md w-3/4 h-6'></div>
                <div className='bg-gray-300 dark:bg-gray-700 mt-2 rounded-md w-1/2 h-4'></div>

                {/* Placeholder for Price */}
                <div className='flex justify-between items-center mt-4'>
                  <div className='flex flex-col'>
                    <div className='bg-gray-300 dark:bg-gray-700 rounded-md w-16 h-4'></div>
                    <div className='bg-gray-400 dark:bg-gray-600 mt-1 rounded-md w-20 h-6'></div>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <div className='bg-gray-400 dark:bg-gray-600 rounded-md w-24 h-8'></div>
                    <div className='flex justify-center items-center bg-gray-300 dark:bg-gray-700 rounded-full w-10 h-10'>
                      <FaCartShopping className='text-gray-500' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Button asChild>
        <Link href='/shop'>View All Templates</Link>
      </Button>
    </div>
  );
};

export default TemplatesSkeleton;
