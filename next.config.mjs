/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Remove output: 'export' to allow serverless functions (like /api/contact) on Vercel
  trailingSlash: true,
}

export default nextConfig
