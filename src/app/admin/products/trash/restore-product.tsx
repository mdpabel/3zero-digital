'use client';
import { restoreProduct } from '@/actions/product/restore-product';
import Spinner from '@/components/common/spinner';
import React, { useState } from 'react';
import { FaUndo } from 'react-icons/fa';

const RestoreProduct = ({ productId }: { productId: string }) => {
  const [isPending, setIsPending] = useState(false);

  return (
    <button
      type='submit'
      className='text-green-400 hover:text-green-500 transition-colors'
      onClick={async () => {
        setIsPending(true);
        await restoreProduct(productId);
        setIsPending(false);
      }}>
      {isPending ? <Spinner /> : <FaUndo className='inline-block w-5 h-5' />}{' '}
    </button>
  );
};

export default RestoreProduct;
