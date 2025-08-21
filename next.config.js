/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
    ],
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