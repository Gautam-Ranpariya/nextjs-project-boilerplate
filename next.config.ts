// Next.js Import
import type { NextConfig } from 'next'

// Localization Import
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during builds
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'bobbyhadz.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  reactStrictMode: false, // Optional: Strict mode for React
}

const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)
