const PaymentSuccessLoading = () => {
  return (
    <div className='relative bg-white dark:bg-[#030712] px-10 md:px-20 py-10 md:py-20'>
      <div className='mx-auto w-full max-w-6xl text-center container'>
        <div className='bg-gray-200 dark:bg-gray-700 mx-auto mb-6 rounded w-3/4 md:w-2/4 h-10'></div>

        <div className='space-y-4 mb-6'>
          <div className='bg-gray-200 dark:bg-gray-700 mx-auto rounded w-4/5 h-6'></div>
          <div className='bg-gray-200 dark:bg-gray-700 mx-auto rounded w-2/3 h-6'></div>
        </div>

        <div className='mb-10 text-6xl'>
          <span className='block bg-gray-200 dark:bg-gray-700 mx-auto rounded-full w-16 h-16'></span>
        </div>

        <div className='flex md:flex-row flex-col justify-center md:space-x-4 space-y-4 md:space-y-0 mx-auto mt-10'>
          <div className='bg-gray-200 dark:bg-gray-700 rounded-lg w-full md:w-40 h-12'></div>
          <div className='bg-gray-200 dark:bg-gray-700 rounded-lg w-full md:w-40 h-12'></div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessLoading;
