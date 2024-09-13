import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/app/header';
import { ClerkProvider } from '@clerk/nextjs';
import Providers from './providers';
import Footer from '@/components/layout/app/footer';

export const metadata: Metadata = {
  title:
    '3 Zero Digital - Achieving Perfection with 0 Vulnerability, 0 Downtime, 0 Error',
  description:
    '3 Zero Digital is committed to achieving perfection in software development and maintenance, ensuring zero vulnerability, zero downtime, and zero errors in all digital solutions. Specializing in secure and high-performance web services.',
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const cookieStore = cookies();
  // let theme = cookieStore.get('theme')?.value ?? 'dark';

  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={poppins.className}>
          <Providers>
            <div className='grid grid-rows-[auto_1fr_auto] min-h-[100dvh]'>
              <Header />
              <main className='relative'>{children}</main>
              <Footer />
            </div>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
