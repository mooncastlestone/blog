const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

module.exports = withMDX({
  async redirects() {
    return [
      {
        source: "/",
        destination: "/posts",
        permanent: false,
      },
    ];
  },
  ...nextConfig,
});
