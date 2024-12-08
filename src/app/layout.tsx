import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Providers from './providers';
import { siteMetadata } from './metadata';

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.url),
  title: `Custom Web Development & Security Agency | 3Zero Digital`,
  description: siteMetadata.description,
  openGraph: {
    title: `Custom Web Development & Security Agency.`,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: siteMetadata.url,
    types: {
      'application/rss+xml': `${siteMetadata.url}/feed.xml`,
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
    title: `Custom Web Development & Security Agency.`,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
};

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  preload: true,
  display: 'swap',
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
