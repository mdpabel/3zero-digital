import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

// Define the props interface
interface HeroProps {
  headline: string;
  subHeadline: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ headline, subHeadline, description }) => {
  return (
    <div className='mx-auto py-14 lg:py-20 max-w-5xl text-center'>
      <p className='mb-2 text-gray-800 text-xl dark:text-gray-300'>
        {subHeadline}
      </p>
      <h1
        style={{
          lineHeight: '1.2em',
        }}
        className='mb-4 font-bold text-3xl text-zinc-800 md:text-5xl dark:text-zinc-200'>
        {headline}
      </h1>
      <p
        className='mb-2 text-gray-600 text-xl dark:text-gray-400'
        dangerouslySetInnerHTML={{
          __html: description,
        }}></p>

      <div className='flex justify-center gap-3 md:gap-4 pt-6'>
        <Button className='px-5 md:px-10 py-6 text-lg'>
          <Link href='#getStarted'>Get Started</Link>
        </Button>
        <Button asChild className='px-5 md:px-10 py-6 text-lg'>
          <Link prefetch={false} target='_blank' href='/book-a-call'>
            Book a call
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
