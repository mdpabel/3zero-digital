import React from 'react';

const OverViewSkeleton = () => {
  return (
    <div className='gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-6 animate-pulse'>
      {/* Card 1 */}
      <div className='bg-gray-200 shadow-md p-6 rounded-lg'>
        <div className='bg-gray-300 mb-2 rounded w-3/4 h-6'></div>
        <div className='bg-gray-300 rounded w-1/2 h-8'></div>
      </div>
      {/* Card 2 */}
      <div className='bg-gray-200 shadow-md p-6 rounded-lg'>
        <div className='bg-gray-300 mb-2 rounded w-3/4 h-6'></div>
        <div className='bg-gray-300 rounded w-1/2 h-8'></div>
      </div>
      {/* Card 3 */}
      <div className='bg-gray-200 shadow-md p-6 rounded-lg'>
        <div className='bg-gray-300 mb-2 rounded w-3/4 h-6'></div>
        <div className='bg-gray-300 rounded w-1/2 h-8'></div>
      </div>
      {/* Card 4 */}
      <div className='bg-gray-200 shadow-md p-6 rounded-lg'>
        <div className='bg-gray-300 mb-2 rounded w-3/4 h-6'></div>
        <div className='bg-gray-300 rounded w-1/2 h-8'></div>
      </div>
    </div>
  );
};

export default OverViewSkeleton;
