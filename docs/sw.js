if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,t,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const n={uri:location.origin+s.slice(1)};return Promise.all(t.map(s=>{switch(s){case"exports":return a;case"module":return n;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-6a047900"],(function(e){"use strict";importScripts(),e.enable(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/github_sql_pwa/",revision:"G-H7Ftddk6wy_dOCTrMu6"},{url:"/github_sql_pwa/_next/static/G-H7Ftddk6wy_dOCTrMu6/_buildManifest.js",revision:"7411f9c014d7ea3d9d0a63740043ce69"},{url:"/github_sql_pwa/_next/static/G-H7Ftddk6wy_dOCTrMu6/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/github_sql_pwa/_next/static/G-H7Ftddk6wy_dOCTrMu6/pages/_app.js",revision:"df18236035667a9ef2bbd2406a68a92d"},{url:"/github_sql_pwa/_next/static/G-H7Ftddk6wy_dOCTrMu6/pages/_error.js",revision:"9422e411109d8839351c0bec97fe3493"},{url:"/github_sql_pwa/_next/static/G-H7Ftddk6wy_dOCTrMu6/pages/db.js",revision:"7f96b2839cfcebcd6dbfc86319208e91"},{url:"/github_sql_pwa/_next/static/G-H7Ftddk6wy_dOCTrMu6/pages/index.js",revision:"ec51fea1863b157048ecc2533229535d"},{url:"/github_sql_pwa/_next/static/G-H7Ftddk6wy_dOCTrMu6/pages/index/%5Bid%5D.js",revision:"5a1990d6221832cee1779326a97c4b3f"},{url:"/github_sql_pwa/_next/static/chunks/0a00b2b44719c583a509146da0d779ae1078cf51.4dca696d723e21364520.js",revision:"9d753c9b329cfacf6ab6094e0812487e"},{url:"/github_sql_pwa/_next/static/chunks/53b137dc8912957b8250bdfd0290dac778416c5d.d5775199e3b60b4952b9.js",revision:"f74d483923de3cde148c1fec57206959"},{url:"/github_sql_pwa/_next/static/chunks/8a982a7ff97b64abba9d6f21602f6d299441a06e.a3d5757920a849162b8b.js",revision:"8d8fdf87771563c65bf55ef49e7970a8"},{url:"/github_sql_pwa/_next/static/chunks/commons.22dff024a601c2cce0f9.js",revision:"9ab630df33da74be15e7d6bca5b86c01"},{url:"/github_sql_pwa/_next/static/chunks/eb0f6bc5a4ac2472fd0e354ead0d2c30319f91f5.7991f3042835bd60e52c.js",revision:"e130497b2e20310498c238a9e60f1225"},{url:"/github_sql_pwa/_next/static/chunks/framework.8d738cd9f2950118dcb6.js",revision:"8e6204793e3d11a8bedf359bfb6e110d"},{url:"/github_sql_pwa/_next/static/runtime/main-a339a25bae24f2b0762d.js",revision:"9e5f81b783d987d57b143aa67fc32877"},{url:"/github_sql_pwa/_next/static/runtime/polyfills-1046c91b8a9b439e8309.js",revision:"33033a028009f744afe56987d907c9f3"},{url:"/github_sql_pwa/_next/static/runtime/webpack-91b117697e716c22a78b.js",revision:"40b4095b5b68a142c856f388ccb756f2"},{url:"/github_sql_pwa/icons/favicon.ico",revision:"940cc6bd3bb401fc3be83df3dfd09488"},{url:"/github_sql_pwa/icons/icon192x192.png",revision:"b2bf260ccff2838a58aaf42ece6461b8"},{url:"/github_sql_pwa/icons/icon512x512.png",revision:"7844d31fa2a65d7009616d77034a4949"},{url:"/github_sql_pwa/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https?.*/,new e.NetworkFirst({cacheName:"offlineCache",networkTimeoutSeconds:15,plugins:[new e.ExpirationPlugin({maxEntries:150,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(({event:e})=>"navigate"===e.request.mode,new e.CacheFirst({cacheName:"offlineCache",plugins:[new e.ExpirationPlugin({maxEntries:150,maxAgeSeconds:2592e3,purgeOnQuotaError:!0}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
