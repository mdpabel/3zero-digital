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

const slug = 'wordpress-speed-optimization';

export const metadata = getServiceMetadata(slug);

const services = [
  'Comprehensive website speed audit',
  'Image optimization and compression',
  'CSS and JavaScript minification',
  'Leverage browser caching',
  'Reduce server response time',
  'Enable GZIP compression',
  'Optimize database and queries',
  'Defer offscreen images',
];

const WordPressSpeedOptimization = async () => {
  const { origPrice, price, productId } = await getProduct(slug);

  const jsonLd = generateSchemaMarkup(slug);

  return (
    <div className='mx-auto p-4 max-w-6xl'>
      <Hero
        subHeadline='Every Second of Delay = Lost Revenue!'
        headline='Your Slow Website is Costing You Customers!'
        description="<strong className='text-black dark:text-white'>
    Supercharge your WordPress site with our expert speed optimization services
  </strong>—faster loading, higher conversions, and better rankings, guaranteed. Did you know? 53% of users leave a site that takes more than 3 seconds to load."
      />

      <Video videoId='na2iB6nBzIc' pageSlug={slug} />

      <div className='mx-auto mt-32 max-w-5xl'>
        <h2 className='mb-6 font-bold text-3xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
          WordPress Speed Optimization
        </h2>

        <p className='mb-8 text-center text-lg text-zinc-700 md:text-xl dark:text-zinc-400'>
          Supercharge your WordPress site with our comprehensive speed
          optimization services. Improve loading times, enhance user experience,
          and boost your search engine rankings.
        </p>

        <div className='gap-8 grid grid-cols-1 md:grid-cols-2'>
          {/* Services List */}
          <div>
            <h3 className='mb-4 font-semibold text-xl'>What&apos;s Included</h3>
            <ul className='space-y-4'>
              {services.map((service, index) => (
                <li key={index} className='flex items-start'>
                  <div className='flex-shrink-0 bg-gradient-to-r from-[#614385] to-[#516395] mr-3 rounded-full w-4 h-4'></div>
                  <span className='text-base text-zinc-700 dark:text-zinc-300'>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing Table */}
          <PricingTable
            origPrice={origPrice}
            price={price}
            productId={productId}
            services={services}
          />
        </div>
      </div>

      <Quiz questions={questions} />

      <Script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default WordPressSpeedOptimization;
