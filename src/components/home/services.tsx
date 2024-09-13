'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Title from '../common/title';
import { services } from '@/services';

const Services = () => {
  const [activeTab, setActiveTab] = useState('Development');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = services.findIndex(
        (service) => service.label === activeTab,
      );
      const nextTab = services[(currentIndex + 1) % services.length].label;
      setActiveTab(nextTab);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeTab]);

  return (
    <div className='mx-auto px-4 py-10 sm:py-16 max-w-6xl'>
      <Title
        title='Explore Our Services'
        subTitle='Discover how we can help you grow and optimize your online presence.'
      />

      <Tabs
        defaultValue={activeTab}
        value={activeTab}
        onValueChange={setActiveTab}>
        <TabsList className='flex flex-wrap justify-center gap-2 sm:space-x-4 bg-transparent mb-6'>
          {services.map((service) => {
            if (service.label === 'Case Studies') return null;

            return (
              <TabsTrigger
                key={service.label}
                value={service.label}
                className='flex items-center space-x-2 hover:bg-indigo-500 p-2 sm:p-4 rounded-md text-white transition-colors primary-color'>
                {service.icon}
                <span>{service.label}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {services.map((service) => {
          return (
            <TabsContent
              className='p-4 pt-10'
              key={service.label}
              value={service.label}>
              <motion.div
                key={service.label}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6 }}
                className='gap-6 sm:gap-8 grid grid-cols-1 sm:grid-cols-2'>
                <div>
                  <h2 className='mb-4 sm:mb-6 font-bold text-gray-800 text-lg sm:text-2xl dark:text-gray-200'>
                    {service.description}
                  </h2>
                  <ul className='space-y-4 sm:space-y-6'>
                    {service.subMenu.map((subService, i) => (
                      <li key={i} className='flex items-start space-x-4'>
                        <span className='text-indigo-500 text-xl sm:text-2xl'>
                          {subService.icon}
                        </span>
                        <div>
                          <h3 className='font-semibold text-gray-800 text-md sm:text-lg dark:text-gray-200'>
                            {subService.label}
                          </h3>
                          <p className='text-gray-600 dark:text-gray-400'>
                            {subService.description}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className='w-full'>
                  <motion.img
                    src='/test.webp'
                    alt={`${service.label} illustration`}
                    className='shadow-lg rounded-lg w-full h-auto'
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </motion.div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default Services;
