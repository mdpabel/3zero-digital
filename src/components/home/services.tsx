'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import {
  FaWordpress,
  FaShopify,
  FaCode,
  FaServer,
  FaReact,
  FaShieldAlt,
  FaRocket,
  FaBug,
  FaExclamationTriangle,
  FaPen,
  FaEnvelope,
  FaFacebook,
  FaLink,
  FaYoutube,
} from 'react-icons/fa';
import Title from '../common/title';

const servicesData = [
  {
    label: 'Development',
    description:
      'Comprehensive development services for WordPress, Shopify, Frontend, Backend, and more.',
    icon: <FaCode />,
    subMenu: [
      {
        label: 'WordPress',
        description: 'WordPress development, themes, plugins customization.',
        icon: <FaWordpress />,
      },
      {
        label: 'Shopify',
        description: 'Shopify development for e-commerce.',
        icon: <FaShopify />,
      },
      {
        label: 'Frontend',
        description: 'Modern frontend development using HTML, CSS, JavaScript.',
        icon: <FaCode />,
      },
      {
        label: 'Backend',
        description: 'Backend development with Node.js, PHP, and more.',
        icon: <FaServer />,
      },
      {
        label: 'MERN Stack',
        description: 'Full-stack development using MERN stack.',
        icon: <FaReact />,
      },
    ],
  },
  {
    label: 'Maintenance',
    description:
      'Keep your website secure and up-to-date with our maintenance services.',
    icon: <FaShieldAlt />,
    subMenu: [
      {
        label: 'WordPress Malware Removal',
        description: 'Fix hacked sites with malware or redirect issues.',
        icon: <FaBug />,
      },
      {
        label: 'WordPress Speed Optimization',
        description: 'Speed up your WordPress website for optimal performance.',
        icon: <FaRocket />,
      },
      {
        label: 'WordPress Security',
        description: 'Enhance WordPress security to prevent attacks.',
        icon: <FaShieldAlt />,
      },
      {
        label: 'Ongoing WordPress Maintenance',
        description: 'Continuous backups, updates, and monitoring.',
        icon: <FaShieldAlt />,
      },
    ],
  },
  {
    label: 'Troubleshooting',
    description: 'Quickly diagnose and fix common website errors.',
    icon: <FaExclamationTriangle />,
    subMenu: [
      {
        label: '404 Page',
        description: 'Fix 404 errors and ensure proper redirection.',
        icon: <FaExclamationTriangle />,
      },
      {
        label: '500 Page',
        description: 'Resolve 500 Internal Server Errors.',
        icon: <FaExclamationTriangle />,
      },
      {
        label: '403 Forbidden',
        description: 'Fix 403 errors for access issues.',
        icon: <FaExclamationTriangle />,
      },
      {
        label: 'Mixed Content Error',
        description:
          'Resolve mixed content errors to ensure all elements are loaded securely.',
        icon: <FaExclamationTriangle />,
      },
      {
        label: 'White Screen Of Death',
        description:
          'Diagnose and fix the white screen issue that makes your site inaccessible.',
        icon: <FaExclamationTriangle />,
      },
    ],
  },
  {
    label: 'Marketing',
    description:
      'Drive traffic and increase conversions with targeted marketing strategies.',
    icon: <FaRocket />,
    subMenu: [
      {
        label: 'SEO Optimization',
        description: 'Optimize your site for search engine visibility.',
        icon: <FaRocket />,
      },
      {
        label: 'YouTube Marketing',
        description:
          'Promote your business through targeted YouTube marketing strategies.',
        icon: <FaYoutube />,
      },
      {
        label: 'Backlink Building',
        description:
          'Increase your site’s authority through strategic backlink building.',
        icon: <FaLink />,
      },
      {
        label: 'Social Media Marketing',
        description:
          'Boost your brand’s online presence with effective social media marketing.',
        icon: <FaFacebook />,
      },
      {
        label: 'Email Marketing',
        description:
          'Engage your audience through targeted email marketing campaigns.',
        icon: <FaEnvelope />,
      },
      {
        label: 'Content Marketing',
        description:
          'Create compelling content that attracts and engages your target audience.',
        icon: <FaPen />,
      },
    ],
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState('Development');

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = servicesData.findIndex(
        (service) => service.label === activeTab,
      );
      const nextTab =
        servicesData[(currentIndex + 1) % servicesData.length].label;
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
          {servicesData.map((service) => (
            <TabsTrigger
              key={service.label}
              value={service.label}
              className='flex items-center space-x-2 hover:bg-indigo-500 p-2 sm:p-4 rounded-md text-white transition-colors primary-color'>
              {service.icon}
              <span>{service.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {servicesData.map((service) => (
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
        ))}
      </Tabs>
    </div>
  );
};

export default Services;
