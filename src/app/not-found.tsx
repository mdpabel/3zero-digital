import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export const dynamic = 'force-static';

export default function Custom404() {
  return (
    <div className='flex justify-center items-center bg-white dark:bg-[#0B1120] h-screen'>
      <div className='px-4 text-center'>
        <div className='flex justify-center mb-4'>
          <AlertTriangle className='w-16 h-16 text-[#516395]' />
        </div>
        <h1 className='mb-4 font-bold text-4xl text-zinc-800 md:text-6xl dark:text-zinc-200'>
          404 - Page Not Found
        </h1>
        <p className='mb-8 text-lg text-zinc-600 md:text-xl dark:text-zinc-400'>
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link
          href='/'
          className='bg-gradient-to-r from-[#614385] to-[#516395] shadow-lg px-6 py-3 rounded-lg text-white hover:scale-105 transition-transform'>
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
