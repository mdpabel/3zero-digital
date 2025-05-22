import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import Link from 'next/link';
import ComponentWrapper from '../common/component-wrapper';

const Hero = () => {
  return (
    <ComponentWrapper className='relative py-10 md:pt-14'>
      <div>
        <div className='gap-8 grid grid-cols-1 md:grid-cols-5'>
          <div className='flex flex-col justify-center col-span-3'>
            <h1 className={`text-3xl md:text-5xl font-bold mb-4`}>
              3Zero Digital
            </h1>
            <p className='mb-6 text-xl md:text-2xl'>
              Empowering Digital Solutions with Zero Compromises
            </p>
            <div>
              <p className='mb-6 text-md md:text-lg'>
                Offering top-tier custom web development and website security
                solutions with virtually{' '}
                <span className='inline-block relative font-semibold text-primary-500'>
                  zero vulnerabilities
                </span>
                ,{' '}
                <span className='inline-block relative font-semibold text-primary-600'>
                  zero downtime
                </span>
                , and{' '}
                <span className='inline-block relative font-semibold text-primary-700'>
                  zero errors
                </span>
                . We ensure your business achieves optimal digital performance.
              </p>
            </div>
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
            <video
              className='hidden dark:block pointer-events-none select-none'
              width='320'
              height='240'
              autoPlay
              loop
              muted
              playsInline
              preload='none'
              poster='/images/hero-poster.avif'
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
              height='240'
              autoPlay
              loop
              muted
              playsInline
              preload='auto'
              style={{ border: 'none', outline: 'none' }}>
              <source src='/images/hero-light.webm' type='video/webm' />
              <source src='/images/hero-light.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default Hero;
