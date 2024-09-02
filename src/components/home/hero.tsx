import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check, CheckCheck } from 'lucide-react';

const theme = 'dark';

const Hero = () => {
  return (
    <div className='relative bg-white dark:bg-[#030712] px-10 md:px-20 py-20'>
      <div className='mx-auto w-full max-w-6xl container'>
        <div className='gap-8 grid grid-cols-1 md:grid-cols-5'>
          {/* Left Side - Text Content (spans 3 columns) */}
          <div className='flex flex-col justify-center col-span-3'>
            <h1
              className={`text-3xl md:text-5xl font-bold mb-6 text-zinc-800 dark:text-zinc-200`}>
              3Zero Digital
            </h1>
            <p
              className={`text-xl md:text-2xl mb-8 dark:text-gray-400 text-gray-600`}>
              Empowering Digital Solutions with Zero Compromises
            </p>
            <p
              className={`text-md md:text-lg mb-10 dark:text-gray-400 text-gray-600`}>
              Offering top-tier software solutions with zero vulnerabilities,
              zero downtime, and zero errors. We ensure your business achieves
              optimal digital performance.
            </p>
            <div className='space-x-4'>
              <button
                className={`px-8 py-2.5 bg-gradient-to-r from-[#614385] to-[#516395] text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105`}>
                Services
              </button>
              <button
                className={`px-8 py-2.5 bg-gradient-to-r from-[#614385] to-[#516395] text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105`}>
                Plans & Pricing
              </button>
            </div>
          </div>

          {/* Right Side - Custom SVG Illustration (spans 2 columns) */}
          <div className='relative flex justify-center items-center col-span-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='-30 -30 850 850' // Adjusted viewBox to provide more space
              className='w-3/4 md:w-4/5 h-auto animate-pulse-slow'
              fill='none'>
              <g>
                {/* New Outer Circle */}
                <circle
                  cx='400'
                  cy='400'
                  r='400'
                  stroke='#614385'
                  strokeWidth='12'
                />

                {/* Existing Outer Circle */}
                <circle
                  cx='400'
                  cy='400'
                  r='340'
                  stroke='#614385'
                  strokeWidth='10'
                />

                {/* Inner Circle */}
                <circle
                  cx='400'
                  cy='400'
                  r='260'
                  stroke='#614385'
                  strokeWidth='6'
                />

                {/* 3 Zero Elements */}
                <text
                  x='400'
                  y='270'
                  textAnchor='middle'
                  fontSize='60'
                  fill='#614385'
                  fontWeight='bold'>
                  0
                </text>
                <text
                  x='400'
                  y='330'
                  textAnchor='middle'
                  fontSize='24'
                  fill='#614385'>
                  Vulnerabilities
                </text>

                <text
                  x='400'
                  y='400'
                  textAnchor='middle'
                  fontSize='60'
                  fill='#614385'
                  fontWeight='bold'>
                  0
                </text>
                <text
                  x='400'
                  y='460'
                  textAnchor='middle'
                  fontSize='24'
                  fill='#614385'>
                  Downtime
                </text>

                <text
                  x='400'
                  y='530'
                  textAnchor='middle'
                  fontSize='60'
                  fill='#614385'
                  fontWeight='bold'>
                  0
                </text>
                <text
                  x='400'
                  y='590'
                  textAnchor='middle'
                  fontSize='24'
                  fill='#614385'>
                  Errors
                </text>

                {/* Connection lines between circles */}
                <line
                  x1='400'
                  y1='330'
                  x2='400'
                  y2='270'
                  stroke='#614385'
                  strokeWidth='3'
                />
                <line
                  x1='400'
                  y1='460'
                  x2='400'
                  y2='400'
                  stroke='#614385'
                  strokeWidth='3'
                />
                <line
                  x1='400'
                  y1='590'
                  x2='400'
                  y2='530'
                  stroke='#614385'
                  strokeWidth='3'
                />
              </g>
            </svg>

            {/* Decorative Glow Effect */}
            <div className='absolute inset-0 bg-gradient-to-br from-[#614385] to-[#516395] opacity-50 blur-3xl rounded-full w-96 h-96 animate-spin-slow'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
