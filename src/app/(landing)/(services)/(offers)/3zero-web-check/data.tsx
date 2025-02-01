import { FaFileAlt, FaHeartbeat, FaUserShield } from 'react-icons/fa';

export const steps = [
  {
    icon: <FaUserShield className='text-[#614385] text-3xl' />,
    title: 'Getting Site Access',
    description:
      'Gain administrative access to the website and server to perform necessary checks and configurations.',
  },
  {
    icon: <FaHeartbeat className='text-[#614385] text-3xl' />,
    title: 'Health Check',
    description:
      'Run a comprehensive health check of the website, including performance, security, and functionality.',
  },
  {
    icon: <FaFileAlt className='text-[#614385] text-3xl' />,
    title: 'Providing Detailed Report',
    description:
      'Generate a detailed report with findings from the health check, including recommendations for improvement and fixes.',
  },
];
