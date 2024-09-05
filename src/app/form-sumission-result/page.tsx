import GoBack from '@/components/common/go-back-button';
import React from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

type Props = {
  searchParams: {
    status: 'error' | 'success';
    errors?: string;
  };
};

const FormSubmissionResult: React.FC<Props> = ({ searchParams }) => {
  const { status, errors } = searchParams;

  const errorArray = errors
    ? errors.split(',').map((error) => error.trim())
    : [];

  console.log(status);

  return (
    <div className='flex justify-center items-center bg-gray-50 dark:bg-gray-900 min-h-screen'>
      <div className='bg-white dark:bg-gray-800 shadow-lg mx-auto p-8 rounded-lg max-w-lg text-center'>
        {status === 'success' ? (
          <div className='text-green-500'>
            <FaCheckCircle className='mx-auto mb-4 text-6xl' />
            <h2 className='font-bold text-2xl text-gray-900 dark:text-gray-100'>
              Submission Successful!
            </h2>
            <p className='mt-2 text-gray-600 dark:text-gray-400'>
              Thank you for submitting your project. We will get back to you
              shortly.
            </p>
            <a
              href='/'
              className='inline-block bg-gradient-to-r from-[#614385] to-[#516395] shadow-md mt-6 px-6 py-3 rounded-lg text-white transform transition-transform hover:scale-105'>
              Return to Home
            </a>
          </div>
        ) : (
          <div className='text-red-500'>
            <FaTimesCircle className='mx-auto mb-4 text-6xl' />
            <h2 className='font-bold text-2xl text-gray-900 dark:text-gray-100'>
              Submission Failed
            </h2>
            <p className='mt-2 text-gray-600 dark:text-gray-400'>
              There was an issue with your submission. Please correct the
              following errors:
            </p>
            {errors && (
              <div className='bg-red-100 dark:bg-red-700 mt-4 p-4 rounded-md text-red-700 dark:text-red-100'>
                <h3 className='font-semibold'>Error Details:</h3>
                <ul className='mt-2 text-left list-disc list-inside'>
                  {errorArray.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            <GoBack />
          </div>
        )}
      </div>
    </div>
  );
};

export default FormSubmissionResult;
