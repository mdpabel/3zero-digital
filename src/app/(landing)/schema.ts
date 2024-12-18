export const OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '3Zero Digital',
  url: 'https://www.3zerodigital.com',
  logo: 'https://www.3zerodigital.com/images/logo-light.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44 7878 798374',
    contactType: 'customer service',
    areaServed: 'GB',
    availableLanguage: 'en',
  },
  sameAs: [
    'https://www.facebook.com/3zerodigital.LLC',
    'https://x.com/3ZeroDigital',
    'https://www.linkedin.com/company/3zerodigital',
  ],
};

export const BreadcrumbListSchema = {
  '@context': 'https://schema.org/',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Wordpress Development',
      item: 'https://www.3zerodigital.com/wordpress-development',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Ongoing WordPress Security Maintenance',
      item: 'https://www.3zerodigital.com/ongoing-wordpress-maintenance',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Blacklist Removal Service',
      item: 'https://www.3zerodigital.com/blacklist-removal',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Website Migration',
      item: 'https://www.3zerodigital.com/website-migration',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'Shopify Store Development',
      item: 'https://www.3zerodigital.com/shopify-store-development',
    },
    {
      '@type': 'ListItem',
      position: 6,
      name: 'Fullstack App Development with Next.js',
      item: 'https://www.3zerodigital.com/fullstack-next-js-applications-development',
    },
  ],
};

export const ProductSchema = {
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: 'Custom Web Development & Security Agency | 3Zero Digital',
  image: 'https://www.3zerodigital.com/images/logo-light.png',
  description: `Offering top-tier custom web development and website security solutions with
virtually zero vulnerabilities, zero downtime, and zero errors. We ensure your business achieves
optimal digital performance.`,
  brand: {
    '@type': 'Brand',
    name: '3Zero Digital',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '4.9',
    ratingCount: '100',
  },
};
