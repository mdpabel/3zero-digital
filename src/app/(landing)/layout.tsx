import dynamic from 'next/dynamic';
import Header from '@/components/layout/app/header';
import Footer from '@/components/layout/app/footer';
import Script from 'next/script';
import { ratingSchema } from './schema-markup';
import { Toaster } from '@/components/ui/sonner';
import CouponPopup from '@/components/common/coupon-popup';

const TawkChat = dynamic(() => import('@/components/common/tawk-chat'));
// const CookieYes = dynamic(() => import('@/components/common/cookie-yes'));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='grid grid-rows-[auto_1fr_auto] min-h-[100dvh]'>
      <Header />
      <main className='relative'>{children}</main>
      <Footer />
      {process.env.NODE_ENV === 'production' && <TawkChat />}
      {/* {process.env.NODE_ENV === 'production' && <CookieYes />} */}
      <Toaster />
      <CouponPopup />
      <Script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />
    </div>
  );
}
