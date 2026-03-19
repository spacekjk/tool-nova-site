import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: "/word-counter",
        destination: "/text-tools/word-counter",
        permanent: true,
      },
      {
        source: "/age-calculator",
        destination: "/calculators/age-calculator",
        permanent: true,
      },
      {
        source: "/bmi-calculator",
        destination: "/calculators/bmi-calculator",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
