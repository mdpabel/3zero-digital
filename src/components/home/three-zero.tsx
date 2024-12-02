import React from 'react';
import Title from '../common/title';

const Why3Zero = () => {
  return (
    <div className='relative px-10 md:px-20 py-10 dark:py-20 overflow-hidden'>
      <div className='mx-auto w-full max-w-6xl'>
        <Title
          title='Why Choose 3zero'
          subTitle='Discover the reasons behind our commitment to delivering excellence with zero vulnerabilities, zero downtime, and zero errors.'
        />

        <div className='relative flex md:flex-row flex-col justify-between items-center md:space-x-12 space-y-12 md:space-y-0'>
          <div className='relative w-full md:w-1/3 text-center md:text-left'>
            <div className='-top-10 -left-10 absolute opacity-10 font-bold text-[200px] text-blue-500 transform select-none -rotate-12'>
              0
            </div>
            <h3 className='relative z-10 mb-4 font-bold text-3xl text-blue-600 md:text-4xl dark:text-blue-400'>
              Zero Vulnerabilities
            </h3>
            <p className='relative z-10 text-gray-600 text-lg dark:text-gray-400'>
              At 3Zero, our top priority is security. We ensure your digital
              products and infrastructure are free from vulnerabilities,
              providing robust protection against threats.
            </p>
          </div>

          <div className='relative w-full md:w-1/3 text-center md:text-left'>
            <div className='top-0 left-0 absolute opacity-10 font-bold text-[200px] text-green-500 transform select-none rotate-12'>
              0
            </div>
            <h3 className='relative z-10 mb-4 font-bold text-3xl text-green-600 md:text-4xl dark:text-green-400'>
              Zero Downtime
            </h3>
            <p className='relative z-10 text-gray-600 text-lg dark:text-gray-400'>
              We guarantee seamless uptime. Our solutions ensure your business
              operates without disruptions, keeping your website or app live
              24/7.
            </p>
          </div>

          <div className='relative w-full md:w-1/3 text-center md:text-left'>
            <div className='-top-10 -right-10 absolute opacity-10 font-bold text-[200px] text-red-500 transform select-none -rotate-12'>
              0
            </div>
            <h3 className='relative z-10 mb-4 font-bold text-3xl text-red-600 md:text-4xl dark:text-red-400'>
              Zero Errors
            </h3>
            <p className='relative z-10 text-gray-600 text-lg dark:text-gray-400'>
              Our commitment to excellence means delivering solutions free from
              errors. With 3Zero, your systems will run smoothly and
              efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why3Zero;
