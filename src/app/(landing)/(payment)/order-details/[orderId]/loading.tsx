import React from 'react';

const Loading = () => {
  return (
    <div className='mx-auto py-12 p-4 max-w-6xl'>
      <h1 className='mb-8 font-semibold text-3xl text-center'>
        <div className='bg-gray-200 mx-auto rounded-md w-3/4 h-8 animate-pulse'></div>
      </h1>

      {/* Two-Column Layout */}
      <div className='gap-6 grid grid-cols-1 md:grid-cols-3'>
        {/* Left Column: Review Section */}
        <div className='space-y-6 md:col-span-2'>
          {/* Skeleton for the Review Section */}
          <div className='space-y-6'>
            <div className='bg-gray-100 py-8 rounded-md animate-pulse'>
              <div className='py-4 text-center'>
                <div className='bg-gray-200 mx-auto rounded-md w-1/3 h-6'></div>
              </div>
              <div className='space-y-3 px-6'>
                <div className='bg-gray-200 rounded-md w-full h-4'></div>
                <div className='bg-gray-200 rounded-md w-5/6 h-4'></div>
                <div className='bg-gray-200 rounded-md w-3/4 h-4'></div>
                <div className='bg-gray-200 rounded-md w-2/3 h-4'></div>
                <div className='bg-gray-200 pt-3 border-t rounded-md w-full h-4'></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Payment Section */}
        <div>
          <div className='bg-gray-100 py-8 rounded-md animate-pulse'>
            <div className='px-6'>
              <div className='bg-gray-200 mx-auto mb-4 rounded-md w-2/3 h-4'></div>
              <div className='bg-gray-200 mx-auto rounded-md w-1/2 h-4'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
