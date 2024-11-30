'use client';
import React, { useEffect, useState } from 'react';
import { blacklistData } from './data';
import { usePricing } from '@/hooks/usePricing';
import { formatCurrency } from '@/lib/utils';
import Spinner from '@/components/common/spinner';
import Checkout from '@/components/payment/checkout';

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
    <div className='bg-white dark:bg-[#0B1120] shadow-lg mx-auto my-10 p-8 rounded-lg max-w-6xl container'>
      <h2 className='mb-6 font-bold text-3xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
        Blacklist Removal Service
      </h2>
      <p className='mb-8 text-center text-lg text-zinc-700 md:text-xl dark:text-zinc-400'>
        Select the blacklists you want to remove. Each removal costs{' '}
        {formatCurrency({ amount: price })}.
      </p>

      {/* Top Total Price and Checkout Button */}
      <div className='flex justify-between items-center bg-gray-100 dark:bg-gray-900 mb-8 p-6 rounded-lg'>
        <div>
          <h3 className='flex items-center space-x-2 font-semibold text-2xl text-zinc-800 dark:text-zinc-200'>
            Total Price:{' '}
            <span className='ml-2'>
              {totalPrice > 0
                ? formatCurrency({
                    amount: totalPrice,
                  })
                : '$0.0'}
            </span>
          </h3>
          <p className='mb-4 text-sm text-zinc-600 dark:text-zinc-400'>
            The total cost for removing the selected blacklists.
          </p>
        </div>
        <div className='text-center'>
          <Checkout
            productId={productId}
            metaData={selectedBlacklists}
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
          className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-lg w-full dark:text-white'
        />
      </div>

      <div className='gap-4 grid grid-cols-1 md:grid-cols-2 mb-8'>
        {filteredBlacklistData.length > 0 ? (
          filteredBlacklistData.map((item, index) => (
            <div
              key={index}
              className='flex items-center bg-gray-50 hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800 p-4 rounded-lg transition'>
              <input
                type='checkbox'
                id={`blacklist-${index}`}
                name='blacklists'
                value={item.name}
                checked={selectedBlacklists.includes(item.name)}
                onChange={() => handleCheckboxChange(item.name)}
                className='border-gray-300 mr-3 rounded focus:ring-indigo-500 w-4 h-4 text-indigo-600'
              />
              <label
                htmlFor={`blacklist-${index}`}
                className='flex-1 font-semibold text-zinc-800 dark:text-zinc-200'>
                {item.name}
              </label>
              <div className='text-right'>
                {origPrice > price && (
                  <span className='block font-semibold text-sm text-zinc-500 dark:text-zinc-400 line-through'>
                    {formatCurrency({ amount: origPrice })}
                  </span>
                )}
                <span className='block font-bold text-lg text-zinc-800 dark:text-zinc-200'>
                  {formatCurrency({ amount: price })}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className='text-center text-zinc-700 dark:text-zinc-400'>
            No blacklists found.
          </p>
        )}
      </div>
    </div>
  );
};

export default BlacklistRemovalVendors;
