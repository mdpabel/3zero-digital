import { FaShieldAlt, FaRocket, FaShoppingCart } from 'react-icons/fa';
import shopifySecurity from '@/../public/images/services/shopify-security.png';
import shopifyPerformance from '@/../public/images/services/shopify-performance.png';
import shopifyUX from '@/../public/images/services/shopify-ui-ux.png';

// Benefits for Shopify Service
export const benefits = [
  {
    icon: <FaShieldAlt />,
    title: 'Secure & Reliable',
    description:
      'Your Shopify store deserves the best protection. With Shopify’s built-in security features, we ensure your store is safe from hackers, fraud, and data breaches. With SSL encryption and PCI compliance, your customers’ data is always secure, giving them peace of mind.',
    image: shopifySecurity,
  },
  {
    icon: <FaRocket />,
    title: 'Fast and Optimized Performance',
    description:
      'Speed is key for online shopping. Shopify’s platform is built to handle traffic spikes and deliver fast, smooth performance. We optimize your store for speed, ensuring customers don’t abandon their carts due to slow loading times, improving both sales and user experience.',
    image: shopifyPerformance,
  },
  {
    icon: <FaShoppingCart />,
    title: 'Easy-to-Use & Mobile-Friendly',
    description:
      'With Shopify, setting up and managing your store is simple. We create an easy-to-navigate online store that looks great on all devices. Whether your customers shop on a desktop or mobile, they’ll enjoy a seamless and intuitive shopping experience.',
    image: shopifyUX,
  },
];

// Quiz Questions for Shopify Service
export const questions = [
  {
    question: 'Is your Shopify store secured with SSL encryption?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question: 'Do you regularly update your Shopify themes and apps?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question: 'Is your Shopify store optimized for mobile devices?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question: 'Have you set up abandoned cart recovery on your Shopify store?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question: 'Are you using SEO best practices for your Shopify products?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question: 'Does your Shopify store load in under 3 seconds?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question: 'Is your Shopify store connected to a reliable payment gateway?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Do you track your Shopify store’s performance and sales with analytics?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question: 'Do you offer multiple payment options for your customers?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Is your Shopify store protected from fraud with tools like Shopify Payments?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Have you set up a fast, easy checkout process for your customers?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Are your product images high-quality and optimized for fast loading?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Do you have a clear return/refund policy visible on your Shopify store?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question: 'Is your Shopify store connected to a reliable shipping system?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Are your Shopify products tagged and categorized for better search visibility?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
];
