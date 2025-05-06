/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        styledComponents: true,
    },
    images: {
        domains: ["dza2kd7rioahk.cloudfront.net"],
      },
    sassOptions: {
        includePaths: [path.join(__dirname, 'app/styles')],
        additionalData: `$var1: '${process.env.NODE_ENV === 'development' ? '..' : 'https://dza2kd7rioahk.cloudfront.net'}';`,
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:8080/api/:path*', // Proxy to Backend
            }
        ];
    }
};
module.exports = nextConfig;
