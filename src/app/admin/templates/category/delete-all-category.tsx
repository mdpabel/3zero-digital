'use client';
import { deleteAllCategory } from '@/actions/template/delete-all-category';
import Spinner from '@/components/common/spinner';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';

const DeleteAllCategory = () => {
  const [pending, setPending] = useState(false);

  return (
    <div>
      <Button
        onClick={() => {
          setPending(true);
          deleteAllCategory();
          setPending(false);
        }}
        className='bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-white'>
        {pending ? <Spinner /> : 'Delete All Category'}
      </Button>
    </div>
  );
};

export default DeleteAllCategory;
