/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.pexels.com",
      "www.pexels.com",
      "99designs-blog.imgix.net",
      "i.pinimg.com",
      "buildfire.com",
    ],
  },
    env:{
      NEXTAUTH_URL:"http://localhost:3000",
    }
};

module.exports = nextConfig;
