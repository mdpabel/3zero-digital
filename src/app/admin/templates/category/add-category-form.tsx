'use client';
import { addCategory } from '@/actions/template/add-category';
import FormButton from '@/components/common/form-button';
import React, { useEffect } from 'react';
import { useFormState } from 'react-dom';
import { toast } from 'react-toastify';

const AddCategoryForm = () => {
  const [state, addCategoryAction] = useFormState(addCategory, {
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

  return (
    <div className='mb-10'>
      <form action={addCategoryAction} className=''>
        <input
          type='text'
          name='name'
          placeholder='Enter category name'
          className='flex-1 dark:bg-gray-800 px-4 py-2 border rounded-lg w-full dark:text-gray-200'
        />
        <div>
          <FormButton />
        </div>
      </form>
    </div>
  );
};

export default AddCategoryForm;
