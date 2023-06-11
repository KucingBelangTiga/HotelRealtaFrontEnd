/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL_DOMAIN: "http://localhost:3002",
    API_BASE_URL: "http://localhost:3002",
  },
};

module.exports = nextConfig;
