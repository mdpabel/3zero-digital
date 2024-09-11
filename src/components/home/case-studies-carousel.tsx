'use client';

import { CaseStudy } from '@/lib/wordpress';
import { useState } from 'react';
import { FaShieldAlt, FaClock } from 'react-icons/fa';
import { Button } from '../ui/button';
import Image from 'next/image';

const CaseStudyCarousel = ({ data }: { data: CaseStudy[] }) => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(data);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1,
    );
  };

  if (!caseStudies.length) {
    return <div>No case studies available.</div>;
  }

  const currentStudy = caseStudies[currentIndex];

  return (
    <div className='bg-gray-50 dark:bg-[#0B1120] px-6 md:px-16 py-12'>
      <h2 className='mb-12 font-bold text-4xl text-center text-zinc-800 md:text-5xl dark:text-zinc-200'>
        Our Case Studies
      </h2>

      {/* Case Study Content */}
      <div className='flex flex-col items-center gap-8'>
        <div className='flex md:flex-row flex-col items-center gap-8 bg-white dark:bg-gray-900 shadow-lg p-8 rounded-lg w-full max-w-5xl transition-all duration-300 overflow-hidden'>
          {/* Before and After Images */}
          <div className='flex-1'>
            <div className='relative mb-4'>
              <Image
                src={currentStudy.beforeImage}
                alt='Before'
                className='rounded-lg w-full transform transition-transform duration-500 object-cover hover:scale-105'
                width={600}
                height={600}
              />
              <span className='top-2 left-2 absolute bg-red-500 shadow px-3 py-1 rounded text-sm text-white'>
                Before
              </span>
            </div>
            <div className='relative'>
              <Image
                src={currentStudy.afterImage}
                alt='After'
                className='rounded-lg w-full transform transition-transform duration-500 object-cover hover:scale-105'
                width={600}
                height={600}
              />
              <span className='top-2 left-2 absolute bg-green-500 shadow px-3 py-1 rounded text-sm text-white'>
                After
              </span>
            </div>
          </div>

          {/* Case Study Details */}
          <div className='flex-1 md:px-4'>
            <h3 className='mb-4 font-bold text-2xl text-zinc-800 dark:text-zinc-200'>
              {currentStudy.title}
            </h3>
            <p className='mb-8 text-gray-700 dark:text-gray-300 leading-relaxed'>
              {currentStudy.description}
            </p>

            <div className='space-y-6'>
              <div className='flex items-center gap-4'>
                <FaShieldAlt className='text-blue-500' size={24} />
                <div>
                  <p className='font-semibold text-zinc-800 dark:text-zinc-200'>
                    Outcome
                  </p>
                  <p className='text-gray-600 dark:text-gray-400'>
                    {currentStudy.outcome}
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-4'>
                <FaClock className='text-yellow-500' size={24} />
                <div>
                  <p className='font-semibold text-zinc-800 dark:text-zinc-200'>
                    Services
                  </p>
                  <p className='text-gray-600 dark:text-gray-400'>
                    {currentStudy.services.join(', ')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className='flex justify-center items-center gap-4'>
          <Button
            onClick={prevSlide}
            className='shadow-md px-6 py-2 rounded-full font-semibold text-white transition-transform hover:scale-105'>
            Prev
          </Button>
          <Button
            onClick={nextSlide}
            className='shadow-md px-6 py-2 rounded-full font-semibold text-white transition-transform hover:scale-105'>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCarousel;
