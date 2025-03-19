/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/personal_webpage' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/personal_webpage/' : ''
};

module.exports = nextConfig; 