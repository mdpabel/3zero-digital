'use client';
import { deleteOrder } from '@/actions/order/delete-order';
import Spinner from '@/components/common/spinner';
import { useToast } from '@/hooks/use-toast';
import { Trash } from 'lucide-react';
import React, { useState } from 'react';

const DeleteOrder = ({ orderId }: { orderId: string }) => {
  const [pending, setPending] = useState(false);
  const { toast } = useToast();

  return (
    <div>
      {pending ? (
        <Spinner />
      ) : (
        <Trash
          onClick={async () => {
            setPending(true);
            const { message, success } = await deleteOrder(orderId);

            if (message) {
              if (success) {
                toast({
                  title: message,
                });
              } else {
                toast({
                  variant: 'destructive',
                  title: message,
                });
              }
            }

            setPending(false);
          }}
          className='text-red-500 cursor-pointer'
        />
      )}
    </div>
  );
};

export default DeleteOrder;
