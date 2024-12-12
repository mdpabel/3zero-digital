import HeroSection from '@/components/comment/hero-section';
import Quiz from '@/components/comment/quiz';
import { questions } from './data';
import { getServiceMetadata } from '@/app/seo';
import DevelopmentServiceForm from '@/components/comment/development-service-form';
import { FaNode } from 'react-icons/fa';
import Video from '@/components/comment/video';
import Hero from '@/components/comment/Hero';

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

      {/* <KeyBenefits benefits={benefits} title='Key Benefits of MERN stack' /> */}
      <Quiz questions={questions} />
    </div>
  );
};

export default MernStack;
