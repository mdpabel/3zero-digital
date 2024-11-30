'use client';
import React, { useEffect } from 'react';
import Checkout from '@/components/payment/checkout';
import { formatCurrency } from '@/lib/utils';
import { usePricing } from '@/hooks/usePricing';

const PricingTable = ({
  price,
  origPrice,
  productId,
}: {
  price: number;
  origPrice: number;
  productId: string;
}) => {
  const {
    handleDecrease,
    handleIncrease,
    quantity,
    setTotalQuantity,
    totalOriginalPrice,
    totalPrice,
  } = usePricing({
    origPrice,
    price,
    productId,
  });

  // Ensure the quantity is set initially
  useEffect(() => {
    setTotalQuantity(quantity);
  }, [quantity, setTotalQuantity]);

  return (
    <div className='flex md:flex-row flex-col justify-between items-center my-12'>
      <div className='mb-8 md:mb-0 text-center md:text-left'>
        <h3 className='font-bold text-2xl text-zinc-800 dark:text-zinc-200'>
          Complete Email Audit Service
        </h3>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Starting at just{' '}
          {origPrice > price && (
            <span className='mr-2 text-zinc-500 dark:text-zinc-400 line-through'>
              {formatCurrency({ amount: origPrice })}
            </span>
          )}
          <span className='font-bold text-zinc-800 dark:text-zinc-200'>
            {formatCurrency({ amount: price })}
          </span>
        </p>

        {/* Quantity Selector */}
        <div className='flex items-center mt-4'>
          <button
            onClick={handleDecrease}
            className='bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-zinc-800 dark:text-white'>
            -
          </button>
          <span className='mx-4 text-xl'>{quantity}</span>
          <button
            onClick={handleIncrease}
            className='bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded text-zinc-800 dark:text-white'>
            +
          </button>
        </div>
      </div>

      {/* Checkout Button with Price and ProductID */}
      <Checkout quantity={quantity} productId={productId} />
    </div>
  );
};

export default PricingTable;
