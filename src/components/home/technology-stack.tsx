import {
  FaWordpress,
  FaShopify,
  FaReact,
  FaNodeJs,
  FaPhp,
} from 'react-icons/fa';
import { SiMongodb, SiNextdotjs, SiTailwindcss } from 'react-icons/si';

const techStack = [
  {
    name: 'WordPress',
    icon: FaWordpress,
    description: 'Powerful CMS for building dynamic websites.',
  },
  {
    name: 'Shopify',
    icon: FaShopify,
    description: 'E-commerce platform for building online stores.',
  },
  {
    name: 'React',
    icon: FaReact,
    description: 'Modern frontend library for building user interfaces.',
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    description: 'Backend JavaScript runtime for scalable web apps.',
  },
  {
    name: 'PHP',
    icon: FaPhp,
    description: 'Server-side scripting language for dynamic websites.',
  },
  {
    name: 'MongoDB',
    icon: SiMongodb,
    description: 'NoSQL database for modern web applications.',
  },
  {
    name: 'Next.js',
    icon: SiNextdotjs,
    description: 'React framework for server-side rendering and static sites.',
  },
  {
    name: 'TailwindCSS',
    icon: SiTailwindcss,
    description: 'Utility-first CSS framework for fast UI development.',
  },
];

const TechnologyStack = () => {
  return (
    <div className='bg-gray-100 dark:bg-[#0B1120] px-6 md:px-16 py-12'>
      <h2 className='mb-12 font-bold text-3xl text-center text-zinc-800 md:text-4xl dark:text-zinc-200'>
        Technology Stack
      </h2>

      <div className='justify-center items-center gap-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
        {techStack.map((tech, index) => (
          <div
            key={index}
            className='flex flex-col justify-center items-center text-center group'>
            <tech.icon className='group-hover:scale-110 text-4xl transition-transform' />
            <p className='mt-4 font-semibold'>{tech.name}</p>
            <span className='opacity-0 group-hover:opacity-100 mt-2 text-sm dark:text-gray-300 transition-opacity'>
              {tech.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyStack;
