import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const logos = [
  '/logos/1.png',
  '/logos/1.png',
  '/logos/1.png',
  '/logos/1.png',
  '/logos/1.png',
  '/logos/1.png',
  '/logos/1.png',
  '/logos/1.png',
  '/logos/1.png',
  '/logos/1.png',
  '/logos/1.png',
];

const CompaniesLogo = () => {
  const totalItems = 8;

  return (
    <div
      className='bg-white dark:bg-[#0B1120] py-2'
      style={{
        maskImage:
          'linear-gradient(to right, rgba(0,0,0,0),rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0))',
      }}>
      <h2 className='pt-3 font-medium text-center text-xl text-zinc-800 md:text-2xl dark:text-zinc-200'>
        Companies That Trust Us
      </h2>

      <div className='relative mx-auto h-[80px] md:h-[100px] overflow-hidden'>
        {logos.map((logo, index) => {
          const delay = (30 / totalItems) * (totalItems - index + 1) * -1;
          return (
            <div
              key={index}
              className={cn(
                'absolute left-[100%] rounded-md w-[120px] h-[80px] md:w-[200px] md:h-[100px] animate-[toLeft_30s_linear_infinite] flex justify-center items-center px-2 md:px-4',
              )}
              style={{
                animationDelay: `${delay}s`,
              }}>
              <Image
                src={logo}
                width={200}
                height={100}
                alt={`client-logo-${index + 1}`}
                className='object-contain'
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompaniesLogo;
