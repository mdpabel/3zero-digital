import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Providers from './providers';

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
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={poppins.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
