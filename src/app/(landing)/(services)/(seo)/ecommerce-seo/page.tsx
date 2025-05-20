import ComponentWrapper from '@/components/common/component-wrapper';
import Hero from '@/components/common/Hero';
import SEOServiceForm from '../seo-form';
import {
  FaShoppingCart,
  FaSearchDollar,
  FaStore,
  FaMobileAlt,
  FaLink,
  FaStar,
  FaUsers,
  FaHandshake,
  FaChartPie,
} from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SEOComparison from '../seo-comparison';

const features = [
  {
    title: 'Product & Category Optimization',
    description:
      'Optimize product titles, descriptions, and categories to improve visibility and conversions.',
    icon: <FaStore className='w-12 h-12 text-gradient' />,
  },
  {
    title: 'Conversion Rate Optimization',
    description:
      'Implement SEO strategies focused on increasing traffic and converting visitors into customers.',
    icon: <FaShoppingCart className='w-12 h-12 text-gradient' />,
  },
  {
    title: 'Mobile-Friendly SEO',
    description:
      'Ensure your ecommerce site is fully responsive and optimized for mobile shoppers.',
    icon: <FaMobileAlt className='w-12 h-12 text-gradient' />,
  },
  {
    title: 'Link Building & Authority',
    description:
      'Build high-quality backlinks to boost your site’s authority and improve search rankings.',
    icon: <FaLink className='w-12 h-12 text-gradient' />,
  },
  {
    title: 'Reputation Management',
    description:
      'Manage customer reviews and ratings to build trust and improve local search rankings.',
    icon: <FaStar className='w-12 h-12 text-gradient' />,
  },
  {
    title: 'Keyword Research for Ecommerce',
    description:
      'Target the best keywords that shoppers use to find products in your niche.',
    icon: <FaSearchDollar className='w-12 h-12 text-gradient' />,
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
    content: `Our ecommerce SEO packages are tailored to your product range and business size. Prices vary based on complexity and scale.`,
  },
  {
    label: 'Reporting',
    content: `You’ll get detailed monthly reports tracking traffic, rankings, and sales conversions to keep you informed.`,
  },
  {
    label: 'Accountability',
    content: `Our dedicated team ensures your ecommerce SEO campaigns are implemented flawlessly and consistently optimized.`,
  },
];

const EcommerceSEOPage = () => {
  return (
    <ComponentWrapper>
      <Hero
        subHeadline='Maximize Your Online Store’s Visibility & Sales'
        headline='Expert Ecommerce SEO Services'
        description="<strong className='text-black dark:text-white'>Drive targeted traffic, boost conversions, and grow your online store with our ecommerce SEO strategies.</strong> Let us help you dominate your market."
      />

      {/* Main CTA */}
      <section className='bg-white dark:bg-gray-900 my-16 p-8 rounded-lg text-black dark:text-white'>
        <div className='flex md:flex-row flex-col justify-between items-center gap-8 mx-auto max-w-5xl'>
          <div>
            <h2 className='mb-4 font-bold text-3xl'>
              Boost Your Ecommerce Sales{' '}
              <span className='text-blue-600 dark:text-blue-400'>
                with Proven SEO Strategies
              </span>
            </h2>
            <p className='mb-6 max-w-lg leading-relaxed'>
              In ecommerce, visibility means sales. If your store isn’t ranking
              for the right products and keywords, you’re leaving revenue on the
              table. <br />
              <br />
              Our ecommerce SEO approach is designed to increase qualified
              traffic, improve user experience, and convert visitors into loyal
              customers.
            </p>
            <Button className='p-5' asChild>
              <Link href='#getStarted'>Grow My Online Store</Link>
            </Button>
          </div>

          {/* Icon added here */}
          <FaShoppingCart className='w-32 h-32 text-blue-600 dark:text-blue-400' />
        </div>
      </section>

      {/* Did You Know */}
      <section className='bg-gray-50 dark:bg-gray-900 mx-auto mb-16 px-6 py-12 rounded-lg max-w-4xl text-center'>
        <h3 className='mb-4 font-bold text-zinc-900 dark:text-white text-3xl'>
          Did You{' '}
          <span className='text-blue-600 dark:text-blue-400'>Know?</span>
        </h3>
        <p className='mx-auto max-w-xl text-zinc-700 dark:text-zinc-300 text-lg'>
          Ecommerce SEO can increase organic traffic by up to 30% or more.
          Proper product optimization, site structure, and keyword targeting are
          essential for outranking competitors and maximizing sales.
        </p>
      </section>

      {/* Features */}
      <section className='gap-8 grid grid-cols-1 md:grid-cols-3 mx-auto mb-16 max-w-6xl'>
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
      </section>

      {/* Why Choose Us */}
      <SEOComparison />

      {/* Contact Form */}
      <section
        id='getStarted'
        className='bg-white dark:bg-gray-900 mx-auto mb-20 p-10 rounded-lg max-w-4xl'>
        <SEOServiceForm title='Get Your Customized Ecommerce SEO Strategy' />
      </section>

      {/* ROI Section */}
      <section className='bg-gray-50 dark:bg-gray-900 mx-auto mb-16 px-6 py-12 rounded-lg max-w-4xl'>
        <h3 className='mb-6 font-bold text-zinc-900 dark:text-white text-3xl text-center'>
          ROI Focused Ecommerce SEO That Drives Sales
        </h3>
        <p className='mx-auto mb-4 max-w-3xl text-zinc-700 dark:text-zinc-300 text-center'>
          At 3Zero Digital, we focus on measurable ecommerce growth by
          optimizing your store’s SEO foundation. Our strategies include:
        </p>
        <ul className='space-y-3 mx-auto text-zinc-700 dark:text-zinc-300 list-disc list-inside'>
          <li>
            Optimizing product pages and categories to increase visibility.
          </li>
          <li>
            Improving site speed and mobile usability to reduce bounce rates.
          </li>
          <li>Building authoritative backlinks to boost search rankings.</li>
          <li>Providing transparent performance reports for ROI tracking.</li>
          <li>Scaling SEO efforts to support your expanding product range.</li>
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
            for ecommerce SEO that converts.
          </h3>
          <p className='mb-6 leading-relaxed'>
            Our promise:{' '}
            <strong>0 Vulnerability, 0 Downtime, and 0 Error</strong>. Let us
            help you boost sales with reliable, scalable ecommerce SEO
            strategies. Start seeing results in 30 days.
          </p>
          <Button className='p-5' asChild>
            <Link href='#getStarted'>Boost My Store SEO</Link>
          </Button>
        </div>

        {/* Icon added here */}
        <FaShoppingCart className='w-32 h-32 text-blue-600 dark:text-blue-400' />
      </section>
    </ComponentWrapper>
  );
};

export default EcommerceSEOPage;
