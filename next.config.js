/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // required for out folder
  images: {
    unoptimized: true,
    // domains: ["images.unsplash.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.mp4$/,
      use: [
        {
          loader: "file-loader",
          options: {
            publicPath: "/_next/static/videos/",
            outputPath: "static/videos/",
            name: "[name].[hash].[ext]",
          },
        },
      ],
    });

    return config;
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
