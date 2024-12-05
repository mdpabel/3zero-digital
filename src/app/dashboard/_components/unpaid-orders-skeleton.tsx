import React from 'react';

const UnPaidOrdersSkeleton = () => {
  return (
    <div className='bg-white shadow-md p-6 rounded-lg animate-pulse'>
      <h3 className='bg-gray-300 mb-4 rounded w-1/3 h-6'></h3>
      <div className='space-y-4'>
        {[1, 2, 3].map((key) => (
          <div
            key={key}
            className='space-y-2 border-gray-200 bg-gray-50 p-4 border rounded-md'>
            <div className='bg-gray-300 rounded w-1/2 h-4'></div>
            <div className='bg-gray-300 rounded w-1/3 h-4'></div>
            <div className='bg-gray-300 rounded w-1/4 h-4'></div>
            <div className='bg-gray-300 mt-2 rounded w-1/4 h-8'></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UnPaidOrdersSkeleton;
