'use client';

import { CaseStudy } from '@/lib/wordpress/case-study';
import { useState, useEffect, useCallback } from 'react';
import { FaShieldAlt, FaClock } from 'react-icons/fa';
import { Button } from '../ui/button';
import Image from 'next/image';
import Title from '../common/title';

const CaseStudyCarousel = ({ data }: { data: CaseStudy[] }) => {
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(data);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === caseStudies.length - 1 ? 0 : prevIndex + 1,
    );
  }, [caseStudies.length]);

  // Autoplay functionality
  useEffect(() => {
    const intervalId = setInterval(() => {
      // nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [currentIndex, nextSlide]);

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
    <div className='px-6 md:px-16 py-12'>
      <Title
        title='Our Case Studies'
        subTitle='Learn more about how we helped businesses achieve their goals.'
      />

      {/* Case Study Content */}
      <div className='flex flex-col items-center gap-8'>
        <div className='relative w-full'>
          <div
            className='flex md:flex-row flex-col items-center gap-8 bg-white dark:bg-gray-900 shadow-lg p-8 rounded-lg w-full transition-transform duration-700 ease-in-out transform'
            key={currentStudy.title}>
            {/* Before and After Images */}
            <div className='flex-1'>
              {currentStudy.beforeImage && (
                <div className='relative flex justify-center items-center mb-4 overflow-hidden'>
                  <Image
                    src={currentStudy.beforeImage}
                    alt='Before'
                    className='rounded-lg w-full h-auto max-h-96 md:max-h-[500px] object-cover transition-transform duration-500'
                    width={600}
                    height={400}
                  />
                  <span className='top-2 left-2 absolute bg-red-700 shadow px-3 py-1 rounded text-white text-sm'>
                    Before
                  </span>
                </div>
              )}
              {currentStudy.afterImage && (
                <div className='relative flex justify-center items-center overflow-hidden'>
                  <Image
                    src={currentStudy.afterImage}
                    alt='After'
                    className='rounded-lg w-full h-auto max-h-96 md:max-h-[500px] object-cover transition-transform duration-500'
                    width={600}
                    height={400}
                  />
                  <span className='top-2 left-2 absolute bg-green-700 shadow px-3 py-1 rounded text-white text-sm'>
                    After
                  </span>
                </div>
              )}
            </div>

            {/* Case Study Details */}
            <div className='flex-1 md:px-4'>
              <h3 className='mb-4 font-bold text-2xl'>{currentStudy.title}</h3>
              <p className='mb-8 text-gray-700 dark:text-gray-300 leading-relaxed'>
                {currentStudy.description}
              </p>

              <div className='space-y-6'>
                <div className='flex items-center gap-4'>
                  <FaShieldAlt className='text-blue-500' size={24} />
                  <div>
                    <p className='font-semibold'>Outcome</p>
                    <p className=''>{currentStudy.outcome}</p>
                  </div>
                </div>
                <div className='flex items-center gap-4'>
                  <FaClock className='text-yellow-500' size={24} />
                  <div>
                    <p className='font-semibold'>Services</p>
                    <p className=''>{currentStudy.services.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className='flex justify-center items-center gap-4'>
          <Button
            onClick={prevSlide}
            className='shadow-md px-6 py-2 font-semibold text-white hover:scale-105 transition-transform'>
            Prev
          </Button>
          <Button
            onClick={nextSlide}
            className='shadow-md px-6 py-2 font-semibold text-white hover:scale-105 transition-transform'>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCarousel;
