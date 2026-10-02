import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.science.nasa.gov",
      },
      {
        protocol: "https",
        hostname: "science.nasa.gov",
      },
    ],
  },
};

export default nextConfig;
