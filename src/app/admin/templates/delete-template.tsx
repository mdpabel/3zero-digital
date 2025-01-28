'use client';
import { deleteTemplate } from '@/actions/template/delete-template';
import Spinner from '@/components/common/spinner';
import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const DeleteTemplate = ({ templateId }: { templateId: string }) => {
  const [isPending, setIsPending] = useState(false);

  return (
    <button
      type='submit'
      className='text-red-400 hover:text-red-500 transition-colors'
      onClick={async () => {
        setIsPending(true);
        await deleteTemplate(templateId);
        setIsPending(false);
      }}>
      {isPending ? (
        <Spinner />
      ) : (
        <FaTrashAlt className='inline-block w-5 h-5' />
      )}
    </button>
  );
};

export default DeleteTemplate;
