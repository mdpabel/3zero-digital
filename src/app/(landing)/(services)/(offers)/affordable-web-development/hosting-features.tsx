import {
  FaLock,
  FaDatabase,
  FaRegEnvelope,
  FaServer,
  FaCloud,
  FaDatabase as FaDatabaseIcon,
  FaTools,
  FaClipboardCheck,
  FaUserCog,
  FaRegCheckCircle,
} from 'react-icons/fa';

const hostingFeatures = [
  {
    icon: <FaServer className='mb-4 text-[#614385] text-4xl' />,
    title: 'Free Domain Name',
    description:
      'Get a custom domain for your business website at no additional cost.',
  },
  {
    icon: <FaCloud className='mb-4 text-[#614385] text-4xl' />,
    title: '20GB SSD Hosting',
    description:
      'Fast, secure hosting with SSD storage to ensure lightning-fast performance.',
  },
  {
    icon: <FaLock className='mb-4 text-[#614385] text-4xl' />,
    title: 'Free SSL Certificate',
    description:
      'Your site will be secured with SSL, boosting trust and SEO ranking.',
  },
  {
    icon: <FaClipboardCheck className='mb-4 text-[#614385] text-4xl' />,
    title: 'Backups Twice a Week',
    description:
      'Your website data is backed up twice a week for peace of mind.',
  },
  {
    icon: <FaTools className='mb-4 text-[#614385] text-4xl' />,
    title: 'cPanel Access',
    description:
      'Manage your website with cPanel, the most user-friendly control panel.',
  },
  {
    icon: <FaRegEnvelope className='mb-4 text-[#614385] text-4xl' />,
    title: '30 Email Accounts',
    description:
      'Professional email accounts using your domain—make your business stand out.',
  },
  {
    icon: <FaDatabase className='mb-4 text-[#614385] text-4xl' />,
    title: '50 MySQL Databases',
    description:
      'Host multiple projects with up to 50 MySQL databases for your convenience.',
  },

  {
    icon: <FaDatabaseIcon className='mb-4 text-[#614385] text-4xl' />,
    title: '30 Subdomains',
    description:
      'Create up to 30 subdomains to organize your projects or services.',
  },
];

const HostingFeatures = () => {
  return (
    <div className='py-16 text-center'>
      <h2 className='mb-6 font-bold text-4xl'>
        🚀 Get Your Website’s **Home** for FREE! 🏠
      </h2>
      <p className='mb-8 text-xl'>
        Hosting, domain, security, and everything you need to launch and grow
        your website—at NO EXTRA COST!
      </p>

      <div className='gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto max-w-7xl'>
        {hostingFeatures.map((feature, index) => (
          <div
            key={index}
            className='dark:bg-gray-900 shadow-lg p-6 rounded-lg text-center'>
            {feature.icon}
            <h3 className='mb-2 font-semibold text-xl'>{feature.title}</h3>
            <p className=''>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostingFeatures;
