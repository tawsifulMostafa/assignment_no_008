/** @type {import('next').NextConfig} */
const nextConfig = {
  cacheComponents: true , 
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
   
      },
    ],
  },
};

export default nextConfig;
