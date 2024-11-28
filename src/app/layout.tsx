import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Providers from './providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://3zerodigital.com'),
  title: {
    default:
      '3 Zero Digital - Achieving Perfection with 0 Vulnerability, 0 Downtime, 0 Error',
    template: '%s | 3 Zero Digital',
  },
  description:
    '3 Zero Digital is committed to achieving perfection in software development and maintenance, ensuring zero vulnerability, zero downtime, and zero errors in all digital solutions. Specializing in secure and high-performance web services.',
  openGraph: {
    title:
      '3 Zero Digital - Achieving Perfection with 0 Vulnerability, 0 Downtime, 0 Error',
    description:
      '3 Zero Digital is committed to achieving perfection in software development and maintenance, ensuring zero vulnerability, zero downtime, and zero errors in all digital solutions.',
    url: 'https://3zerodigital.com',
    siteName: '3 Zero Digital',
    images: [
      'https://3zerodigital.com/images/social-banner.jpg', // Ensure this is a large image (1200x630px)
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://3zerodigital.com',
    types: {
      'application/rss+xml': 'https://3zerodigital.com/feed.xml', // If you have an RSS feed
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title:
      '3 Zero Digital - Achieving Perfection with 0 Vulnerability, 0 Downtime, 0 Error',
    card: 'summary_large_image',
    images: ['https://3zerodigital.com/images/social-banner.jpg'], // Ensure this is a large image (1200x630px)
  },
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
          <GoogleTagManager gtmId='GTM-T7DTDMX7' />
        </body>
      </html>
    </ClerkProvider>
  );
}
