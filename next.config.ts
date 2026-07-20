import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dhyidaeapgxwqeytfgcl.supabase.co",
      },
    ],
  },
};

export default nextConfig;