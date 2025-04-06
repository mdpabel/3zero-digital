import { getServiceMetadata } from '@/app/seo';
import { getProduct } from '@/lib/product/get-product';
import { AiOutlineCheck } from 'react-icons/ai';
import PricingTable from '../pricing-table';
import Hero from '@/components/common/Hero';
import { generateSchemaMarkup } from '@/app/schema-markup-generator';
import Script from 'next/script';

export const dynamic = 'force-static';

const slug = 'error-establishing-a-database-connection';

export const metadata = getServiceMetadata(slug);

export default async function DatabaseConnectionError() {
  const { origPrice, price, productId } = await getProduct(slug);

  const jsonLd = generateSchemaMarkup(slug);

  return (
    <div className='flex flex-col justify-center items-center p-6 min-h-[100dvh]'>
      <Hero
        description='Get your WordPress site back online with expert help.'
        headline='Fix “Error Establishing a Database Connection”'
        subHeadline='Fast, reliable diagnosis and repair – with 0 Downtime guaranteed.'
      />
      <div className='p-8 w-full max-w-5xl'>
        <PricingTable
          origPrice={origPrice!}
          price={price}
          productId={productId}
        />

        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 mt-12'>
          <div className='dark:bg-gray-900 shadow-md p-6'>
            <h3 className='mb-4 font-semibold text-xl'>What’s Included</h3>
            <ul className='space-y-4 text-zinc-600 dark:text-zinc-400'>
              <li className='flex items-start'>
                <AiOutlineCheck className='mr-3 w-6 h-6 text-green-500' />
                Full diagnosis of database connection issues.
              </li>
              <li className='flex items-start'>
                <AiOutlineCheck className='mr-3 w-6 h-6 text-green-500' />
                Repair corrupted database or misconfigured wp-config.php.
              </li>
              <li className='flex items-start'>
                <AiOutlineCheck className='mr-3 w-6 h-6 text-green-500' />
                Restore access and bring your website back online safely.
              </li>
            </ul>
          </div>

          <div className='flex justify-center items-center dark:bg-gray-900 shadow-md p-6 p-6shadow-xl rounded-lg'>
            <div>
              <h3 className='mb-4 font-bold text-2xl text-center'>
                Why Choose Us?
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400 text-center'>
                Our team has the expertise to quickly identify and resolve
                database connection errors, ensuring your website remains
                accessible and secure.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
