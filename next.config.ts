import { withPayload } from '@payloadcms/next/withPayload';
import withBundleAnalyzer from '@next/bundle-analyzer';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable static optimization where possible
  experimental: {
    optimizePackageImports: ['lucide-react', 'lodash'],
  },

  // Configure headers for better SEO and security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Bundle analyzer configuration
  ...(process.env.ANALYZE === 'true' && {
    webpack: (config: Record<string, unknown>, { dev }: { dev: boolean }) => {
      if (!dev && config.optimization && typeof config.optimization === 'object') {
        // Tree shaking configuration
        const optimization = config.optimization as Record<string, unknown>;
        optimization.usedExports = true;
        optimization.sideEffects = false;
      }
      return config;
    },
  }),
};

// Apply bundle analyzer if enabled
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: true,
});

export default withPayload(bundleAnalyzer(nextConfig));
