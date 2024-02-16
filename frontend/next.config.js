/** @type {import('next').NextConfig} */
const config = require('./src/config/config.json')



const nextConfig = {
  reactStrictMode: false,
  basePath: config.basePath,
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'api.ts', 'api.js'],
  images: {
    domains: ['unsplash.com', 'images.unsplash.com', 'res.cloudinary.com']
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
