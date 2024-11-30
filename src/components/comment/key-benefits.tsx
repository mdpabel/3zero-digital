// Example image, you can add
import Image, { StaticImageData } from 'next/image';

type Props = {
  benefits: {
    icon: JSX.Element;
    title: string;
    description: string;
    image: StaticImageData;
  }[];
  title: string;
};

const KeyBenefits = ({ benefits, title }: Props) => {
  return (
    <section className='py-16'>
      <div className='mx-auto px-4 container-xl'>
        <h2 className='mb-12 font-semibold text-3xl text-center text-zinc-800 dark:text-zinc-200'>
          {title}
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
