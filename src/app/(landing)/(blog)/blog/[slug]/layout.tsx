import React, { ReactNode } from 'react';
import MailerLite from '../../mailer-lite';

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <React.Fragment>
      {children}
      <MailerLite />
    </React.Fragment>
  );
};

export default layout;
