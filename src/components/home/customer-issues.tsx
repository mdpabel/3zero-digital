import React from 'react';
import Image1 from '@/../public/images/1.png';
import Image2 from '@/../public/images/2.png';
import Image3 from '@/../public/images/3.png';
import buyer1 from '@/../public/images/buyers/1.jpeg';
import buyer2 from '@/../public/images/buyers/2.jpeg';
import buyer3 from '@/../public/images/buyers/3.jpeg';
import Image from 'next/image';
import { Button } from '../ui/button';
import Link from 'next/link';
import WhySvg from './why-svg';

const messages = [
  {
    name: 'Liam Chen',
    image: buyer1,
    message:
      "My WooCommerce checkout page has been compromised. Users' payment data is being stolen. Can you help?",
    reply:
      "We checked your site's network requests and found that a hacker injected a fake payment form, which is sending users' credit card data to another server.",
  },
  {
    name: 'Alex Turner',
    image: buyer2,
    message:
      'I have a dedicated server with 64GB RAM, but my site is still slow. What could be the issue? It’s frustrating and driving my customers away.',
    reply:
      'We analyzed your site and found 294 products showcased across 6 sections, causing excessive requests and slowing down your site.',
  },
  {
    name: 'Noah Jones',
    image: buyer3,
    message: `"We're not getting much traffic or sales on our website. Can you help us figure out what's wrong?"`,
    reply:
      'We analyzed your site and found potential issues affecting traffic and conversions, such as poor SEO, slow loading speeds, and unclear CTAs. We can optimize your site to drive more traffic and boost sales.',
  },
];

const CustomerIssues = () => {
  return (
    <div className='lg:block hidden mx-auto px-4 py-10 max-w-6xl'>
      <div className='mb-8 text-center'>
        <p className='mb-2 text-gray-800 text-xl dark:text-gray-400'>
          Did you know?
        </p>
        <h2 className='mx-auto mb-4 max-w-4xl font-medium text-xl text-zinc-800 md:text-2xl dark:text-zinc-200'>
          30,000 websites are hacked every day globally, out of which{' '}
          <span className='font-bold'>43%</span> are targeted at small
          businesses. Over <span className='font-bold'>90%</span> of them are
          due to poor development and not following best practices.
        </h2>
      </div>
      <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {messages.map((message, index) => {
          return (
            <div key={index}>
              {index === 1 && <WhySvg />}
              <div className='flex flex-col border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 shadow-md hover:shadow-lg p-6 border rounded-lg transform transition-transform hover:scale-105'>
                <div className='flex items-center gap-4 mb-4'>
                  <Image
                    src={message.image}
                    alt={message.name}
                    className='border-gray-300 dark:border-gray-600 border rounded-full w-14 h-14'
                  />
                  <h3 className='font-semibold text-gray-800 text-lg dark:text-gray-200'>
                    {message.name}
                  </h3>
                </div>
                <p className='mb-4 text-gray-600 text-sm dark:text-gray-400 italic'>
                  "{message.message}"
                </p>
                <div className='mt-auto'>
                  <p className='flex items-center gap-2 font-medium text-gray-700 text-sm dark:text-gray-300'>
                    <span role='img' aria-label='reply'>
                      💬
                    </span>{' '}
                    Our Reply:
                  </p>
                  <p className='text-gray-800 dark:text-gray-100'>
                    {message.reply}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className='items-center gap-20 grid grid-cols-2 bg-transparent mt-32'>
        <div className='mr-24'>
          <h3
            style={{
              lineHeight: '1.2em',
            }}
            className='mb-4 font-bold text-3xl text-zinc-800 md:text-5xl dark:text-zinc-200'>
            Thankfully, there is 3Zerodigital
          </h3>
          <p className='mt-2 text-gray-600 dark:text-gray-400'>
            The truly affordable done-for-you website solution. Achieving
            perfection with 0 Vulnerability, 0 Downtime, 0 Error.
          </p>
          <Button asChild className='mt-6 px-10 py-6 text-lg'>
            <Link href='#getStarted'>Get Started</Link>
          </Button>
        </div>
        <div className='flex justify-center items-center'>
          <Image
            style={{
              willChange: 'transform',
              transform:
                'translate3d(35px, 0px, 0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(-6deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              zIndex: 9,
            }}
            className='bg-transparent max-w-[290px]'
            src={Image1}
            alt='Responsive website development'
          />
          <Image
            style={{
              zIndex: 10,
              scale: 1.05,
            }}
            className='bg-transparent max-w-[290px] max-h-[560px]'
            src={Image2}
            alt='Responsive website development'
          />
          <Image
            style={{
              willChange: 'transform',
              transform:
                'translate3d(-35px, 0px, 0px) scale3d(1,1,1) rotateX(0deg) rotateY(0deg) rotateZ(6deg) skew(0deg, 0deg)',
              transformStyle: 'preserve-3d',
              zIndex: 9,
            }}
            className='bg-transparent max-w-[290px] max-h-[560px]'
            src={Image3}
            alt='Responsive website development'
          />
        </div>
      </div>
    </div>
  );
};

export default CustomerIssues;
