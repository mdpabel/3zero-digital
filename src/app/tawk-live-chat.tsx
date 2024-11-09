import Script from 'next/script';
import React from 'react';

const TawkLiveChat = () => {
  return (
    <Script
      strategy='worker'
      src='https://tawk.to/chat/66eac2884cbc4814f7da18fb/1i82gfq14'
    />
  );
};

export default TawkLiveChat;
