import DevelopmentServiceForm from '@/components/comment/development-service-form';
import React from 'react';

const GetAQuota = () => {
  return (
    <div className='mx-auto my-10 p-4 max-w-4xl container'>
      <h2 className='mb-6 font-bold text-3xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
        WordPress Site Design & Development
      </h2>
      <p className='mx-auto mb-8 md:mb-12 max-w-3xl text-center text-lg text-zinc-700 md:text-xl dark:text-zinc-400'>
        At 3Zero Digital, we develop WordPress sites with{' '}
        <span className='font-bold text-zinc-800 dark:text-zinc-200'>
          0 Vulnerability
        </span>
        ,{' '}
        <span className='font-bold text-zinc-800 dark:text-zinc-200'>
          0 Downtime
        </span>
        , and{' '}
        <span className='font-bold text-zinc-800 dark:text-zinc-200'>
          0 Error
        </span>
        . Built for perfection.
      </p>

      {/* <DevelopmentServiceForm />  */}
    </div>
  );
};

export default GetAQuota;
