import React from 'react';
import {
  FaCode,
  FaShieldAlt,
  FaBug,
  FaSearch,
  FaBullhorn,
} from 'react-icons/fa';

const ServiceList = () => {
  const services = [
    {
      label: 'Development',
      description:
        'Comprehensive development services for WordPress, Shopify, Frontend, Backend, and more.',
      icon: <FaCode />,
      color: 'bg-blue-600',
    },
    {
      label: 'Maintenance',
      description:
        'Keep your website secure and up-to-date with our maintenance services.',
      icon: <FaShieldAlt />,
      color: 'bg-green-600',
    },
    {
      label: 'Troubleshooting',
      description: 'Quickly diagnose and fix common website errors and issues.',
      icon: <FaBug />,
      color: 'bg-red-600',
    },
    {
      label: 'SEO',
      description:
        'Optimize your website for search engines to improve visibility and rankings.',
      icon: <FaSearch />,
      color: 'bg-yellow-600',
    },
    {
      label: 'Marketing',
      description:
        'Drive traffic and increase conversions with targeted marketing strategies.',
      icon: <FaBullhorn />,
      color: 'bg-purple-600',
    },
  ];

  return (
    <div className='bg-white dark:bg-[#0B1120] px-10 md:px-20 py-24'>
      <div className='mx-auto w-full max-w-6xl text-center'>
        <h2 className='mb-16 font-bold text-4xl text-zinc-800 md:text-5xl dark:text-zinc-200'>
          Our Services
        </h2>
        <div className='gap-12 grid grid-cols-1 md:grid-cols-3'>
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.color} text-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 p-8 relative`}>
              <div className='top-4 right-4 absolute opacity-20 font-bold text-3xl'>
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className='mb-6 text-6xl'>{service.icon}</div>
              <h3 className='mb-4 font-semibold text-2xl'>{service.label}</h3>
              <p className='text-lg'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
