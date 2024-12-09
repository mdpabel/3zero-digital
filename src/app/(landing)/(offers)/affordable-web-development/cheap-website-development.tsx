import Hero from './Hero';
import HostingFeatures from './hosting-features';
import ServicesProvided from './service-provided';
import FAQ from './FAQ';

const CheapWebsiteDevelopment = () => {
  return (
    <div className='mx-auto px-4 max-w-6xl'>
      <Hero />
      <HostingFeatures />
      <ServicesProvided />
      <FAQ />
    </div>
  );
};

export default CheapWebsiteDevelopment;
