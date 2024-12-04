import React from 'react';
import {
  FaLock,
  FaSearch,
  FaCertificate,
  FaShieldAlt,
  FaBug,
  FaGlobe,
  FaSyncAlt,
  FaCheckCircle,
} from 'react-icons/fa';
import PricingTable from './pricing-table';
import { getProduct } from '@/lib/product/get-product';
import { getServiceMetadata } from '@/app/seo';
import HeroSection from '@/components/comment/hero-section';
import Quiz from '@/components/comment/quiz';
import { questions } from './data';

export const metadata = getServiceMetadata('ssl-installation');
export const dynamic = 'force-static';

// Icons mapped to benefits
const benefits = [
  { text: 'Encrypts data between your website and visitors', icon: <FaLock /> },
  { text: 'Boosts search engine rankings with HTTPS', icon: <FaSearch /> },
  {
    text: 'Enhances trust with SSL padlock and certificate',
    icon: <FaCertificate />,
  },
  {
    text: 'Secures online transactions and sensitive information',
    icon: <FaShieldAlt />,
  },
  {
    text: 'Prevents data breaches and man-in-the-middle attacks',
    icon: <FaBug />,
  },
  {
    text: 'Complies with industry standards and regulations',
    icon: <FaGlobe />,
  },
  {
    text: 'Ensures compatibility with modern web browsers',
    icon: <FaSyncAlt />,
  },
  {
    text: 'Provides ongoing support and SSL certificate renewal',
    icon: <FaCheckCircle />,
  },
];

const SSLInstallation = async () => {
  const { origPrice, price, productId } = await getProduct('ssl-installation');

  return (
    <div className='mx-auto p-4 max-w-6xl'>
      <HeroSection
        title='Secure Your Website with SSL – Build Trust Instantly!'
        subtitle="Say Goodbye to 'Not Secure' Warnings Today!"
        description='An SSL certificate is no longer optional—it’s a necessity. Protect your website, enhance SEO, and earn your visitors’ trust. With over 500+ SSL installations, we ensure your website stays secure and credible.'
        youtubeId='dQw4w9WgXcQ' // Replace with your actual video ID
        firstBtnLink='/contact-us'
        firstBtnText='Get SSL Installed Now'
      />

      <div className='mx-auto mt-10 px-6 lg:px-8 max-w-7xl'>
        {/* Hero Section */}
        <div className='text-center'>
          <h2 className='font-extrabold text-4xl text-zinc-800 dark:text-zinc-200'>
            SSL Installation & Configuration
          </h2>
          <p className='mt-4 text-lg text-zinc-600 dark:text-zinc-400'>
            Secure your website with our comprehensive SSL installation service.
            We handle everything from setup to ongoing support.
          </p>
        </div>

        {/* Pricing Table */}
        <PricingTable
          origPrice={origPrice}
          price={price}
          productId={productId}
          services={benefits.map((b) => b.text)}
        />

        {/* Benefits List */}
        <div className='mt-16'>
          <h3 className='font-semibold text-2xl text-center text-zinc-800 dark:text-zinc-200'>
            Why Choose Our SSL Installation Service?
          </h3>
          <ul className='space-y-6 mt-8'>
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className='flex items-center space-x-4 bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl p-4 rounded-lg transform transition-transform hover:scale-[1.02]'>
                <div className='text-3xl text-indigo-600 dark:text-indigo-400'>
                  {benefit.icon}
                </div>
                <p className='text-lg text-zinc-800 dark:text-zinc-200'>
                  {benefit.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Quiz questions={questions} />
    </div>
  );
};

export default SSLInstallation;
