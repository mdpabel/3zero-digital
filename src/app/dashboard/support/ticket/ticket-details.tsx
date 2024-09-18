'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface TicketDetailProps {
  ticket: {
    id: string;
    title: string;
    description: string;
  };
  replies: { message: string; userId: string }[];
  onReplySubmit: (message: string) => void;
}

const TicketDetail: React.FC<TicketDetailProps> = ({
  ticket,
  replies,
  onReplySubmit,
}) => {
  const [reply, setReply] = useState<string>('');

  const handleReplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onReplySubmit(reply);
    setReply(''); // Clear the editor after submitting
  };

  return (
    <div className='p-4'>
      <h2 className='mb-4 font-bold text-3xl text-zinc-800 dark:text-zinc-200'>
        {ticket.title}
      </h2>
      <div className='mb-6'>
        <h3 className='font-semibold text-zinc-800 dark:text-zinc-200'>
          Description:
        </h3>
        <p
          dangerouslySetInnerHTML={{ __html: ticket.description }}
          className='text-gray-700 dark:text-gray-400'
        />
      </div>

      <div className='mb-6'>
        <h3 className='mb-2 font-semibold text-zinc-800 dark:text-zinc-200'>
          Replies
        </h3>
        {replies.length === 0 ? (
          <p className='text-gray-500'>No replies yet.</p>
        ) : (
          replies.map((reply, index) => (
            <div
              key={index}
              className='border-gray-300 dark:border-zinc-600 bg-gray-100 dark:bg-zinc-800 mb-2 p-2 border rounded'>
              <p
                dangerouslySetInnerHTML={{ __html: reply.message }}
                className='text-gray-700 dark:text-gray-400'
              />
              <p className='text-gray-500 text-sm dark:text-gray-400'>
                - {reply.userId}
              </p>
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleReplySubmit} className='space-y-4'>
        <h3 className='font-semibold text-zinc-800 dark:text-zinc-200'>
          Reply to Ticket:
        </h3>
        <ReactQuill
          value={reply}
          onChange={setReply}
          style={{ height: '180px', width: '100%' }}
        />
        <div
          style={{
            marginTop: '65px',
          }}>
          <Button type='submit'>Submit Ticket</Button>
        </div>
      </form>
    </div>
  );
};

export default TicketDetail;
