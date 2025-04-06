import { getServiceMetadata } from '@/app/seo';
import { getProduct } from '@/lib/product/get-product';
import Hero from '@/components/common/Hero';
import { generateSchemaMarkup } from '@/app/schema-markup-generator';
import Script from 'next/script';
import PricingTable from '../../../(troubleshooting)/pricing-table';
import { blacklistData } from '../data';
import Comparison from '@/components/development/comparison';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ vendor: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export const dynamic = 'force-static';

const slug = 'blacklist-removal';

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // read route params
  const { vendor } = await params;

  // fetch data
  const blacklist = blacklistData.find((b) => (b.slug = vendor))!;

  return {
    title: blacklist.meta.title,
    description: blacklist.meta.description,
    alternates: {
      canonical: `https://www.3zerodigital.com/blacklist-removal/${blacklist.slug}`,
    },
  };
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return blacklistData.map((vendor) => ({
    vendor: vendor.slug,
  }));
}

export default async function BlacklistServicePage({
  params,
}: {
  params: Promise<{ vendor: string }>;
}) {
  const blacklistSlug = (await params).vendor;

  const { origPrice, price, productId } = await getProduct(slug);

  const blacklist = blacklistData.find((b) => (b.slug = blacklistSlug))!;

  const jsonLd = generateSchemaMarkup(slug);

  return (
    <div className='flex flex-col justify-center items-center p-6 min-h-[100dvh]'>
      <Hero
        description={blacklist?.meta?.description}
        headline={blacklist?.meta.title}
        subHeadline='Being Blacklisted Costs You Traffic, Trust, and Revenue!'
      />

      <div className='p-8 w-full max-w-5xl'>
        <PricingTable
          origPrice={origPrice!}
          price={price}
          productId={productId}
        />

        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 mt-12'>
          <div className='bg-gray-300 dark:bg-gray-900 shadow-xl p-6 rounded-lg'>
            <h3 className='mb-4 font-semibold text-xl'>What’s Included</h3>
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

          <div className='flex justify-center items-center bg-gray-300 dark:bg-gray-900 shadow-xl p-6 rounded-lg'>
            <div>
              <h3 className='mb-4 font-bold text-2xl text-center'>
                Why Choose Us?
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 text-center'>
                We specialize in quickly diagnosing and resolving 500 server
                errors, ensuring your site remains online and fully functional.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Comparison />

      <Script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
