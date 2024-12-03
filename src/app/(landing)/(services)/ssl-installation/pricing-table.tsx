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
    <div className='flex md:flex-row flex-col justify-between items-center bg-gray-200 dark:bg-gray-900 shadow-xl mt-16 p-8 rounded-lg text-white'>
      <div className='mb-6 md:mb-0'>
        <h3 className='font-bold text-2xl'>Full SSL Installation Package</h3>
        <p className='mt-2 text-lg'>
          Starting at just{' '}
          {totalOriginalPrice > totalPrice && (
            <span className='mr-2 line-through'>
              {formatCurrency({ amount: totalOriginalPrice })}
            </span>
          )}
          <span className='font-bold'>
            {formatCurrency({ amount: totalPrice })}
          </span>
        </p>

        {/* Quantity Selector */}
        <div className='flex items-center space-x-4 mt-4'>
          <button
            onClick={handleDecrease}
            type='button'
            disabled={quantity === 1}
            className={`${
              quantity === 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-white'
            } px-4 py-2 rounded-lg text-[#614385] font-semibold`}>
            -
          </button>
          <span className='font-semibold text-xl'>{quantity}</span>
          <button
            onClick={handleIncrease}
            type='button'
            className='bg-white px-4 py-2 rounded-lg font-semibold text-[#614385]'>
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
