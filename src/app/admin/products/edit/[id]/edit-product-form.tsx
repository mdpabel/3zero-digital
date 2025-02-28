'use client';
import React, { useEffect } from 'react';
import { updateProduct } from '@/actions/product/update-product';
import { Category, Product } from '@prisma/client';
import { useFormState } from 'react-dom';
import FormButton from '@/components/common/form-button';
import { useToast } from '@/hooks/use-toast';

const EditProductForm = ({
  product,
  categories,
}: {
  product: Product;
  categories: Category[];
}) => {
  const { toast } = useToast();
  const [state, formAction] = useFormState(updateProduct, {
    message: '',
    success: false,
    errors: {},
  });

  useEffect(() => {
    if (!state.message) return;
    if (state.success && state.message) {
      toast({
        title: state.message,
      });
    } else if (!state.success && state.message) {
      toast({
        title: state.message,
        description: Object.values(state.errors!).join(', '),
        variant: 'destructive',
      });
    }
  }, [state.message, state.errors, state.success]);

  return (
    <div className='bg-white dark:bg-gray-900 shadow-md mx-auto p-8 rounded-md max-w-3xl'>
      <h2 className='mb-6 font-semibold text-2xl text-gray-800 dark:text-gray-100'>
        Edit Product
      </h2>
      <form
        action={(formData) => {
          formData.append('id', product.id);
          formAction(formData);
        }}
        className='space-y-8'
        method='POST'>
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
            defaultValue={product.name}
            required
            minLength={2}
            placeholder='Product Name'
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
          />
        </div>

        {/* Product Price */}
        <div>
          <label
            htmlFor='price'
            className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
            Product Price
          </label>
          <input
            type='text'
            id='price'
            name='price'
            defaultValue={product.price}
            required
            placeholder='Product Price'
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
          />
        </div>

        {/* Product orig Price */}
        <div>
          <label
            htmlFor='origPrice'
            className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
            Product Price
          </label>
          <input
            type='text'
            id='origPrice'
            name='origPrice'
            defaultValue={product.origPrice ?? product.price}
            required
            placeholder='Product origPrice'
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
          />
        </div>

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
            defaultValue={product.description!}
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
            defaultValue={product.imageUrl!}
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
            defaultValue={product.categoryId!}
            required
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* SEO Title */}
        <div>
          <label
            htmlFor='metaTitle'
            className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
            Meta Title
          </label>
          <input
            type='text'
            id='metaTitle'
            name='metaTitle'
            defaultValue={product.metaTitle!}
            placeholder='SEO Title for Product'
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
          />
        </div>

        {/* SEO Description */}
        <div>
          <label
            htmlFor='metaDescription'
            className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
            Meta Description
          </label>
          <textarea
            id='metaDescription'
            name='metaDescription'
            defaultValue={product.metaDescription!}
            placeholder='SEO Description for Product'
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
          />
        </div>

        {/* SEO Keywords */}
        <div>
          <label
            htmlFor='metaKeywords'
            className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
            Meta Keywords
          </label>
          <input
            type='text'
            id='metaKeywords'
            name='metaKeywords'
            defaultValue={product.metaKeywords!}
            placeholder='SEO Keywords for Product (comma-separated)'
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
          />
        </div>

        {/* SEO Image URL */}
        <div>
          <label
            htmlFor='metaImageUrl'
            className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
            Meta Image URL
          </label>
          <input
            type='url'
            id='metaImageUrl'
            name='metaImageUrl'
            defaultValue={product.imageUrl!}
            placeholder='SEO Image URL for Product (e.g., social sharing)'
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
          />
        </div>

        {/* Icon */}
        <div>
          <label
            htmlFor='icon'
            className='block mb-2 font-medium text-gray-700 dark:text-gray-300'>
            Icon Name (Font awesome)
          </label>
          <input
            type='text'
            id='icon'
            name='icon'
            defaultValue={product.icon!}
            placeholder='SEO Image URL for Product (e.g., social sharing)'
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
          />
        </div>

        {/* Submit Button */}
        <div>
          <FormButton />
        </div>
      </form>
    </div>
  );
};

export default EditProductForm;
