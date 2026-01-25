import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Bt0wG0Wv.mjs';
import { manifest } from './manifest_41ntA63g.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/keystatic/_---params_.astro.mjs');
const _page2 = () => import('./pages/credits.astro.mjs');
const _page3 = () => import('./pages/keystatic/_---params_.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["../../node_modules/.pnpm/astro@5.16.11_@types+node@22.19.7_@vercel+functions@2.2.13_idb-keyval@6.2.2_jiti@2.6.1_lightn_j3qhfwctler75hxxz6qrifupee/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["../../node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_next@16.1.4_@babel+core@7.28.6_@playwright+test_n5b47qget5mmic6xhb5vqemdtu/node_modules/@keystatic/astro/internal/keystatic-api.js", _page1],
    ["src/pages/credits.astro", _page2],
    ["../../node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_next@16.1.4_@babel+core@7.28.6_@playwright+test_n5b47qget5mmic6xhb5vqemdtu/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro", _page3],
    ["src/pages/index.astro", _page4]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "90cc1dd8-9b65-4049-8038-2125e4c00e4c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
