'use client';
import dynamic from 'next/dynamic';
import { addTemplate } from '@/actions/template/add-template';
import FormButton from '@/components/common/form-button';
import { Category } from '@prisma/client';
import React, { useActionState, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-quill-new/dist/quill.snow.css';
const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
});

const AddTemplateForm = ({ categories }: { categories: Category[] }) => {
  const [description, setDescription] = useState('');
  const [state, action] = useActionState(addTemplate, {
    success: true,
    message: '',
  });

  useEffect(() => {
    if (!state.message) return;
    const toastMessage = state.success ? toast.success : toast.error;
    const message = state.message;
    if (message) {
      toastMessage(message);
    }
  }, [state.message, state.success]);

  const handleDescriptionChange = (value: string) => {
    setDescription(value);
  };

  return (
    <div className='px-10 py-10'>
      <header className='mb-10 text-center'>
        <h1 className='font-bold text-4xl text-zinc-800 dark:text-zinc-200'>
          Add New Template
        </h1>
        <p className='mt-2 text-gray-600 dark:text-gray-400'>
          Fill out the details below to add a new template to the store.
        </p>
      </header>

      <form
        action={(formData) => {
          formData.append('description', description);
          action(formData);
        }}
        className='bg-white dark:bg-gray-900 shadow-md mx-auto p-8 rounded-lg max-w-3xl'>
        {/* Name */}
        <div className='mb-6'>
          <label className='block mb-2 font-medium text-gray-700 text-sm dark:text-gray-300'>
            Template Name
          </label>
          <input
            type='text'
            name='name'
            required
            className='dark:bg-gray-800 px-4 py-2 border rounded-lg w-full dark:text-gray-200'
          />
        </div>

        {/* Category */}
        <div className='mb-6'>
          <label className='block mb-2 font-medium text-gray-700 text-sm dark:text-gray-300'>
            Category
          </label>
          <select
            name='categoryId'
            required
            className='dark:bg-gray-800 px-4 py-2 border rounded-lg w-full dark:text-gray-200'>
            <option value=''>Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* templateUrl */}
        <div className='mb-6'>
          <label className='block mb-2 font-medium text-gray-700 text-sm dark:text-gray-300'>
            Template URL
          </label>
          <input
            type='text'
            name='templateUrl'
            required
            className='dark:bg-gray-800 px-4 py-2 border rounded-lg w-full dark:text-gray-200'
          />
        </div>

        {/* Price */}
        <div className='mb-6'>
          <label className='block mb-2 font-medium text-gray-700 text-sm dark:text-gray-300'>
            Price
          </label>
          <input
            type='number'
            name='price'
            required
            className='dark:bg-gray-800 px-4 py-2 border rounded-lg w-full dark:text-gray-200'
          />
        </div>

        {/* Sale Price */}
        <div className='mb-6'>
          <label className='block mb-2 font-medium text-gray-700 text-sm dark:text-gray-300'>
            Sale Price
          </label>
          <input
            type='number'
            name='salePrice'
            className='dark:bg-gray-800 px-4 py-2 border rounded-lg w-full dark:text-gray-200'
          />
        </div>

        {/* Images */}
        <div className='mb-6'>
          <label className='block mb-2 font-medium text-gray-700 text-sm dark:text-gray-300'>
            Upload Images
          </label>
          <input
            type='file'
            name='images'
            multiple
            accept='image/*'
            className='dark:bg-gray-800 px-4 py-2 border rounded-lg w-full dark:text-gray-200'
          />
        </div>

        {/* Description */}
        <div className='mb-6'>
          <label className='block mb-2 font-medium text-gray-700 text-sm dark:text-gray-300'>
            Description
          </label>
          <ReactQuill
            theme='snow'
            value={description}
            onChange={handleDescriptionChange}
            className='dark:bg-gray-800 rounded-lg h-60 dark:text-gray-200'
          />
        </div>

        {/* Submit */}
        <div className='mt-14'>
          <FormButton />
        </div>
      </form>
    </div>
  );
};

export default AddTemplateForm;
