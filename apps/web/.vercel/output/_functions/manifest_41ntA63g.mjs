import { p as decodeKey } from './chunks/astro/server_BbbuMMLi.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_bJ02U08c.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/basket-kgcho-landing/apps/web/","cacheDir":"file:///C:/basket-kgcho-landing/apps/web/node_modules/.astro/","outDir":"file:///C:/basket-kgcho-landing/apps/web/dist/","srcDir":"file:///C:/basket-kgcho-landing/apps/web/src/","publicDir":"file:///C:/basket-kgcho-landing/apps/web/public/","buildClientDir":"file:///C:/basket-kgcho-landing/apps/web/dist/client/","buildServerDir":"file:///C:/basket-kgcho-landing/apps/web/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"credits/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/credits","isIndex":false,"type":"page","pattern":"^\\/credits\\/?$","segments":[[{"content":"credits","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/credits.astro","pathname":"/credits","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"../../node_modules/.pnpm/astro@5.16.11_@types+node@22.19.7_@vercel+functions@2.2.13_idb-keyval@6.2.2_jiti@2.6.1_lightn_j3qhfwctler75hxxz6qrifupee/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/keystatic/[...params]","pattern":"^\\/api\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"../../node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_next@16.1.4_@babel+core@7.28.6_@playwright+test_n5b47qget5mmic6xhb5vqemdtu/node_modules/@keystatic/astro/internal/keystatic-api.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","isIndex":false,"route":"/keystatic/[...params]","pattern":"^\\/keystatic(?:\\/(.*?))?\\/?$","segments":[[{"content":"keystatic","dynamic":false,"spread":false}],[{"content":"...params","dynamic":true,"spread":true}]],"params":["...params"],"component":"../../node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_next@16.1.4_@babel+core@7.28.6_@playwright+test_n5b47qget5mmic6xhb5vqemdtu/node_modules/@keystatic/astro/internal/keystatic-astro-page.astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/basket-kgcho-landing/apps/web/src/pages/credits.astro",{"propagation":"none","containsHead":true}],["C:/basket-kgcho-landing/apps/web/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:../../node_modules/.pnpm/astro@5.16.11_@types+node@22.19.7_@vercel+functions@2.2.13_idb-keyval@6.2.2_jiti@2.6.1_lightn_j3qhfwctler75hxxz6qrifupee/node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:../../node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_next@16.1.4_@babel+core@7.28.6_@playwright+test_n5b47qget5mmic6xhb5vqemdtu/node_modules/@keystatic/astro/internal/keystatic-api@_@js":"pages/api/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/credits@_@astro":"pages/credits.astro.mjs","\u0000@astro-page:../../node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_next@16.1.4_@babel+core@7.28.6_@playwright+test_n5b47qget5mmic6xhb5vqemdtu/node_modules/@keystatic/astro/internal/keystatic-astro-page@_@astro":"pages/keystatic/_---params_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_41ntA63g.mjs","C:/basket-kgcho-landing/node_modules/.pnpm/astro@5.16.11_@types+node@22.19.7_@vercel+functions@2.2.13_idb-keyval@6.2.2_jiti@2.6.1_lightn_j3qhfwctler75hxxz6qrifupee/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DJC4AEib.mjs","C:/basket-kgcho-landing/node_modules/.pnpm/@keystatic+astro@5.0.6_@keystatic+core@0.5.48_next@16.1.4_@babel+core@7.28.6_@playwright+test_n5b47qget5mmic6xhb5vqemdtu/node_modules/@keystatic/astro/internal/keystatic-page.js":"_astro/keystatic-page.e5Bioupf.js","@astrojs/react/client.js":"_astro/client.DEruH62g.js","C:/basket-kgcho-landing/apps/web/src/components/tournament/HeroSection.astro?astro&type=script&index=0&lang.ts":"_astro/HeroSection.astro_astro_type_script_index_0_lang.BYlLOQno.js","C:/basket-kgcho-landing/apps/web/src/components/tournament/ScheduleSection.astro?astro&type=script&index=0&lang.ts":"_astro/ScheduleSection.astro_astro_type_script_index_0_lang.CLyZWUMg.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/basket-kgcho-landing/apps/web/src/components/tournament/HeroSection.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"hero-bg-elements\"),n=document.getElementById(\"hero-logo\");(t||n)&&window.addEventListener(\"scroll\",()=>{const e=window.scrollY;e>1200||(t&&(t.style.transform=`translateY(${e*.15}px)`),n&&(n.style.transform=`translateY(${e*.05}px)`))},{passive:!0});"],["C:/basket-kgcho-landing/apps/web/src/components/tournament/ScheduleSection.astro?astro&type=script&index=0&lang.ts","const l=document.querySelectorAll(\".tournament-schedule__tab\"),r=document.querySelectorAll(\".tournament-schedule__list\");l.forEach(e=>{e.addEventListener(\"click\",()=>{const o=e.getAttribute(\"data-tab\");l.forEach(t=>{t.classList.remove(\"active\");const c=t.querySelector(\"span\");c&&(c.classList.remove(\"text-white\"),c.classList.add(\"text-white/50\"))}),e.classList.add(\"active\");const s=e.querySelector(\"span\");s&&(s.classList.remove(\"text-white/50\"),s.classList.add(\"text-white\")),r.forEach(t=>{t.id===o?(t.classList.remove(\"hidden\"),setTimeout(()=>t.classList.add(\"active\"),0)):(t.classList.add(\"hidden\"),t.classList.remove(\"active\"))})})});const i=document.getElementById(\"schedule-parallax-player\"),a=document.getElementById(\"schedule-parallax-court\");(i||a)&&window.addEventListener(\"scroll\",()=>{const e=window.scrollY,o=document.getElementById(\"schedule\");if(!o)return;const s=o.offsetTop,t=o.offsetHeight;if(e+window.innerHeight>s&&e<s+t){const n=e-s;i&&(i.style.transform=`translateY(${n*.12}px)`),a&&(a.style.transform=`translateY(${n*.08}px)`)}},{passive:!0});"]],"assets":["/_astro/hero-bg.DbXMt-Dl.png","/_astro/logo-big.CFNeF_4v.png","/_astro/credits.DBIqSvMO.css","/1200x630.jpg","/192.png","/512.png","/apple-touch-icon.png","/favicon.svg","/llms-full.txt","/llms.txt","/manifest.json","/content-images/blackspike-wallpaper-01.avif","/content-images/blackspike-wallpaper-02.avif","/content-images/blackspike-wallpaper-03.avif","/content-images/blackspike-wallpaper-04.avif","/content-images/brighton.dog.avif","/content-images/logo-01.svg","/content-images/logo-02.svg","/content-images/logo-03.svg","/content-images/logo-04.svg","/content-images/logo-05.svg","/content-images/logo-06.svg","/content-images/logo-07.svg","/content-images/logo-08.svg","/content-images/logo-09.svg","/content-images/logo-10.svg","/content-images/pixelate.pictures.avif","/content-images/quote-man.avif","/content-images/spike.news.avif","/fonts/BebasNeue Bold.ttf","/fonts/BebasNeue Book.ttf","/fonts/BebasNeue Light.ttf","/fonts/BebasNeue Regular.ttf","/fonts/BebasNeue Thin.ttf","/wallpapers/blackspike-wallpaper-01.jpg","/wallpapers/blackspike-wallpaper-02.jpg","/wallpapers/blackspike-wallpaper-03.jpg","/wallpapers/blackspike-wallpaper-04.jpg","/tournament/balls_2.png","/tournament/bg-elements-hero.svg","/tournament/bg-elements-media.svg","/tournament/bg-elements-schedule.svg","/tournament/frame-9.svg","/tournament/gallery-bg-balls.png","/tournament/gallery-center-logo.png","/tournament/hero-bg.png","/tournament/hero-title.svg","/tournament/icon-calendar.svg","/tournament/icon-location.svg","/tournament/icon-play.svg","/tournament/icon-vector-1.svg","/tournament/icon-vector-2.svg","/tournament/logo-big.png","/tournament/logo.svg","/tournament/media-logo-big.png","/tournament/media-windows.png","/tournament/media-windows.svg","/tournament/partners-bg.png","/tournament/partners-section-bg.png","/tournament/partners.png","/tournament/schedule-court.png","/tournament/schedule-player.png","/tournament/shop-bg.png","/tournament/shop-section-bg.png","/tournament/telegram.svg","/tournament/tg.png","/tournament/vk.png","/tournament/vk.svg","/theme-preview/blackspike-theme-1.jpg","/theme-preview/blackspike-theme-2.jpg","/theme-preview/blackspike-theme-3.jpg","/theme-preview/blackspike-theme-4.jpg","/theme-preview/blackspike-theme-5.jpg","/theme-preview/blackspike-theme-full.webp","/theme-preview/github-preview.jpg","/_astro/client.DEruH62g.js","/_astro/index.DKytmrpT.js","/_astro/keystatic-page.e5Bioupf.js","/credits/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"p93J7sM9j/dzW/yfx3fzl1o2BgcAENMOxBvW0eyKcUw="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
