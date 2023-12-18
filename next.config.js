/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "repository-images.githubusercontent.com" },
      { hostname: "upload.wikimedia.org" },
      { hostname: "media.licdn.com" },
    ],
  },
};

module.exports = nextConfig;
