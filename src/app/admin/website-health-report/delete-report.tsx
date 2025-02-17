'use client';
import { deleteReport } from '@/actions/website-health-report/delete-report';
import Spinner from '@/components/common/spinner';
import { useToast } from '@/hooks/use-toast';
import { Trash } from 'lucide-react';
import React, { useState } from 'react';

const DeleteReport = ({ id }: { id: string }) => {
  const { toast } = useToast();
  const [pending, setPending] = useState(false);

  return (
    <button
      onClick={async () => {
        setPending(true);
        const { message, success } = await deleteReport(id);
        if (success) {
          toast({
            title: message,
          });
        } else {
          toast({
            title: message,
            variant: 'destructive',
          });
        }
        setPending(false);
      }}>
      {pending ? <Spinner /> : <Trash className='text-red-600' />}
    </button>
  );
};

export default DeleteReport;
