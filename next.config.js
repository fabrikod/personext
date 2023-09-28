/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: false,
  async beforeBuild() {
    console.log('getMetaDataBySortBlog')
    // getMetaDataBySortBlog()
  }
}

module.exports = nextConfig
