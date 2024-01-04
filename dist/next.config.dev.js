"use strict";

/** @type {import('next').NextConfig} */
var _require = require('./next-i18next.config.js'),
    i18n = _require.i18n;

var nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [{
      protocol: 'http',
      hostname: 'www.abdullahonden.com'
    }, {
      protocol: 'https',
      hostname: 'www.abdullahonden.com'
    }]
  },
  i18n: i18n,
  rewrites: function rewrites() {
    return [{
      source: '/tr/etiket/:tag',
      destination: '/',
      locale: false
    }, {
      source: '/tag/:tag',
      destination: '/'
    }];
  }
};
module.exports = nextConfig;