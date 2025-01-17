import ServicesClient from './services-client';
import { getProductWithServices } from '@/lib/product/get-product';

export type Active =
  | 'Development'
  | 'Marketing'
  | 'Troubleshooting'
  | 'Maintenance';

const Services = async ({ active = 'Maintenance' }: { active?: Active }) => {
  const services = await getProductWithServices();

  const order = [
    'Maintenance',
    'Development',
    'Marketing',
    'Troubleshooting',
    'Exclusive',
  ];

  const sortedServices = services.sort((a, b) => {
    const indexA = order.indexOf(a.name);
    const indexB = order.indexOf(b.name);
    return indexA - indexB;
  });

  return <ServicesClient services={sortedServices} active={active} />;
};

export default Services;
