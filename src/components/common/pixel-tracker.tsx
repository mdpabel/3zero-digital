import Script from 'next/script';

const PixelTracker = () => {
  return (
    <>
      {/* Meta Pixel Code */}
      <Script
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s) {
              if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1327868204958518'); // Replace with your actual Pixel ID
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* NoScript Image Tag for PageView tracking without JS */}
      <noscript>
        <img
          height='1'
          width='1'
          style={{ display: 'none' }}
          src='https://www.facebook.com/tr?id=1327868204958518&ev=PageView&noscript=1'
        />
      </noscript>
      {/* End Meta Pixel Code */}
    </>
  );
};

export default PixelTracker;
