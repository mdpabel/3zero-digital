'use client';
import FormButton from '@/components/common/form-button';
import { createProduct } from '@/actions/product/add-product';
import { Category } from '@prisma/client';
import { useToast } from '@/hooks/use-toast';

const ProductForm = ({ categories }: { categories: Category[] }) => {
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { message, success, errors } = await createProduct(formData);

    if (success && message) {
      toast({
        title: message,
      });
    } else if (!success && message) {
      toast({
        title: message,
        description: Object.values(errors!).join(', '),
        variant: 'destructive',
      });
    }
  };

  return (
    <div className='bg-white dark:bg-gray-900 shadow-md mx-auto p-8 rounded-md max-w-3xl'>
      <h2 className='mb-6 font-semibold text-2xl text-gray-800 dark:text-gray-100'>
        Add New Product
      </h2>
      <form onSubmit={handleSubmit} className='space-y-8'>
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
            required
            placeholder='Product Price'
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
            placeholder='SEO Image URL for Product (e.g., social sharing)'
            className='border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 w-full dark:text-gray-100 focus:outline-none'
          />
        </div>

        {/* SEO Image URL */}
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

export default ProductForm;
