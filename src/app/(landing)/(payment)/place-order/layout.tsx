import Script from 'next/script';
import React from 'react';

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <head>
        <Script
          strategy='afterInteractive'
          dangerouslySetInnerHTML={{
            __html: `
            gtag('event', 'conversion', {
              'send_to': 'AW-17015436100/prLBCOjhproaEMTmy7E_',
              'value': 1.0,
              'currency': 'USD'
          });
          `,
          }}
        />
      </head>
      {children}
    </>
  );
};

export default layout;
