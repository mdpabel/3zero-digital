import BlogsLayout from '@/components/blog/blog-layout';
import React, { ReactNode } from 'react';
import MailerLite from '../../mailer-lite';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <React.Fragment>
      <BlogsLayout children={children} />
      <MailerLite />
    </React.Fragment>
  );
};

export default layout;
