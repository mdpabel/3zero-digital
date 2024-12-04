import React from 'react';
import PricingTable from './pricing-table';
import { getProduct } from '@/lib/product/get-product';
import { getServiceMetadata } from '@/app/seo';
import HeroSection from '@/components/comment/hero-section';
import Quiz from '@/components/comment/quiz';
import { questions } from './data';

export const metadata = getServiceMetadata('/wordpress-security');

export const dynamic = 'force-static';

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
  const { origPrice, price, productId } = await getProduct(
    'wordpress-security',
  );

  return (
    <div className='mx-auto p-4 max-w-6xl'>
      <HeroSection
        title='Your Website’s Security is Non-Negotiable!'
        subtitle='Hackers Are Always Watching – Are You Prepared?'
        description='A single security breach can cost your business thousands. Protect your WordPress site with our advanced security services – 24/7 monitoring, threat prevention, and guaranteed peace of mind.'
        youtubeId='dQw4w9WgXcQ' // Replace with your actual video ID
        firstBtnLink='/contact-us'
        firstBtnText='Secure My Website Now'
      />

      <div className='mx-auto mt-10 rounded-lg max-w-5xl'>
        <h2 className='mb-6 font-bold text-3xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
          Comprehensive WordPress Security
        </h2>

        <p className='mb-8 text-center text-lg text-zinc-700 md:text-xl dark:text-zinc-400'>
          Fortify your WordPress site with our advanced security services.
          Protect your site from malicious attacks, unauthorized access, and
          potential vulnerabilities.
        </p>

        <div className='gap-8 grid grid-cols-1 md:grid-cols-2'>
          {/* Services List */}
          <div>
            <h3 className='mb-4 font-semibold text-xl text-zinc-800 dark:text-zinc-200'>
              Key Security Features
            </h3>
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
    </div>
  );
};

export default WordPressSecurity;
