import React from 'react';

export const dynamic = 'force-static';

const WordPressMaintenance = () => {
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

      <div className='gap-8 grid grid-cols-1 lg:grid-cols-2'>
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

      <div className='flex md:flex-row flex-col justify-between items-center mt-12'>
        <div className='mb-8 md:mb-0 text-center md:text-left'>
          <h3 className='font-bold text-2xl text-zinc-800 dark:text-zinc-200'>
            Comprehensive Security Package
          </h3>
          <p className='text-lg text-zinc-600 dark:text-zinc-400'>
            Starting at just{' '}
            <span className='font-bold text-zinc-800 dark:text-zinc-200'>
              $129/month
            </span>
          </p>
        </div>
        <button className='bg-gradient-to-r from-[#614385] to-[#516395] shadow-md px-8 py-3 rounded-lg font-semibold text-white transform transition-transform hover:scale-105'>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WordPressMaintenance;
