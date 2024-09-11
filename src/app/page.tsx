import CaseStudies from '@/components/home/case-studies';
import Hero from '@/components/home/hero';
import ServiceRecommendationTool from '@/components/home/service-recommendation';
import ThreeZeroExplanation from '@/components/home/three-zero';

export const dynamic = 'force-static';

const Home = () => {
  return (
    <div>
      <Hero />
      <ThreeZeroExplanation />
      <ServiceRecommendationTool />
      <CaseStudies />
    </div>
  );
};

export default Home;
