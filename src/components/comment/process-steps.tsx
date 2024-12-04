type Props = {
  processes: {
    title: string;
    description: string;
    icon: string;
  }[];
  title: string;
};

const ProcessSteps = ({ processes, title }: Props) => {
  return (
    <div className='dark:bg-gray-900 mb-10 py-12'>
      <div className='mx-auto px-6 lg:px-8 max-w-7xl'>
        <h2 className='font-bold text-3xl text-center text-zinc-800 dark:text-zinc-200'>
          {title}
        </h2>
        <div className='gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
          {processes.map((process, index) => (
            <div
              key={index}
              className='bg-white dark:bg-gray-950 shadow-lg p-6 rounded-lg transform hover:scale-105 transition-transform'>
              <div className='flex justify-center items-center bg-gradient-to-r from-[#614385] to-[#516395] mb-4 rounded-full w-12 h-12 text-white'>
                <span className='text-xl'>{process.icon}</span>
              </div>
              <h3 className='font-semibold text-xl text-zinc-800 dark:text-zinc-200'>
                {process.title}
              </h3>
              <p className='mt-2 text-gray-600 dark:text-gray-400'>
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessSteps;
