import ComponentWrapper from '@/components/common/component-wrapper';
import Hero from '@/components/common/Hero';
import SEOServiceForm from '../seo-form';
import {
  FaLink,
  FaHandshake,
  FaUsers,
  FaChartPie,
  FaNetworkWired,
  FaBullseye,
  FaShieldAlt,
  FaSearch,
  FaStar,
} from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import SEOComparison from '../seo-comparison';

const features = [
  {
    title: 'High-Quality Link Acquisition',
    description:
      'Gain authoritative backlinks from relevant, trustworthy websites to boost your domain authority.',
    icon: <FaLink className='w-12 h-12 text-gradient' />,
  },
  {
    title: 'Targeted Outreach',
    description:
      'We conduct personalized outreach to websites in your niche to ensure links are relevant and impactful.',
    icon: <FaBullseye className='w-12 h-12 text-gradient' />,
  },
  {
    title: 'Natural Link Profiles',
    description:
      'Build a natural backlink profile with diverse link sources that meet Google’s guidelines.',
    icon: <FaNetworkWired className='w-12 h-12 text-gradient' />,
  },
  {
    title: 'Reputation & Brand Building',
    description:
      'Backlinks increase your online reputation and brand awareness in your industry.',
    icon: <FaStar className='w-12 h-12 text-gradient' />,
  },
  {
    title: 'Competitive Analysis',
    description:
      'We analyze your competitors’ backlink strategies to identify opportunities and gaps.',
    icon: <FaSearch className='w-12 h-12 text-gradient' />,
  },
  {
    title: 'Safe & White-Hat Techniques',
    description:
      'Our strategies avoid penalties by adhering strictly to search engine best practices.',
    icon: <FaShieldAlt className='w-12 h-12 text-gradient' />,
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
    label: 'Backlink Pricing',
    content: `Our backlink building packages are tailored for quality and relevance, starting at competitive rates designed for sustainable growth.`,
  },
  {
    label: 'Reporting',
    content: `Receive transparent monthly reports detailing new backlinks, domain authority improvements, and campaign impact.`,
  },
  {
    label: 'Accountability',
    content: `Our team provides consistent communication and ensures all links are earned through ethical, white-hat methods.`,
  },
];

const BacklinkBuildingPage = () => {
  return (
    <ComponentWrapper>
      <Hero
        subHeadline='Boost Your Website Authority and Rankings'
        headline='Professional Backlink Building Services'
        description="<strong className='text-black dark:text-white'>Earn high-quality backlinks that improve your domain authority and organic search rankings.</strong> Our targeted strategies are designed to drive lasting SEO success."
      />

      {/* Main CTA */}
      <section className='bg-white dark:bg-gray-900 my-16 p-8 rounded-lg text-black dark:text-white'>
        <div className='flex md:flex-row flex-col justify-between items-center gap-8 mx-auto max-w-5xl'>
          <div>
            <h2 className='mb-4 font-bold text-3xl'>
              Build Powerful Backlinks{' '}
              <span className='text-blue-600 dark:text-blue-400'>
                with 3Zero Digital
              </span>
            </h2>
            <p className='mb-6 max-w-lg leading-relaxed'>
              Backlinks remain one of the strongest ranking signals. If you want
              to improve your site’s authority and search engine performance,
              you need a strong backlink profile. <br />
              <br />
              We focus on quality, relevance, and safe link building strategies
              that deliver results without risks.
            </p>
            <Button className='p-5' asChild>
              <Link href='#getStarted'>Start Building Backlinks</Link>
            </Button>
          </div>

          {/* Icon added here */}
          <FaLink className='w-32 h-32 text-blue-600 dark:text-blue-400' />
        </div>
      </section>

      {/* Did You Know */}
      <section className='bg-gray-50 dark:bg-gray-900 mx-auto mb-16 px-6 py-12 rounded-lg max-w-4xl text-center'>
        <h3 className='mb-4 font-bold text-zinc-900 dark:text-white text-3xl'>
          Did You{' '}
          <span className='text-blue-600 dark:text-blue-400'>Know?</span>
        </h3>
        <p className='mx-auto max-w-xl text-zinc-700 dark:text-zinc-300 text-lg'>
          Websites with strong backlink profiles rank significantly higher in
          Google search results. Quality backlinks build trust with search
          engines and improve your organic traffic.
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
        <SEOServiceForm title='Get Your Customized Backlink Building Strategy' />
      </section>

      {/* ROI Section */}
      <section className='bg-gray-50 dark:bg-gray-900 mx-auto mb-16 px-6 py-12 rounded-lg max-w-4xl'>
        <h3 className='mb-6 font-bold text-zinc-900 dark:text-white text-3xl text-center'>
          ROI Focused Backlink Building That Strengthens Your SEO
        </h3>
        <p className='mx-auto mb-4 max-w-3xl text-zinc-700 dark:text-zinc-300 text-center'>
          At 3Zero Digital, we focus on building backlinks that not only improve
          rankings but deliver measurable ROI by:
        </p>
        <ul className='space-y-3 mx-auto text-zinc-700 dark:text-zinc-300 list-disc list-inside'>
          <li>
            Acquiring relevant, authoritative links from niche-specific sources.
          </li>
          <li>
            Ensuring all links adhere to white-hat SEO best practices for
            safety.
          </li>
          <li>
            Monitoring link profile health to avoid penalties or toxic
            backlinks.
          </li>
          <li>
            Providing transparent reporting on link acquisition and impact.
          </li>
          <li>
            Supporting long-term SEO growth with scalable link building
            strategies.
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
            for quality, safe backlink building.
          </h3>
          <p className='mb-6 leading-relaxed'>
            Our promise:{' '}
            <strong>0 Vulnerability, 0 Downtime, and 0 Error</strong>. Build
            your authority safely and effectively with our expert backlink
            services.
          </p>
          <Button className='p-5' asChild>
            <Link href='#getStarted'>Get Started Today</Link>
          </Button>
        </div>

        {/* Icon added here */}
        <FaLink className='w-32 h-32 text-blue-600 dark:text-blue-400' />
      </section>
    </ComponentWrapper>
  );
};

export default BacklinkBuildingPage;
