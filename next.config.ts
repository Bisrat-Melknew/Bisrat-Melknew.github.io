import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // trailingSlash ensures each page gets its own directory with index.html
  // which is required for GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;
