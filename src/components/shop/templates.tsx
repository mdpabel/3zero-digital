import React from 'react';
import prisma from '@/prisma/db';
import { FaCartShopping } from 'react-icons/fa6';
import Link from 'next/link';
import CardImage from './images';
import { Button } from '../ui/button';

const Templates = async ({ featured = false }: { featured?: boolean }) => {
  const categories = await prisma.templateCategory.findMany();

  const products = await prisma.template.findMany({
    where: {
      deleted: false,
    },
    include: {
      images: true,
    },
  });

  return (
    <div className='relative mx-auto px-4 py-10 w-full max-w-6xl container'>
      {/* Header Section */}
      <div className='mb-10 text-center'>
        <h2 className='font-bold text-4xl text-zinc-800 dark:text-zinc-200'>
          Explore Premium Templates for Your Business
        </h2>
        <p className='mt-2 text-gray-600 text-lg dark:text-gray-400'>
          Browse our collection of professionally designed templates, tailored
          to meet the needs of your business. Get started today and elevate your
          online presence.
        </p>
      </div>

      {/* Categories Section */}
      <section className='mb-10'>
        <h2 className='mb-4 font-semibold text-2xl text-zinc-800 dark:text-zinc-200'>
          Categories
        </h2>
        <div className='flex flex-wrap gap-4'>
          {categories.map((category) => (
            <button
              key={category.id}
              className='bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 dark:bg-gray-800 shadow-md px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200'>
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Product Cards Section */}
      <section className='mb-10'>
        <h2 className='mb-6 font-semibold text-2xl text-zinc-800 dark:text-zinc-200'>
          Featured Products
        </h2>
        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {products.map((product, index) => (
            <div
              key={index}
              className='bg-white dark:bg-gray-900 shadow-md p-6 rounded-lg'>
              {/* Image Slider */}
              <CardImage images={product.images} />

              {/* Product Info */}
              <h3 className='mb-2 font-bold text-lg text-zinc-800 dark:text-zinc-200'>
                <Link href={`/shop/${product.slug}`}>{product.name}</Link>
              </h3>
              <div className='flex justify-between items-center text-gray-600 dark:text-gray-400'>
                <div className='flex flex-col'>
                  <span className='line-through'>${product.price}</span>
                  <span className='font-bold text-red-500 text-xl'>
                    ${product.salePrice}
                  </span>
                </div>
                <div className='flex items-center space-x-2'>
                  <Link
                    href={product.liveUrl}
                    target='_blank'
                    className='bg-gradient-to-r from-[#614385] to-[#516395] shadow-md px-4 py-1.5 rounded-lg font-semibold text-white'>
                    Live Preview
                  </Link>
                  <button className='bg-gray-100 dark:bg-gray-800 shadow-md px-4 py-2 rounded-full'>
                    <span role='img' aria-label='cart'>
                      <FaCartShopping />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {featured && (
        <Button asChild>
          <Link href='/shop'>View All Templates</Link>
        </Button>
      )}
    </div>
  );
};

export default Templates;
