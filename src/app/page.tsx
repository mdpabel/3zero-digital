import Hero from '@/components/home/hero';
import ServiceList from '@/components/home/services';
import ThreeZeroExplanation from '@/components/home/three-zero';

export const dynamic = 'force-static';

const Home = () => {
  return (
    <div>
      <Hero />
      <ThreeZeroExplanation />
      <ServiceList />
    </div>
  );
};

export default Home;
