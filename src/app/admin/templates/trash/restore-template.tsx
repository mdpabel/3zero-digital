'use client';
import { restoreTemplate } from '@/actions/template/restore-template';
import Spinner from '@/components/common/spinner';
import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const RestoreTemplate = ({ templateId }: { templateId: string }) => {
  const [isPendig, setIsPending] = useState(false);

  return (
    <button
      type='submit'
      className='text-red-400 hover:text-red-500 transition-colors'
      onClick={async () => {
        setIsPending(true);
        const formData = new FormData();
        formData.append('templateId', templateId);
        await restoreTemplate(formData);
        setIsPending(false);
      }}>
      {isPendig ? <Spinner /> : <FaTrashAlt className='inline-block w-5 h-5' />}
    </button>
  );
};

export default RestoreTemplate;
