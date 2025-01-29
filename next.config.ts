/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports
  output: 'standalone',
  
  // Add some basic rewrites to test routing
  async rewrites() {
    return [
      {
        source: '/about-us',
        destination: '/about',
      },
    ]
  },
}

module.exports = nextConfig