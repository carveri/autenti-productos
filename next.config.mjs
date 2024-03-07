/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'https://avatars.githubusercontent.com'
            }
    ]
    }
};

export default nextConfig;
