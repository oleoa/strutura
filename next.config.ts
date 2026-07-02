import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // O design system estático foi absorvido pela página /brand.
      {
        source: "/design.html",
        destination: "/brand",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
