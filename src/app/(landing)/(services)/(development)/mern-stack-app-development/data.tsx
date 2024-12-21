import { FaRocket, FaLock, FaCog } from 'react-icons/fa';
import mernSpeed from '@/../public/images/services/mern-speed.png';
import mernSecurity from '@/../public/images/services/mern-security.png';
import mernCustomization from '@/../public/images/services/mern-customization.png';

export const benefits = [
  {
    icon: <FaRocket />,
    title: 'High-Performance Applications',
    description:
      'We specialize in building fast, scalable, and efficient applications using the MERN stack. By leveraging MongoDB, Express.js, React, and Node.js, we deliver solutions that handle high traffic, perform exceptionally, and provide seamless user experiences. Every line of code is optimized for speed, ensuring your app runs at peak performance.',
    image: mernSpeed,
  },
  {
    icon: <FaLock />,
    title: 'End-to-End Security',
    description:
      'Security is at the heart of everything we build. Our MERN stack solutions come with robust security layers, including encrypted connections, secure API development, and vulnerability prevention strategies. We implement advanced techniques like JWT authentication, role-based access control, and real-time monitoring to keep your data safe and your users protected.',
    image: mernSecurity,
  },
  {
    icon: <FaCog />,
    title: 'Tailored Solutions for Your Business',
    description:
      'We don’t believe in one-size-fits-all. Our MERN stack development services are customized to meet your unique business needs. From creating highly interactive front-end interfaces to building powerful back-end systems, we design solutions that align perfectly with your goals. We also ensure seamless integration with third-party APIs and services to maximize your app’s functionality.',
    image: mernCustomization,
  },
];

export const questions = [
  {
    question: 'Does your current application struggle with performance issues?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question: 'Are you looking for a fully responsive and mobile-friendly app?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question: 'Do you need real-time functionality like chat or notifications?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Is your current system secure and protected from vulnerabilities?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question: 'Are you losing customers due to slow page load times?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question: 'Do you need seamless integration with third-party services?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question: 'Are you ready to scale your application as your business grows?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Do you want a team that ensures both front-end and back-end excellence?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Do you require advanced features like data analytics or dashboards?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question: 'Is your current development team meeting your expectations?',
    options: ['Yes', 'No'],
    correctAnswer: 'No',
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
