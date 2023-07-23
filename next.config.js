/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "**.tiktokcdn.com",
      },
      {
        protocol: "https",
        hostname: "**.tiktok**",
      },
      {
        protocol: "https",
        hostname: "**.twitch**",
      },
      {
        protocol: "https",
        hostname: "**.twimg.com",
      },
      {
        protocol: "https",
        hostname: "**.redd.it",
      },
    ],
  },
};

module.exports = nextConfig;
