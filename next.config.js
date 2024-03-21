/** @type {import('next').NextConfig} */
const nextConfig = {
  ...(process.env.NODE_ENV === "production" && {
    output: "export",
  }),
};

module.exports = {
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
};
