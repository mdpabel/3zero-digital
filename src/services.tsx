import {
  FaWordpress,
  FaShopify,
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
  FaHtml5,
  FaNodeJs,
  FaJs,
  FaCode,
} from 'react-icons/fa';

export const services = [
  {
    label: 'Development',
    href: '/development',
    description:
      'Comprehensive development services for modern web platforms, e-commerce, and full-stack applications.',
    icon: <FaJs />,
    imageUrl: '/services/1.png',
    subMenuItems: [
      {
        label: 'WordPress Solutions',
        href: '/development/wordpress',
        description: 'Custom themes, plugins, and WordPress site development.',
        icon: <FaWordpress />,
        featured: true,
      },
      {
        label: 'Headless WordPress & Next.js',
        href: '/development/headless-wordpress',
        description:
          'Build modern, high-performance headless WordPress sites with Next.js.',
        icon: <FaReact />,
        featured: true,
      },
      {
        label: 'Shopify Development',
        href: '/development/shopify',
        description:
          'Create scalable and engaging e-commerce stores using Shopify.',
        icon: <FaShopify />,
        featured: true,
      },
      {
        label: 'Fullstack Next.js Applications',
        href: '/development/nextjs-fullstack',
        description: 'End-to-end Next.js application development.',
        icon: <FaNodeJs />,
        featured: true,
      },
      {
        label: 'MERN Stack Development',
        href: '/development/mern-stack',
        description:
          'Full-stack development using MongoDB, Express, React, and Node.js.',
        icon: <FaReact />,
        featured: true,
      },
      {
        label: 'Frontend',
        href: '/development/frontend',
        description: 'Modern frontend development using HTML, CSS, JavaScript.',
        icon: <FaCode />,
        featured: true,
      },
      {
        label: 'Static HTML & CSS Websites',
        href: '/development/static-sites',
        description:
          'Develop lightweight, responsive static websites with HTML5 and CSS3.',
        icon: <FaHtml5 />,
        featured: true,
      },
    ],
  },
  {
    label: 'Maintenance',
    href: '/maintenance',
    description:
      'Keep your website secure and up-to-date with our maintenance services.',
    icon: <FaShieldAlt />,
    imageUrl: '/services/2.png',
    subMenuItems: [
      {
        label: 'WordPress Malware Removal',
        href: '/maintenance/wordpress-malware-removal',
        description: 'Fix hacked sites with malware or redirect issues.',
        icon: <FaBug />,
        featured: true,
      },
      {
        label: 'WordPress Speed Optimization',
        href: '/maintenance/wordpress-speed-optimization',
        description: 'Speed up your WordPress website for optimal performance.',
        icon: <FaRocket />,
        featured: true,
      },
      {
        label: 'WordPress Security',
        href: '/maintenance/wordpress-security',
        description: 'Enhance WordPress security to prevent attacks.',
        icon: <FaShieldAlt />,
        featured: true,
      },
      {
        label: 'Ongoing WordPress Maintenance',
        href: '/maintenance/ongoing-wordpress-maintenance',
        description: 'Continuous backups, updates, and monitoring.',
        icon: <FaShieldAlt />,
        featured: true,
      },
      {
        label: 'Blacklist Removal',
        href: '/maintenance/blacklist-removal',
        description:
          'Remove your website from blacklists and restore its reputation.',
        icon: <FaShieldAlt />,
        featured: false,
      },
      {
        label: 'Email Deliverability Issues',
        href: '/maintenance/email-deliverability-issues',
        description:
          'Resolve issues with email deliverability, spam filters, and blacklisting.',
        icon: <FaEnvelope />,
        featured: true,
      },
      {
        label: 'Website Migration',
        href: '/maintenance/website-migration',
        description:
          'Smoothly migrate your website to a new host or platform without downtime.',
        icon: <FaServer />,
        featured: false,
      },
      {
        label: 'SSL Installation',
        href: '/maintenance/ssl-installation',
        description:
          'Secure your website with SSL installation, ensuring safe data transmission.',
        icon: <FaShieldAlt />,
        featured: false,
      },
    ],
  },
  {
    label: 'Troubleshooting',
    href: '/troubleshooting',
    description: 'Quickly diagnose and fix common website errors and issues.',
    icon: <FaExclamationTriangle />,
    imageUrl: '/services/3.png',
    subMenuItems: [
      {
        label: '404 Page',
        href: '/error/404',
        description: 'Fix 404 errors and ensure proper redirection.',
        icon: <FaExclamationTriangle />,
        featured: true,
      },
      {
        label: '500 Page',
        href: '/error/500',
        description: 'Resolve 500 Internal Server Errors.',
        icon: <FaExclamationTriangle />,
        featured: true,
      },
      {
        label: '403 Forbidden',
        href: '/error/403-fobidden',
        description: 'Fix 403 errors for access issues.',
        icon: <FaExclamationTriangle />,
        featured: true,
      },
      {
        label: 'Mixed Content Error',
        href: '/error/mixed-content-error',
        description:
          'Resolve mixed content errors to ensure all elements are loaded securely.',
        icon: <FaExclamationTriangle />,
        featured: true,
      },
      {
        label: 'White Screen Of Death',
        href: '/error/white-screen-of-death',
        description:
          'Diagnose and fix the white screen issue that makes your site inaccessible.',
        icon: <FaExclamationTriangle />,
        featured: true,
      },
    ],
  },
  {
    label: 'Marketing',
    href: '/marketing',
    description:
      'Drive traffic and increase conversions with targeted marketing strategies.',
    icon: <FaRocket />,
    imageUrl: '/services/4.png',
    subMenuItems: [
      {
        label: 'SEO Optimization',
        href: '/marketing/seo-optimization',
        description: 'Optimize your site for search engine visibility.',
        icon: <FaRocket />,
        featured: true,
      },
      {
        label: 'YouTube Marketing',
        href: '/marketing/youtube',
        description:
          'Promote your business through targeted YouTube marketing strategies.',
        icon: <FaYoutube />,
        featured: false,
      },
      {
        label: 'Backlink Building',
        href: '/marketing/backlink-building',
        description:
          'Increase your site’s authority through strategic backlink building.',
        icon: <FaLink />,
        featured: true,
      },
      {
        label: 'Social Media Marketing',
        href: '/marketing/social-media',
        description:
          'Boost your brand’s online presence with effective social media marketing.',
        icon: <FaFacebook />,
        featured: true,
      },
      {
        label: 'Email Marketing',
        href: '/marketing/email',
        description:
          'Engage your audience through targeted email marketing campaigns.',
        icon: <FaEnvelope />,
        featured: true,
      },
      {
        label: 'Content Marketing',
        href: '/marketing/content',
        description:
          'Create compelling content that attracts and engages your target audience.',
        icon: <FaPen />,
        featured: true,
      },
    ],
  },
];
