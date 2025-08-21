/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.pexels.com'],
    formats: ['image/webp', 'image/avif'],
  },
  async redirects() {
    return [
      {
        source: '/solutions/smart-stores',
        destination: '/solutions/smart-store',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;