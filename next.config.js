/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    runtime: "nodejs",
    serverComponents: true
  }
};

module.exports = nextConfig;
