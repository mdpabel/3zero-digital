import ComponentWrapper from '@/components/common/component-wrapper';
import Hero from '@/components/common/Hero';
import SEOServiceForm from '../seo-form';
import {
  FaMapMarkerAlt,
  FaSearchLocation,
  FaBuilding,
  FaClipboardList,
  FaLink,
  FaStar,
  FaChartPie,
  FaUsers,
  FaHandshake,
} from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SEOComparison from '../seo-comparison';

const features = [
  {
    title: 'Local Signals',
    description:
      'Strengthen your local presence with targeted content, quality backlinks, and active social profiles to improve search relevance.',
    icon: <FaSearchLocation className='w-12 h-12 text-gradient' />,
  },
  {
    title: 'Google Business Profile',
    description:
      'Optimize and maintain your Google Business Profile to increase visibility and attract more local customers effectively.',
    icon: <FaBuilding className='w-12 h-12 text-gradient' />,
  },
  {
    title: 'Local Citations',
    description:
      'Ensure your business details are accurate and consistent across all major online directories to boost rankings and trust.',
    icon: <FaClipboardList className='w-12 h-12 text-gradient' />,
  },
  {
    title: 'Reputation Management',
    description:
      'Build and manage positive reviews to enhance your credibility and influence potential customers locally.',
    icon: <FaStar className='w-12 h-12 text-gradient' />,
  },
  {
    title: 'Quality Link Building',
    description:
      'Acquire authoritative backlinks to increase your domain authority and drive relevant local traffic to your site.',
    icon: <FaLink className='w-12 h-12 text-gradient' />,
  },
  {
    title: 'Keyword Research',
    description:
      'Discover and target high-value local keywords that bring qualified visitors and improve your search rankings.',
    icon: <FaClipboardList className='w-12 h-12 text-gradient' />,
  },
];

const whyChooseStats = [
  {
    number: '0',
    label: 'Vulnerability',
    icon: <FaUsers className='mx-auto mb-2 w-10 h-10 text-gradient' />,
  },
  {
    number: '0',
    label: 'Downtime',
    icon: <FaHandshake className='mx-auto mb-2 w-10 h-10 text-gradient' />,
  },
  {
    number: '0',
    label: 'Error',
    icon: <FaChartPie className='mx-auto mb-2 w-10 h-10 text-gradient' />,
  },
];

const coreValuesTabs = [
  {
    label: 'SEO Pricing',
    content: `Our packages are customized for your unique business goals. Pricing depends on your location, keyword targets, and scope, starting at BDT 20,000/month in Bangladesh and $400/month globally.`,
  },
  {
    label: 'Reporting',
    content: `You’ll receive clear, detailed monthly reports that track rankings, traffic, and ROI so you always know how your campaign is performing.`,
  },
  {
    label: 'Accountability',
    content: `Our dedicated team works hand-in-hand with you, ensuring prompt communication and precise delivery to meet your SEO objectives.`,
  },
];

const LocalSEOPage = () => {
  return (
    <ComponentWrapper>
      <Hero
        subHeadline='Boost Your Local Business Visibility and Drive More Customers'
        headline='Expert Local SEO Services'
        description="<strong className='text-black dark:text-white'>Rank higher locally, get found fast, and increase foot traffic with our tailored local SEO strategies.</strong> Let us help your business dominate local search results."
      />

      {/* Main CTA */}
      <section className='bg-white dark:bg-gray-900 my-16 p-8 rounded-lg text-black dark:text-white'>
        <div className='flex md:flex-row flex-col justify-between items-center gap-8 mx-auto max-w-5xl'>
          <div>
            <h2 className='mb-4 font-bold text-3xl'>
              Rank #1 on Google Maps{' '}
              <span className='text-blue-600 dark:text-blue-400'>
                with Proven Local SEO Service
              </span>
            </h2>
            <p className='mb-6 max-w-lg leading-relaxed'>
              Local customers rely on quick access to businesses nearby. If your
              business isn’t visible locally, you’re missing out on a large
              market share. <br />
              <br />
              In fact, 50% of mobile users visit local stores after conducting a
              search — <strong>according to Google</strong>. Gain an edge and
              get found first.
            </p>
            <Button className='p-5' asChild>
              <Link href='#getStarted'>Claim #1 Spot on Google Maps</Link>
            </Button>
          </div>
          <FaMapMarkerAlt className='w-32 h-32 text-blue-600 dark:text-blue-400' />
        </div>
      </section>

      {/* Did You Know */}
      <section className='bg-gray-50 dark:bg-gray-900 mx-auto mb-16 px-6 py-12 rounded-lg max-w-4xl text-center'>
        <h3 className='mb-4 font-bold text-zinc-900 dark:text-white text-3xl'>
          Did You{' '}
          <span className='text-blue-600 dark:text-blue-400'>Know?</span>
        </h3>
        <p className='mx-auto max-w-xl text-zinc-700 dark:text-zinc-300 text-lg'>
          <strong>46% of all Google searches</strong> are for local information.
          If your business isn’t optimized for <strong>local SEO</strong>, you
          risk losing valuable customers searching nearby. Local SEO helps you
          appear in <strong>Google’s Local Pack</strong>, increasing traffic,
          calls, and store visits.
        </p>
      </section>

      {/* Features */}
      <ComponentWrapper className='gap-8 grid grid-cols-1 md:grid-cols-3 mb-16'>
        {features.map(({ title, description, icon }) => (
          <div
            key={title}
            className='bg-white dark:bg-gray-800 shadow-md hover:shadow-xl p-6 rounded-lg transition'>
            <div className='mb-4'>{icon}</div>
            <h4 className='mb-2 font-semibold text-zinc-900 dark:text-white text-xl'>
              {title}
            </h4>
            <p className='text-zinc-700 dark:text-zinc-300'>{description}</p>
          </div>
        ))}
      </ComponentWrapper>

      {/* Why Choose Us */}
      <SEOComparison />

      {/* Contact Form */}
      <section className='bg-white dark:bg-gray-900 mx-auto mb-20 p-10 rounded-lg max-w-4xl'>
        <SEOServiceForm title='Get Your Customized Local SEO Strategy' />
      </section>

      {/* ROI Section */}
      <section className='bg-gray-50 dark:bg-gray-900 mx-auto mb-16 px-6 py-12 rounded-lg max-w-4xl'>
        <h3 className='mb-6 font-bold text-zinc-900 dark:text-white text-3xl text-center'>
          ROI Focused Local SEO That Drives Results
        </h3>
        <p className='mx-auto mb-4 max-w-3xl text-zinc-700 dark:text-zinc-300 text-center'>
          At 3Zero Digital, we understand that every dollar counts. Our local
          SEO strategies are designed to maximize your return on investment by
          focusing on:
        </p>
        <ul className='space-y-3 mx-auto text-zinc-700 dark:text-zinc-300 list-disc list-inside'>
          <li>
            Increasing your online visibility to attract more local customers
            who are ready to buy.
          </li>
          <li>
            Improving your Google Maps rankings to drive foot traffic and phone
            inquiries.
          </li>
          <li>
            Minimizing downtime and errors to ensure your campaigns run smoothly
            without interruption.
          </li>
          <li>
            Providing transparent reporting so you can track progress and ROI
            with confidence.
          </li>
          <li>
            Delivering scalable SEO solutions tailored to your business growth
            plans.
          </li>
        </ul>
      </section>

      {/* Final CTA */}
      <section className='flex md:flex-row flex-col justify-between items-center gap-8 bg-white dark:bg-gray-900 my-20 p-10 rounded-lg'>
        <div className='max-w-xl'>
          <h3 className='mb-4 font-bold text-3xl'>
            Partner with{' '}
            <span className='text-blue-600 dark:text-blue-400'>
              3Zero Digital
            </span>{' '}
            for reliable, error-free Local SEO.
          </h3>
          <p className='mb-6 leading-relaxed'>
            Our name stands for{' '}
            <strong>0 Vulnerability, 0 Downtime, and 0 Error</strong>. With
            3Zero Digital, you get precision, uptime, and peace of mind as your
            business grows locally. Start seeing measurable results in 30 days.
          </p>
          <Button className='p-5' asChild>
            <Link href='#getStarted'>I want to be your SEO partner</Link>
          </Button>
        </div>
        <FaMapMarkerAlt className='w-32 h-32 text-blue-600 dark:text-blue-400' />
      </section>
    </ComponentWrapper>
  );
};

export default LocalSEOPage;
