'use client';
import React, { useState } from 'react';

const HeadlessWordPressAndNextJs = () => {
  return (
    <div>
      <HeadlessWordPressHero />
    </div>
  );
};

export default HeadlessWordPressAndNextJs;

const HeadlessWordPressHero = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Function to handle the video play
  const handlePlayClick = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className='relative bg-white dark:bg-[#030712] px-10 md:px-20 py-10 md:py-20'>
      <div className='mx-auto w-full max-w-6xl container'>
        <div className='gap-8 grid grid-cols-1 md:grid-cols-5'>
          {/* Text Content */}
          <div className='flex flex-col justify-center col-span-3'>
            <h1 className='mb-6 font-bold text-3xl text-zinc-800 md:text-5xl dark:text-zinc-200'>
              Empowering Your Website with Headless WordPress & Next.js
            </h1>
            <p className='mb-8 text-gray-600 text-xl md:text-2xl dark:text-gray-400'>
              Delivering lightning-fast, scalable, and SEO-optimized solutions
              with the best of both worlds.
            </p>
            <div className='space-x-4'>
              <button className='bg-gradient-to-r from-[#614385] to-[#516395] shadow-lg px-4 py-2.5 rounded-lg font-semibold text-white transform transition-transform hover:scale-105'>
                Get Started
              </button>
              <button className='bg-gradient-to-r from-[#614385] to-[#516395] shadow-lg px-4 py-2.5 rounded-lg font-semibold text-white transform transition-transform hover:scale-105'>
                Contact Us for a Quote
              </button>
            </div>
          </div>

          {/* Visual Content with Video */}
          <div className='relative flex flex-col justify-center items-center space-y-6 col-span-2'>
            {!isVideoPlaying ? (
              <div className='relative w-full'>
                {/* Thumbnail Image */}
                <img
                  src='https://img.youtube.com/vi/i2ELgrjhsXQ/maxresdefault.jpg'
                  alt='Video Thumbnail'
                  className='rounded-lg w-full h-auto cursor-pointer'
                  onClick={handlePlayClick}
                />
                {/* Play Button */}
                <div className='top-1/2 left-1/2 absolute transform -translate-x-1/2 -translate-y-1/2'>
                  <button
                    onClick={handlePlayClick}
                    className='bg-white shadow-lg p-3 rounded-full'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='30'
                      height='30'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      className='text-gray-800 dark:text-gray-200'>
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M14 5l7 7-7 7M5 19l7-7-7-7'
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ) : (
              // YouTube iframe once the video is playing
              <div className='relative pb-[56.25%] w-full h-0'>
                <iframe
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/i2ELgrjhsXQ'
                  frameBorder='0'
                  allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  className='top-0 left-0 absolute rounded-lg w-full h-full'></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
