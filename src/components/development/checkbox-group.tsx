import React from 'react';

interface CheckboxGroupProps {
  idPrefix: string;
  label: string;
  name: string;
  options: Array<{ value: string; label: string }>;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  idPrefix,
  label,
  name,
  options,
}) => (
  <div className='mb-6 md:mb-8'>
    <label className='block mb-2 font-semibold text-lg'>{label}</label>
    <div className='gap-x-4 gap-y-3 grid grid-cols-1 md:grid-cols-2'>
      {options.map((option, index) => (
        <div key={index} className='flex items-center'>
          <input
            type='checkbox'
            id={`${idPrefix}-${index}`}
            name={name}
            value={option.value}
            className='border-gray-300 mr-2 rounded focus:ring-indigo-500 w-4 h-4 text-indigo-600'
          />
          <label
            htmlFor={`${idPrefix}-${index}`}
            className='text-zinc-700 dark:text-zinc-300'>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  </div>
);

export default CheckboxGroup;
