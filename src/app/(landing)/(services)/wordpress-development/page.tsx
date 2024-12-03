import HeroSection from '@/components/comment/hero-section';
import KeyBenefits from '@/components/comment/key-benefits';
import Quiz from '@/components/comment/quiz';
import { processes, questions } from './data';
import { getServiceMetadata } from '@/app/seo';
import DevelopmentServiceForm from '@/components/comment/development-service-form';
import { FaWordpress } from 'react-icons/fa';
import ProcessSteps from '@/components/comment/process-steps';

export const dynamic = 'force-static';

export const metadata = getServiceMetadata('/wordpress');

const WordPressDevelopment = () => {
  return (
    <div className='mx-auto px-4 w-full max-w-6xl container'>
      <HeroSection
        title='Expert WordPress Development'
        subtitle='Custom, Scalable, and Secure Solutions for Your Business Growth.'
        description='Your website is key to your online presence. We build WordPress sites that are visually appealing, fast, secure, and scalable. From eCommerce to business websites, we create tailored solutions that meet your goals and exceed expectations.'
        youtubeId='na2iB6nBzIc'
        firstBtnText='Start Building Your Dream Website'
        firstBtnLink='/get-a-quote?service=wordpress'
      />

      <DevelopmentServiceForm
        Icon={<FaWordpress className='text-2xl text-white md:text-3xl' />}
        title='Custom WordPress Solutions for Seamless Performance & Growth'
      />
      <Quiz questions={questions} />
      <ProcessSteps
        title='How We Build Your Dream WordPress Site'
        processes={processes}
      />
    </div>
  );
};

export default WordPressDevelopment;
