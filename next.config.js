const { i18n } = require('./next-i18next.config');

module.exports = {
  pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js'],
  i18n,
  env: {
    SERVER_URL: process.env.SERVER_URL,
  },
};
