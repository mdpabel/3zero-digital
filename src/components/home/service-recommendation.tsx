'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import FormButton from '../common/form-button';

const ServiceRecommendationTool = () => {
  return (
    <div className='bg-white dark:bg-[#0B1120] px-10 md:px-20 py-10'>
      <h2 className='mb-16 font-bold text-4xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
        Find the Perfect Solution for Your Website Needs
      </h2>

      <form
        action={() => {}}
        className='bg-gray-100 dark:bg-gray-800 shadow-lg mx-auto p-8 rounded-lg max-w-2xl'>
        <label className='block mb-4 text-gray-700 text-lg dark:text-white'>
          Describe your website issue or need:
        </label>
        <textarea
          rows={4}
          className='bg-white dark:bg-gray-900 p-4 rounded-md w-full text-gray-900 dark:text-white'
          placeholder='e.g., "My website is slow", "I’m facing malware issues", etc.'
        />

        <FormButton>Get Recommendation</FormButton>
      </form>
    </div>
  );
};

export default ServiceRecommendationTool;
