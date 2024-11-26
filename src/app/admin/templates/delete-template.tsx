'use client';
import Spinner from '@/components/common/spinner';
import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const DeleteTemplate = ({ templateId }: { templateId: string }) => {
  const [isPendig, setIsPending] = useState(false);

  console.log({
    isPendig,
  });

  return (
    <button
      type='submit'
      className='text-red-400 hover:text-red-500 transition-colors'
      onClick={async () => {
        setIsPending(true);
        setIsPending(false);
      }}>
      {isPendig ? <Spinner /> : <FaTrashAlt className='inline-block w-5 h-5' />}
    </button>
  );
};

export default DeleteTemplate;
