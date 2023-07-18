/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [],
  output: 'standalone',
  i18n: {
    locales: ['ko'],
    defaultLocale: 'ko',
  },
};

module.exports = nextConfig;
