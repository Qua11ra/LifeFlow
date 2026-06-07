import type { NextConfig } from "next";

const nextConfig = {
    transpilePackages: ["@repo/ui"],
    experimental: {
        cssChunking: true,
    },
} satisfies NextConfig;

export default nextConfig;
