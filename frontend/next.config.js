/** @type {import('next').NextConfig} */
const config = require('./src/config/config.json')



const nextConfig = {
  reactStrictMode: false,
  basePath: config.basePath,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'api.ts', 'api.js'],
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      {
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true
      },
      {
        source: '/dashboard',
        destination: '/dashboard/home',
        permanent: true
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/home',
      },
    ]
  },
}

module.exports = nextConfig
