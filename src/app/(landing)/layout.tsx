import dynamic from 'next/dynamic';
import Header from '@/components/layout/app/header';
import Footer from '@/components/layout/app/footer';

const TawkChat = dynamic(() => import('@/components/common/tawk-chat'), {
  ssr: false,
});

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
      <TawkChat />
    </div>
  );
}
