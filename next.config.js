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
      scope: `${LINK_PREFIX}/`,
      sw: `${LINK_PREFIX}/sw.js`,
      dest: 'public',
      swDest: path.join(__dirname, `/public/sw.js`),
      navigationPreload: true,
      // globPatterns: ['app/static/**/*'],
      // modifyURLPrefix: {
      //   app: LINK_PREFIX,
      // },
      // publicExcludes: [],
      // exclude: ['**/node_modules/**/*'],
    },
  });
