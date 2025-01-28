'use client';
import dynamic from 'next/dynamic';
import { addTemplate } from '@/actions/template/add-template';
import FormButton from '@/components/common/form-button';
import { TemplateCategory } from '@prisma/client';
import React, { useState } from 'react';
import 'react-quill-new/dist/quill.snow.css';
import { useToast } from '@/hooks/use-toast';
const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
});

const AddTemplateForm = ({
  categories,
}: {
  categories: TemplateCategory[];
}) => {
  const { toast } = useToast();
  const [description, setDescription] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]); // Store selected category IDs

  const handleDescriptionChange = (value: string) => {
    setDescription(value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const categoryId = e.target.value;
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId],
    );
  };

  const handleFormSubmission = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.append('description', description);
    formData.append('categoryIds', JSON.stringify(selectedCategories));
    const { message, success } = await addTemplate(formData);

    if (message) {
      if (success) {
        toast({
          title: message,
        });
      } else {
        toast({
          title: message,
          variant: 'destructive',
        });
      }
    }
  };

  return (
    <div className='px-10 py-10'>
      <header className='mb-10 text-center'>
        <h1 className='font-bold text-4xl'>Add New Template</h1>
        <p className='mt-2'>
          Fill out the details below to add a new template to the store.
        </p>
      </header>

      <form
        onSubmit={handleFormSubmission}
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

        {/* Category (Checkboxes) */}
        <div className='mb-6'>
          <label className='block mb-2 font-medium text-gray-700 text-sm dark:text-gray-300'>
            Categories
          </label>
          <div className='gap-4 grid grid-cols-2'>
            {categories.map((category) => (
              <div key={category.id} className='flex items-center'>
                <input
                  type='checkbox'
                  id={`category-${category.id}`}
                  value={category.id}
                  onChange={handleCategoryChange}
                  className='mr-2 text-blue-600'
                />
                <label
                  htmlFor={`category-${category.id}`}
                  className='text-gray-700 dark:text-gray-300'>
                  {category.name}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Template Live Url */}
        <div className='mb-6'>
          <label className='block mb-2 font-medium text-gray-700 text-sm dark:text-gray-300'>
            Template Live URL
          </label>
          <input
            type='text'
            name='templateLiveUrl'
            required
            className='dark:bg-gray-800 px-4 py-2 border rounded-lg w-full dark:text-gray-200'
          />
        </div>

        {/* Template File */}
        <div className='mb-6'>
          <label className='block mb-2 font-medium text-gray-700 text-sm dark:text-gray-300'>
            Template File
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

        {/* Image URLs */}
        <div className='mb-6'>
          <label className='block mb-2 font-medium text-gray-700 text-sm dark:text-gray-300'>
            Image URLs (comma separated)
          </label>
          <input
            type='text'
            name='imageUrls'
            className='dark:bg-gray-800 px-4 py-2 border rounded-lg w-full dark:text-gray-200'
            placeholder='https://example.com/image1.jpg, https://example.com/image2.jpg'
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
