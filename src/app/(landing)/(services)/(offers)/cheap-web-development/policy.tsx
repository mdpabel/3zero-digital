import React from 'react';

const Policy = () => {
  return (
    <div className='px-6 py-16 text-center'>
      <h2 className='mb-6 font-bold text-4xl text-zinc-800 dark:text-zinc-200'>
        📜 Our Policy
      </h2>
      <p className='mb-8 text-gray-600 text-lg dark:text-gray-400'>
        Transparency and clarity are our priorities. Please review our policies
        carefully.
      </p>
      <div className='space-y-6 mx-auto max-w-4xl text-left'>
        {/* No Refund Policy */}
        <div className='bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg'>
          <h3 className='mb-2 font-semibold text-xl text-zinc-800 dark:text-zinc-200'>
            No Refund Policy
          </h3>
          <p className='text-gray-600 text-sm dark:text-gray-400'>
            As we are purchasing domains and hosting services specifically for
            you based on your provided details, we are unable to offer refunds.
            Once the domain name and hosting are purchased, they cannot be
            returned or reused.
          </p>
        </div>

        {/* Source Transparency */}
        <div className='bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg'>
          <h3 className='mb-2 font-semibold text-xl text-zinc-800 dark:text-zinc-200'>
            Source Transparency
          </h3>
          <p className='text-gray-600 text-sm dark:text-gray-400'>
            We will provide you with full transparency about the platforms used
            to purchase your domain and hosting. Details about the providers
            will be shared with you for your reference.
          </p>
        </div>

        {/* Terms and Privacy Policies */}
        <div className='bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg'>
          <h3 className='mb-2 font-semibold text-xl text-zinc-800 dark:text-zinc-200'>
            Terms and Privacy Policies
          </h3>
          <p className='text-gray-600 text-sm dark:text-gray-400'>
            The terms and privacy policies governing your domain and hosting
            will align with the policies of the providers we use. Please refer
            to their respective privacy and terms of service documents for
            detailed information.
          </p>
        </div>

        {/* Right to Update Policy */}
        <div className='bg-white dark:bg-gray-800 shadow-lg p-6 rounded-lg'>
          <h3 className='mb-2 font-semibold text-xl text-zinc-800 dark:text-zinc-200'>
            Right to Update Policies
          </h3>
          <p className='text-gray-600 text-sm dark:text-gray-400'>
            We reserve the right to update, modify, or change these policies at
            any time without prior notice. Any changes will be communicated
            clearly, and the updated policy will be effective immediately upon
            posting. It is your responsibility to review the policy periodically
            for updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Policy;
