'use client';

import Script from 'next/script';

// import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

const TawkChat = () => {
  return (
    <>
      <Script
        suppressHydrationWarning
        src='https://embed.tawk.to/66eac2884cbc4814f7da18fb/1i82gfq14'
        strategy='afterInteractive'
        type='text/javascript'
      />
      {/* <TawkMessengerReact
        propertyId={process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID!}
        widgetId={process.env.NEXT_PUBLIC_TAWK_WIDGET_ID!}
      /> */}
    </>
  );
};

export default TawkChat;

// <!--Start of Tawk.to Script-->
// <script type="text/javascript">
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/66eac2884cbc4814f7da18fb/1i82gfq14';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
// </script>
// <!--End of Tawk.to Script-->
