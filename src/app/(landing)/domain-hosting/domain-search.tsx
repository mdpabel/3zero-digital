'use client';
import { checkDomainAvailabilityasync } from '@/actions/check-domain';
import Spinner from '@/components/common/spinner';
import React, { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

const DomainSearch = () => {
  const [state, formAction] = useFormState(checkDomainAvailabilityasync, null);
  const [domain, setDomain] = useState('');

  const message = state?.message;
  const available = state?.available;

  return (
    <div className='mx-auto mb-16 max-w-2xl'>
      <h2 className='mb-6 font-bold text-3xl text-center text-gray-800 dark:text-white'>
        Search for a Domain
      </h2>
      <form action={formAction} className='flex items-center'>
        <input
          required
          type='text'
          value={domain}
          name='domain'
          onChange={(e) => setDomain(e.target.value)}
          placeholder='Enter your desired domain'
          className='border-gray-300 dark:border-gray-600 px-4 py-3 border rounded-l-lg focus:ring-2 focus:ring-blue-500 w-full text-gray-800 dark:text-gray-200 focus:outline-none'
        />
        <FormButton />
      </form>
      {available !== null && (
        <p
          className={`mt-4 text-center font-semibold ${
            available ? 'text-green-600' : 'text-red-600'
          }`}>
          {message}
        </p>
      )}
    </div>
  );
};

const FormButton = () => {
  const { pending } = useFormStatus();
  return (
    <button className='flex justify-center items-center py-3 rounded-r-lg w-40 text-white transition-transform primary-color hover:scale-105'>
      {pending ? <Spinner /> : 'Search'}
    </button>
  );
};

export default DomainSearch;
