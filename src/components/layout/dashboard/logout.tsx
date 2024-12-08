'use client';
import { FaSignOutAlt } from 'react-icons/fa';
import { useState } from 'react';
import Spinner from '@/components/common/spinner';
import { signOut } from '@/auth';
import { useRouter } from 'next/navigation';

const Logout = () => {
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const logout = async () => {
    try {
      setPending(true);
      await signOut();
      router.push('/login');
    } catch (error) {
      console.log(error);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className='p-4'>
      <button
        onClick={logout}
        className='flex items-center hover:bg-white px-4 py-2 rounded-lg w-full text-white hover:text-[#614385] transition'>
        <span className='mr-3'>
          <FaSignOutAlt />
        </span>
        <span>Logout</span>
        {pending && <Spinner />}
      </button>
    </div>
  );
};

export default Logout;
