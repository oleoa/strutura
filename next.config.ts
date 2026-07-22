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
  async headers() {
    return [
      // leo.md é referência publicada, não conteúdo pra indexar (igual à /brand).
      {
        source: "/leo.md",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
    ];
  },
};

export default nextConfig;
