import React, { ReactNode } from 'react';
import BlogsSidebar from '../layout/blog/blogs-sidebar';
import ComponentWrapper from '../common/component-wrapper';

const BlogsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ComponentWrapper className='py-8'>
      <div className='flex lg:flex-row flex-col gap-10'>
        {/* Sidebar */}
        <div className='lg:top-4 lg:sticky w-full lg:w-96 lg:h-[100dvh] overflow-auto'>
          <BlogsSidebar />
        </div>

        {/* Main Content */}
        <div className='flex flex-col w-full'>{children}</div>
      </div>
    </ComponentWrapper>
  );
};

export default BlogsLayout;
