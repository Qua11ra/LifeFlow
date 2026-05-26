import type { NextConfig } from "next";

const nextConfig = {
    experimental: {
        cssChunking: true,
    },
} satisfies NextConfig;

export default nextConfig;
