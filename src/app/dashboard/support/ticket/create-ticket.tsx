'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';

interface CreateTicketProps {
  onSubmit: (ticket: { title: string; description: string }) => void;
}

const CreateTicket: React.FC<CreateTicketProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, description });
    setTitle('');
    setDescription('');
  };

  return (
    <div className='mx-auto p-4 max-w-4xl'>
      <h2 className='mb-4 font-bold text-3xl text-zinc-800 dark:text-zinc-200'>
        Create a New Ticket
      </h2>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-6'>
        {/* Title Input */}
        <div>
          <label className='block font-medium text-sm text-zinc-800 dark:text-zinc-200'>
            Title
          </label>
          <input
            type='text'
            className='border-gray-300 dark:border-zinc-600 bg-white dark:bg-zinc-800 mt-1 p-2 border rounded w-full text-zinc-800 dark:text-zinc-200'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Description (Rich Text Editor) */}
        <div className='quill-wrapper'>
          <label className='block font-medium text-sm text-zinc-800 dark:text-zinc-200'>
            Description
          </label>
          <div className='editor-container' style={{ maxWidth: '100%' }}>
            <ReactQuill
              value={description}
              onChange={setDescription}
              style={{ height: '180px', width: '100%' }}
            />
          </div>
        </div>

        {/* Submit Button */}
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

export default CreateTicket;
