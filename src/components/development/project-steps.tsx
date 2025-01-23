import React from 'react';

const ProjectSteps = ({
  steps,
}: {
  steps: {
    icon: React.JSX.Element;
    title: string;
    description: string;
  }[];
}) => {
  return (
    <div className='bg-gradient-to-r py-16 text-white'>
      <h2 className='mb-6 font-bold text-4xl text-black text-center dark:text-white'>
        🚀 Our Workflow to Build Your Dream Website
      </h2>
      <p className='mx-auto mb-12 max-w-2xl text-black text-center text-lg dark:text-white'>
        Here’s how our company ensures a smooth and professional process for
        creating your website.
      </p>

      <div className='relative mx-auto max-w-4xl'>
        {/* Vertical Timeline */}
        <div className='border-[#614385] dark:border-white border-l-4'>
          {steps.map((step, index) => (
            <div key={index} className='relative mb-10 pl-8'>
              {/* Step Circle */}
              <div className='top-0 -left-6 absolute flex justify-center items-center bg-white shadow-lg rounded-full w-12 h-12 text-[#614385]'>
                {step.icon}
              </div>

              {/* Step Content */}
              <h3 className='mb-2 font-semibold text-black text-xl dark:text-white'>
                {step.title}
              </h3>
              <p className='text-base text-black dark:text-white'>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSteps;
