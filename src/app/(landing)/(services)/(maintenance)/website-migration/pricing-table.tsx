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
      className='flex md:flex-row flex-col justify-between items-center mt-12'>
      <div className='mb-8 md:mb-0 text-center md:text-left'>
        <h3 className='font-bold text-2xl text-zinc-800 dark:text-zinc-200'>
          Full-Service Website Migration
        </h3>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Starting at just{' '}
          {totalOriginalPrice > totalPrice && (
            <span className='mr-2 text-zinc-500 dark:text-zinc-400 line-through'>
              {formatCurrency({ amount: totalOriginalPrice })}
            </span>
          )}
          <span className='font-bold text-zinc-800 dark:text-zinc-200'>
            {formatCurrency({ amount: totalPrice })}
          </span>
        </p>

        {/* Quantity Selector */}
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

      {/* Checkout Button */}
      <Checkout productId={productId} metaData={services} quantity={quantity} />
    </div>
  );
};

export default PricingTable;
