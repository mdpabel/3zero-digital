import React from 'react';

export const dynamic = 'force-static';

const WebsiteMigration = () => {
  const migrationSteps = [
    'Detailed site audit and planning',
    'Backup of existing site data and content',
    'Setup and configuration of new hosting environment',
    'Migration of all content, databases, and files',
    'Testing to ensure functionality and performance',
    'DNS update and go-live support',
    'Post-migration support and monitoring',
    'SEO audit to maintain search rankings',
  ];

  return (
    <div className='bg-white dark:bg-[#0B1120] shadow-lg mx-auto p-10 rounded-lg max-w-6xl'>
      <h2 className='mb-8 font-bold text-3xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
        Seamless Website Migration Services
      </h2>

      <p className='mb-10 text-center text-lg text-zinc-600 md:text-xl dark:text-zinc-400'>
        Transition your website to a new platform or hosting provider with
        minimal downtime and zero data loss. Our expert team handles the entire
        process for a smooth migration.
      </p>

      <div className='gap-8 grid grid-cols-1 md:grid-cols-2'>
        {migrationSteps.map((step, index) => (
          <div
            key={index}
            className='flex items-start border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 shadow-md hover:shadow-lg p-6 border rounded-lg transition-shadow'>
            <div className='flex flex-shrink-0 justify-center items-center bg-gradient-to-r from-[#614385] to-[#516395] mr-4 rounded-full w-12 h-12 text-white'>
              <span className='font-semibold text-lg'>{index + 1}</span>
            </div>
            <div>
              <h3 className='font-semibold text-lg text-zinc-800 dark:text-zinc-200'>
                {step}
              </h3>
              <p className='mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
                {index % 2 === 0
                  ? 'We carefully plan and execute each step to ensure a seamless transition with no impact on your site’s performance or SEO.'
                  : 'Our team ensures that your site remains fully functional throughout the migration process, with comprehensive testing and post-migration support.'}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='flex md:flex-row flex-col justify-between items-center mt-12'>
        <div className='mb-8 md:mb-0 text-center md:text-left'>
          <h3 className='font-bold text-2xl text-zinc-800 dark:text-zinc-200'>
            Full-Service Website Migration
          </h3>
          <p className='text-lg text-zinc-600 dark:text-zinc-400'>
            Starting at just{' '}
            <span className='font-bold text-zinc-800 dark:text-zinc-200'>
              $499
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

export default WebsiteMigration;
