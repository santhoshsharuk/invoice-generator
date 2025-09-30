/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",                 // required for static export
  basePath: "/invoice-generator",   // matches your repo/subdomain
  assetPrefix: "/invoice-generator/",
  images: {
    unoptimized: true,              // Next Image optimization won’t work on GH Pages
  },
};

module.exports = nextConfig;
