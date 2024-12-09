/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Accept images from any domain
            },
            {
                protocol: 'http',
                hostname: '**', // Accept images from any domain over HTTP (optional)
            },
        ],
    },
};

module.exports = nextConfig;
