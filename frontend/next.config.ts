/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'via.placeholder.com', 'images.unsplash.com'],
  },
  env: {
    API_URL: process.env.API_URL || 'http://localhost:5000/api',
  },
  // 👇 Add this to silence the Turbopack root warning
  turbopack: {
    root: __dirname,
  },
};

module.exports = nextConfig;
