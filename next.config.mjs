/** @type {import('next').NextConfig} */
const nextConfig = {
  // Build the whole site as static files in out/ for Cloudflare hosting.
  output: 'export',
  trailingSlash: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
