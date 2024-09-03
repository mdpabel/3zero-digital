import React from 'react';

interface SelectInputProps {
  id: string;
  label: string;
  name: string;
  options: Array<{ value: string; label: string }>;
  required?: boolean;
}

const SelectInput: React.FC<SelectInputProps> = ({
  id,
  label,
  name,
  options,
  required = false,
}) => (
  <div className='mb-6 md:mb-8'>
    <label
      htmlFor={id}
      className='block mb-2 font-semibold text-lg text-zinc-800 dark:text-zinc-200'>
      {label}
    </label>
    <select
      id={id}
      name={name}
      className='border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 p-2 md:p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 w-full dark:text-white'
      required={required}>
      <option value=''>Select {label.toLowerCase()}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectInput;
