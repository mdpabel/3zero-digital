import { genMetaData } from '@/app/seo';
import ComponentWrapper from '@/components/common/component-wrapper';

export const metadata = genMetaData({
  title: 'Payment cancel',
  url: '/cancel',
});

const PaymentCancel = () => {
  return (
    <div className='relative px-10 md:px-20 py-10 md:py-20'>
      <ComponentWrapper className='w-full text-center'>
        <h1 className='mb-6 font-bold text-zinc-800 dark:text-zinc-200 text-4xl md:text-5xl'>
          ❌ Payment Cancelled
        </h1>

        <p className='mb-6 text-lg md:text-xl'>
          It looks like you cancelled the payment process. No charges were made.
        </p>

        <p className='text-md md:text-lg'>
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
            className='bg-gradient-to-r from-[#614385] to-[#516395] shadow-lg px-6 py-3 rounded-lg font-semibold text-white hover:scale-105 transition-transform transform'>
            Continue Shopping
          </a>
          <a
            href='/support'
            className='bg-gradient-to-r from-[#614385] to-[#516395] shadow-lg px-6 py-3 rounded-lg font-semibold text-white hover:scale-105 transition-transform transform'>
            Contact Support
          </a>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default PaymentCancel;
