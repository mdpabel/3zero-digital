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
    <div className='flex flex-col justify-center items-center'>
      <div className='shadow-md p-6 rounded-lg w-full'>
        <h3 className='mb-4 font-semibold text-2xl text-center text-zinc-800 dark:text-zinc-200'>
          Speed Optimization Service
        </h3>
        <div className='mb-6 text-center'>
          <div className='mb-6 text-center'>
            {totalOriginalPrice > price && (
              <span className='block font-bold text-2xl text-zinc-500 dark:text-zinc-400 line-through'>
                {formatCurrency({ amount: totalOriginalPrice })}
              </span>
            )}
            <span className='block font-bold text-4xl text-zinc-800 dark:text-zinc-200'>
              {formatCurrency({ amount: totalPrice })}
            </span>
            <span className='block mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
              One-time fee (for {quantity} {quantity > 1 ? 'sites' : 'site'})
            </span>
          </div>
          <span className='block mt-2 text-sm text-zinc-600 dark:text-zinc-400'>
            One-time fee
          </span>
        </div>

        {/* Quantity Selector */}
        <div className='mb-6 text-center'>
          <label
            htmlFor='quantity'
            className='block mb-2 text-sm text-zinc-600 dark:text-zinc-400'>
            Number of sites
          </label>
          <div className='inline-flex items-center space-x-4'>
            {/* Decrease Button */}
            <button
              onClick={handleDecrease}
              type='button'
              disabled={quantity === 1}
              className={`${
                quantity === 1
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gray-200 dark:bg-gray-700'
              } px-4 py-2 rounded-lg text-zinc-800 dark:text-zinc-200`}>
              -
            </button>

            {/* Quantity Display */}
            <span className='font-semibold text-xl text-zinc-800 dark:text-zinc-200'>
              {quantity}
            </span>

            {/* Increase Button */}
            <button
              onClick={handleIncrease}
              type='button'
              className='bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg text-zinc-800 dark:text-zinc-200'>
              +
            </button>
          </div>
        </div>

        <p className='mb-6 text-center text-sm text-zinc-600 dark:text-zinc-400'>
          Includes full site audit, speed optimization, and performance
          enhancements.{' '}
        </p>

        <Checkout
          productId={productId}
          metaData={services}
          quantity={quantity}
        />
      </div>
    </div>
  );
};

export default PricingTable;
