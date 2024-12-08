import HeroSection from '@/components/comment/hero-section';
import KeyBenefits from '@/components/comment/key-benefits';
import Quiz from '@/components/comment/quiz';
import { benefits, questions } from './data';
import { getServiceMetadata } from '@/app/seo';
import DevelopmentServiceForm from '@/components/comment/development-service-form';
import { FaReact } from 'react-icons/fa';

export const metadata = getServiceMetadata(
  'fullstack-next-js-applications-development',
);

const NextJsFullStack = () => {
  return (
    <div className='mx-auto px-4 w-full max-w-6xl container'>
      <HeroSection
        title='Fullstack App Development with Next.js'
        subtitle='Scalable, Performant, and Secure Applications Tailored for Your Business.'
        description='Boost your business with high-performance fullstack apps built on Next.js. We deliver scalable solutions with custom APIs, server-side rendering, and seamless user experiences to ensure efficiency, security, and success.'
        youtubeId='na2iB6nBzIc'
        firstBtnText='Build Your Next-Gen App Today'
        firstBtnLink='/get-a-quote?service=nextjs-fullstack'
      />

      <DevelopmentServiceForm
        Icon={<FaReact className='text-2xl text-white md:text-3xl' />}
        title='Fullstack Next.js Solutions for Scalable and Blazing-Fast Applications!'
      />

      {/* <KeyBenefits
        benefits={benefits}
        title='Key Benefits of NextJS for fullstack app development'
      /> */}
      <Quiz questions={questions} />
    </div>
  );
};

export default NextJsFullStack;
