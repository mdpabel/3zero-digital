import HeroSection from '@/components/comment/hero-section';
import KeyBenefits from './key-benefits';
import Quiz from './quiz';

const HeadlessWordPressAndNextJs = () => {
  return (
    <div className='mx-auto px-4 w-full max-w-6xl container'>
      <HeroSection
        title='Headless WordPress & Next.js'
        subtitle='Build Faster, Safer Websites with Next.js and WordPress.'
        description='WordPress powers 43% of the web but is a prime target for
              hackers—90% of breached sites run WordPress. A hack means stolen
              data and lost trust. With headless WordPress and Next.js, we make
              your site virtually <strong>UNHACKABLE</strong> and secure.'
        youtubeId='na2iB6nBzIc'
        firstBtnText='Make My Site Unhackable'
        firstBtnLink='/'
        secondBtnText='Book a Call'
        secondBtnLink='/'
      />

      <KeyBenefits />
      <Quiz />
    </div>
  );
};

export default HeadlessWordPressAndNextJs;
