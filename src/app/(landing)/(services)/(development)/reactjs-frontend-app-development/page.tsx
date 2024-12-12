import HeroSection from '@/components/comment/hero-section';
import KeyBenefits from '@/components/comment/key-benefits';
import Quiz from '@/components/comment/quiz';
import { benefits, questions } from './data';
import { getServiceMetadata } from '@/app/seo';
import DevelopmentServiceForm from '@/components/comment/development-service-form';
import { FaReact } from 'react-icons/fa'; // Import React icon for frontend services
import Video from '@/components/comment/video';
import Hero from '@/components/comment/Hero';

// Force static rendering for SEO and performance

export const metadata = getServiceMetadata('reactjs-frontend-app-development'); // Set metadata for SEO (title, description)

const FrontendDevelopment = () => {
  return (
    <div className='mx-auto px-4 w-full max-w-6xl container'>
      {/* Hero Section with a YouTube Video */}
      <Hero
        subHeadline='Build Fast, Scalable, and Beautiful User Interfaces'
        headline='Frontend Development Services'
        description="<strong className='text-black dark:text-white'>
    responsive, high-performance front-end applications
  </strong>
  using modern web technologies like React, Next.js, and more. Whether you need a single-page app or a complex UI, we provide solutions tailored to elevate your user experience and drive engagement."
      />

      <Video
        videoId='na2iB6nBzIc'
        pageSlug='reactjs-frontend-app-development'
      />

      {/* Development Service Form for Frontend */}
      <DevelopmentServiceForm
        Icon={<FaReact className='text-2xl text-white md:text-3xl' />}
        title='Transform Your User Experience with Expert Frontend Development'
      />

      {/* Interactive Quiz */}
      <Quiz questions={questions} />
    </div>
  );
};

export default FrontendDevelopment;
