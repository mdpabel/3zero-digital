import { stripe } from '@/lib/stripe/stripe';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { genMetaData } from '@/app/seo';

export const metadata = genMetaData({
  title: 'Payment success',
});

type Props = {
  searchParams: Promise<{
    session_id: string;
  }>;
};

const PaymentSuccess = async ({ searchParams }: Props) => {
  const sessionId = (await searchParams).session_id;

  const user = await currentUser();

  if (!user) {
    return redirect('/login');
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session || session.metadata!.userId !== user.id) {
      throw new Error('Invalid or unauthorized session.');
    }

    const amountPaid = session.amount_total! / 100;
    const currency = session.currency!.toUpperCase();
    const paymentStatus = session.payment_status;

    return (
      <div className='relative px-10 md:px-20 py-10 md:py-20'>
        <div className='mx-auto w-full max-w-6xl text-center container'>
          <div className='mb-10 text-center'>
            <h1 className='mb-6 font-bold text-4xl text-zinc-800 md:text-5xl dark:text-zinc-200'>
              🎉 Payment Successful!
            </h1>
            <p className='mb-6 text-gray-600 text-lg md:text-xl dark:text-gray-400'>
              Thank you for your purchase! Your payment of{' '}
              <span className='font-semibold'>
                {amountPaid} {currency}
              </span>{' '}
              has been processed successfully.
            </p>
            <p className='text-gray-600 text-md md:text-lg dark:text-gray-400'>
              Payment Status: <strong>{paymentStatus}</strong>
            </p>
          </div>

          <div className='mb-10 text-6xl'>
            <span role='img' aria-label='success'>
              ✅
            </span>
          </div>

          <div className='flex md:flex-row flex-col justify-center md:space-x-4 space-y-4 md:space-y-0 mx-auto mt-10'>
            <a
              href='/dashboard'
              className='bg-gradient-to-r from-[#614385] to-[#516395] shadow-lg px-6 py-3 rounded-lg font-semibold text-white transform transition-transform hover:scale-105'>
              Go to Dashboard
            </a>
            <a
              href='/'
              className='bg-gradient-to-r from-[#614385] to-[#516395] shadow-lg px-6 py-3 rounded-lg font-semibold text-white transform transition-transform hover:scale-105'>
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error retrieving payment details:', error);

    return (
      <div className='relative px-10 md:px-20 py-10 md:py-20'>
        <div className='mx-auto w-full max-w-6xl text-center container'>
          <h1 className='mb-4 font-bold text-4xl text-red-500 md:text-5xl'>
            ⚠️ Invalid or Unauthorized Session
          </h1>
          <p className='text-gray-600 text-lg dark:text-gray-400'>
            The payment session could not be found or you are not authorized to
            view this page. If you believe this is an error, please contact
            support.
          </p>
          <div className='mt-8'>
            <a
              href='/'
              className='bg-gradient-to-r from-[#614385] to-[#516395] shadow-lg px-6 py-3 rounded-lg font-semibold text-white transform transition-transform hover:scale-105'>
              Return Home
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default PaymentSuccess;
