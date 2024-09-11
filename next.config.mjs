/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blog.3zerodigital.com',
      },
    ],
  },
};

export default nextConfig;
