/** @type {import('next').NextConfig} */
const nextConfig = {
    // output:"export"
    //for redirection use
    redirects: async () => {
        return [
            // {
            //     source: '/users',
            //     destination: '/',
            //     permanent: false
            // },
            {
                source: '/users/:userid',
                destination: '/',
                permanent: false
            }
        ]
    },
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fastly.picsum.photos',
      },
    ],
  },
};

export default nextConfig;
