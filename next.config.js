/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'photouploads.com',
      },
    ],
  },
}

module.exports = nextConfig
