import HeroSection from '@/components/comment/hero-section';
import KeyBenefits from '@/components/comment/key-benefits';
import Quiz from '@/components/comment/quiz';
import { benefits, questions } from './data';
import { getServiceMetadata } from '@/app/seo';

export const metadata = getServiceMetadata('/nextjs-fullstack');

const NextJsFullStack = () => {
  return (
    <div className='mx-auto px-4 w-full max-w-6xl container'>
      <HeroSection
        title='Fullstack App Development with Next.js'
        subtitle='Scalable, Performant, and Secure Applications Tailored for Your Business.'
        description='Take your business to the next level with robust fullstack apps built using Next.js. Our expert team creates scalable, high-performing applications that deliver seamless user experiences. From custom API integrations to server-side rendering and advanced features, we design solutions that align perfectly with your goals and ensure maximum efficiency and security.'
        youtubeId='na2iB6nBzIc'
        firstBtnText='Build Your Next-Gen App Today'
        firstBtnLink='/get-a-quote?service=nextjs-fullstack'
      />

      <KeyBenefits
        benefits={benefits}
        title='Key Benefits of NextJS for fullstack app development'
      />
      <Quiz questions={questions} />
    </div>
  );
};

export default NextJsFullStack;
