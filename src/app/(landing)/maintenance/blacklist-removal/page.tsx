'use client';
import React, { useEffect, useState } from 'react';
import { blacklistData } from './data';
import useSWR from 'swr';
import { getProduct } from '@/lib/swell/product';
import { usePricing } from '@/hooks/usePricing';
import { formatCurrency } from '@/lib/utils';
import Spinner from '@/components/common/spinner';

const BlacklistRemoval = () => {
  const { data, isLoading } = useSWR('blacklistRemoval', () =>
    getProduct('Blacklist Removal'),
  );
  const price = data?.price!;
  const origPrice = data?.origPrice!;
  const productId = data?.id!;

  const { isPending, handleCheckout, setTotalQuantity } = usePricing({
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

  const onCheckout = () => {
    handleCheckout({
      data: selectedBlacklists,
    });
  };

  const totalPrice = selectedBlacklists.length * price || 0;

  return (
    <div className='bg-white dark:bg-[#0B1120] shadow-lg p-8 rounded-lg'>
      <h2 className='mb-6 font-bold text-3xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
        Blacklist Removal Service
      </h2>
      <p className='mb-8 text-center text-lg text-zinc-700 md:text-xl dark:text-zinc-400'>
        Select the blacklists you want to remove. Each removal costs $20.
      </p>

      {/* Top Total Price and Checkout Button */}
      <div className='bg-gray-100 dark:bg-gray-900 mb-8 p-6 rounded-lg'>
        <h3 className='flex items-center space-x-2 font-semibold text-2xl text-zinc-800 dark:text-zinc-200'>
          Total Price:{' '}
          {isLoading ? (
            <div className='bg-gray-300 dark:bg-gray-700 ml-2 rounded w-20 h-6 animate-pulse'></div>
          ) : (
            <span className='ml-2'>
              {totalPrice > 0
                ? formatCurrency({
                    amount: totalPrice,
                  })
                : 0}
            </span>
          )}
        </h3>
        <p className='mb-4 text-sm text-zinc-600 dark:text-zinc-400'>
          The total cost for removing the selected blacklists.
        </p>
        <div className='text-center'>
          <button
            onClick={onCheckout}
            className={`${
              selectedBlacklists.length > 0
                ? 'bg-gradient-to-r from-[#614385] to-[#516395]'
                : 'bg-gray-400'
            } shadow-md w-72 flex justify-center items-center mx-auto py-3 rounded-lg font-semibold text-white transform transition-transform hover:scale-105`}
            disabled={selectedBlacklists.length === 0}>
            {isPending ? <Spinner /> : ' Proceed to Checkout'}
          </button>
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
                {isLoading && (
                  <div className='bg-gray-300 dark:bg-gray-700 rounded w-20 h-6 animate-pulse'></div>
                )}
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

export default BlacklistRemoval;
