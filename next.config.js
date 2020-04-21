/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const defaultCache = require('next-pwa/cache');
const envMapping = require('./configs/env.mapping');

const isProd = process.env.NODE_ENV === 'production';
const { LINK_PREFIX } = envMapping;

// tranfrom precache url for browsers that encode dynamic routes
// i.e. "[id].js" => "%5Bid%5D.js"
const encodeUriTransform = async (manifestEntries) => {
  const manifest = manifestEntries.map((entry) => {
    entry.url = encodeURI(entry.url);
    return entry;
  });
  return { manifest, warnings: [] };
};

module.exports = () =>
  withPWA({
    env: envMapping,
    target: 'serverless',
    poweredByHeader: false,
    assetPrefix: LINK_PREFIX,

    pwa: {
      disable: !isProd,
      subdomainPrefix: LINK_PREFIX,
      dest: 'public',
      manifestTransforms: [encodeUriTransform],
      runtimeCaching: [
        ...defaultCache,
        {
          urlPattern: /^https?.*/,
          handler: 'NetworkFirst',
          options: {
            cacheName: 'offlineCache',
            networkTimeoutSeconds: 15,
            expiration: {
              maxEntries: 150,
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
        {
          urlPattern: ({ event }) => event.request.mode === 'navigate',
          handler: 'CacheFirst',
          options: {
            cacheName: 'offlineCache',
            expiration: {
              maxEntries: 150,
              maxAgeSeconds: 30 * 24 * 60 * 60,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
      navigationPreload: true,
      // publicExcludes: [],
      // exclude: ['**/node_modules/**/*'],
    },
  });
