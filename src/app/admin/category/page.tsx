import React from 'react';
import AddCategoryForm from './add-category-form';
import prisma from '@/prisma/db';

const AddCategory = async () => {
  const categories = await prisma.category.findMany();

  return (
    <div>
      <AddCategoryForm />

      <div>
        <h1 className='mb-8 font-bold text-3xl'>Categories</h1>
        {categories.length === 0 ? (
          <p>No categories found.</p>
        ) : (
          <ul className='space-y-4'>
            {categories.map((category) => (
              <li key={category.id} className='px-4 py-2 border rounded-lg'>
                {category.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AddCategory;
