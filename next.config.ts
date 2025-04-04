import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: ["replicate.delivery"],
  },
};

export default nextConfig;
