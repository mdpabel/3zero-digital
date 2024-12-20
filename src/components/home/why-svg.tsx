import React from 'react';

const WhySvg = () => {
  return (
    <div className='flex justify-center items-center'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 200 100'
        className='w-48 h-48 animate-pulse'
        style={{ transform: 'rotate(-10deg)' }}>
        <defs>
          <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#ff6a00' />
            <stop offset='100%' stopColor='#ee0979' />
          </linearGradient>
        </defs>
        <text
          x='50%'
          y='50%'
          textAnchor='middle'
          dominantBaseline='middle'
          fontSize='48'
          fontFamily="'Comic Sans MS', cursive"
          fill='url(#gradient)'
          stroke='#000'
          strokeWidth='2'
          paintOrder='stroke'>
          WHY?
        </text>
        <circle
          cx='50'
          cy='80'
          r='5'
          fill='url(#gradient)'
          className='animate-bounce'
        />
        <circle
          cx='150'
          cy='20'
          r='5'
          fill='url(#gradient)'
          className='animate-bounce'
          style={{ animationDelay: '0.2s' }}
        />
        <circle
          cx='100'
          cy='10'
          r='5'
          fill='url(#gradient)'
          className='animate-bounce'
          style={{ animationDelay: '0.4s' }}
        />
      </svg>
    </div>
  );
};

export default WhySvg;
