/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['localhost', 'image.tmdb.org']
    // next line is not required
    // path: 'http://localhost:3000/static'
  }
}
module.exports = {};

module.exports = nextConfig
