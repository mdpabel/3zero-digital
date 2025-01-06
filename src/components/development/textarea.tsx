import React from 'react';

interface TextareaProps {
  id: string;
  label: string;
  name: string;
  placeholder: string;
  required?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  label,
  name,
  placeholder,
  required = false,
}) => (
  <div className='mb-6 md:mb-8'>
    <label htmlFor={id} className='block mb-2 font-semibold text-lg'>
      {label}
    </label>
    <textarea
      id={id}
      name={name}
      className='border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 w-full dark:text-white'
      placeholder={placeholder}
      required={required}></textarea>
  </div>
);

export default Textarea;
