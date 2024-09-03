import React from 'react';

const WordPressSpeedOptimization = () => {
  const services = [
    'Comprehensive website speed audit',
    'Image optimization and compression',
    'CSS and JavaScript minification',
    'Leverage browser caching',
    'Reduce server response time',
    'Enable GZIP compression',
    'Optimize database and queries',
    'Defer offscreen images',
  ];

  return (
    <div className='bg-white dark:bg-[#0B1120] shadow-lg mx-auto mt-10 p-8 rounded-lg max-w-5xl'>
      <h2 className='mb-6 font-bold text-3xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
        WordPress Speed Optimization
      </h2>

      <p className='mb-8 text-center text-lg text-zinc-700 md:text-xl dark:text-zinc-400'>
        Supercharge your WordPress site with our comprehensive speed
        optimization services. Improve loading times, enhance user experience,
        and boost your search engine rankings.
      </p>

      <div className='gap-8 grid grid-cols-1 md:grid-cols-2'>
        {/* Services List */}
        <div>
          <h3 className='mb-4 font-semibold text-xl text-zinc-800 dark:text-zinc-200'>
            What&apos;s Included
          </h3>
          <ul className='space-y-4'>
            {services.map((service, index) => (
              <li key={index} className='flex items-start'>
                <div className='flex-shrink-0 bg-gradient-to-r from-[#614385] to-[#516395] mr-3 rounded-full w-4 h-4'></div>
                <span className='text-base text-zinc-700 dark:text-zinc-300'>
                  {service}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing Table */}
        <div className='flex flex-col justify-center items-center'>
          <div className='bg-gray-100 dark:bg-gray-900 shadow-md p-6 rounded-lg w-full'>
            <h3 className='mb-4 font-semibold text-2xl text-center text-zinc-800 dark:text-zinc-200'>
              Speed Optimization Service
            </h3>
            <div className='mb-6 text-center'>
              <span className='block font-bold text-4xl text-zinc-800 dark:text-zinc-200'>
                $349
              </span>
              <span className='block mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                One-time fee
              </span>
            </div>
            <p className='mb-6 text-center text-sm text-zinc-600 dark:text-zinc-400'>
              Includes full site audit, speed optimization, and performance
              enhancements.
            </p>
            <div className='text-center'>
              <button className='bg-gradient-to-r from-[#614385] to-[#516395] shadow-md px-6 py-3 rounded-lg font-semibold text-white transform transition-transform hover:scale-105'>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordPressSpeedOptimization;
