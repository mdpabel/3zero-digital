import HeroSection from '@/components/comment/hero-section';
import Quiz from '@/components/comment/quiz';
import { processes, questions } from './data';
import { getServiceMetadata } from '@/app/seo';
import DevelopmentServiceForm from '@/components/comment/development-service-form';
import { FaNode } from 'react-icons/fa';
import Video from '@/components/common/video';
import Hero from '@/components/common/Hero';
import Templates from '@/components/shop/templates';
import ProcessSteps from '@/components/comment/process-steps';
import Comparison from '@/components/development/comparison';

export const metadata = getServiceMetadata('mern-stack-app-development');

const MernStack = () => {
  return (
    <div className='mx-auto px-4 w-full max-w-6xl container'>
      <Hero
        subHeadline='Dynamic, Scalable, and Efficient Web Applications Built to Empower Your Business.'
        headline='Fullstack App Development with MERN Stack'
        description="<strong className='text-black dark:text-white'>
    Build powerful, scalable apps with our MERN stack expertise
  </strong>
  —from high-performance eCommerce to custom solutions, we craft dynamic applications that fuel growth and efficiency."
      />

      <Video videoId='na2iB6nBzIc' pageSlug='mern-stack-app-development' />

      <DevelopmentServiceForm
        Icon={<FaNode className='text-2xl text-white md:text-3xl' />}
        title='Fullstack MERN Solutions for Scalable, High-Performance Applications!'
      />

      <Templates
        filterOptions={false}
        title='7,000+ Websites Built to Perfection – Yours Could Be Next!'
        subTitle='Wether your business is new or established, whether you need a blog site or newspaper or ecommerce or personal, we can served you'
        featured={true}
        limit={6}
        sortBy='mern'
      />

      <Comparison />

      <ProcessSteps
        title='How We Build Your Dream MERN Stack Site'
        processes={processes}
      />

      <Quiz questions={questions} />
    </div>
  );
};

export default MernStack;
