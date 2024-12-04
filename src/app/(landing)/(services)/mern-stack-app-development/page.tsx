import HeroSection from '@/components/comment/hero-section';
import KeyBenefits from '@/components/comment/key-benefits';
import Quiz from '@/components/comment/quiz';
import { benefits, questions } from './data';
import { getServiceMetadata } from '@/app/seo';
import DevelopmentServiceForm from '@/components/comment/development-service-form';
import { FaNode } from 'react-icons/fa';

export const dynamic = 'force-static';

export const metadata = getServiceMetadata('mern-stack-app-development');

const MernStack = () => {
  return (
    <div className='mx-auto px-4 w-full max-w-6xl container'>
      <HeroSection
        title='Fullstack App Development with MERN Stack'
        subtitle='Dynamic, Scalable, and Efficient Web Applications Built to Empower Your Business.'
        description='Build powerful, scalable apps with our MERN stack expertise. From high-performance eCommerce to custom solutions, we craft dynamic applications that fuel growth and efficiency.'
        youtubeId='na2iB6nBzIc'
        firstBtnText='Build Your Fullstack Solution Today'
        firstBtnLink='/get-a-quote?service=mern-stack'
      />

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
