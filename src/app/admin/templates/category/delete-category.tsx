import React from 'react';

const DeleteCategory = ({ categoryId }: { categoryId: string }) => {
  return (
    <button className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white'>
      Delete
    </button>
  );
};

export default DeleteCategory;
