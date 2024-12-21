import { FaRocket, FaLock, FaCodeBranch } from 'react-icons/fa';
import nextjsFullstack from '@/../public/images/services/nextjs-fullstack.png';
import nextjsSecurity from '@/../public/images/services/nextjs-security.png';
import nextjsCustomization from '@/../public/images/services/nextjs-customization.png';

// Benefits for Next.js Fullstack App Development
export const benefits = [
  {
    icon: <FaRocket />,
    title: 'Complete Full-Stack Framework',
    description:
      'Next.js is the ultimate full-stack framework, enabling both the front-end and back-end of your app in one unified codebase. With features like API routes and server-side rendering (SSR), we can build dynamic, data-driven apps with ease, combining the best of front-end and back-end development.',
    image: nextjsFullstack,
  },
  {
    icon: <FaLock />,
    title: 'Comprehensive Security with Robust Validation',
    description:
      'With Next.js, your app benefits from a secure foundation, and we take it further. We implement robust security practices, including secure API routes, server-side protections, and automatic mitigation of common vulnerabilities like XSS and CSRF. Using Zod for schema validation, we validate every input and API response to ensure data integrity and prevent malicious payloads. Our end-to-end approach ensures your app remains secure, reliable, and trustworthy for all users.',
    image: nextjsSecurity,
  },
  {
    icon: <FaCodeBranch />,
    title: 'Scalable & Customizable Development',
    description:
      'Next.js offers flexibility for building scalable and customizable web applications. Whether you need complex server-side logic, dynamic data fetching, or seamless integration with third-party services, Next.js allows for maximum customization while ensuring the app can scale as your business grows.',
    image: nextjsCustomization,
  },
];

export const questions = [
  {
    question: 'Does your application load in under 2 seconds?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question: 'Is your application optimized for server-side rendering (SSR)?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question: 'Are your API routes secure and follow best practices?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Have you implemented authentication and role-based access control?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question: 'Is your app fully responsive and mobile-friendly?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Does your app use modern deployment techniques like Vercel or Docker?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Are you using caching strategies to optimize API performance (e.g., Redis)?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Is your app built with modular and reusable components for scalability?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Do you monitor your app’s performance and errors using tools like Sentry or New Relic?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Have you implemented SEO-friendly features like metadata and sitemap generation?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
];

export const processes = [
  {
    title: 'Consultation & Planning',
    description:
      'Understand your goals, define the scope, and outline features for your WordPress site.',
    icon: '👥',
  },
  {
    title: 'Wireframing & Design',
    description:
      'Visualize the layout with mockups and ensure a user-friendly design.',
    icon: '✏️',
  },
  {
    title: 'Development & Coding',
    description:
      'Bring your design to life with WordPress themes, plugins and functionality.',
    icon: '💻',
  },
  {
    title: 'Content Integration',
    description: 'Upload and optimize content for better user experience.',
    icon: '📄',
  },
  {
    title: 'Testing & Feedback',
    description:
      'Conduct thorough testing and incorporate your feedback before launch.',
    icon: '✅',
  },
  {
    title: 'Deployment & Support',
    description:
      'Launch your site and provide ongoing maintenance and support.',
    icon: '🚀',
  },
];
