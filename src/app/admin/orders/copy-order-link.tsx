'use client';
import { useToast } from '@/hooks/use-toast';
import React from 'react';

const CopyOrderLink = ({ orderId }: { orderId: string }) => {
  const { toast } = useToast();
  const orderLink = `${process.env.FRONTEND_URL}/order-details/${orderId}`;

  // Handle copy action
  const handleCopy = async () => {
    try {
      // Copy the order link to the clipboard
      await navigator.clipboard.writeText(orderLink);
      toast({
        title: 'Order link copied!',
      });
    } catch (err) {
      toast({
        title: 'Failed to copy the order link',
        variant: 'destructive',
      });
    }
  };

  return <button onClick={handleCopy}>Copy</button>;
};

export default CopyOrderLink;
