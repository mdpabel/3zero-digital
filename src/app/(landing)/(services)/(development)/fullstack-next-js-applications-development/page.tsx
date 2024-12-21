import HeroSection from '@/components/comment/hero-section';
import KeyBenefits from '@/components/comment/key-benefits';
import Quiz from '@/components/comment/quiz';
import { benefits, processes, questions } from './data';
import { getServiceMetadata } from '@/app/seo';
import DevelopmentServiceForm from '@/components/comment/development-service-form';
import { FaReact } from 'react-icons/fa';
import Video from '@/components/common/video';
import Hero from '@/components/common/Hero';
import Templates from '@/components/shop/templates';
import ProcessSteps from '@/components/comment/process-steps';
import Comparison from '@/components/development/comparison';

export const metadata = getServiceMetadata(
  'fullstack-next-js-applications-development',
);

const NextJsFullStack = () => {
  return (
    <div className='mx-auto px-4 w-full max-w-6xl container'>
      <Hero
        subHeadline='Scalable, Performant, and Secure Applications Tailored for Your Business.'
        headline='Fullstack App Development with Next.js'
        description="<strong className='text-black dark:text-white'>
    high-performance fullstack apps built on Next.js
  </strong>
  with custom APIs, server-side rendering, and seamless user experiences. Boost efficiency, security, and success for your business."
      />

      <Video
        videoId='na2iB6nBzIc'
        pageSlug='fullstack-next-js-applications-development'
      />

      <DevelopmentServiceForm
        Icon={<FaReact className='text-2xl text-white md:text-3xl' />}
        title='Fullstack Next.js Solutions for Scalable and Blazing-Fast Applications!'
      />

      <Templates
        filterOptions={false}
        title='7,000+ Websites Built to Perfection – Yours Could Be Next!'
        subTitle='Wether your business is new or established, whether you need a blog site or newspaper or ecommerce or personal, we can served you'
        featured={true}
        limit={6}
        sortBy='next'
      />

      <Comparison />

      <ProcessSteps
        title='How We Build Your Dream Fullstack Nextjs Site'
        processes={processes}
      />

      <Quiz questions={questions} />
    </div>
  );
};

export default NextJsFullStack;
