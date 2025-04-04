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

const slug = 'wordpress-security';

export const metadata = getServiceMetadata(slug);

const services = [
  'Hardened file permissions for critical WordPress files',
  'Advanced firewall protection against DDoS and brute force attacks',
  'Prevention of user enumeration and unauthorized access',
  'Form security enhancements with anti-spam measures',
  'Secure login with custom URLs and multi-factor authentication',
  'Protection against SQL injection, XSS, and other common exploits',
  'Automated malware scanning and removal',
  'Real-time monitoring and threat detection',
  'Regular updates for plugins, themes, and WordPress core',
];

const WordPressSecurity = async () => {
  const { origPrice, price, productId } = await getProduct(slug);
  const jsonLd = generateSchemaMarkup(slug);

  return (
    <div className='mx-auto p-4 max-w-6xl'>
      <Hero
        subHeadline='Hackers Are Always Watching – Are You Prepared?'
        headline='Your Website’s Security is Non-Negotiable!'
        description="<strong className='text-black dark:text-white'>
    Protect your WordPress site with our advanced security services
  </strong>—24/7 monitoring, threat prevention, and guaranteed peace of mind. A single security breach can cost your business thousands."
      />

      <Video videoId='na2iB6nBzIc' pageSlug={slug} />

      <div className='mx-auto mt-32 rounded-lg max-w-5xl'>
        <h2 className='mb-6 font-bold text-zinc-800 dark:text-zinc-200 text-3xl md:text-5xl text-center'>
          Comprehensive WordPress Security
        </h2>

        <p className='mb-8 text-zinc-700 dark:text-zinc-400 text-lg md:text-xl text-center'>
          Fortify your WordPress site with our advanced security services.
          Protect your site from malicious attacks, unauthorized access, and
          potential vulnerabilities.
        </p>

        <div className='gap-8 grid grid-cols-1 md:grid-cols-2'>
          {/* Services List */}
          <div>
            <h3 className='mb-4 font-semibold text-xl'>
              Key Security Features
            </h3>
            <ul className='space-y-4'>
              {services.map((service, index) => (
                <li key={index} className='flex items-start'>
                  <div className='flex-shrink-0 bg-gradient-to-r from-[#614385] to-[#516395] mr-3 rounded-full w-4 h-4'></div>
                  <span className='text-zinc-700 dark:text-zinc-300 text-base'>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pricing Table */}
          <PricingTable
            origPrice={origPrice!}
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

export default WordPressSecurity;
