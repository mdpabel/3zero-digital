'use client';
import Spinner from '@/components/common/spinner';
import { WebsiteHealthReport } from '@prisma/client';
import { Button } from '@react-email/components';
import React, { useState } from 'react';
import { sendWebsiteReport } from './action';
import { useToast } from '@/hooks/use-toast';

const SendEmail = ({ report }: { report: WebsiteHealthReport }) => {
  const { toast } = useToast();
  const [pending, setPending] = useState(false);

  const handleSendEmail = async () => {
    setPending(true);
    const { message, success } = await sendWebsiteReport(report);
    if (message) {
      if (success) {
        toast({
          title: message,
        });
      } else if (!success) {
        toast({
          title: message,
          variant: 'destructive',
        });
      }
    }
    setPending(false);
  };

  return (
    <div className='flex items-center space-x-4'>
      <Button onClick={handleSendEmail} className='p-5 cursor-pointer'>
        {pending ? <Spinner /> : 'Send Email'}
      </Button>
    </div>
  );
};

export default SendEmail;
