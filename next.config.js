/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const path = require('path');
const envMapping = require('./configs/env.mapping');

const isProd = process.env.NODE_ENV === 'production';
const { LINK_PREFIX } = envMapping;

module.exports = () =>
  withPWA({
    env: envMapping,
    target: 'serverless',
    poweredByHeader: false,
    assetPrefix: LINK_PREFIX,

    pwa: {
      disable: !isProd,
      cdnPrefix: LINK_PREFIX,
      dest: 'public',
      navigationPreload: true,
      // globPatterns: ['app/static/**/*', 'app/_next/static/**/*'],
      // modifyURLPrefix: {
      //   app: LINK_PREFIX,
      // },
      // publicExcludes: [],
      // exclude: ['**/node_modules/**/*'],
    },
  });
