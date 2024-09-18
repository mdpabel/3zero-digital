import { fetchCaseStudies } from '@/lib/wordpress';
import { services } from '@/services';
import type { MetadataRoute } from 'next';

const generateServicesSitemap = () => {
  const urls: MetadataRoute.Sitemap = [];

  services.forEach((service) => {
    if (service.subMenuItems.length > 0) {
      service.subMenuItems.forEach((subService) => {
        urls.push({
          url: `https://3zerodigital.com${subService.href}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.7,
        });
      });
    } else {
      urls.push({
        url: `https://3zerodigital.com${service.href}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    }
  });

  return urls;
};

const generateStaticSitemap = () => {
  const staticPages = ['/', '/login', '/signup'];
  const urls: MetadataRoute.Sitemap = [];

  staticPages.forEach((page) => {
    urls.push({
      url: `https://3zerodigital.com${page}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1.0,
    });
  });

  return urls;
};

export const generateCaseStudiesSitemap = async () => {
  const caseStudies = await fetchCaseStudies();

  const caseStudySitemap = caseStudies.map((caseStudy) => ({
    url: `https://3zerodigital.com/case-studies/${caseStudy.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.1,
  }));

  return caseStudySitemap;
};

export default async function sitemap() {
  const staticPages = generateStaticSitemap();
  const services = generateServicesSitemap();
  const caseStudies = await generateCaseStudiesSitemap();

  return [...staticPages, ...services, ...caseStudies];
}
