/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.pinimg.com', 'avatars.githubusercontent.com'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
