'use client';

import { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';
import ComponentWrapper from '../common/component-wrapper';

const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Prefer requestIdleCallback if available
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => setShowVideo(true), { timeout: 2000 });
    } else {
      setTimeout(() => setShowVideo(true), 1500);
    }
  }, []);

  return (
    <ComponentWrapper className='relative py-10 md:pt-14'>
      <div className='gap-8 grid grid-cols-1 md:grid-cols-5'>
        <div className='flex flex-col justify-center col-span-3'>
          <h1 className='mb-4 font-bold text-3xl md:text-5xl'>3Zero Digital</h1>
          <p className='mb-6 text-xl md:text-2xl'>
            Empowering Digital Solutions with Zero Compromises
          </p>
          <p className='mb-6 text-md md:text-lg'>
            Offering top-tier custom web development and website security
            solutions with virtually{' '}
            <span className='font-semibold text-primary-500'>
              zero vulnerabilities
            </span>
            ,{' '}
            <span className='font-semibold text-primary-600'>
              zero downtime
            </span>
            , and{' '}
            <span className='font-semibold text-primary-700'>zero errors</span>.
            We ensure your business achieves optimal digital performance.
          </p>
          <div className='space-x-4'>
            <Button asChild className='px-5 md:px-10 py-6 text-lg'>
              <Link href='#getStarted'>Get started</Link>
            </Button>
            <Button asChild className='px-5 md:px-10 py-6 text-lg'>
              <Link prefetch={false} target='_blank' href='/book-a-call'>
                Book a call
              </Link>
            </Button>
          </div>
        </div>

        <div className='relative flex justify-center items-center col-span-2'>
          {!showVideo ? (
            // Poster image for fast LCP
            <img
              src='/images/hero-poster.avif'
              alt='Hero preview'
              width='320'
              className='rounded w-full max-w-[320px] h-auto object-contain'
            />
          ) : (
            <>
              <video
                className='hidden dark:block pointer-events-none select-none'
                width='320'
                height='320'
                autoPlay
                loop
                muted
                playsInline
                style={{
                  backgroundColor: '#030712',
                  border: 'none',
                  outline: 'none',
                }}>
                <source src='/images/hero.webm' type='video/webm' />
                <source src='/images/hero.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>

              <video
                className='dark:hidden block pointer-events-none select-none'
                width='320'
                height='320'
                autoPlay
                loop
                muted
                playsInline
                style={{ border: 'none', outline: 'none' }}>
                <source src='/images/hero-light.webm' type='video/webm' />
                <source src='/images/hero-light.mp4' type='video/mp4' />
                Your browser does not support the video tag.
              </video>
            </>
          )}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;
