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
  FaWordpressSimple,
} from 'react-icons/fa';

export const services = [
  {
    label: 'Development',
    href: '/development',
    description:
      'Comprehensive development services for WordPress, Shopify, Frontend, Backend, and more.',
    icon: <FaCode />,
    subMenu: [
      {
        label: 'WordPress',
        href: '/development/wordpress',
        description: 'WordPress development, themes, plugins customization.',
        icon: <FaWordpress />,
      },
      {
        label: 'Shopify',
        href: '/development/shopify',
        description: 'Shopify development for e-commerce.',
        icon: <FaShopify />,
      },
      {
        label: 'Frontend',
        href: '/development/frontend',
        description: 'Modern frontend development using HTML, CSS, JavaScript.',
        icon: <FaCode />,
      },
      {
        label: 'Backend',
        href: '/development/backend',
        description: 'Backend development with Node.js, PHP, and more.',
        icon: <FaServer />,
      },
      {
        label: 'MERN Stack',
        href: '/development/mern-stack',
        description: 'Full-stack development using MERN stack.',
        icon: <FaReact />,
      },
      {
        label: 'WP Theme Development',
        href: '/development/wordpress-theme-development',
        description:
          'Custom WordPress theme development to match your brand and needs.',
        icon: <FaWordpressSimple />,
      },
    ],
  },
  {
    label: 'Maintenance',
    href: '/maintenance',
    description:
      'Keep your website secure and up-to-date with our maintenance services.',
    icon: <FaShieldAlt />,
    subMenu: [
      {
        label: 'WordPress Malware Removal',
        href: '/maintenance/wordpress-malware-removal',
        description: 'Fix hacked sites with malware or redirect issues.',
        icon: <FaBug />,
      },
      {
        label: 'WordPress Speed Optimization',
        href: '/maintenance/wordpress-speed-optimization',
        description: 'Speed up your WordPress website for optimal performance.',
        icon: <FaRocket />,
      },
      {
        label: 'WordPress Security',
        href: '/maintenance/wordpress-security',
        description: 'Enhance WordPress security to prevent attacks.',
        icon: <FaShieldAlt />,
      },
      {
        label: 'Ongoing WordPress Maintenance',
        href: '/maintenance/ongoing-wordpress-maintenance',
        description: 'Continuous backups, updates, and monitoring.',
        icon: <FaShieldAlt />,
      },
      {
        label: 'Blacklist Removal',
        href: '/maintenance/blacklist-removal',
        description:
          'Remove your website from blacklists and restore its reputation.',
        icon: <FaShieldAlt />,
      },
      {
        label: 'Email Deliverability Issues',
        href: '/maintenance/email-deliverability-issues',
        description:
          'Resolve issues with email deliverability, spam filters, and blacklisting.',
        icon: <FaEnvelope />,
      },
      {
        label: 'Website Migration',
        href: '/maintenance/website-migration',
        description:
          'Smoothly migrate your website to a new host or platform without downtime.',
        icon: <FaServer />,
      },
      {
        label: 'SSL Installation',
        href: '/maintenance/ssl-installation',
        description:
          'Secure your website with SSL installation, ensuring safe data transmission.',
        icon: <FaShieldAlt />,
      },
    ],
  },
  {
    label: 'Troubleshooting',
    href: '/troubleshooting',
    description: 'Quickly diagnose and fix common website errors and issues.',
    icon: <FaExclamationTriangle />,
    subMenu: [
      {
        label: '404 Page',
        href: '/error/404',
        description: 'Fix 404 errors and ensure proper redirection.',
        icon: <FaExclamationTriangle />,
      },
      {
        label: '500 Page',
        href: '/error/500',
        description: 'Resolve 500 Internal Server Errors.',
        icon: <FaExclamationTriangle />,
      },
      {
        label: '403 Forbidden',
        href: '/error/403-fobidden',
        description: 'Fix 403 errors for access issues.',
        icon: <FaExclamationTriangle />,
      },
      {
        label: 'Mixed Content Error',
        href: '/error/mixed-content-error',
        description:
          'Resolve mixed content errors to ensure all elements are loaded securely.',
        icon: <FaExclamationTriangle />,
      },
      {
        label: 'White Screen Of Death',
        href: '/error/white-screen-of-death',
        description:
          'Diagnose and fix the white screen issue that makes your site inaccessible.',
        icon: <FaExclamationTriangle />,
      },
    ],
  },
  {
    label: 'Marketing',
    href: '/marketing',
    description:
      'Drive traffic and increase conversions with targeted marketing strategies.',
    icon: <FaRocket />,
    subMenu: [
      {
        label: 'SEO Optimization',
        href: '/marketing/seo-optimization',
        description: 'Optimize your site for search engine visibility.',
        icon: <FaRocket />,
      },
      {
        label: 'YouTube Marketing',
        href: '/marketing/youtube',
        description:
          'Promote your business through targeted YouTube marketing strategies.',
        icon: <FaYoutube />,
      },
      {
        label: 'Backlink Building',
        href: '/marketing/backlink-building',
        description:
          'Increase your site’s authority through strategic backlink building.',
        icon: <FaLink />,
      },
      {
        label: 'Social Media Marketing',
        href: '/marketing/social-media',
        description:
          'Boost your brand’s online presence with effective social media marketing.',
        icon: <FaFacebook />,
      },
      {
        label: 'Email Marketing',
        href: '/marketing/email',
        description:
          'Engage your audience through targeted email marketing campaigns.',
        icon: <FaEnvelope />,
      },
      {
        label: 'Content Marketing',
        href: '/marketing/content',
        description:
          'Create compelling content that attracts and engages your target audience.',
        icon: <FaPen />,
      },
    ],
  },
  {
    label: 'Case Studies',
    href: '/case-studies',
    description:
      'Explore our case studies to see how we’ve helped businesses grow.',
    icon: <FaPen />,
    subMenu: [],
  },
];
