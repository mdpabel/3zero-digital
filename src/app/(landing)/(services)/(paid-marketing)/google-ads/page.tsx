import ComponentWrapper from '@/components/common/component-wrapper';
import Hero from '@/components/common/Hero';
import PaidMarketingForm from '../paid-marketing-form';
import {
  FaVideo,
  FaBullhorn,
  FaUsers,
  FaHandshake,
  FaChartPie,
  FaMobileAlt,
} from 'react-icons/fa';
import { SiGoogleads } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PaidMarketingComparison from '../paid-marketing-comparison';

const features = [
  {
    title: 'Engaging Video & Search Ads',
    description:
      'Create compelling video and search ads that capture attention across Google’s vast network.',
    icon: <FaVideo className='w-14 h-14 text-blue-600' />,
  },
  {
    title: 'Advanced Audience Targeting',
    description:
      'Reach your ideal customers using Google’s precise targeting by demographics, interests, and search intent.',
    icon: <FaBullhorn className='w-14 h-14 text-red-600' />,
  },
  {
    title: 'Cross-Device Optimization',
    description:
      'Deliver seamless ad experiences optimized for desktop, mobile, and tablet users.',
    icon: <FaMobileAlt className='w-14 h-14 text-green-600' />,
  },
  {
    title: 'Remarketing & Lead Generation',
    description:
      'Use remarketing strategies to re-engage visitors and convert leads into customers.',
    icon: <FaUsers className='w-14 h-14 text-yellow-500' />,
  },
  {
    title: 'Performance Analytics & Reporting',
    description:
      'Monitor campaigns with Google Ads analytics to maximize ROI and refine strategies.',
    icon: <FaChartPie className='w-14 h-14 text-gray-600' />,
  },
];

const whyChooseStats = [
  {
    number: '0',
    label: 'Vulnerability',
    icon: <FaUsers className='mx-auto mb-2 w-12 h-12 text-blue-600' />,
  },
  {
    number: '0',
    label: 'Downtime',
    icon: <FaHandshake className='mx-auto mb-2 w-12 h-12 text-red-600' />,
  },
  {
    number: '0',
    label: 'Error',
    icon: <FaChartPie className='mx-auto mb-2 w-12 h-12 text-green-600' />,
  },
];

const GoogleAdsPage = () => {
  return (
    <ComponentWrapper>
      {/* Hero with split layout */}
      <section className='flex md:flex-row flex-col-reverse items-center gap-10 mx-auto my-12 px-6 max-w-7xl'>
        <div className='md:w-1/2'>
          <h1 className='mb-4 font-extrabold text-zinc-900 dark:text-white text-4xl'>
            Expert Google Ads Management
          </h1>
          <p className='mb-6 text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed'>
            Reach your customers across Google Search, YouTube, and Display
            Network with expertly crafted ads. 3Zero Digital ensures your
            campaigns deliver maximum ROI.
          </p>
          <Button className='p-5' asChild>
            <Link href='#getStarted'>Start My Google Ads Campaign</Link>
          </Button>
        </div>
        <div className='flex justify-center md:w-1/2'>
          <SiGoogleads className='w-48 h-48 text-blue-600' />
        </div>
      </section>

      {/* Did You Know - no background, colored underline */}
      <section className='mx-auto mb-16 px-6 max-w-4xl text-center'>
        <h2 className='mb-4 font-bold text-zinc-900 dark:text-white text-3xl'>
          Did You <span className='text-blue-600 underline'>Know?</span>
        </h2>
        <p className='mx-auto max-w-3xl text-zinc-700 dark:text-zinc-300 text-lg'>
          Google Ads reaches over 90% of internet users worldwide, giving your
          business unparalleled access to potential customers through search,
          video, and display ads.
        </p>
      </section>

      {/* Features - stacked vertical, no scroll */}
      <section className='space-y-10 mx-auto mb-16 px-6 max-w-7xl'>
        <h3 className='mb-4 font-semibold text-zinc-900 dark:text-white text-3xl text-center'>
          Why Google Ads Work
        </h3>
        <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {features.map(({ title, description, icon }) => (
            <div
              key={title}
              className='bg-gray-900 dark:bg-gray-800 shadow-md hover:shadow-lg p-6 rounded-xl transition'>
              <div className='mb-4'>{icon}</div>
              <h4 className='mb-2 font-semibold text-white'>{title}</h4>
              <p className='text-gray-300'>{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <PaidMarketingComparison />

      {/* Contact Form with neutral background */}
      <section
        id='getStarted'
        className='bg-white dark:bg-gray-900 shadow-lg mx-auto mb-20 px-6 py-10 rounded-lg max-w-4xl'>
        <PaidMarketingForm
          title='Get Your Customized Google Ads Strategy'
          Icon={
            <SiGoogleads className='mx-auto mb-6 w-16 h-16 text-blue-600' />
          }
        />
      </section>

      {/* ROI Section - dark gray bg, split layout */}
      <section className='flex md:flex-row flex-col items-center gap-12 bg-gray-900 dark:bg-gray-800 mx-auto mb-20 p-10 px-6 rounded-lg max-w-7xl'>
        <div className='flex justify-center md:w-1/3'>
          <SiGoogleads className='w-28 h-28 text-blue-600' />
        </div>
        <div className='md:w-2/3 md:text-left text-center'>
          <h3 className='mb-6 font-bold text-white text-3xl'>
            ROI-Driven Google Advertising That Delivers
          </h3>
          <p className='mx-auto md:mx-0 mb-4 max-w-xl text-gray-300 leading-relaxed'>
            At 3Zero Digital, we optimize your Google Ads campaigns to:
          </p>
          <ul className='space-y-3 mx-auto md:mx-0 max-w-xl text-gray-300 text-left list-disc list-inside'>
            <li>
              Reach customers actively searching for your products or services.
            </li>
            <li>Use video and display ads to build brand awareness.</li>
            <li>Retarget visitors to convert them into loyal customers.</li>
            <li>Provide detailed analytics and transparent reporting.</li>
            <li>Scale campaigns to meet your growing business needs.</li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className='flex md:flex-row flex-col justify-between items-center gap-8 bg-white dark:bg-gray-900 my-20 p-10 rounded-lg'>
        <div className='max-w-xl'>
          <h3 className='mb-4 font-bold text-3xl'>
            Partner with <span className='text-blue-600'>3Zero Digital</span>{' '}
            for Google Ads that convert.
          </h3>
          <p className='mb-6 leading-relaxed'>
            With <strong>0 Vulnerability, 0 Downtime, and 0 Error</strong>, we
            deliver precise, scalable Google Ads campaigns that maximize your
            ROI. See results in just 30 days!
          </p>
          <Button className='p-5' asChild>
            <Link href='#getStarted'>Launch My Google Ads</Link>
          </Button>
        </div>

        {/* Icon */}
        <SiGoogleads className='mx-auto md:mx-0 w-32 h-32 text-blue-600' />
      </section>
    </ComponentWrapper>
  );
};

export default GoogleAdsPage;
