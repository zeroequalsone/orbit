import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://apod.nasa.gov/apod/image/2602/JellyfishBeecroft_final1_2048.jpg")]
  }
};

export default nextConfig;
