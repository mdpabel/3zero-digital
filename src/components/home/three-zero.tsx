import React from 'react';

const ThreeZeroExplanation = () => {
  return (
    <div className='relative bg-white dark:bg-[#0B1120] px-10 md:px-20 py-20'>
      <div className='mx-auto w-full max-w-6xl'>
        <h2 className='mb-16 font-bold text-4xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
          The 3Zero Approach
        </h2>

        <div className='relative flex md:flex-row flex-col justify-between items-center md:space-x-12 space-y-12 md:space-y-0'>
          <div className='relative w-full md:w-1/3 text-center md:text-left'>
            <div className='-top-10 -left-10 absolute opacity-10 font-bold text-[200px] text-blue-500 transform select-none -rotate-12'>
              0
            </div>
            <h3 className='relative z-10 mb-4 font-bold text-3xl text-blue-600 md:text-4xl dark:text-blue-400'>
              Zero Vulnerabilities
            </h3>
            <p className='relative z-10 text-gray-600 text-lg dark:text-gray-400'>
              Our security-first approach ensures your digital assets are safe,
              with no room for vulnerabilities.
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
              Experience seamless operations with our solutions that ensure
              continuous uptime, every time.
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
              We deliver top-notch quality, ensuring your software runs
              flawlessly, free from critical errors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeZeroExplanation;
