import { Button } from '@/components/ui/button';
import Image from 'next/image';
import YouTubeBrowserFrame from './video';

const Hero = () => {
  return (
    <div className='mx-auto py-14 max-w-5xl text-center'>
      <p className='mb-2 text-gray-800 text-xl dark:text-gray-300'>
        Ready to create a professional website without the high costs or stress?
      </p>
      <h1
        style={{
          lineHeight: '1.2em',
        }}
        className='mb-4 font-bold text-3xl text-zinc-800 md:text-5xl dark:text-zinc-200'>
        Get Your Business Website in Just 7 Days for Only $79
      </h1>
      <p className='mb-2 text-gray-600 text-xl dark:text-gray-400'>
        All the features you need—design,{' '}
        <strong className='text-black dark:text-white'>
          security, hosting, domain, SSL, Email
        </strong>
        , and more—at a price that won’t break the bank.
      </p>

      <div className='flex justify-center gap-4 pt-6'>
        <Button className='px-10 py-6'>Get Started</Button>
        <Button className='px-10 py-6'>See Our Work</Button>
      </div>
    </div>
  );
};

export default Hero;
