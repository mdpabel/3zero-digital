import React, { ReactNode } from 'react';
import ProjectCategory from './project-category';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='mx-auto px-4 py-10 max-w-6xl'>
      {/* Header Section */}
      <div className='mx-auto mb-10 max-w-4xl text-center'>
        <h2 className='font-bold text-4xl'>
          Showcasing Excellence: Our Recent Projects
        </h2>
        <p className='mt-2 text-lg'>
          Explore the latest digital solutions crafted by 3 Zero Digital,
          focusing on innovation, security, and seamless performance.
        </p>
      </div>
      <ProjectCategory />
      <div>{children}</div>
    </div>
  );
};

export default layout;
