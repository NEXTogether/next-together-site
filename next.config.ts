import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Abilitare output standalone per Google Cloud Run
  output: 'standalone',
  
  // Configurazione per il dominio next-together.com
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
    ]
  },
  
  // Configurazione per domini personalizzati e sicurezza
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
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  
  // Configurazione per Google Cloud
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
