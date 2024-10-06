'use client';
import FormButton from '@/components/common/form-button';
import React, { useEffect } from 'react';
import ProductType from './product-type';
import { createProduct } from '@/actions/product/add-product';
import { Category } from '@prisma/client';
import { useFormState } from 'react-dom';
import { toast } from 'react-toastify';

const ProductForm = ({ categories }: { categories: Category[] }) => {
  const [state, action] = useFormState(createProduct, {
    message: '',
    success: false,
    errors: {},
  });

  useEffect(() => {
    if (!state.message) return;

    const toastMessage = state.success ? toast.success : toast.error;

    const message = state.errors
      ? Object.values(state.errors).join(', ')
      : state.message;

    if (message) {
      toastMessage(message);
    }
  }, [state.message, state.errors, state.success]);

  return (
    <div className='bg-white dark:bg-gray-900 shadow-md mx-auto p-8 rounded-md max-w-3xl'>
      <h2 className='mb-6 font-semibold text-2xl text-gray-800 dark:text-gray-100'>
        Add New Product
      </h2>
      <form action={action} className='space-y-8'>
        {/* Product Name */}
        <div>
          <label
            htmlFor='name'
            className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
            Product Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            required
            minLength={2}
            placeholder='Product Name'
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
          />
        </div>

        {/* Product Type Component */}
        <ProductType />

        {/* Description */}
        <div>
          <label
            htmlFor='description'
            className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
            Description
          </label>
          <textarea
            id='description'
            name='description'
            minLength={10}
            placeholder='Product Description'
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
          />
        </div>

        {/* Image URL */}
        <div>
          <label
            htmlFor='imageUrl'
            className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
            Image URL
          </label>
          <input
            type='url'
            id='imageUrl'
            name='imageUrl'
            placeholder='https://example.com/image.jpg'
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
          />
        </div>

        {/* Category Selector */}
        <div>
          <label
            htmlFor='categoryId'
            className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
            Category
          </label>
          <select
            id='categoryId'
            name='categoryId'
            required
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Submit Button */}
        <div>
          <FormButton />
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
