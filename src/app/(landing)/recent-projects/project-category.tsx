import prisma from '@/prisma/db';
import Link from 'next/link';
import React from 'react';

const ProjectCategory = async () => {
  const categories = await prisma.templateCategory.findMany({
    include: {
      templates: true,
    },
  });

  return (
    <section className='mb-10'>
      <h2 className='mb-4 font-semibold text-2xl'>Categories</h2>
      <div className='flex flex-wrap gap-4'>
        {categories.map((category) => (
          <Link
            href={`/shop/category/${category.slug}`}
            key={category.id}
            className='flex items-center gap-1 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-md px-4 py-2 rounded-lg text-gray-700 dark:text-gray-200'>
            <span className='text-base'>{category.name}</span>{' '}
            <span className='flex justify-center items-center bg-[#614586] dark:bg-white rounded-full w-6 h-6 font-bold text-white dark:text-[#614586] text-sm'>
              {category.templates.length}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProjectCategory;
