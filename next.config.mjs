/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "resilient-bobcat-280.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
