const Hero = () => {
  return (
    <div className='relative mx-auto py-10 p-4 md:pt-10 max-w-6xl'>
      <div className='mx-auto w-full max-w-6xl container'>
        <div className='gap-8 grid grid-cols-1 md:grid-cols-5'>
          <div className='flex flex-col justify-center col-span-3'>
            <h1
              className={`text-3xl md:text-5xl font-bold mb-4 text-zinc-800 dark:text-zinc-200`}>
              3Zero Digital
            </h1>
            <p
              className={`text-xl md:text-2xl mb-8 dark:text-gray-400 text-gray-600`}>
              Empowering Digital Solutions with Zero Compromises
            </p>
            <p
              className={`text-md md:text-lg mb-10 dark:text-gray-400 text-gray-600`}>
              Offering top-tier custom web development and website security
              solutions with virtually zero vulnerabilities, zero downtime, and
              zero errors. We ensure your business achieves optimal digital
              performance.
            </p>
            <div className='space-x-4'>
              <button
                className={`px-4 py-2.5 bg-gradient-to-r from-[#614385] to-[#516395] text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105`}>
                Services
              </button>
              <button
                className={`px-4 py-2.5 bg-gradient-to-r from-[#614385] to-[#516395] text-white font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105`}>
                Plans & Pricing
              </button>
            </div>
          </div>

          <div className='relative flex justify-center items-center col-span-2'>
            <video
              className='dark:block hidden'
              width='320'
              height='240'
              autoPlay
              loop
              muted
              playsInline
              preload='auto'
              style={{
                backgroundColor: '#030712',
                border: 'none',
                outline: 'none',
              }}>
              <source src='/images/hero.webm' type='video/webm' />
              <source src='/images/hero.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>

            <video
              className='block dark:hidden'
              width='400'
              height='300'
              autoPlay
              loop
              muted
              playsInline
              preload='auto'
              style={{ border: 'none', outline: 'none' }}>
              <source src='/images/hero-light.webm' type='video/webm' />
              <source src='/images/hero-light.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
