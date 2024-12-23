import ServicesClient from './services-client';
import { getProductWithServices } from '@/lib/product/get-product';

export type Active =
  | 'Development'
  | 'Marketing'
  | 'Troubleshooting'
  | 'Maintenance';

const Services = async ({ active = 'Development' }: { active?: Active }) => {
  const services = await getProductWithServices();

  console.log({ services });
  return <ServicesClient services={services} active={active} />;
};

export default Services;
