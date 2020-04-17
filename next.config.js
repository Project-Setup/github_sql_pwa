/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const envMapping = require('./configs/env.mapping');

const isProd = process.env.NODE_ENV === 'production';

module.exports = () =>
  withPWA({
    env: envMapping,
    target: 'serverless',
    poweredByHeader: false,
    assetPrefix: envMapping.LINK_PREFIX,

    pwa: {
      disable: !isProd,
      scope: `${envMapping.LINK_PREFIX}/`,
      // sw: `${envMapping.LINK_PREFIX}/sw.js`,
      dest: 'public',
      navigationPreload: true,
      modifyURLPrefix: {
        app: envMapping.LINK_PREFIX,
      },
      // publicExcludes: [],
      // exclude: ['**/node_modules/**/*'],
    },
  });
