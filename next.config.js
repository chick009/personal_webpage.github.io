/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true
  },
  output: 'export',
  basePath: '/personal_webpage',
  assetPrefix: '/personal_webpage/'
};

module.exports = nextConfig; 