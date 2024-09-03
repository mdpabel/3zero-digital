import React from 'react';

const SSLInstallation = () => {
  const benefits = [
    'Encrypts data between your website and visitors',
    'Boosts search engine rankings with HTTPS',
    'Enhances trust with SSL padlock and certificate',
    'Secures online transactions and sensitive information',
    'Prevents data breaches and man-in-the-middle attacks',
    'Complies with industry standards and regulations',
    'Ensures compatibility with modern web browsers',
    'Provides ongoing support and SSL certificate renewal',
  ];

  return (
    <div className='bg-gradient-to-b from-gray-100 dark:from-gray-900 to-white dark:to-gray-800 py-12'>
      <div className='mx-auto px-6 lg:px-8 max-w-7xl'>
        <div className='text-center'>
          <h2 className='font-extrabold text-4xl text-zinc-800 dark:text-zinc-200'>
            SSL Installation & Configuration
          </h2>
          <p className='mt-4 text-lg text-zinc-600 dark:text-zinc-400'>
            Secure your website with our comprehensive SSL installation service.
            We handle everything from setup to ongoing support.
          </p>
        </div>

        <div className='gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className='border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0B1120] shadow-lg hover:shadow-2xl p-6 border rounded-lg transform transition-transform hover:scale-105'>
              <div className='flex justify-center items-center bg-gradient-to-r from-[#614385] to-[#516395] mb-4 rounded-full w-12 h-12 text-white'>
                <span className='font-bold text-xl'>{index + 1}</span>
              </div>
              <h3 className='font-semibold text-lg text-zinc-800 dark:text-zinc-200'>
                {benefit}
              </h3>
            </div>
          ))}
        </div>

        <div className='flex md:flex-row flex-col justify-between items-center bg-gradient-to-r from-[#614385] to-[#516395] shadow-xl mt-16 p-8 rounded-lg text-white'>
          <div className='mb-6 md:mb-0'>
            <h3 className='font-bold text-2xl'>
              Full SSL Installation Package
            </h3>
            <p className='mt-2 text-lg'>
              Starting at just <span className='font-bold'>$99</span>
            </p>
          </div>
          <button className='bg-white shadow-lg px-6 py-3 rounded-lg font-semibold text-[#614385] transform hover:scale-105 transition-transform'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default SSLInstallation;
