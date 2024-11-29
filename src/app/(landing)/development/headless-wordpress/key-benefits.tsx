import { FaShieldAlt, FaRocket, FaCloud, FaDollarSign } from 'react-icons/fa'; // Example image, you can add
import Image from 'next/image';
import cdn from '@/../public/images/cdn.png';
import cms from '@/../public/images/cms.png';
import savings from '@/../public/images/savings.png';
import growth from '@/../public/images/growth.png';

const benefits = [
  {
    icon: <FaRocket />,
    title: 'The Power of Speed',
    description:
      'Website speed is critical—not just for user satisfaction, but for your bottom line. With Jamstack architecture and CDN delivery, we eliminate delays and deliver static content instantly, reducing load times and boosting conversions. By serving pre-rendered pages and optimizing dynamic elements, your site responds faster, improves user experience, and drives business growth.',
    image: cdn,
  },
  {
    icon: <FaShieldAlt />,
    title: 'Decoupled Security',
    description:
      'Minimize vulnerabilities and reduce the risk of exposing sensitive data by leveraging static hosting and a robust API-first approach. This reduces the potential attack surface, ensuring that your website’s infrastructure remains secure while focusing on securing API routes specifically for safe and controlled interactions.',
    image: cms, // Replace with the correct image for this benefit
  },
  {
    icon: <FaDollarSign />,
    title: 'Cost Efficiency',
    description:
      'Save on hosting costs by using static files and CDN delivery, reducing overheads for scaling. With Jamstack, you pay only for what you use, making it a cost-effective solution for websites of all sizes.',
    image: savings, // Replace with the correct image for this benefit
  },
  {
    icon: <FaCloud />,
    title: 'Scalable Growth',
    description:
      'Easily scale your website with minimal server resources. With the power of static hosting and CDN distribution, you can handle massive spikes in traffic without worrying about infrastructure.',
    image: growth, // Replace with the correct image for this benefit
  },
];

const KeyBenefits = () => {
  return (
    <section className='py-16'>
      <div className='mx-auto px-4 container-xl'>
        <h2 className='mb-12 font-semibold text-3xl text-center text-zinc-800 dark:text-zinc-200'>
          Key Benefits of Headless WordPress & Next.js
        </h2>

        <div className='flex flex-col gap-8'>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } flex-col items-center gap-6 md:gap-10 w-full`}>
              {/* Left side (Image) */}
              <div className='md:basis-1/2 w-full'>
                <Image
                  alt={benefit.title}
                  className='w-full'
                  src={benefit.image}
                  width='600'
                  height='600'
                />
              </div>

              {/* Right side (Text) */}
              <div className='md:basis-1/2 flex flex-col items-start gap-4 w-full'>
                <div className='flex justify-center items-center bg-indigo-600 rounded-full w-12 h-12 text-3xl text-white'>
                  {benefit.icon}
                </div>
                <h3 className='font-semibold text-2xl text-zinc-800 dark:text-zinc-200'>
                  {benefit.title}
                </h3>
                <p className='text-zinc-600 dark:text-zinc-300'>
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;
