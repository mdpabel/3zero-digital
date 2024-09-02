import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/app/header';
import { cookies } from 'next/headers';
import { ClerkProvider } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
  const cookieStore = cookies();
  let theme = cookieStore.get('theme')?.value;

  return (
    <ClerkProvider>
      <html className={theme} lang='en'>
        <body className={poppins.className}>
          <div>
            <Header />
            <main className='relative'>{children}</main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
