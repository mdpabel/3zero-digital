import HeroSection from '@/components/comment/hero-section';
import KeyBenefits from '@/components/comment/key-benefits';
import Quiz from '@/components/comment/quiz';
import { benefits, questions } from './data';
import { getServiceMetadata } from '@/app/seo';

export const metadata = getServiceMetadata('/mern-stack');

const MernStack = () => {
  return (
    <div className='mx-auto px-4 w-full max-w-6xl container'>
      <HeroSection
        title='Fullstack App Development with MERN Stack'
        subtitle='Dynamic, Scalable, and Efficient Web Applications Built to Empower Your Business.'
        description='Unlock the power of modern web technologies with our MERN stack development services. We specialize in creating dynamic and scalable fullstack applications using MongoDB, Express.js, React, and Node.js. Whether you need a high-performance e-commerce platform, a robust SaaS solution, or a custom app, we deliver tailored solutions that drive growth and efficiency for your business.'
        youtubeId='na2iB6nBzIc'
        firstBtnText='Build Your Fullstack Solution Today'
        firstBtnLink='/get-a-quote?service=mern-stack'
      />

      <KeyBenefits benefits={benefits} title='Key Benefits of MERN stack' />
      <Quiz questions={questions} />
    </div>
  );
};

export default MernStack;
