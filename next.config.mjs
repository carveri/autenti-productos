/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
     },
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
