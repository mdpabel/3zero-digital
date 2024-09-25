import { formatCurrency } from '@/lib/utils';
import {
  FaShieldAlt,
  FaServer,
  FaCode,
  FaLock,
  FaSyncAlt,
  FaTools,
} from 'react-icons/fa';
import { HiOutlineGlobe } from 'react-icons/hi';

const PricingTable = ({ product }: { product: swell.Product }) => {
  const price = product?.price || 10;
  const origPrice = product?.origPrice || 0;
  const productId = product?.id || 'domain-hosting-id';

  const services = [
    {
      name: 'Free Domain & Email',
      icon: <HiOutlineGlobe className='w-12 h-12 text-blue-500' />,
    },
    {
      name: '2GB NVMe Storage',
      icon: <FaServer className='w-12 h-12 text-blue-500' />,
    },
    {
      name: '100+ Pre-Built Templates',
      icon: <FaCode className='w-12 h-12 text-blue-500' />,
    },
    {
      name: 'Zero Vulnerabilities',
      icon: <FaShieldAlt className='w-12 h-12 text-blue-500' />,
    },
    { name: 'Free SSL', icon: <FaLock className='w-12 h-12 text-blue-500' /> },
    {
      name: 'Daily Backup on Server',
      icon: <FaSyncAlt className='w-12 h-12 text-blue-500' />,
    },
    {
      name: 'FTP, WordPress Admin & phpmyadmin access',
      icon: <FaTools className='w-12 h-12 text-blue-500' />,
    },
    {
      name: '24/7 Support',
      icon: <FaShieldAlt className='w-12 h-12 text-blue-500' />,
    },
  ];

  return (
    <div
      id='pricing'
      className='bg-white dark:bg-gray-900 shadow-lg mx-auto p-10 rounded-lg max-w-6xl'>
      <h2 className='mb-6 font-extrabold text-3xl text-center text-gray-800 dark:text-white'>
        Domain Hosting Package
      </h2>

      {/* Pricing Section */}
      <div className='flex md:flex-row flex-col justify-between items-center mb-12'>
        <div className='text-center md:text-left'>
          <h3 className='font-semibold text-2xl text-gray-800 dark:text-white'>
            Complete Website Hosting Package
          </h3>
          <p className='mt-2 text-gray-600 text-lg dark:text-gray-400'>
            Starting at just{' '}
            {origPrice > price && (
              <span className='mr-2 text-gray-500 dark:text-gray-400 line-through'>
                {formatCurrency({ amount: origPrice })}
              </span>
            )}
            <span className='font-bold text-gray-800 dark:text-white'>
              {formatCurrency({ amount: price })}
            </span>
          </p>
        </div>

        <a
          href={`/checkout/${productId}`}
          className='shadow-lg mt-4 md:mt-0 px-8 py-3 rounded-lg font-semibold text-white transition-transform primary-color hover:scale-105'>
          Checkout Now
        </a>
      </div>

      {/* Service Breakdown */}
      <ul className='gap-8 grid grid-cols-1 md:grid-cols-2 mb-10'>
        {services.map((service, index) => (
          <li
            key={index}
            className='flex items-center space-x-6 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-md hover:shadow-lg p-5 border rounded-lg transition-shadow'>
            {service.icon}
            <span className='font-semibold text-gray-800 text-lg dark:text-white'>
              {service.name}
            </span>
          </li>
        ))}
      </ul>

      <p className='text-center text-gray-500 text-sm dark:text-gray-400'>
        *Terms and conditions apply. Hosting package renews annually at the
        current rate.
      </p>
    </div>
  );
};

export default PricingTable;
