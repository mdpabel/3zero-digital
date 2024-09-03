'use client';

import { useFormStatus } from 'react-dom';
import Spinner from './spinner';

const FormButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='bg-gradient-to-r from-[#614385] to-[#516395] shadow-md mt-8 py-3 rounded-lg w-full font-semibold text-white transform hover:scale-105 transition-transform'>
      {pending ? <Spinner /> : 'Submit'}
    </button>
  );
};

export default FormButton;
