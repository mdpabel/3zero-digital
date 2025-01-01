import {
  FaBox,
  FaShippingFast,
  FaCreditCard,
  FaReceipt,
  FaExclamationCircle,
} from 'react-icons/fa';

const OrderDetailSkeleton = () => {
  return (
    <div className='mx-auto px-4 py-10 max-w-5xl'>
      <h1 className='mb-8 font-bold text-4xl text-gray-800 dark:text-gray-200'>
        Order Details
      </h1>

      {/* Order Summary Skeleton */}
      <div className='bg-white dark:bg-gray-900 shadow-lg mb-8 p-6 rounded-lg'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='font-semibold text-2xl text-gray-800 dark:text-gray-200'>
            Order Summary
          </h2>
          <div className='bg-gray-300 dark:bg-gray-700 rounded-full w-20 h-8'></div>
        </div>
        <div className='gap-4 grid grid-cols-1 md:grid-cols-2'>
          <div>
            <div className='bg-gray-300 dark:bg-gray-700 mb-4 rounded w-full h-6'></div>
            <div className='bg-gray-300 dark:bg-gray-700 mb-4 rounded w-full h-6'></div>
            <div className='bg-gray-300 dark:bg-gray-700 mb-4 rounded w-full h-6'></div>
          </div>
          <div>
            <div className='bg-gray-300 dark:bg-gray-700 mb-4 rounded w-full h-6'></div>
            <div className='bg-gray-300 dark:bg-gray-700 mb-4 rounded w-full h-6'></div>
            <div className='bg-gray-300 dark:bg-gray-700 mb-4 rounded w-full h-6'></div>
          </div>
        </div>
      </div>

      {/* Items Ordered Skeleton */}
      <div className='bg-white dark:bg-gray-900 shadow-lg mb-8 p-6 rounded-lg'>
        <div className='flex items-center mb-6'>
          <FaBox className='mr-3 text-2xl text-gray-800 dark:text-gray-200' />
          <h2 className='font-semibold text-2xl text-gray-800 dark:text-gray-200'>
            Items Ordered
          </h2>
        </div>
        <div className='space-y-4'>
          <div className='bg-gray-300 dark:bg-gray-700 rounded w-full h-6'></div>
          <div className='bg-gray-300 dark:bg-gray-700 rounded w-full h-6'></div>
          <div className='bg-gray-300 dark:bg-gray-700 rounded w-full h-6'></div>
        </div>
      </div>

      {/* Order Metadata Skeleton */}
      <div className='bg-white dark:bg-gray-900 shadow-lg mb-8 p-6 rounded-lg'>
        <div className='flex items-center mb-6'>
          <FaExclamationCircle className='mr-3 text-2xl text-red-600 dark:text-red-400' />
          <h2 className='font-semibold text-2xl text-gray-800 dark:text-gray-200'>
            Selected Symptoms
          </h2>
        </div>
        <div className='space-y-4'>
          <div className='bg-gray-300 dark:bg-gray-700 rounded w-full h-6'></div>
          <div className='bg-gray-300 dark:bg-gray-700 rounded w-full h-6'></div>
          <div className='bg-gray-300 dark:bg-gray-700 rounded w-full h-6'></div>
        </div>
      </div>

      {/* Billing Information Skeleton */}
      <div className='bg-white dark:bg-gray-900 shadow-lg mb-8 p-6 rounded-lg'>
        <div className='flex items-center mb-6'>
          <FaCreditCard className='mr-3 text-2xl text-gray-800 dark:text-gray-200' />
          <h2 className='font-semibold text-2xl text-gray-800 dark:text-gray-200'>
            Billing Information
          </h2>
        </div>
        <div className='bg-gray-300 dark:bg-gray-700 mb-4 rounded w-full h-6'></div>
        <div className='bg-gray-300 dark:bg-gray-700 mb-4 rounded w-full h-6'></div>
        <div className='bg-gray-300 dark:bg-gray-700 rounded w-full h-6'></div>
      </div>

      {/* Shipping Information Skeleton */}
      <div className='bg-white dark:bg-gray-900 shadow-lg mb-8 p-6 rounded-lg'>
        <div className='flex items-center mb-6'>
          <FaShippingFast className='mr-3 text-2xl text-gray-800 dark:text-gray-200' />
          <h2 className='font-semibold text-2xl text-gray-800 dark:text-gray-200'>
            Shipping Information
          </h2>
        </div>
        <div className='bg-gray-300 dark:bg-gray-700 mb-4 rounded w-full h-6'></div>
        <div className='bg-gray-300 dark:bg-gray-700 rounded w-full h-6'></div>
      </div>

      {/* Payment Information Skeleton */}
      <div className='bg-white dark:bg-gray-900 shadow-lg p-6 rounded-lg'>
        <div className='flex items-center mb-6'>
          <FaReceipt className='mr-3 text-2xl text-gray-800 dark:text-gray-200' />
          <h2 className='font-semibold text-2xl text-gray-800 dark:text-gray-200'>
            Payment Information
          </h2>
        </div>
        <div className='bg-gray-300 dark:bg-gray-700 mb-4 rounded w-full h-6'></div>
        <div className='bg-gray-300 dark:bg-gray-700 mb-4 rounded w-full h-6'></div>
        <div className='bg-gray-300 dark:bg-gray-700 rounded w-full h-6'></div>
      </div>
    </div>
  );
};

export default OrderDetailSkeleton;
