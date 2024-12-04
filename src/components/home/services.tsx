import ServicesClient from './services-client';
import { getProductWithServices } from '@/lib/product/get-product';

const Services = async () => {
  const services = await getProductWithServices();

  return <ServicesClient services={services} />;
};

export default Services;
