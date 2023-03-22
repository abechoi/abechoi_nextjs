/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

// next.config.js
const { parsed: localEnv } = require('dotenv').config();

module.exports = {
  env: {
  },
};
