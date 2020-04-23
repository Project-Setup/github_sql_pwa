/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');
const withManifest = require('next-manifest');
const withTM = require('next-transpile-modules')(['typeorm/browser']);
const webpack = require('webpack');
const defaultCache = require('next-pwa/cache');
const envMapping = require('./configs/env.mapping');

const isProd = process.env.NODE_ENV === 'production';
const {
  LINK_PREFIX,
  FOLDER,
  THEME_COLOR,
  ICON_192_PATH,
  ICON_512_PATH,
} = envMapping;

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
  withManifest(
    withPWA(
      withTM({
        // sql.js
        webpack: (config, { isServer }) => {
          config.plugins.push(
            new webpack.ProvidePlugin({
              'window.SQL': 'sql.js/dist/sql-wasm.js',
            })
          );
          if (!isServer) {
            config.node = {
              fs: 'empty',
              net: 'empty',
              tls: 'empty',
            };
          }
          return config;
        },

        env: envMapping,
        target: 'serverless',
        poweredByHeader: false,
        assetPrefix: LINK_PREFIX,

        // service worker
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

        // manifest
        manifest: {
          /* eslint-disable @typescript-eslint/camelcase */
          output: 'public',
          short_name: FOLDER,
          name: FOLDER,
          start_url: `${LINK_PREFIX}/`,
          background_color: THEME_COLOR,
          display: 'standalone',
          scope: `${LINK_PREFIX}/`,
          dir: 'ltr', // text direction: left to right
          theme_color: THEME_COLOR,
          icons: [
            {
              src: `${LINK_PREFIX}${ICON_192_PATH}`,
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: `${LINK_PREFIX}${ICON_512_PATH}`,
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        },
      })
    )
  );
