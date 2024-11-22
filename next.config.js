/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    runtime: "nodejs",
    serverComponents: true
  }
};

module.exports = nextConfig;
