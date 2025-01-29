import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basepath: "nextjs.sunori.org",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
