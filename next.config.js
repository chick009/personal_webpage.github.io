/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true
  },
  output: 'export',
  distDir: 'out',
  basePath: process.env.NODE_ENV === 'production' ? '/resume_webpage' : ''
};

module.exports = nextConfig; 