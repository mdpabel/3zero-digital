import HeroSection from '@/components/comment/hero-section';
import { FaShieldAlt, FaRocket, FaMobileAlt } from 'react-icons/fa';
import wordpressSecurity from '@/../public/images/services/wordpress-security.png';
import wordpressPerformance from '@/../public/images/services/wordpress-performance.png';
import wordpressUX from '@/../public/images/services/wordpress-ui-ux.png';
import KeyBenefits from '@/components/comment/key-benefits';
import Quiz from '@/components/comment/quiz';

export const benefits = [
  {
    icon: <FaShieldAlt />,
    title: 'Top-Notch Security',
    description:
      'Protect your site from hackers and data breaches. Our WordPress websites are built with the latest security practices, including regular updates, strong encryption, and secure hosting to ensure your site stays safe and your data stays protected.',
    image: wordpressSecurity,
  },
  {
    icon: <FaRocket />,
    title: 'Blazing-Fast Performance',
    description:
      'Your visitors expect speed. With optimized WordPress themes, caching, and CDN integration, we ensure that your site loads quickly, keeping users engaged and improving SEO rankings. A faster website leads to a better user experience and higher conversions.',
    image: wordpressPerformance,
  },
  {
    icon: <FaMobileAlt />,
    title: 'Responsive & User-Friendly Design',
    description:
      'A great website is not just about looks—it’s about how it works. We build fully responsive WordPress websites that provide a seamless experience across all devices. With modern UI/UX design principles, your visitors will have an intuitive and engaging experience every time.',
    image: wordpressUX,
  },
];

export const questions = [
  {
    question:
      'Are you using a well-known security plugin like Wordfence or All-in-One WP Security?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Is your website hosted on a secure and reputable hosting platform (e.g., SiteGround, WP Engine, Bluehost)?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Is your site’s performance score 90+ on tools like Google PageSpeed or GTmetrix?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Do you regularly update your WordPress core, themes, and plugins?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Have you implemented caching plugins like WP Rocket or W3 Total Cache?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Are all your WordPress themes and plugins from trusted sources or developers?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Do you have an active backup system in place (e.g., UpdraftPlus, BackupBuddy)?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Is your website optimized for SEO using a plugin like Yoast SEO or Rank Math?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question: 'Is your website mobile-friendly and fully responsive?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Does your website use a CDN (Content Delivery Network) like Cloudflare?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Do you regularly monitor your website for broken links or errors?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Is your website’s database optimized regularly to improve performance?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question: 'Have you implemented a firewall to protect your WordPress site?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question:
      'Does your website use a modern, lightweight theme for faster loading times?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
  {
    question: 'Do you limit login attempts to prevent brute-force attacks?',
    options: ['Yes', 'No'],
    correctAnswer: 'Yes',
  },
];
