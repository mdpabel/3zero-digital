import Script from 'next/script';

const MailerLite = () => {
  return (
    <Script
      strategy='afterInteractive'
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[]).push(arguments);},l=d.createElement(e),l.async=1,l.src=u,n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})(window,document,'script','https://assets.mailerlite.com/js/universal.js','ml'); ml('account', '1333795');`,
      }}
    />
  );
};

export default MailerLite;
