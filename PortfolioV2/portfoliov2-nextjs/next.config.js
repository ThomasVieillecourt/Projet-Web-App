/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["https://thomas-vieillecourt-portfolio.vercel.app/"],
    unoptimized: true,
  },
  env: {
    REACT_APP_SERVICE_ID: process.env.REACT_APP_SERVICE_ID,
    REACT_APP_TEMPLATE_ID: process.env.REACT_APP_TEMPLATE_ID,
    REACT_APP_YOUR_PUBLIC_KEY: process.env.REACT_APP_YOUR_PUBLIC_KEY,
  },
};

module.exports = nextConfig;
