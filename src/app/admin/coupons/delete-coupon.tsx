'use client';

import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const DeleteCoupon = ({ couponId }: { couponId: string }) => {
  const [isPending, setIsPending] = useState(false);

  const handleDelete = async () => {
    setIsPending(true);
    try {
      // Call your delete API
      await fetch(`/api/coupons/${couponId}`, {
        method: 'DELETE',
      });
      alert('Coupon deleted successfully!');
    } catch (error) {
      console.error('Failed to delete coupon:', error);
    }
    setIsPending(false);
  };

  return (
    <button
      type='button'
      className='text-red-400 hover:text-red-500 transition-colors'
      onClick={handleDelete}
      disabled={isPending}>
      {isPending ? (
        <span className='spinner'>...</span>
      ) : (
        <FaTrashAlt className='inline-block w-5 h-5' />
      )}
    </button>
  );
};

export default DeleteCoupon;
