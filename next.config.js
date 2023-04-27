/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dnd5eapi.co",
        port: "",
        pathname: "/",
      },
    ],
  },
};

module.exports = nextConfig;
