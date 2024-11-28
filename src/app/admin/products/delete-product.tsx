'use client';
import { deleteProduct } from '@/actions/product/delete-product';
import Spinner from '@/components/common/spinner';
import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const DeleteProduct = ({ productId }: { productId: string }) => {
  const [isPendig, setIsPending] = useState(false);

  return (
    <button
      type='submit'
      className='text-red-400 hover:text-red-500 transition-colors'
      onClick={async () => {
        setIsPending(true);
        await deleteProduct(productId);
        setIsPending(false);
      }}>
      {isPendig ? <Spinner /> : <FaTrashAlt className='inline-block w-5 h-5' />}
    </button>
  );
};

export default DeleteProduct;
