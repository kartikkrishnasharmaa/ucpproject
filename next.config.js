/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  experimental: {
    appDir: true, // Enable App Router
  },
};


module.exports = nextConfig;
