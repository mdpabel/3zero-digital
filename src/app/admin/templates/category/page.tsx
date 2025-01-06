import prisma from '@/prisma/db';
import AddCategoryForm from './add-category-form';

const TemplateCategories = async () => {
  const categories = await prisma.templateCategory.findMany();

  return (
    <div className='px-10 py-10'>
      {/* Header */}
      <header className='mb-10 text-center'>
        <h1 className='font-bold text-4xl'>Manage Template Categories</h1>
        <p className='mt-2'>
          Add, edit, or remove template categories to organize your templates
          effectively.
        </p>
      </header>

      {/* Form to Add Category */}
      <AddCategoryForm />

      {/* Categories List */}
      <div className='bg-white dark:bg-gray-900 shadow-md mx-auto p-6 rounded-lg max-w-4xl'>
        <h2 className='mb-4 font-bold text-2xl'>Existing Categories</h2>
        {categories.length > 0 ? (
          <ul className='space-y-4'>
            {categories.map((category) => (
              <li
                key={category.id}
                className='flex justify-between items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg'>
                <span className='font-medium text-gray-800 dark:text-gray-200'>
                  {category.name}
                </span>
                <button className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white'>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-center'>
            No categories available. Add a new category above.
          </p>
        )}
      </div>
    </div>
  );
};

export default TemplateCategories;
