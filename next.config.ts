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
      {
        source: "/kg-to-lbs",
        destination: "/converters/kg-to-lbs",
        permanent: true,
      },
      {
        source: "/random-number-generator",
        destination: "/generators/random-number-generator",
        permanent: true,
      },
      {
        source: "/time-calculator",
        destination: "/calculators/time-calculator",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
