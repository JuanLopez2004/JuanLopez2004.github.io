import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",               // Required for static export
  trailingSlash: true,           // Required for GitHub Pages to resolve paths
  images: {
    unoptimized: true,           // If you're using next/image (GitHub Pages can't optimize images)
  },
};

export default nextConfig;
