/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    basePath: '/homepage-2-react'
  })
}

module.exports = nextConfig 