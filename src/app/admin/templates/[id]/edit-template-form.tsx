'use client';

import dynamic from 'next/dynamic';
import { editTemplate } from '@/actions/template/edit-template'; // Assuming you've written this action
import FormButton from '@/components/common/form-button';
import { Category, Image, Template } from '@prisma/client';
import React, { useState, useEffect, useActionState } from 'react';
import { toast } from 'react-toastify';
import 'react-quill-new/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

const EditTemplateForm = ({
  categories,
  template,
}: {
  categories: Category[];
  template: Template & { images: Image[]; categories: Category[] };
}) => {
  const [state, editTemplateAction] = useActionState(editTemplate, {
    success: true,
    message: '',
  });

  const [description, setDescription] = useState(template.description || '');
  const [imageUrls, setImageUrls] = useState(
    template.images.map((image) => image.url).join(', ') || '',
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    template.categories.map((category) => category.id),
  );

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

  const handleImageUrlsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageUrls(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const categoryId = e.target.value;
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(categoryId)
        ? prevSelected.filter((id) => id !== categoryId)
        : [...prevSelected, categoryId],
    );
  };

  return (
    <div className='px-10 py-10'>
      <header className='mb-10 text-center'>
        <h1 className='font-bold text-4xl'>Edit Template</h1>
        <p className='mt-2'>Edit the details below to update this template.</p>
      </header>

      <form
        action={() => {
          const formData = new FormData();
          formData.append('name', template.name); // Assuming name won't change
          formData.append('description', description);
          formData.append('imageUrls', imageUrls);
          formData.append('categoryIds', JSON.stringify(selectedCategories)); // Append selected categories
          formData.append('templateLiveUrl', template.liveUrl); // Assuming live URL won't change
          formData.append('templateUrl', template.fileUrl); // Assuming file URL won't change
          formData.append('price', template.price.toString()); // Assuming price won't change
          formData.append('salePrice', template.salePrice.toString()); // Assuming sale price won't change
          formData.append('id', template.id);

          editTemplateAction(formData); // Trigger the action
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
            defaultValue={template.name}
            disabled
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
                  checked={selectedCategories.includes(category.id)}
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
            defaultValue={template.liveUrl}
            disabled
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
            defaultValue={template.fileUrl}
            disabled
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
            defaultValue={template.price}
            disabled
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
            defaultValue={template.salePrice}
            disabled
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
            value={imageUrls}
            onChange={handleImageUrlsChange}
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

export default EditTemplateForm;
