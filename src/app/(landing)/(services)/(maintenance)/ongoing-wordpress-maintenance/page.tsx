import {
  FaShieldAlt,
  FaSyncAlt,
  FaLock,
  FaHdd,
  FaCode,
  FaChartLine,
} from 'react-icons/fa';
import { MdSecurity, MdUpdate } from 'react-icons/md';
import PricingTable from './pricing-table';
import HeroSection from '@/components/comment/hero-section';
import { getProduct } from '@/lib/product/get-product';
import Quiz from '@/components/comment/quiz';
import { questions } from './data';
import { getServiceMetadata } from '@/app/seo';
import Video from '@/components/common/video';
import Hero from '@/components/common/Hero';
import { generateSchemaMarkup } from '@/app/schema-markup-generator';
import Script from 'next/script';

const slug = 'ongoing-wordpress-maintenance';

export const metadata = getServiceMetadata(slug);

const WordPressMaintenance = async () => {
  const { origPrice, price, productId } = await getProduct(slug);

  const jsonLd = generateSchemaMarkup(slug);

  const services = [
    {
      icon: <FaShieldAlt />,
      title: 'Regular Security Audits',
      description: 'Identify vulnerabilities to keep your site secure.',
    },
    {
      icon: <MdSecurity />,
      title: '24/7 Threat Monitoring',
      description: 'Continuous monitoring to detect and mitigate threats.',
    },
    {
      icon: <FaHdd />,
      title: 'Automated Backups',
      description: 'Daily backups stored securely for quick restoration.',
    },
    {
      icon: <MdUpdate />,
      title: 'Core & Plugin Updates',
      description:
        'Ensure your WordPress components are up-to-date with vulnerability checks.',
    },
    {
      icon: <FaLock />,
      title: 'Login Security Enhancements',
      description: 'Protect your admin panel with two-factor authentication.',
    },
    {
      icon: <FaSyncAlt />,
      title: 'File Integrity Monitoring',
      description: 'Track and restore any unauthorized file changes.',
    },
    {
      icon: <FaCode />,
      title: 'Performance Optimization',
      description: 'Improve loading times with security hardening.',
    },
    {
      icon: <FaChartLine />,
      title: 'Firewall Management',
      description:
        'Prevent brute force attacks with proactive firewall adjustments.',
    },
  ];

  return (
    <div className='mx-auto p-4 max-w-6xl'>
      <Hero
        subHeadline='Hackers Don’t Take Vacations – Your Site Can’t Either!'
        headline='Your WordPress Site Is an Easy Target – Fix It Now!'
        description="<strong className='text-black dark:text-white'>
    Stay protected 24/7 with our expert security solutions
  </strong>. Did you know? One study found that in 2018, over 90% of hacked sites were WordPress. Regular scans, malware removal, and zero downtime – guaranteed."
      />

      <Video videoId='na2iB6nBzIc' pageSlug={slug} />

      <div className='mt-32'>
        <div className='mx-auto max-w-4xl'>
          <h2 className='mb-6 font-bold text-3xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
            Ongoing WordPress Security Maintenance
          </h2>

          <p className='mb-10 text-center text-lg text-zinc-600 md:text-xl dark:text-zinc-400'>
            Secure your WordPress site with our comprehensive maintenance
            services. Our team ensures your site is protected, updated, and
            performing at its best.
          </p>
        </div>

        <PricingTable
          origPrice={origPrice}
          price={price}
          productId={productId}
          services={services.map((s) => s.title)}
        />

        <div className='gap-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 mt-10'>
          {services.map((service, index) => (
            <div
              key={index}
              className='flex items-start border-gray-200 dark:border-gray-900 bg-gray-200 dark:bg-gray-900 p-6 border rounded-lg'>
              <div className='flex-shrink-0 mr-4 text-[#614385] text-3xl dark:text-[#516395]'>
                {service.icon}
              </div>
              <div>
                <h3 className='font-bold text-xl text-zinc-800 dark:text-zinc-200'>
                  {service.title}
                </h3>
                <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                  {service.description}
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
    </div>
  );
};

export default WordPressMaintenance;
