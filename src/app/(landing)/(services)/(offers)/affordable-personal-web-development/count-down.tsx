'use client';
import React, { useEffect, useState } from 'react';

const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  function calculateTimeLeft(targetDate: string) {
    const difference = new Date(targetDate).getTime() - new Date().getTime();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  if (!timeLeft) {
    return (
      <div className='text-center'>
        <p className='font-bold text-2xl text-red-600'>
          The offer has expired!
        </p>
      </div>
    );
  }

  return (
    <div className='md:block hidden px-6 py-16 text-center'>
      <h2 className='mb-4 font-bold text-4xl'>🕒 Countdown to Offer End</h2>
      <div className='justify-center gap-6 lex'>
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className='flex flex-col items-center bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg'>
            <p className='font-semibold text-4xl'>{value}</p>
            <span className='text-sm'>
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
