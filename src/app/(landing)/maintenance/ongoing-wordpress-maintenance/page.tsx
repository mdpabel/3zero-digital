import { getProduct } from '@/lib/product/get-product';
import PricingTable from './pricing-table';
import { getServiceMetadata } from '@/app/seo';

export const metadata = getServiceMetadata(
  '/maintenance/ongoing-wordpress-maintenance',
);

export const dynamic = 'force-static';

const services = [
  'Regular security audits to identify vulnerabilities',
  '24/7 malware and threat monitoring',
  'Automated daily backups with secure storage',
  'Core, theme, and plugin updates with vulnerability checks',
  'Firewall management and brute force attack prevention',
  'Login security enhancements with two-factor authentication',
  'File integrity monitoring and restoration services',
  'Performance optimization with security hardening',
];

const WordPressMaintenance = async () => {
  const { origPrice, price, productId } = await getProduct(
    'Ongoing WordPress Security Maintenance',
  );

  return (
    <div className='bg-white dark:bg-[#0B1120] shadow-lg mx-auto p-8 rounded-lg max-w-6xl'>
      <h2 className='mb-6 font-bold text-3xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
        Ongoing WordPress Security Maintenance
      </h2>

      <p className='mb-10 text-center text-lg text-zinc-600 md:text-xl dark:text-zinc-400'>
        Secure your WordPress site with our comprehensive maintenance services.
        Our team ensures your site is protected, updated, and performing at its
        best.
      </p>

      <PricingTable
        origPrice={origPrice}
        price={price}
        productId={productId}
        services={services}
      />

      <div className='gap-8 grid grid-cols-1 lg:grid-cols-2 mt-8'>
        {services.map((service, index) => (
          <div
            key={index}
            className='flex items-start border-gray-200 dark:border-gray-700 p-6 border rounded-lg'>
            <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-r from-[#614385] to-[#516395] mr-4 rounded-full w-10 h-10 text-white'>
              <span className='font-semibold text-lg'>{index + 1}</span>
            </div>
            <div>
              <h3 className='font-semibold text-lg text-zinc-800 dark:text-zinc-200'>
                {service}
              </h3>
              <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                {index % 2 === 0
                  ? 'Ensuring that your site is regularly checked for vulnerabilities and kept safe from threats.'
                  : 'Providing continuous monitoring and proactive updates to maintain security and performance.'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WordPressMaintenance;
