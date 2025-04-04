'use client';
import Checkout from '@/components/payment/checkout';
import { usePricing } from '@/hooks/usePricing';
import { formatCurrency } from '@/lib/utils';

const PricingTable = ({
  origPrice,
  price,
  productId,
  services,
}: {
  origPrice: number;
  price: number;
  productId: string;
  services: string[];
}) => {
  const {
    quantity,
    totalPrice,
    totalOriginalPrice,
    handleIncrease,
    handleDecrease,
  } = usePricing({ productId, price, origPrice });

  return (
    <div
      id='getStarted'
      className='flex md:flex-row flex-col justify-between items-center bg-gray-200 dark:bg-gray-900 shadow-xl mt-12 p-8 rounded-lg'>
      <div className='mb-8 md:mb-0 text-center md:text-left'>
        <h3 className='font-bold text-2xl'>Ongoing WordPress Maintenance</h3>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Starting at{' '}
          {totalOriginalPrice > price && (
            <span className='text-zinc-500 dark:text-zinc-400 line-through'>
              {formatCurrency({ amount: totalOriginalPrice })}
            </span>
          )}{' '}
          <span className='font-bold'>
            {formatCurrency({ amount: totalPrice })}/month
          </span>
        </p>
        <div className='mt-4'>
          <label
            htmlFor='quantity'
            className='block mb-2 text-sm text-zinc-600 dark:text-zinc-400'>
            Number of sites
          </label>
          <div className='inline-flex items-center space-x-4'>
            <button
              onClick={handleDecrease}
              type='button'
              disabled={quantity === 1}
              className={`${
                quantity === 1
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gray-200 dark:bg-gray-700'
              } px-4 py-2 rounded-lg `}>
              -
            </button>
            <span className='font-semibold text-xl'>{quantity}</span>
            <button
              onClick={handleIncrease}
              type='button'
              className='bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg'>
              +
            </button>
          </div>
        </div>
      </div>

      <Checkout
        productId={productId}
        metaData={services}
        quantity={quantity}
        paymentMode='subscription'
      />
    </div>
  );
};

export default PricingTable;
