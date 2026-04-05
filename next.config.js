/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'photouploads.com',
      },
    ],
  },
}

module.exports = nextConfig
