import { fetchCaseStudies } from '@/lib/case-study';
import { fetchCategories } from '@/lib/wordpress/fetch-category';
import { getPosts } from '@/lib/wordpress/fetch-posts';
import { fetchTags } from '@/lib/wordpress/fetch-tags';
import { services } from '@/services';
import type { MetadataRoute } from 'next';
import { WP_REST_API_Post, WP_REST_API_Posts } from 'wp-types';

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
    priority: 0.7,
  }));

  return caseStudySitemap;
};

export const generateBlogSitemap = async () => {
  const baseUrl = 'https://www.3zerodigital.com';

  // Fetch dynamic content
  const blogs = await getPosts();
  const tags = await fetchTags();
  const categories = await fetchCategories();

  const posts = blogs.posts as WP_REST_API_Posts;

  // Generate blog post URLs
  const blogUrls: MetadataRoute.Sitemap = posts.map(
    (post: WP_REST_API_Post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.modified ? new Date(post.modified) : new Date(), // Use `modified` if available
      changeFrequency: 'weekly',
      priority: 0.7,
    }),
  );

  // Generate category URLs
  const categoryUrls: MetadataRoute.Sitemap = categories.map(
    (category: { slug: string }) => ({
      url: `${baseUrl}/category/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    }),
  );

  // Generate tag URLs
  const tagUrls: MetadataRoute.Sitemap = tags.map((tag: { slug: string }) => ({
    url: `${baseUrl}/tag/${tag.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.4,
  }));

  return [...blogUrls, ...categoryUrls, ...tagUrls];
};

export default async function sitemap() {
  const staticPages = generateStaticSitemap();
  const services = generateServicesSitemap();
  const caseStudies = await generateCaseStudiesSitemap();
  const blogs = await generateBlogSitemap();

  return [...staticPages, ...services, ...caseStudies, ...blogs];
}
