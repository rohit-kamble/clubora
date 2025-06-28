/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // required for out folder
  images: {
    unoptimized: true,
    // domains: ["images.unsplash.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
