import HeroSection from '@/components/comment/hero-section';
import KeyBenefits from '@/components/comment/key-benefits';
import Quiz from '@/components/comment/quiz';
import { benefits, questions } from './data';
import { getServiceMetadata } from '@/app/seo';
import DevelopmentServiceForm from '@/components/comment/development-service-form';
import { FaReact } from 'react-icons/fa'; // Import React icon for frontend services

export const dynamic = 'force-static'; // Force static rendering for SEO and performance

export const metadata = getServiceMetadata('/frontend'); // Set metadata for SEO (title, description)

const FrontendDevelopment = () => {
  return (
    <div className='mx-auto px-4 w-full max-w-6xl container'>
      {/* Hero Section with a YouTube Video */}
      <HeroSection
        title='Frontend Development Services'
        subtitle='Build Fast, Scalable, and Beautiful User Interfaces'
        description='We specialize in crafting responsive, high-performance front-end applications using modern web technologies like React, Next.js, and more. Whether you need a single-page app or a complex UI, we provide solutions tailored to elevate your user experience and drive engagement.'
        youtubeId='na2iB6nBzIc' // Example YouTube embed video for visual appeal
        firstBtnText='Start Your Frontend Project Today'
        firstBtnLink='/get-a-quote?service=frontend' // CTA to get a quote
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
