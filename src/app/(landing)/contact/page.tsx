'use client';

import FormButton from '@/components/common/form-button';
import Input from '@/components/development/input';
import SelectInput from '@/components/development/select';
import Textarea from '@/components/development/textarea';
import { useState } from 'react';

export const dynamic = 'force-static';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      alert('Your message has been sent successfully!');
    } catch (error) {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inquiryTypes = [
    { value: 'sales', label: 'Sales Inquiries' },
    { value: 'billing', label: 'Billing' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'general', label: 'General Information' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className='bg-white dark:bg-[#0B1120] px-4 md:px-20 py-12 md:py-24'>
      <div className='mx-auto max-w-5xl'>
        <h2 className='font-bold text-3xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
          Contact Us
        </h2>
        <p className='mt-4 text-center text-lg text-zinc-700 md:text-xl dark:text-zinc-400'>
          Have questions or need assistance? Reach out to us, and we’ll be happy
          to help.
        </p>

        <div className='gap-6 grid grid-cols-1 md:grid-cols-3 mt-12'>
          <div className='flex flex-col items-center text-center'>
            <span className='font-bold text-xl text-zinc-800 dark:text-zinc-200'>
              Email
            </span>
            <a
              href='mailto:support@3zerodigital.com'
              className='text-zinc-600 dark:text-zinc-400 hover:underline'>
              support@3zerodigital.com
            </a>
          </div>
          <div className='flex flex-col items-center text-center'>
            <span className='font-bold text-xl text-zinc-800 dark:text-zinc-200'>
              Phone
            </span>
            <a
              href='tel:+447878798374'
              className='text-zinc-600 dark:text-zinc-400 hover:underline'>
              +44 7878 798374
            </a>
          </div>
          <div className='flex flex-col items-center text-center'>
            <span className='font-bold text-xl text-zinc-800 dark:text-zinc-200'>
              Address
            </span>
            <p className='text-zinc-600 dark:text-zinc-400'>
              Suite A 82 James Carter Road, <br />
              Mildenhall, Bury St. Edmunds, <br />
              England, United Kingdom, IP28 7DE
            </p>
          </div>
        </div>

        <div className='mt-12'>
          <form
            onSubmit={handleSubmit}
            className='bg-white dark:bg-gray-900 shadow-lg p-6 md:p-10 rounded-lg'>
            <SelectInput
              id='InquiryType'
              label='What type of information do you need'
              name='InquiryType'
              options={inquiryTypes}
              required
            />

            <Input
              id='name'
              name='name'
              placeholder='Your Name'
              label='Your Name'
              required
            />
            <Input
              id='Email Address'
              name='Email Address'
              placeholder='Email Address'
              label='Email Address'
              required
            />
            <Input
              id='email'
              label='Email Address'
              name='email'
              placeholder='Enter your email'
              required
            />
            <Textarea
              id='message'
              label='Additional Details or Questions'
              name='message'
              placeholder='Provide any additional details about your project'
            />

            <FormButton />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
