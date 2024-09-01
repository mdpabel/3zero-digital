import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, CheckCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 mt-6 md:mt-0 mb-10 md:mb-0 h-64 md:h-[400px]',
      )}>
      <div className='flex flex-col justify-center space-y-6 md:space-y-8 mx-auto border-black'>
        <div className='space-y-5'>
          <h1
            style={{
              lineHeight: 1.1,
            }}
            className='font-semibold text-2xl text-zinc-800 md:text-[3.2rem] dark:text-zinc-200'>
            The Zero-Risk Solution for Your Business
          </h1>
          <h2 className='mb-5 font-light text-zinc-800 sm:text-xl dark:text-zinc-200'>
            With 0 vulnerabilities, 0 downtime, and 0 errors, 3 Zero Tech
            ensures your business runs smoothly, securely, and without
            compromise.
          </h2>
        </div>
        <div className='flex space-x-4'>
          <Button
            className='border-zinc-800 dark:border-zinc-200 border'
            variant='outline'
            asChild>
            <Link href='/pricing' className='text-zinc-800 dark:text-zinc-200'>
              Plans & Pricing
            </Link>
          </Button>
          <Button
            className='border-zinc-800 dark:border-zinc-200 border'
            variant='outline'
            asChild>
            <Link href='/pricing' className='text-zinc-800 dark:text-zinc-200'>
              Plans & Pricing
            </Link>
          </Button>
        </div>

        <div className='gap-1 md:hidden grid grid-cols-2'>
          <div className='flex space-x-1'>
            <Check />
            <span>0 vulnerabilities</span>
          </div>
          <div className='flex space-x-1'>
            <Check />
            <span>0 downtime</span>
          </div>
          <div className='flex space-x-1'>
            <Check />
            <span>0 error</span>
          </div>
        </div>
      </div>

      <div className='md:flex flex-col justify-center items-center hidden'>
        <Image
          src='/images/home/hero.png'
          alt='3 zero world'
          width={600}
          height={400}
          className='-z-50 -mt-8 -mb-8 p-8 max-h-[400px] transform scale-110'
        />
        <div className='md:flex space-x-4 hidden'>
          <div className='flex space-x-1'>
            <Check />
            <span>0 vulnerabilities</span>
          </div>
          <div className='flex space-x-1'>
            <Check />
            <span>0 downtime</span>
          </div>
          <div className='flex space-x-1'>
            <Check />
            <span>0 error</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
