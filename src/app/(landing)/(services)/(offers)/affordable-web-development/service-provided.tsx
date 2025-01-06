import {
  FaRegLightbulb,
  FaCogs,
  FaShieldAlt,
  FaPlug,
  FaRegEdit,
  FaPaintBrush,
  FaCloud,
} from 'react-icons/fa';

const services = [
  {
    icon: <FaRegEdit className='mr-4 text-[#614385] text-3xl' />,
    title: '4 Pages (Home, Contact, About, Blog)',
    description:
      'We will create 4 essential pages for your website, including a home/landing page, a contact page, an about page, and a blog page to engage with your visitors.',
  },
  {
    icon: <FaPaintBrush className='mr-4 text-[#614385] text-3xl' />,
    title: 'Astra Theme',
    description:
      'We will install and configure the Astra theme for your website, ensuring a professional and responsive design.',
  },
  {
    icon: <FaPlug className='mr-4 text-[#614385] text-3xl' />,
    title: 'Plugins Included',
    description:
      'We’ll install and configure essential plugins like Contact Form 7, Fluent SMTP, Elementor page builder, and more to enhance functionality.',
  },
  {
    icon: <FaShieldAlt className='mr-4 text-[#614385] text-3xl' />,
    title: 'Security with Wordfence',
    description:
      'Your site will be protected using Wordfence Security & Firewall, ensuring your website stays safe from attacks.',
  },
  {
    icon: <FaRegLightbulb className='mr-4 text-[#614385] text-3xl' />,
    title: 'Form Protection (reCAPTCHA or Turnstile)',
    description:
      'We will implement Google reCAPTCHA or Cloudflare Turnstile to protect your contact forms from spam and bots.',
  },
  {
    icon: <FaCogs className='mr-4 text-[#614385] text-3xl' />,
    title: 'Speed & Image Optimization',
    description:
      'We’ll optimize your website for faster load times, including image optimization, caching, and speed improvements using tools like Smush and ListSpeed Cache.',
  },
  {
    icon: <FaCloud className='mr-4 text-[#614385] text-3xl' />,
    title: 'Domain & Hosting Setup',
    description:
      'We will set up your domain and hosting with all necessary configurations for smooth performance and reliability.',
  },
];

const ServicesProvided = () => {
  return (
    <div className='py-16 text-center'>
      <h2 className='mb-6 font-bold text-4xl'>
        🚀 What You’ll Get With Your Website Package
      </h2>
      <p className='mb-8 text-xl'>
        We provide everything you need to launch and grow your website. Check
        out the list of tools and services included in our plan.
      </p>

      <ul className='space-y-6 mx-auto max-w-5xl'>
        {services.map((service, index) => (
          <li
            key={index}
            className='flex items-start gap-4 bg-white hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-gray-900 shadow-lg p-6 rounded-lg transition-all duration-300'>
            {service.icon}
            <div>
              <h3 className='mb-2 font-semibold text-xl'>{service.title}</h3>
              <p className=''>{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesProvided;
