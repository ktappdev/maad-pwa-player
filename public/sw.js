if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-3c9d0171"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/581-1a5c5a5cdfc4e316.js",revision:"hB75zwvU41gLeJj6gpRIW"},{url:"/_next/static/chunks/5a2b36f9-00c6797ddd7dd469.js",revision:"hB75zwvU41gLeJj6gpRIW"},{url:"/_next/static/chunks/873-0e5efabb7552f8de.js",revision:"hB75zwvU41gLeJj6gpRIW"},{url:"/_next/static/chunks/app/_not-found/page-4b0ab232aac6170b.js",revision:"hB75zwvU41gLeJj6gpRIW"},{url:"/_next/static/chunks/app/layout-717dc61ac3a1f169.js",revision:"hB75zwvU41gLeJj6gpRIW"},{url:"/_next/static/chunks/app/page-923d230f4215cc4a.js",revision:"hB75zwvU41gLeJj6gpRIW"},{url:"/_next/static/chunks/framework-6e06c675866dc992.js",revision:"hB75zwvU41gLeJj6gpRIW"},{url:"/_next/static/chunks/main-13c555fe6f6ac2dc.js",revision:"hB75zwvU41gLeJj6gpRIW"},{url:"/_next/static/chunks/main-app-a12cad669d20384b.js",revision:"hB75zwvU41gLeJj6gpRIW"},{url:"/_next/static/chunks/pages/_app-01c2185dce1366a0.js",revision:"hB75zwvU41gLeJj6gpRIW"},{url:"/_next/static/chunks/pages/_error-13e8db56ac7a5d5f.js",revision:"hB75zwvU41gLeJj6gpRIW"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-54ffecd36558cbb9.js",revision:"hB75zwvU41gLeJj6gpRIW"},{url:"/_next/static/css/f2d5f77a3a68e9a3.css",revision:"f2d5f77a3a68e9a3"},{url:"/_next/static/hB75zwvU41gLeJj6gpRIW/_buildManifest.js",revision:"e5a3d6dee88ec18f1bfd87b54665a047"},{url:"/_next/static/hB75zwvU41gLeJj6gpRIW/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/apple-touch-icon.png",revision:"47672d2642b2905acd76f88f3345078d"},{url:"/favicon-48x48.png",revision:"4563a5d18ef38a0b9563f51b7c59d35f"},{url:"/favicon.ico",revision:"e2f1628b7ed0059de2a6646cc2f5bfbf"},{url:"/favicon.svg",revision:"6c07448590da24a2181cf2141b991ff4"},{url:"/icon-192x192.png",revision:"de8c08d4fb332fcb347b710070d776cc"},{url:"/icon-512x512.png",revision:"6b807677fc6bee6d49df7f79b2fdcd69"},{url:"/img/01.jpeg",revision:"9f5c20138496be6ec1d1ac78e6abed7e"},{url:"/img/02.jpeg",revision:"ded30b37c79aacd467eb94dfd1ba3cae"},{url:"/img/03.jpeg",revision:"0af636eb64369f528edca7e822bda7b5"},{url:"/logo.png",revision:"938b434d15a32451a2b42927b8b6b517"},{url:"/site.webmanifest",revision:"9090e674d41e265d5f03c180fe5f6721"},{url:"/web-app-manifest-192x192.png",revision:"02797a407d831ff2efc5a954acf991fd"},{url:"/web-app-manifest-512x512.png",revision:"857ea88703aa12447213f74e2e800707"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
