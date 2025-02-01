import {
  FaCheckCircle,
  FaTachometerAlt,
  FaShieldAlt,
  FaBug,
  FaSearch,
  FaMobileAlt,
  FaExclamationTriangle, // Blacklist check icon
  FaVirus, // Added icon for malware check
} from 'react-icons/fa';

const Checklist = () => {
  const checklistItems = [
    {
      icon: <FaTachometerAlt />,
      title: 'Performance',
      description: 'Analyze speed, load time, and overall website performance.',
    },
    {
      icon: <FaVirus />, // Malware check icon
      title: 'Malware & Virus Check',
      description:
        'Scan your website for potential malware, viruses, or malicious code that could compromise your site’s security.',
    },
    {
      icon: <FaShieldAlt />,
      title: 'Security',
      description:
        'Check for vulnerabilities, SSL issues, and blacklist status.',
    },
    {
      icon: <FaExclamationTriangle />,
      title: 'Blacklist Check',
      description:
        'Scan your website against 100+ known blacklists for potential security issues and ensure your site is safe from penalties.',
    },

    {
      icon: <FaBug />,
      title: 'Error Detection',
      description:
        'Identify broken links, JavaScript errors, and server issues.',
    },
    {
      icon: <FaSearch />,
      title: 'SEO Audit',
      description:
        'Evaluate meta tags, headings, and search engine optimization factors.',
    },
    {
      icon: <FaMobileAlt />,
      title: 'Mobile Optimization',
      description: 'Ensure responsiveness and usability across all devices.',
    },
  ];

  return (
    <div className='shadow-lg mx-auto mb-10 p-4 rounded-2xl max-w-5xl'>
      <h2 className='mb-6 font-bold text-2xl text-center'>What We Check</h2>
      <ul className='space-y-6'>
        {checklistItems.map((item, index) => (
          <li
            key={index}
            className='flex items-center space-x-4 p-4 rounded-lg hover:text-white transform transition duration-300 ease-in-out primary-color hover:scale-105'>
            <span className='text-2xl text-white transition-colors duration-300'>
              {item.icon}
            </span>
            <div>
              <h3 className='font-semibold text-white text-xl'>{item.title}</h3>
              <p className='text-sm text-white'>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
