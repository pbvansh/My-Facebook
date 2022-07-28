/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:[
      'links.papareact.com',
      'scontent.famd6-1.fna.fbcdn.net',
      'platform-lookaside.fbsbx.com',
      'firebasestorage.googleapis.com'
    ]
  }
}

module.exports = nextConfig
