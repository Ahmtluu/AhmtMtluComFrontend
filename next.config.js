/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: `${process.env.NEXT_PUBLIC_API_URL} || localhost`,
                port: '',
                pathname: '/storage/**',
            },
        ],
    },
}

module.exports = nextConfig
