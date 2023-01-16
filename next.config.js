/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'page.ts'],
  images: {
    domains: ['picsum.photos']
  }
}

module.exports = nextConfig
