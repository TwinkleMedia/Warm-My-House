/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true, // REQUIRED for static hosting
  },
};

export default nextConfig;
