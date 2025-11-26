import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // reactStrictMode: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "codervent.com" },
      { protocol: "https", hostname: "www.ncl.ac.uk" },
      { protocol: "https", hostname: "codervent.com" },
      { protocol: "http", hostname: "localhost", port: "4000" },
    ],
  },
};

export default nextConfig;
