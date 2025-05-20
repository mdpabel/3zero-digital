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
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PaidMarketingComparison from '../paid-marketing-comparison';

const features = [
  {
    title: 'Engaging Video & Image Ads',
    description:
      'Create visually captivating ads tailored for Facebook and Instagram feeds and stories.',
    icon: <FaVideo className='w-14 h-14 text-blue-600' />,
  },
  {
    title: 'Advanced Audience Targeting',
    description:
      'Reach your perfect audience with Facebook and Instagram’s powerful targeting based on interests, behaviors, and demographics.',
    icon: <FaBullhorn className='w-14 h-14 text-blue-600' />,
  },
  {
    title: 'Mobile-Optimized Campaigns',
    description:
      'Ensure ads look perfect and perform well on mobile devices across Facebook and Instagram.',
    icon: <FaMobileAlt className='w-14 h-14 text-blue-600' />,
  },
  {
    title: 'Influencer & Partner Collaborations',
    description:
      'Leverage influencers and brand partnerships on Meta platforms for amplified reach and trust.',
    icon: <FaUsers className='w-14 h-14 text-blue-600' />,
  },
  {
    title: 'Real-Time Data Analytics',
    description:
      'Use Meta’s analytics tools to optimize your campaigns continuously for maximum ROI.',
    icon: <FaChartPie className='w-14 h-14 text-blue-600' />,
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
    icon: <FaHandshake className='mx-auto mb-2 w-12 h-12 text-blue-600' />,
  },
  {
    number: '0',
    label: 'Error',
    icon: <FaChartPie className='mx-auto mb-2 w-12 h-12 text-blue-600' />,
  },
];

const MetaAdsPage = () => {
  return (
    <ComponentWrapper>
      {/* Hero with split layout */}
      <section className='flex md:flex-row flex-col-reverse items-center gap-10 mx-auto my-12 px-6 max-w-7xl'>
        <div className='md:w-1/2'>
          <h1 className='mb-4 font-extrabold text-zinc-900 dark:text-white text-4xl'>
            Expert Meta Ads Management
          </h1>
          <p className='mb-6 text-zinc-700 dark:text-zinc-300 text-lg leading-relaxed'>
            Reach billions on Facebook and Instagram with expertly crafted ads
            that grow your brand and boost sales. Let 3Zero Digital maximize
            your campaign impact.
          </p>
          <Button className='p-5' asChild>
            <Link href='#getStarted'>Start My Meta Campaign</Link>
          </Button>
        </div>
        <div className='flex justify-center space-x-6 md:w-1/2'>
          <FaFacebookF className='w-24 h-24 text-blue-600' />
          <FaInstagram className='w-24 h-24 text-pink-500' />
        </div>
      </section>

      {/* Did You Know - no background, underline only */}
      <section className='mx-auto mb-16 px-6 max-w-4xl text-center'>
        <h2 className='mb-4 font-bold text-zinc-900 dark:text-white text-3xl'>
          Did You <span className='text-blue-600 underline'>Know?</span>
        </h2>
        <p className='mx-auto max-w-3xl text-zinc-700 dark:text-zinc-300 text-lg'>
          Meta’s platforms reach over 3 billion active users monthly. Ads here
          enjoy some of the best engagement rates and conversion potential
          across social media.
        </p>
      </section>

      {/* Features - stacked vertical, no scroll */}
      <section className='space-y-10 mx-auto mb-16 px-6 max-w-7xl'>
        <h3 className='mb-4 font-semibold text-zinc-900 dark:text-white text-3xl text-center'>
          Why Meta Ads Work
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
          title='Get Your Customized Meta Ads Strategy'
          Icon={
            <div className='flex justify-center space-x-4'>
              <FaFacebookF className='w-16 h-16 text-blue-600' />
              <FaInstagram className='w-16 h-16 text-pink-500' />
            </div>
          }
        />
      </section>

      {/* ROI Section - dark gray bg, split layout */}
      <section className='flex md:flex-row flex-col items-center gap-12 bg-gray-900 dark:bg-gray-800 mx-auto mb-20 p-10 px-6 rounded-lg max-w-7xl'>
        <div className='flex justify-center space-x-6 md:w-1/3'>
          <FaFacebookF className='w-28 h-28 text-blue-600' />
          <FaInstagram className='w-28 h-28 text-pink-500' />
        </div>
        <div className='md:w-2/3 md:text-left text-center'>
          <h3 className='mb-6 font-bold text-white text-3xl'>
            ROI-Driven Meta Advertising That Delivers
          </h3>
          <p className='mx-auto md:mx-0 mb-4 max-w-xl text-gray-300 leading-relaxed'>
            At 3Zero Digital, we maximize your ad spend by:
          </p>
          <ul className='space-y-3 mx-auto md:mx-0 max-w-xl text-gray-300 text-left list-disc list-inside'>
            <li>
              Crafting visually stunning, high-converting Facebook & Instagram
              ads.
            </li>
            <li>
              Precise audience targeting for better engagement and conversions.
            </li>
            <li>Ongoing optimization using real-time analytics and trends.</li>
            <li>Transparent reporting on campaign performance and ROI.</li>
            <li>Scaling campaigns as your business grows and evolves.</li>
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className='flex md:flex-row flex-col justify-between items-center gap-8 bg-white dark:bg-gray-900 my-20 p-10 rounded-lg'>
        <div className='max-w-xl'>
          <h3 className='mb-4 font-bold text-3xl'>
            Partner with <span className='text-blue-600'>3Zero Digital</span>{' '}
            for Meta ads that convert.
          </h3>
          <p className='mb-6 leading-relaxed'>
            With <strong>0 Vulnerability, 0 Downtime, and 0 Error</strong>, we
            deliver precise, scalable campaigns that grow your brand and ROI.
            Start seeing results in just 30 days!
          </p>
          <Button className='p-5' asChild>
            <Link href='#getStarted'>Launch My Meta Ads</Link>
          </Button>
        </div>
        <div className='flex justify-center md:justify-start space-x-8'>
          <FaFacebookF className='w-32 h-32 text-blue-600' />
          <FaInstagram className='w-32 h-32 text-pink-500' />
        </div>
      </section>
    </ComponentWrapper>
  );
};

export default MetaAdsPage;
