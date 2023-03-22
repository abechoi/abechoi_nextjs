// next.config.js
const { parsed: localEnv } = require('dotenv').config();

module.exports = {
  reactStrictMode: true,
  env: {
    // Add any environment variables you want to expose to the frontend here
    NEXT_PUBLIC_WORKMAIL_EMAIL_ADDRESS: process.env.WORKMAIL_EMAIL_ADDRESS,
    NEXT_PUBLIC_ACCESS_KEY_ID: process.env.ACCESS_KEY_ID,
    NEXT_PUBLIC_SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,
    NEXT_PUBLIC_REGION: process.env.REGION,
  },
};