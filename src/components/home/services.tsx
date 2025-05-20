import ServicesClient from './services-client';
import { getProductWithServices } from '@/lib/product/get-product';

export type Active =
  | 'Development'
  | 'Maintenance'
  | 'Troubleshooting'
  | 'SEO'
  | 'Paid Advertising'
  | 'Graphics & Video';

const Services = async ({ active = 'Development' }: { active?: Active }) => {
  const services = (await getProductWithServices()).filter(
    (s) => s.products.length > 0,
  );

  const order = [
    'Development',
    'Maintenance',
    'Troubleshooting',
    'SEO',
    'Paid Advertising',
    'Graphics & Video',
  ];

  const sortedServices = services.sort((a, b) => {
    const indexA = order.indexOf(a.name);
    const indexB = order.indexOf(b.name);
    return indexA - indexB;
  });

  return <ServicesClient services={sortedServices} active={active} />;
};

export default Services;
