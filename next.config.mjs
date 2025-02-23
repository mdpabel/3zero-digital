/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '200mb',
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.3zerodigital.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    nextScriptWorkers: true,
  },
  async redirects() {
    return [
      {
        source:
          '/blog/how-we-cleaned-242000-japanese-hack-pages-from-a-site-in-10-hours',
        destination:
          '/blog/how-we-removed-242000-japanese-seo-spam-pages-from-a-hacked-site-in-10-hours',
        permanent: true,
      },

      {
        source: '/affordable-personal-website-development',
        destination: '/affordable-personal-web-development',
        permanent: true,
      },

      {
        source: '/affordable-personal-website-development-lite',
        destination: '/affordable-personal-web-development',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
