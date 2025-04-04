'use client';
import React, { useEffect, useState } from 'react';
import { blacklistData } from './data';
import { usePricing } from '@/hooks/usePricing';
import { formatCurrency } from '@/lib/utils';
import Spinner from '@/components/common/spinner';
import Checkout from '@/components/payment/checkout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const BlacklistRemovalVendors = ({
  price,
  origPrice,
  productId,
}: {
  price: number;
  origPrice: number;
  productId: string;
}) => {
  const {
    setTotalQuantity,
    handleDecrease,
    handleIncrease,
    quantity,
    totalOriginalPrice,
    totalPrice,
  } = usePricing({
    productId,
    price,
    origPrice,
  });

  const [selectedBlacklists, setSelectedBlacklists] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCheckboxChange = (name: string) => {
    setSelectedBlacklists((prevSelected) =>
      prevSelected.includes(name)
        ? prevSelected.filter((item) => item !== name)
        : [...prevSelected, name],
    );
  };

  useEffect(() => {
    setTotalQuantity(selectedBlacklists.length);
  }, [selectedBlacklists, setTotalQuantity]);

  const filteredBlacklistData = blacklistData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div
      id='getStarted'
      className='shadow-lg mx-auto my-10 mt-32 p-8 rounded-lg max-w-6xl container'>
      <h2 className='mb-6 font-bold text-zinc-800 dark:text-zinc-200 text-3xl md:text-5xl text-center'>
        Blacklist Removal Service
      </h2>
      <p className='mb-8 text-zinc-700 dark:text-zinc-400 text-lg md:text-xl text-center'>
        Select the blacklists you want to remove. Each removal costs{' '}
        {formatCurrency({ amount: price })}.
      </p>

      {/* Top Total Price and Checkout Button */}
      <div className='flex justify-between items-center mb-8 p-6 rounded-lg'>
        <div>
          <h3 className='flex items-center space-x-2 font-semibold text-2xl'>
            Total Price:{' '}
            <span className='ml-2'>
              {totalPrice > 0
                ? formatCurrency({
                    amount: totalPrice,
                  })
                : '$0.0'}
            </span>
          </h3>
          <p className='mb-4 text-zinc-600 dark:text-zinc-400 text-sm'>
            The total cost for removing the selected blacklists.
          </p>
        </div>
        <div className='text-center'>
          <Checkout
            productId={productId}
            metaData={selectedBlacklists}
            paymentMode='payment'
            quantity={quantity}
          />
        </div>
      </div>

      {/* Search Input */}
      <div className='mb-6'>
        <input
          type='text'
          placeholder='Search blacklists...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='dark:bg-gray-800 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg w-full dark:text-white'
        />
      </div>

      <div className='gap-4 grid grid-cols-1 md:grid-cols-2 mb-8'>
        {filteredBlacklistData.length > 0 ? (
          filteredBlacklistData.map((item, index) => (
            <div
              key={index}
              className='flex items-center bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 p-4 rounded-lg transition'>
              <input
                type='checkbox'
                id={`blacklist-${index}`}
                name='blacklists'
                value={item.name}
                checked={selectedBlacklists.includes(item.name)}
                onChange={() => handleCheckboxChange(item.name)}
                className='mr-3 border-gray-300 rounded focus:ring-indigo-500 w-4 h-4 text-indigo-600'
              />
              <label
                htmlFor={`blacklist-${index}`}
                className='flex-1 font-semibold'>
                {item.name}
              </label>
              <div className='text-right'>
                {origPrice > price && (
                  <span className='block font-semibold text-zinc-500 dark:text-zinc-400 text-sm line-through'>
                    {formatCurrency({ amount: origPrice })}
                  </span>
                )}
                <span className='block font-bold text-lg'>
                  {formatCurrency({ amount: price })}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className='text-zinc-700 dark:text-zinc-400 text-center'>
            No blacklists found.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlacklistRemovalVendors;
