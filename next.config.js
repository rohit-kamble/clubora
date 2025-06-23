/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    // domains: ["images.unsplash.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
