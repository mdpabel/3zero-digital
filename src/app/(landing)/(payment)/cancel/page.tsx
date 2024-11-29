import { genMetaData } from '@/app/seo';

export const metadata = genMetaData({
  title: 'Payment cancel',
});

const PaymentCancel = () => {
  return (
    <div className='relative px-10 md:px-20 py-10 md:py-20'>
      <div className='mx-auto w-full max-w-6xl text-center container'>
        <h1 className='mb-6 font-bold text-4xl text-zinc-800 md:text-5xl dark:text-zinc-200'>
          ❌ Payment Cancelled
        </h1>

        <p className='mb-6 text-gray-600 text-lg md:text-xl dark:text-gray-400'>
          It looks like you cancelled the payment process. No charges were made.
        </p>

        <p className='text-gray-600 text-md md:text-lg dark:text-gray-400'>
          If you encountered any issues, feel free to contact our support team.
          Otherwise, you can try again or continue shopping.
        </p>

        <div className='mb-10 text-6xl'>
          <span role='img' aria-label='cancel'>
            ❌
          </span>
        </div>

        <div className='space-x-4 mt-10'>
          <a
            href='/products'
            className='bg-gradient-to-r from-[#614385] to-[#516395] shadow-lg px-6 py-3 rounded-lg font-semibold text-white transform transition-transform hover:scale-105'>
            Continue Shopping
          </a>
          <a
            href='/support'
            className='bg-gradient-to-r from-[#614385] to-[#516395] shadow-lg px-6 py-3 rounded-lg font-semibold text-white transform transition-transform hover:scale-105'>
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentCancel;
