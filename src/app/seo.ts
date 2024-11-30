import { Metadata } from 'next';
import { siteMetadata } from './metadata';
import { services } from '@/services';

interface PageSEOProps {
  title: string;
  description?: string;
  image?: string;
  [key: string]: any; // For any other dynamic properties like `url`, etc.
}

// Function to generate metadata for services and subservices
export function genMetaData({
  title,
  description,
  image,
  url,
  ...rest
}: PageSEOProps): Metadata {
  return {
    title: `${title} | ${siteMetadata.title}`,
    description: description || siteMetadata.description,
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: description || siteMetadata.description,
      url: url || './', // Ensure the correct URL is provided
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner],
    },
    ...rest,
  };
}

// Function to dynamically generate metadata for a service or subservice
export function getServiceMetadata(serviceHref: string) {
  // Loop through the services to find the matching service or subservice
  for (const service of services) {
    // Check the main service
    if (service.href === serviceHref) {
      return genMetaData({
        title: service.meta.title,
        description: service.meta.description,
        url: `https://3zerodigital.com${service.href}`,
      });
    }

    // Check subservices if they exist
    for (const subservice of service.subMenuItems) {
      if (subservice.href === serviceHref) {
        return genMetaData({
          title: subservice.meta.title,
          description: subservice.meta.description,
          url: `https://3zerodigital.com${subservice.href}`,
        });
      }
    }
  }

  // Default metadata if no matching service or subservice is found
  return genMetaData({
    title: '3Zero Digital | Services',
    description: 'Explore our wide range of services.',
    url: 'https://3zerodigital.com/services',
  });
}

// Example usage - Generating metadata for /social-media
const metadata = getServiceMetadata('/social-media');
