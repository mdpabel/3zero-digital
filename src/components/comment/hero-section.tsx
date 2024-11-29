import { YouTubeEmbed } from '@next/third-parties/google';

const HeroSection = ({
  title,
  subtitle,
  description,
  youtubeId,
  firstBtnText,
  secondBtnText,
  firstBtnLink,
  secondBtnLink,
}: {
  title: string;
  subtitle: string;
  description: string;
  youtubeId: string;
  firstBtnText: string;
  secondBtnText: string;
  firstBtnLink: string;
  secondBtnLink: string;
}) => {
  return (
    <div className='relative py-10 md:py-14'>
      <div className='mx-auto px-4 w-full max-w-6xl container'>
        <div className='gap-8 grid grid-cols-1 md:grid-cols-5'>
          <div className='flex flex-col justify-center col-span-3'>
            <h1
              className={`text-3xl md:text-5xl font-bold mb-4 text-zinc-800 dark:text-zinc-200`}>
              {title}
            </h1>
            <p
              className={`text-xl md:text-2xl mb-8 dark:text-gray-400 text-gray-600`}>
              {subtitle}
            </p>
            <p
              className={`text-md md:text-lg mb-10 dark:text-gray-400 text-gray-600`}>
              {description}
            </p>
            <div className='space-x-4'>
              <button
                className={`px-4 py-2.5 bg-gradient-to-r from-[#614385] to-[#516395] text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105`}>
                {firstBtnText}
              </button>
              <button
                className={`px-4 py-2.5 bg-gradient-to-r from-[#614385] to-[#516395] text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105`}>
                {secondBtnText}
              </button>
            </div>
          </div>

          <div className='relative flex justify-center items-center col-span-2'>
            <YouTubeEmbed videoid={youtubeId} width={400} params='controls=0' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
