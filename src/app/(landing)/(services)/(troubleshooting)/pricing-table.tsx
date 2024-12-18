'use client';
import React from 'react';
import Link from 'next/link';
import { usePricing } from '@/hooks/usePricing';
import { formatCurrency } from '@/lib/utils';
import Checkout from '@/components/payment/checkout';

const PricingTable = ({
  productId,
  price,
  origPrice,
}: {
  productId: string;
  price: number;
  origPrice: number;
}) => {
  const { handleDecrease, handleIncrease, quantity, totalPrice } = usePricing({
    origPrice,
    price,
    productId,
  });

  return (
    <div
      id='getStarted'
      className='flex md:flex-row flex-col justify-between items-center bg-gray-100 dark:bg-gray-900 shadow-md p-6 rounded-lg text-gray-900 dark:text-white'>
      {/* Pricing Details */}
      <div className='flex-1 mb-6 md:mb-0 text-center md:text-left'>
        <p className='mt-2 text-lg'>
          {origPrice > price && (
            <span className='mr-2 line-through'>
              {formatCurrency({ amount: origPrice })}
            </span>
          )}
          <span className='font-bold'>
            {formatCurrency({ amount: price })} per unit
          </span>
        </p>
        <p className='mt-2 text-lg'>
          Total Price:{' '}
          <span className='font-bold'>
            {formatCurrency({ amount: totalPrice })}
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

      {/* Checkout Button */}
      <div>
        <Checkout productId={productId} quantity={quantity} />
      </div>
    </div>
  );
};

export default PricingTable;
