'use client';
import React, { useState } from 'react';
import FormButton from '@/components/common/form-button';
import { useToast } from '@/hooks/use-toast';
import { addCoupon } from '@/actions/coupon/add-coupon';
import { DiscountType } from '@prisma/client';
import { Button } from '@/components/ui/button';
import Spinner from '@/components/common/spinner';

const AddCoupon = () => {
  const [pending, setPending] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    code: '',
    discountType: 'PERCENTAGE',
    discount: '',
    validFrom: '',
    validUntil: '',
    maxUsageCount: '',
    isActive: true,
    applicableCountries: '',
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    // Simulate backend submission
    const { message, success, coupon } = await addCoupon({
      ...formData,
      discountType: formData.discountType as DiscountType,
    });

    setPending(false);

    if (message && success) {
      toast({
        title: message,
      });
    } else if (message && !success) {
      toast({
        title: message,
        variant: 'destructive',
      });
    }
  };

  return (
    <div className='bg-white dark:bg-gray-900 shadow-md mx-auto p-8 rounded-md max-w-3xl'>
      <h2 className='mb-6 font-semibold text-2xl text-gray-800 dark:text-gray-100'>
        Add New Coupon
      </h2>
      <form onSubmit={handleSubmit} className='space-y-8'>
        {/* Code */}
        <div>
          <label
            htmlFor='code'
            className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
            Coupon Code
          </label>
          <input
            type='text'
            id='code'
            name='code'
            value={formData.code}
            onChange={handleChange}
            required
            placeholder='Enter coupon code (e.g., SUMMER21)'
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
          />
        </div>

        {/* Discount Type */}
        <div>
          <label
            htmlFor='discountType'
            className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
            Discount Type
          </label>
          <select
            id='discountType'
            name='discountType'
            value={formData.discountType}
            onChange={handleChange}
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'>
            <option value='PERCENTAGE'>Percentage</option>
            <option value='FLAT'>Flat</option>
          </select>
        </div>

        {/* Discount */}
        <div>
          <label
            htmlFor='discount'
            className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
            Discount Value
          </label>
          <input
            type='number'
            id='discount'
            name='discount'
            value={formData.discount}
            onChange={handleChange}
            required
            min='0'
            placeholder='Enter discount value'
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
          />
        </div>

        {/* Valid From */}
        <div>
          <label
            htmlFor='validFrom'
            className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
            Valid From
          </label>
          <input
            type='datetime-local'
            id='validFrom'
            name='validFrom'
            value={formData.validFrom}
            onChange={handleChange}
            required
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
          />
        </div>

        {/* Valid Until */}
        <div>
          <label
            htmlFor='validUntil'
            className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
            Valid Until
          </label>
          <input
            type='datetime-local'
            id='validUntil'
            name='validUntil'
            value={formData.validUntil}
            onChange={handleChange}
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
          />
        </div>

        {/* Max Usage Count */}
        <div>
          <label
            htmlFor='maxUsageCount'
            className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
            Max Usage Count
          </label>
          <input
            type='number'
            id='maxUsageCount'
            name='maxUsageCount'
            value={formData.maxUsageCount}
            onChange={handleChange}
            min='1'
            placeholder='Enter maximum usage count'
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
          />
        </div>

        {/* Applicable Countries */}
        <div>
          <label
            htmlFor='applicableCountries'
            className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
            Applicable Countries (comma-separated)
          </label>
          <input
            type='text'
            id='applicableCountries'
            name='applicableCountries'
            value={formData.applicableCountries}
            onChange={handleChange}
            placeholder='e.g., US, BD, CA'
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
          />
        </div>

        {/* Is Active */}
        <div>
          <label className='flex items-center'>
            <input
              type='checkbox'
              name='isActive'
              checked={formData.isActive}
              onChange={handleChange}
              className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 rounded-md focus:ring-2 focus:ring-blue-500 w-5 h-5'
            />
            <span className='ml-2 text-gray-700 dark:text-gray-300'>
              Is Active
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <Button className='w-full'>
          {pending ? <Spinner /> : 'Add Coupon'}
        </Button>
      </form>
    </div>
  );
};

export default AddCoupon;
