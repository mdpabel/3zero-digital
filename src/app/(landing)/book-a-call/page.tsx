import Title from '@/components/common/title';
import React from 'react';

const BookACall: React.FC = () => {
  return (
    <div className='mx-auto p-4 max-w-6xl'>
      <Title
        title='Book a Call'
        subTitle='Schedule a 30-minute call with us. Pick a time that works best for you!'
      />

      {/* Calendly Embed */}
      <div className='border-2 border-gray-200 bg-gray-50 shadow-lg rounded-lg w-full h-[650px] md:h-[800px]'>
        <iframe
          src='https://calendly.com/3zerodigital-info/30min'
          width='100%'
          height='100%'
          frameBorder='0'
          className='rounded-lg'
          title='Schedule a call with us'></iframe>
      </div>
    </div>
  );
};

export default BookACall;
