/** @type {import('next').NextConfig} */
const nextConfig = {
 output:"export",
  images: {
    domains: ["pasteboard.co","images.unsplash.com", "s3-alpha-sig.figma.com", "res.cloudinary.com"]
  },
  async redirects() {
    return [
      // إعادة توجيه جميع الروابط غير الموجودة للصفحة الرئيسيةبيستنبا 
      {
        source: '/:path*',
        destination: '/',
        permanent: false,
        has: [
          {
            type: 'header',
            key: 'x-middleware-rewrite',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
