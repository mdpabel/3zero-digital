import HeroSection from '@/components/comment/hero-section';
import KeyBenefits from '@/components/comment/key-benefits';
import Quiz from '@/components/comment/quiz';
import { benefits, questions } from './data';
import { getServiceMetadata } from '@/app/seo';

export const dynamic = 'force-static';

export const metadata = getServiceMetadata('/wordpress');

const WordPressDevelopment = () => {
  return (
    <div className='mx-auto px-4 w-full max-w-6xl container'>
      <HeroSection
        title='Expert WordPress Development'
        subtitle='Custom, Scalable, and Secure Solutions for Your Business Growth.'
        description='Your website is the cornerstone of your online presence. We specialize in building WordPress sites that are not only visually stunning but also optimized for speed, security, and scalability. Whether you need an eCommerce platform, a business website, or a custom solution, we deliver tailored results to meet your goals and exceed expectations.'
        youtubeId='na2iB6nBzIc'
        firstBtnText='Start Building Your Dream Website'
        firstBtnLink='/get-a-quote?service=wordpress'
      />

      <KeyBenefits
        benefits={benefits}
        title='Key Benefits of WordPress for Web Development'
      />
      <Quiz questions={questions} />
    </div>
  );
};

export default WordPressDevelopment;
