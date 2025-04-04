import React from 'react';
import PricingTable from './pricing-table';
import { getProduct } from '@/lib/product/get-product';
import { getServiceMetadata } from '@/app/seo';
import HeroSection from '@/components/common/hero-section';
import Quiz from '@/components/comment/quiz';
import { questions } from './data';
import Video from '@/components/common/video';
import Hero from '@/components/common/Hero';
import { generateSchemaMarkup } from '@/app/schema-markup-generator';
import Script from 'next/script';

export const dynamic = 'force-static';

const slug = 'website-migration';

export const metadata = getServiceMetadata(slug);

const migrationSteps = [
  'Detailed site audit and planning',
  'Backup of existing site data and content',
  'Setup and configuration of new hosting environment',
  'Migration of all content, databases, and files',
  'Testing to ensure functionality and performance',
  'DNS update and go-live support',
  'Post-migration support and monitoring',
  'SEO audit to maintain search rankings',
];

const WebsiteMigration = async () => {
  const { origPrice, price, productId } = await getProduct(slug);
  const jsonLd = generateSchemaMarkup(slug);

  return (
    <div className='mx-auto px-4 max-w-6xl'>
      <Hero
        subHeadline='Switch Hosts or Domains Without Losing a Single Byte!'
        headline='Seamless Website Migration – Zero Downtime, 100% Reliability!'
        description="<strong className='text-black dark:text-white'>
    We specialize in hassle-free website migration services
  </strong> to ensure your site runs smoothly on its new home. Over 500+ websites successfully migrated! Planning to migrate your website but worried about data loss, downtime, or SEO impact?"
      />

      <Video videoId='na2iB6nBzIc' pageSlug={slug} />

      <h2 className='mt-32 mb-8 font-bold text-zinc-800 dark:text-zinc-200 text-3xl md:text-5xl text-center'>
        Website Migration Services
      </h2>

      <p className='mb-10 text-zinc-600 dark:text-zinc-400 text-lg md:text-xl text-center'>
        Transition your website to a new platform or hosting provider with
        minimal downtime and zero data loss. Our expert team handles the entire
        process for a smooth migration.
      </p>

      <PricingTable
        origPrice={origPrice!}
        price={price}
        productId={productId}
        services={migrationSteps}
      />

      <div className='gap-8 grid grid-cols-1 md:grid-cols-2 mt-8'>
        {migrationSteps.map((step, index) => (
          <div
            key={index}
            className='flex items-start bg-gray-50 dark:bg-gray-800 shadow-md hover:shadow-lg p-6 border border-gray-200 dark:border-gray-900 rounded-lg transition-shadow'>
            <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-r from-[#614385] to-[#516395] mr-4 rounded-full w-12 h-12 text-white'>
              <span className='font-semibold text-lg'>{index + 1}</span>
            </div>
            <div>
              <h3 className='font-semibold text-lg'>{step}</h3>
              <p className='mt-2 text-zinc-600 dark:text-zinc-400 text-sm'>
                {index % 2 === 0
                  ? 'We carefully plan and execute each step to ensure a seamless transition with no impact on your site’s performance or SEO.'
                  : 'Our team ensures that your site remains fully functional throughout the migration process, with comprehensive testing and post-migration support.'}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Quiz questions={questions} />

      <Script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default WebsiteMigration;
