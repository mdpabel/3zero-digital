import Header from '@/components/layout/app/header';
import Footer from '@/components/layout/app/footer';
import TawkChat from '@/components/common/tawk-chat';

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
