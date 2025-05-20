import ComponentWrapper from '@/components/common/component-wrapper';
import Hero from '@/components/common/Hero';
import SEOServiceForm from '../seo-form';
import {
  FaCogs,
  FaBug,
  FaTools,
  FaDatabase,
  FaServer,
  FaSearch,
  FaUsers,
  FaHandshake,
  FaChartPie,
} from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SEOComparison from '../seo-comparison';

const features = [
  {
    title: 'Site Audits & Diagnostics',
    description:
      'Comprehensive site audits to identify and fix technical SEO issues slowing down your site.',
    icon: <FaBug className='w-12 h-12 text-gradient' />,
  },
  {
    title: 'Speed Optimization',
    description:
      'Enhance page load times and site responsiveness for better user experience and rankings.',
    icon: <FaTools className='w-12 h-12 text-gradient' />,
  },
  {
    title: 'Structured Data & Schema',
    description:
      'Implement schema markup to help search engines better understand and display your content.',
    icon: <FaDatabase className='w-12 h-12 text-gradient' />,
  },
  {
    title: 'Server & Hosting Configuration',
    description:
      'Optimize server settings and ensure reliable hosting to minimize downtime and improve crawlability.',
    icon: <FaServer className='w-12 h-12 text-gradient' />,
  },
  {
    title: 'Indexation & Crawlability',
    description:
      'Ensure search engines can effectively crawl and index your site pages to maximize visibility.',
    icon: <FaSearch className='w-12 h-12 text-gradient' />,
  },
  {
    title: 'Technical SEO Monitoring',
    description:
      'Continuous monitoring and fixing of issues like broken links, redirects, and errors to maintain SEO health.',
    icon: <FaCogs className='w-12 h-12 text-gradient' />,
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
    label: 'Technical SEO Pricing',
    content: `Our pricing is customized based on your site’s complexity and goals. Starting prices vary by project scope and client needs.`,
  },
  {
    label: 'Reporting',
    content: `Receive detailed technical SEO reports including site health, crawl stats, and performance improvements.`,
  },
  {
    label: 'Accountability',
    content: `We provide dedicated support and timely fixes to ensure your technical SEO remains flawless.`,
  },
];

const TechnicalSEOPage = () => {
  return (
    <ComponentWrapper>
      <Hero
        subHeadline='Optimize Your Website’s Technical Foundation for SEO Success'
        headline='Expert Technical SEO Services'
        description="<strong className='text-black dark:text-white'>Fix technical issues, speed up your site, and improve crawlability to boost rankings and user experience.</strong> Let us help you build a robust SEO infrastructure."
      />

      {/* Main CTA */}
      <section className='bg-white dark:bg-gray-900 my-16 p-8 rounded-lg text-black dark:text-white'>
        <div className='flex md:flex-row flex-col justify-between items-center gap-8 mx-auto max-w-5xl'>
          <div>
            <h2 className='mb-4 font-bold text-3xl'>
              Build a Flawless Technical SEO Foundation{' '}
              <span className='text-blue-600 dark:text-blue-400'>
                with 3Zero Digital
              </span>
            </h2>
            <p className='mb-6 max-w-lg leading-relaxed'>
              Technical SEO is the backbone of your website’s search visibility.
              Without a solid foundation, your SEO efforts can’t reach their
              full potential. <br />
              <br />
              We ensure your site is fast, crawlable, and error-free, helping
              you rank higher and deliver a superior user experience.
            </p>
            <Button className='p-5' asChild>
              <Link href='#getStarted'>Optimize My Site Now</Link>
            </Button>
          </div>

          {/* Icon added here */}
          <FaCogs className='w-32 h-32 text-blue-600 dark:text-blue-400' />
        </div>
      </section>

      {/* Did You Know */}
      <section className='bg-gray-50 dark:bg-gray-900 mx-auto mb-16 px-6 py-12 rounded-lg max-w-4xl text-center'>
        <h3 className='mb-4 font-bold text-zinc-900 dark:text-white text-3xl'>
          Did You{' '}
          <span className='text-blue-600 dark:text-blue-400'>Know?</span>
        </h3>
        <p className='mx-auto max-w-xl text-zinc-700 dark:text-zinc-300 text-lg'>
          Over 40% of SEO problems come from technical issues like slow load
          times, broken links, and poor mobile usability. Fixing these is
          essential to boosting your rankings and user engagement.
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
        <SEOServiceForm title='Get Your Customized Technical SEO Strategy' />
      </section>

      {/* ROI Section */}
      <section className='bg-gray-50 dark:bg-gray-900 mx-auto mb-16 px-6 py-12 rounded-lg max-w-4xl'>
        <h3 className='mb-6 font-bold text-zinc-900 dark:text-white text-3xl text-center'>
          ROI Focused Technical SEO That Drives Results
        </h3>
        <p className='mx-auto mb-4 max-w-3xl text-zinc-700 dark:text-zinc-300 text-center'>
          At 3Zero Digital, we focus on delivering measurable ROI by
          strengthening your website’s technical foundation to support sustained
          SEO growth. Our approach includes:
        </p>
        <ul className='space-y-3 mx-auto text-zinc-700 dark:text-zinc-300 list-disc list-inside'>
          <li>
            Identifying and fixing critical technical SEO issues that impact
            rankings.
          </li>
          <li>
            Improving site speed and mobile usability for better user
            experience.
          </li>
          <li>
            Ensuring reliable crawlability and indexation by search engines.
          </li>
          <li>
            Providing transparent, actionable reports for data-driven decisions.
          </li>
          <li>
            Offering scalable solutions that evolve with your business needs.
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
            for flawless, reliable Technical SEO.
          </h3>
          <p className='mb-6 leading-relaxed'>
            We uphold <strong>0 Vulnerability, 0 Downtime, and 0 Error</strong>{' '}
            standards, ensuring your site runs smoothly and ranks highly. See
            real results within 30 days.
          </p>
          <Button className='p-5' asChild>
            <Link href='#getStarted'>Get My Technical SEO Audit</Link>
          </Button>
        </div>

        {/* Icon added here */}
        <FaCogs className='w-32 h-32 text-blue-600 dark:text-blue-400' />
      </section>
    </ComponentWrapper>
  );
};

export default TechnicalSEOPage;
