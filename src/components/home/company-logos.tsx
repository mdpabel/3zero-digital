import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const logos = [
  '/logos/1.png',
  '/logos/2.png',
  '/logos/3.png',
  '/logos/4.png',
  '/logos/5.png',
  '/logos/6.png',
  '/logos/8.png',
  '/logos/9.png',
  '/logos/11.png',
  '/logos/12.png',
  '/logos/13.png',
];

const CompaniesLogo = () => {
  const totalItems = logos.length;

  return (
    <div
      className='py-2'
      style={{
        maskImage:
          'linear-gradient(to right, rgba(0,0,0,0),rgba(0,0,0,1) 10%, rgba(0,0,0,1) 90%, rgba(0,0,0,0))',
      }}>
      <h2 className='py-10 pt-3 font-medium text-center text-xl text-zinc-800 md:text-2xl dark:text-zinc-200'>
        Companies That Trust Us
      </h2>

      <div className='relative mx-auto h-[80px] md:h-[100px] overflow-hidden'>
        {logos.map((logo, index) => {
          const delay = (30 / totalItems) * (totalItems - index + 1) * -1;
          return (
            <div
              key={index}
              className={cn(
                'absolute left-[100%] w-[120px] h-[100px] animate-[toLeft_30s_linear_infinite] flex justify-center items-center ',
              )}
              style={{
                animationDelay: `${delay}s`,
                left: `max(calc(140px * ${totalItems}), 100%)`,
                flex: '0 0 auto',
              }}>
              <Image
                src={logo}
                width={120}
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
