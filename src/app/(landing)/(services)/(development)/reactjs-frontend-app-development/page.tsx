import Quiz from '@/components/comment/quiz';
import { benefits, processes, questions } from './data';
import { getServiceMetadata } from '@/app/seo';
import DevelopmentServiceForm from '@/components/comment/development-service-form';
import { FaReact } from 'react-icons/fa'; // Import React icon for frontend services
import Video from '@/components/common/video';
import Hero from '@/components/common/Hero';
import ProcessSteps from '@/components/comment/process-steps';
import Comparison from '@/components/development/comparison';
import { generateSchemaMarkup } from '@/app/schema-markup-generator';
import Script from 'next/script';
import CompaniesLogo from '@/components/home/company-logos';
import FeaturedServices from '@/components/featured-services/featured-services';
import ComponentWrapper from '@/components/common/component-wrapper';

export const dynamic = 'force-static';

const slug = 'reactjs-frontend-app-development';

export const metadata = getServiceMetadata(slug); // Set metadata for SEO (title, description)

const FrontendDevelopment = () => {
  const jsonLd = generateSchemaMarkup(slug);

  return (
    <ComponentWrapper>
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
        Icon={<FaReact className='text-white text-2xl md:text-3xl' />}
        title='Transform Your User Experience with Expert Frontend Development'
      />

      <Comparison />

      <CompaniesLogo />
      <FeaturedServices />

      <ProcessSteps
        title='How We Build Your Dream React App'
        processes={processes}
      />

      {/* Interactive Quiz */}
      <Quiz questions={questions} />

      <Script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </ComponentWrapper>
  );
};

export default FrontendDevelopment;
