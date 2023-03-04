/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  }
}

module.exports = nextConfig
