/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        destination: '/auth/login',
        source: '/login'
      },
      {
        destination: '/auth/register',
        source: '/register'
      },
    ]
  }
}

module.exports = nextConfig
