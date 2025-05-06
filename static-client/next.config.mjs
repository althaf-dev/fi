/** @type {import('next').NextConfig} */

const environment = process.env.ENVIRONMENT || 'production';
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  sassOptions: {
    additionalData: "$var1: 'https://dza2kd7rioahk.cloudfront.net';",
  },
  ... (environment !== 'development') ? {
    assetPrefix: `${process.env.CDN_URL}/content/guides`,
  } : {},
  experimental: {
    workerThreads: false,
    cpus: 1
  },
};

export default nextConfig;
