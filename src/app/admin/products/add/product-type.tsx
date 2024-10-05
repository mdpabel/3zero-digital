'use client';

import { useState } from 'react';

const ProductType = () => {
  const [productType, setProductType] = useState('STANDARD');
  const [prices, setPrices] = useState({
    price: '', // For standard products
    origPrice: '',
    monthly: '',
    monthlyOrigPrice: '',
    quarterly: '',
    quarterlyOrigPrice: '',
    yearly: '',
    yearlyOrigPrice: '',
  });

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPrices((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className='w-full'>
      {/* Product Type Selector */}
      <div className='w-full'>
        <label
          htmlFor='type'
          className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
          Product Type
        </label>
        <select
          id='type'
          name='type'
          value={productType}
          onChange={(e) => setProductType(e.target.value)}
          className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'>
          <option value='STANDARD'>Standard (One-time)</option>
          <option value='SUBSCRIPTION'>Subscription</option>
        </select>
      </div>

      {/* Price Fields for Standard Products */}
      {productType === 'STANDARD' && (
        <div className='space-y-6 mt-6'>
          <div className='flex lg:flex-row flex-col justify-between items-center space-x-4 w-full'>
            <div className='w-full'>
              <label
                htmlFor='price'
                className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
                Price
              </label>
              <input
                type='number'
                id='price'
                name='price'
                value={prices.price}
                onChange={handlePriceChange}
                min={1}
                step='1'
                placeholder='Product Price'
                className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
              />
            </div>

            <div className='w-full'>
              <label
                htmlFor='origPrice'
                className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
                Original Price
              </label>
              <input
                type='number'
                id='origPrice'
                name='origPrice'
                value={prices.origPrice}
                onChange={handlePriceChange}
                min={1}
                step='1'
                placeholder='Product Original Price'
                className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
              />
            </div>
          </div>
        </div>
      )}

      {/* Price Fields for Subscription Products */}
      {productType === 'SUBSCRIPTION' && (
        <div className='space-y-6 mt-6'>
          {/* Monthly Price */}
          <div className='flex lg:flex-row flex-col justify-between items-center space-x-4 w-full'>
            <div className='w-full'>
              <label
                htmlFor='monthly'
                className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
                Monthly Price
              </label>
              <input
                type='number'
                id='monthly'
                name='monthly'
                value={prices.monthly}
                onChange={handlePriceChange}
                placeholder='Monthly Price'
                className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
              />
            </div>

            <div className='w-full'>
              <label
                htmlFor='monthlyOrigPrice'
                className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
                Original Monthly Price
              </label>
              <input
                type='number'
                id='monthlyOrigPrice'
                name='monthlyOrigPrice'
                value={prices.monthlyOrigPrice}
                onChange={handlePriceChange}
                placeholder='Original Monthly Price'
                className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
              />
            </div>
          </div>

          {/* Quarterly Price */}
          <div className='flex lg:flex-row flex-col justify-between items-center space-x-4 w-full'>
            <div className='w-full'>
              <label
                htmlFor='quarterly'
                className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
                Quarterly Price
              </label>
              <input
                type='number'
                id='quarterly'
                name='quarterly'
                value={prices.quarterly}
                onChange={handlePriceChange}
                placeholder='Quarterly Price'
                className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
              />
            </div>

            <div className='w-full'>
              <label
                htmlFor='quarterlyOrigPrice'
                className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
                Original Quarterly Price
              </label>
              <input
                type='number'
                id='quarterlyOrigPrice'
                name='quarterlyOrigPrice'
                value={prices.quarterlyOrigPrice}
                onChange={handlePriceChange}
                placeholder='Original Quarterly Price'
                className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
              />
            </div>
          </div>

          {/* Yearly Price */}
          <div className='flex lg:flex-row flex-col justify-between items-center space-x-4 w-full'>
            <div className='w-full'>
              <label
                htmlFor='yearly'
                className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
                Yearly Price
              </label>
              <input
                type='number'
                id='yearly'
                name='yearly'
                value={prices.yearly}
                onChange={handlePriceChange}
                placeholder='Yearly Price'
                className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
              />
            </div>

            <div className='w-full'>
              <label
                htmlFor='yearlyOrigPrice'
                className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
                Original Yearly Price
              </label>
              <input
                type='number'
                id='yearlyOrigPrice'
                name='yearlyOrigPrice'
                value={prices.yearlyOrigPrice}
                onChange={handlePriceChange}
                placeholder='Original Yearly Price'
                className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductType;
