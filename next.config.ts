/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/my-portfolio", // Replace with your GitHub repo name
  assetPrefix: "/my-portfolio/", // Ensure static assets load correctly
  images: {
    unoptimized: true, // Needed for `next export`
  },
};

module.exports = nextConfig;
