import React from 'react';
import BigScreenNavbar from './big-screen-navbar';
import TopBar from './top-bar';
import SmallScreenNavbar from './small-screen-navbar';

export const menu = [
  {
    label: 'Development',
    href: '/development',
    description:
      'Comprehensive development services for WordPress, Shopify, Frontend, Backend, and more.',
    subMenu: [
      {
        label: 'WordPress',
        href: '/development/wordpress',
        description:
          'WordPress development, themes, plugins customization, and more.',
      },
      {
        label: 'Shopify',
        href: '/development/shopify',
        description: 'Tailored Shopify development for your e-commerce needs.',
      },
      {
        label: 'Frontend',
        href: '/development/frontend',
        description:
          'Modern frontend development with HTML, CSS, JavaScript, and frameworks.',
      },
      {
        label: 'Backend',
        href: '/development/backend',
        description:
          'Robust backend development using popular technologies like Node.js, PHP, and more.',
      },
      {
        label: 'MERN Stack',
        href: '/development/mern-stack',
        description:
          'Full-stack development using MongoDB, Express, React, and Node.js.',
      },
      {
        label: 'WP Theme Development',
        href: '/development/wordpress-theme-development',
        description:
          'Custom WordPress theme development to match your brand and needs.',
      },
    ],
  },
  {
    label: 'Maintenance',
    href: '/maintenance',
    description:
      'Keep your website secure and up-to-date with our maintenance services.',
    subMenu: [
      {
        label: 'WordPress Malware Removal',
        href: '/maintenance/wordpress-malware-removal',
        description:
          'Fix your hacked site that is infected by malware, redirecting, spamming sites, red warning, etc.',
      },
      {
        label: 'WordPress Speed optimization',
        href: '/maintenance/wordpress-speed-optimization',
        description:
          'Enhance your WordPress site’s security to prevent attacks and vulnerabilities.',
      },
      {
        label: 'WordPress Security',
        href: '/maintenance/wordpress-security',
        description:
          'Enhance your WordPress site’s security to prevent attacks and vulnerabilities.',
      },
      {
        label: 'Ongoing WordPress maintenance',
        href: '/maintenance/ongoing-wordpress-maintenance',
        description:
          'Continuous updates, backups, and monitoring for WordPress sites.',
      },
      {
        label: 'Blacklist Removal',
        href: '/maintenance/blacklist-removal',
        description:
          'Remove your website from blacklists and restore its reputation.',
      },
      {
        label: 'Email Deliverability Issues',
        href: '/maintenance/email-deliverability-issues',
        description:
          'Resolve issues with email deliverability, spam filters, and blacklisting.',
      },
      {
        label: 'Website Migration',
        href: '/maintenance/website-migration',
        description:
          'Smoothly migrate your website to a new host or platform without downtime.',
      },
      {
        label: 'SSL Installation',
        href: '/maintenance/ssl-installation',
        description:
          'Secure your website with SSL installation, ensuring safe data transmission.',
      },
    ],
  },
  {
    label: 'Troubleshooting',
    href: '/troubleshooting',
    description: 'Quickly diagnose and fix common website errors and issues.',
    subMenu: [
      {
        label: '404 Page',
        href: '/error/404',
        description: 'Fix 404 errors and ensure proper page redirection.',
      },
      {
        label: '500 Page',
        href: '/error/500',
        description: 'Resolve server errors causing 500 Internal Server Error.',
      },
      {
        label: '403 Forbidden',
        href: '/error/403-fobidden',
        description: 'Fix 403 errors where access to pages is denied.',
      },
      {
        label: 'Mixed content error',
        href: '/error/mixed-content-error',
        description:
          'Resolve mixed content errors to ensure all elements are loaded securely.',
      },
      {
        label: 'White Screen Of Death',
        href: '/error/white-screen-of-death',
        description:
          'Diagnose and fix the white screen issue that makes your site inaccessible.',
      },
    ],
  },
  {
    label: 'SEO',
    href: '/seo',
    description:
      'Optimize your website for search engines to improve visibility and rankings.',
  },
  {
    label: 'Marketing',
    href: '/marketing',
    description:
      'Drive traffic and increase conversions with targeted marketing strategies.',
  },
];

const Header = () => {
  return (
    <div>
      <TopBar />
      <BigScreenNavbar />
      <SmallScreenNavbar />
    </div>
  );
};

export default Header;
