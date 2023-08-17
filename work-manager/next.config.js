/** @type {import('next').NextConfig} */
const nextConfig = {

     env: {
         MONGODB_URL: "mongodb://127.0.0.1:27017",
     },
    
     reactStrictMode: true,
}

module.exports = nextConfig
