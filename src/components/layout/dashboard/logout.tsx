'use client';
import { FaSignOutAlt } from 'react-icons/fa';
import { signOut } from '@/auth';

const Logout = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signOut({
          redirectTo: '/',
        });
      }}
      className='p-4'>
      <button
        type='submit'
        className='flex items-center hover:bg-white px-4 py-2 rounded-lg w-full text-white hover:text-[#614385] transition'>
        <span className='mr-3'>
          <FaSignOutAlt />
        </span>
        <span>Logout</span>
      </button>
    </form>
  );
};

export default Logout;
