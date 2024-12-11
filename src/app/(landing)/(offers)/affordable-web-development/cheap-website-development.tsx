import Hero from './Hero';
import HostingFeatures from './hosting-features';
import ServicesProvided from './service-provided';
import FAQ from './FAQ';
import YouTubeBrowserFrame from './video';

const CheapWebsiteDevelopment = () => {
  return (
    <div className='mx-auto px-4 max-w-6xl'>
      <Hero />
      <YouTubeBrowserFrame
        videoId='na2iB6nBzIc'
        pageSlug='affordable-web-development'
      />
      <HostingFeatures />
      <ServicesProvided />
      <FAQ />
    </div>
  );
};

export default CheapWebsiteDevelopment;
