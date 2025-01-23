import {
  FaServer,
  FaCogs,
  FaCloud,
  FaLock,
  FaClipboardCheck,
  FaTools,
  FaShieldAlt,
  FaRocket,
  FaEnvelope,
  FaPuzzlePiece,
  FaRegCheckCircle,
} from 'react-icons/fa';

export const steps = [
  {
    icon: <FaServer className='text-[#614385] text-3xl' />,
    title: 'Purchase Hosting and Domain',
    description:
      'Acquire a reliable hosting plan and domain from a reputable provider, such as Namecheap or Hostinger.',
  },
  {
    icon: <FaCogs className='text-[#614385] text-3xl' />,
    title: 'Configure Domain, Hosting, and DNS',
    description:
      'Set up the hosting environment, link the domain, and configure DNS settings for seamless connectivity.',
  },
  {
    icon: <FaCloud className='text-[#614385] text-3xl' />,
    title: 'Install WordPress',
    description:
      'Set up the WordPress platform on the hosting server to build the website.',
  },
  {
    icon: <FaLock className='text-[#614385] text-3xl' />,
    title: 'Install and Configure SSL',
    description:
      'Enable SSL to secure the website and ensure it operates over HTTPS.',
  },
  {
    icon: <FaClipboardCheck className='text-[#614385] text-3xl' />,
    title: 'Select and Install a Theme & Plugins',
    description:
      'Choose a suitable theme and essential plugins that align with the client’s needs, then customize them as required.',
  },
  {
    icon: <FaTools className='text-[#614385] text-3xl' />,
    title: 'Develop and Populate the Website',
    description:
      'Add the necessary pages, content, and media to create a fully functional and visually appealing website.',
  },
  {
    icon: <FaShieldAlt className='text-[#614385] text-3xl' />,
    title: 'Secure the Website',
    description:
      'Enhance security by installing and configuring Wordfence Security and other measures to protect against potential threats.',
  },
  {
    icon: <FaRocket className='text-[#614385] text-3xl' />,
    title: 'Optimize Website Performance',
    description:
      'Improve site speed and performance using LiteSpeed Cache for caching and Smush for image optimization.',
  },
  {
    icon: <FaEnvelope className='text-[#614385] text-3xl' />,
    title: 'Set Up Fluent SMTP',
    description:
      'Configure Fluent SMTP to ensure reliable and efficient email delivery from the website.',
  },
  {
    icon: <FaPuzzlePiece className='text-[#614385] text-3xl' />,
    title: 'Protect Forms with Google reCAPTCHA or Cloudflare Turnstile',
    description:
      'Implement advanced form protection to prevent spam and ensure secure form submissions using Google reCAPTCHA or Cloudflare Turnstile.',
  },
  {
    icon: <FaRegCheckCircle className='text-[#614385] text-3xl' />,
    title: 'Final Checks & Launch',
    description:
      'After thorough testing and performance optimization, your website will be launched and made live to the world.',
  },
];
