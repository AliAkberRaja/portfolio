/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',          // needed for static export
  basePath: 'https://github.com/AliAkberRaja/portfolio',    // replace 'portfolio' with your repo name
}

export default nextConfig
