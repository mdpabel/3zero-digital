import Hero from '@/components/common/Hero';
import Image from 'next/image';
import ThreeZeroLight from '@/../public/images/3zer-light.png';
import ThreeZeroDark from '@/../public/images/3zero-dark.png';
import Services from '@/components/home/services';
import why3Zero2 from '@/../public/images/why-3zero-2.png';
import why3Zero from '@/../public/images/why-3zero.png';
import { genMetaData } from '@/app/seo';

export const dynamic = 'force-static';

export const metadata = genMetaData({
  title: 'About us',
  url: '/about-us',
});

const AboutUs = () => {
  return (
    <div className='relative mx-auto px-4 max-w-6xl'>
      {/* Hero Section */}
      <Hero
        headline='Empowering Digital Solutions with Zero Compromises'
        subHeadline='Revolutionizing Traditional Software Services'
        description='Experience the future of reliable and efficient digital solutions crafted by experts with a customer-first mindset.'
      />

      {/* What Problem 3Zero Digital Solves */}
      <section className='bg-white dark:bg-gray-900 shadow-lg px-4 md:px-8 py-16 rounded-lg'>
        <div className='mx-auto max-w-6xl'>
          <h2 className='mb-6 font-extrabold text-4xl text-center text-gray-900 dark:text-gray-100'>
            What Problem Does 3Zero Digital Solve?
          </h2>
          <p className='text-center text-gray-700 text-lg dark:text-gray-300 leading-relaxed'>
            The "3Zero" concept represents our commitment to zero
            vulnerabilities, zero downtime, and zero errors. While perfect
            zeroes may not always be achievable, our relentless pursuit of
            excellence ensures that your business enjoys exceptional
            performance, reliability, and security in its digital journey.
          </p>
        </div>
      </section>

      {/* Who Are Behind 3Zero Digital */}
      <section className='px-4 md:px-8 py-16'>
        <div className='items-center gap-12 grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-6xl'>
          <div>
            <h2 className='mb-6 font-extrabold text-4xl text-gray-900 dark:text-gray-100'>
              Who Are Behind 3Zero Digital?
            </h2>
            <p className='text-gray-700 text-lg dark:text-gray-300 leading-relaxed'>
              We are five passionate friends, graduates in Computer Science, who
              started this journey in 2019. With experience in freelancing,
              remote jobs, and local software companies, we handled over 8,000
              clients, fixed 40,000+ hacked sites, and built 1,000+ websites.
            </p>
            <p className='mt-4 text-gray-700 text-lg dark:text-gray-300 leading-relaxed'>
              We envisioned elevating traditional software services to the next
              level—making them more reliable, affordable, and expertly crafted
              by experienced professionals.
            </p>
          </div>
          <Image
            src={ThreeZeroLight}
            alt='Our Story'
            className='dark:block hidden'
          />
          <Image
            src={ThreeZeroDark}
            alt='Our Story'
            className='block dark:hidden'
          />
        </div>
      </section>

      {/* Who Is 3Zero Digital? */}
      <section className='bg-gray-100 dark:bg-gray-900 shadow-inner px-4 md:px-8 py-16 rounded-lg'>
        <div className='mx-auto max-w-6xl'>
          <h2 className='mb-6 font-extrabold text-4xl text-center text-gray-900 dark:text-gray-100'>
            Who Is 3Zero Digital?
          </h2>
          <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {[
              {
                icon: '🌍',
                description:
                  'A team of 30+ professionals worldwide, helping businesses get online with zero compromises.',
              },
              {
                icon: '🏢',
                description:
                  'Fully remote company—it works for us! Agile, efficient, and free from corporate rigidity.',
              },
              {
                icon: '💬',
                description:
                  'Everyone communicates with customers, ensuring transparency and honesty in every project.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className='bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg'>
                <div className='mb-4 text-5xl text-center'>{item.icon}</div>
                <p className='text-center text-gray-700 text-lg dark:text-gray-300'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why 3Zero Digital? */}
      <section className='items-center gap-12 grid grid-cols-1 lg:grid-cols-2 mx-auto max-w-6xl'>
        <div>
          <Image
            src={why3Zero2}
            alt='Our Story'
            className='dark:block hidden'
          />
          <Image src={why3Zero} alt='Our Story' className='block dark:hidden' />
        </div>
        <div className='mx-auto max-w-6xl'>
          <h2 className='mb-6 font-extrabold text-4xl text-gray-900 dark:text-gray-100'>
            Why 3Zero Digital?
          </h2>
          <p className='text-gray-700 text-lg dark:text-gray-300 leading-relaxed'>
            At 3Zero Digital, we combine technical expertise, innovation, and a
            customer-first approach. Our mission is to deliver unparalleled
            digital solutions—efficiently, affordably, and with zero compromises
            on quality and performance.
          </p>
        </div>
      </section>

      {/* Services  */}
      <div id='getStarted'>
        <Services />
      </div>
    </div>
  );
};

export default AboutUs;
