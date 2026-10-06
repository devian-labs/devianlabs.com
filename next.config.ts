import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Tailwind CSS is small, so inlining it in <head> removes a render-blocking request.
    inlineCss: true,
  },
};

export default nextConfig;
