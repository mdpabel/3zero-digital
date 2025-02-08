import React, { Suspense } from 'react';
import prisma from '@/prisma/db';
import { FaCartShopping } from 'react-icons/fa6';
import Link from 'next/link';
import CardImage from './images';
import { Button } from '../ui/button';
import TemplatePagination from './pagination';
import CardBorder from '../common/card-border';
import TemplateCategory from './template-category';

const Templates = async ({
  featured = false,
  filterOptions = true,
  limit = 12,
  currentPage = 1,
  sortBy,
  category,
  title = 'Explore Premium Templates for Your Business',
  subTitle = `Browse our collection of professionally designed templates, tailored
          to meet the needs of your business. Get started today and elevate your
          online presence.`,
}: {
  featured?: boolean;
  filterOptions?: boolean;
  title?: string;
  subTitle?: string;
  limit?: number;
  sortBy?: string;
  category?: string;
  currentPage?: number;
}) => {
  const page = Number(currentPage) || 1; // Default to 1 if undefined or NaN
  const perPage = Number(limit) || 12; // Default to 12 if undefined or NaN
  const skip = Math.max((page - 1) * perPage, 0); // Ensure skip is always non-negative

  const templates = await prisma.template.findMany({
    where: {
      deleted: false,
      categories: {
        some: {
          category: {
            slug: category,
          },
        },
      },
    },
    take: perPage,
    skip,
    orderBy: {
      price: 'desc',
    },
  });

  const totalTemplates = await prisma.template.count();

  return (
    <div className='relative mx-auto px-4 py-10 w-full max-w-6xl container'>
      {/* Header Section */}
      <div className='mb-10 text-center'>
        <h2 className='font-bold text-4xl'>{title}</h2>
        <p className='mt-2 text-lg'>{subTitle}</p>
      </div>

      {/* Categories Section */}

      {filterOptions && <TemplateCategory />}

      {/* Product Cards Section */}
      {templates.length > 0 ? (
        <section className='mb-10'>
          <h2 className='mb-6 font-semibold text-2xl'>Featured Templates</h2>
          <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {templates.map((product, index) => (
              <div key={index}>
                <div className='border-slate-300 dark:border-slate-700 bg-white dark:bg-gray-900 shadow-md border rounded-lg'>
                  <CardBorder />
                  <div className='p-6'>
                    {/* Image Slider */}
                    <Link href={`/shop/${product.slug}`}>
                      <CardImage images={product.images} />
                    </Link>
                    {/* Product Info */}
                    <h3 className='mb-2 font-bold text-lg'>
                      <Link href={`/shop/${product.slug}`}>{product.name}</Link>
                    </h3>
                    <div className='flex justify-between items-center'>
                      <div className='flex flex-col'>
                        <span className='line-through'>${product.price}</span>
                        <span className='font-bold text-pink-500 text-xl'>
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
                        <form action=''>
                          <button className='bg-gray-100 dark:bg-gray-800 shadow-md px-4 py-2 rounded-full'>
                            <span role='img' aria-label='cart'>
                              <FaCartShopping />
                            </span>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <div>No template found</div>
      )}
      {featured && (
        <Button asChild>
          <Link href='/shop'>View All Templates</Link>
        </Button>
      )}

      {!featured && (
        <Suspense>
          <TemplatePagination
            totalTemplates={totalTemplates}
            pageSize={limit}
            currPage={currentPage}
          />
        </Suspense>
      )}
    </div>
  );
};

export default Templates;
