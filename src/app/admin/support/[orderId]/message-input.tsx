'use client';
import { sendMessage } from '@/actions/message/send-message';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const ReactQuill = dynamic(() => import('react-quill-new'), {
  ssr: false,
}); // Import React Quill
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import Spinner from '@/components/common/spinner';

export function MessageInput({ orderId }: { orderId: string }) {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState('');
  const { toast } = useToast();

  const handleSendMessage = async () => {
    if (!message.trim()) return;
    setPending(true);
    const { message: res, success } = await sendMessage(orderId, message);
    if (message) {
      if (success) {
        toast({
          title: res,
        });
      } else {
        toast({
          title: res,
          variant: 'destructive',
        });
      }
    }
    setMessage(''); // Clear the input
    setPending(false);
  };

  return (
    <div className='mt-4'>
      <ReactQuill
        value={message}
        onChange={setMessage} // Updates message state with editor content
        placeholder='Type your message...'
        theme='snow' // You can customize the theme (snow is default)
        className='mb-4 w-full'
        style={{
          maxHeight: '150px',
          height: '150px',
        }}
      />
      <Button onClick={handleSendMessage} className='mt-10'>
        Send Message {pending && <Spinner />}
      </Button>
    </div>
  );
}
