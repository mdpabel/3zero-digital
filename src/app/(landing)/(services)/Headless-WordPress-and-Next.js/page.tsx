import HeroSection from '@/components/comment/hero-section';
import Quiz from '@/components/comment/quiz';
import { getServiceMetadata } from '@/app/seo';
import DevelopmentServiceForm from '@/components/comment/development-service-form';
import { FaCogs } from 'react-icons/fa';
import { questions } from './data';
import PerformanceComparison from './performance-comparison';

export const metadata = getServiceMetadata('headless-wordpress-and-next.js');

const HeadlessWordPressAndNextJs = () => {
  return (
    <div className='mx-auto px-4 w-full max-w-6xl container'>
      <HeroSection
        title='Headless WordPress & Next.js'
        subtitle='Build Faster, Safer Websites with Next.js and WordPress.'
        description='WordPress powers 43% of the web but is a prime target for
              hackers—90% of breached sites run WordPress. A hack means stolen
              data and lost trust. With headless WordPress and Next.js, we make
              your site virtually UNHACKABLE and secure.'
        youtubeId='na2iB6nBzIc'
        firstBtnText='Make My Site Unhackable'
        firstBtnLink='/get-a-quote?service=headless-wordpress'
      />

      <PerformanceComparison />

      <DevelopmentServiceForm
        Icon={<FaCogs className='text-2xl text-white md:text-3xl' />}
        title='Headless WordPress & NextJs'
      />

      <Quiz questions={questions} />
    </div>
  );
};

export default HeadlessWordPressAndNextJs;
