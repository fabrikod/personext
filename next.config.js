/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config.js')

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'www.abdullahonden.com',
      },
      {
        protocol: 'https',
        hostname: 'www.abdullahonden.com',
      },
    ],
  },
  i18n,
  rewrites() {
    return [
      {
        source: '/tr/etiket/:tag',
        destination: '/',
        locale: false,
      },
      {
        source: '/tag/:tag',
        destination: '/',
      },
    ]
  },
}

module.exports = nextConfig
