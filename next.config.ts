<<<<<<< HEAD
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
=======
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'avatar.vercel.sh',
      },
    ],
  },
>>>>>>> 43cde51294e2914b3ceb2211149a7bf6ae9e5de5
};

export default nextConfig;
