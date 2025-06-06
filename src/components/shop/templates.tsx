import React, { Suspense } from 'react';
import prisma from '@/prisma/db';
import { FaCartShopping } from 'react-icons/fa6';
import Link from 'next/link';
import CardImage from './images';
import { Button } from '../ui/button';
import TemplatePagination from './pagination';
import CardBorder from '../common/card-border';
import TemplateCategory from './template-category';
import Checkout from '@/components/payment/checkout';
import PlaceOrder from '../home/place-order';
import ComponentWrapper from '../common/component-wrapper';

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

  const totalTemplates = await prisma.template.count({
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
  });

  console.log(templates[0]);

  return (
    <ComponentWrapper className='relative py-10 w-full'>
      {/* Header Section */}
      <div className='mx-auto mb-10 max-w-4xl text-center'>
        <h2 className='font-bold text-4xl'>{title}</h2>
        <p className='mt-2 text-lg'>{subTitle}</p>
      </div>

      {/* Categories Section */}

      {filterOptions && <TemplateCategory />}

      {/* Product Cards Section */}
      {templates.length > 0 ? (
        <section className='mb-10'>
          {featured && (
            <h2 className='mb-6 font-semibold text-2xl'>Featured Templates</h2>
          )}
          <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {templates.map((product, index) => (
              <div key={index}>
                <div className='bg-white dark:bg-gray-900 shadow-md border border-slate-300 dark:border-slate-700 rounded-lg'>
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
                        <span className='font-bold text-[#614586] text-xl'>
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
                        <div>
                          <PlaceOrder
                            productId={product.id}
                            className='bg-gray-100 dark:bg-gray-800 bg-gradient-to-tr from-transparent to-transparent px-4 py-2 rounded-full'>
                            <FaCartShopping />
                          </PlaceOrder>
                        </div>
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
        <div className='flex justify-center'>
          <Button asChild>
            <Link href='/shop'>View All Templates</Link>
          </Button>
        </div>
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
    </ComponentWrapper>
  );
};

export default Templates;
