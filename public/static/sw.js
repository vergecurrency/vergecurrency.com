let precacheConfig = [],
  cacheName = `sw-precache-v3-VergePWA-${self.registration ? self.registration.scope : ''}`,
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function (e, t) { const n = new URL(e); return n.pathname.slice(-1) === '/' && (n.pathname += t), n.toString(); },
  cleanResponse = function (e) { return e.redirected ? ('body' in e ? Promise.resolve(e.body) : e.blob()).then(t => new Response(t, { headers: e.headers, status: e.status, statusText: e.statusText })) : Promise.resolve(e); },
  createCacheKey = function (e, t, n, r) { const o = new URL(e); return r && o.pathname.match(r) || (o.search += `${(o.search ? '&' : '') + encodeURIComponent(t)}=${encodeURIComponent(n)}`), o.toString(); },
  isPathWhitelisted = function (e, t) { if (e.length === 0) return !0; const n = new URL(t).pathname; return e.some(e => n.match(e)); },
  stripIgnoredUrlParameters = function (e, t) {
    const n = new URL(e); return n.hash = '', n.search = n.search.slice(1).split('&').map(e => e.split('=')).filter(e => t.every(t => !t.test(e[0])))
      .map(e => e.join('='))
      .join('&'), n.toString();
  },
  hashParamName = '_sw-precache',
  urlsToCacheKeys = new Map(precacheConfig.map((e) => {
    let t = e[0],
      n = e[1],
      r = new URL(t, self.location),
      o = createCacheKey(r, hashParamName, n, !1); return [r.toString(), o];
  })); function setOfCachedUrls(e) { return e.keys().then(e => e.map(e => e.url)).then(e => new Set(e)); }self.addEventListener('install', (e) => { e.waitUntil(caches.open(cacheName).then(e => setOfCachedUrls(e).then(t => Promise.all(Array.from(urlsToCacheKeys.values()).map((n) => { if (!t.has(n)) { const r = new Request(n, { credentials: 'same-origin' }); return fetch(r).then((t) => { if (!t.ok) throw new Error(`Request for ${n} returned a response with status ${t.status}`); return cleanResponse(t).then(t => e.put(n, t)); }); } })))).then(() => self.skipWaiting())); }), self.addEventListener('activate', (e) => { const t = new Set(urlsToCacheKeys.values()); e.waitUntil(caches.open(cacheName).then(e => e.keys().then(n => Promise.all(n.map((n) => { if (!t.has(n.url)) return e.delete(n); })))).then(() => self.clients.claim())); }), self.addEventListener('fetch', (e) => {
  if (e.request.method === 'GET') {
    let t,
      n = stripIgnoredUrlParameters(e.request.url, ignoreUrlParametersMatching); (t = urlsToCacheKeys.has(n)) || (n = addDirectoryIndex(n, 'index.html'), t = urlsToCacheKeys.has(n)); 0, t && e.respondWith(caches.open(cacheName).then(e => e.match(urlsToCacheKeys.get(n)).then((e) => { if (e) return e; throw Error('The cached response that was expected is missing.'); })).catch(t => console.warn('Couldn\'t serve response for "%s" from cache: %O', e.request.url, t), fetch(e.request)));
  }
}), (function (e) { if (typeof exports === 'object' && typeof module !== 'undefined')module.exports = e(); else if (typeof define === 'function' && define.amd)define([], e); else { (typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : this).toolbox = e(); } }(() => (function e(t, n, r) { function o(a, c) { if (!n[a]) { if (!t[a]) { const s = typeof require === 'function' && require; if (!c && s) return s(a, !0); if (i) return i(a, !0); const u = new Error(`Cannot find module '${a}'`); throw u.code = 'MODULE_NOT_FOUND', u; } const h = n[a] = { exports: {} }; t[a][0].call(h.exports, (e) => { const n = t[a][1][e]; return o(n || e); }, h, h.exports, e, t, n, r); } return n[a].exports; } for (var i = typeof require === 'function' && require, a = 0; a < r.length; a++)o(r[a]); return o; }({
  1: [function (e, t, n) {
    function r(e, t) { ((t = t || {}).debug || s.debug) && console.log(`[sw-toolbox] ${e}`); } function o(e) { let t; return e && e.cache && (t = e.cache.name), t = t || s.cache.name, caches.open(t); } function i(e, t, n) {
      let o = e.url,
        i = n.maxAgeSeconds,
        a = n.maxEntries,
        c = n.name,
        s = Date.now(); return r(`Updating LRU order for ${o}. Max entries is ${a}, max age is ${i}`), u.getDb(c).then(e => u.setTimestampForUrl(e, o, s)).then(e => u.expireEntries(e, a, i, s)).then((e) => { r('Successfully updated IDB.'); const n = e.map(e => t.delete(e)); return Promise.all(n).then(() => { r('Done with cache cleanup.'); }); })
        .catch((e) => { r(e); });
    } function a(e) { let t = Array.isArray(e); if (t && e.forEach((e) => { typeof e === 'string' || e instanceof Request || (t = !1); }), !t) throw new TypeError('The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.'); return e; } var c,
      s = e('./options'),
      u = e('./idb-cache-expiration'); t.exports = {
      debug: r,
      fetchAndCache(e, t) { const n = (t = t || {}).successResponses || s.successResponses; return fetch(e.clone()).then(r => e.method === 'GET' && n.test(r.status) && o(t).then((n) => { n.put(e, r).then(() => { const r = t.cache || s.cache; (r.maxEntries || r.maxAgeSeconds) && r.name && (function (e, t, n) { const r = i.bind(null, e, t, n); c = c ? c.then(r) : r(); }(e, n, r)); }); }), r.clone()); },
      openCache: o,
      renameCache(e, t, n) {
        return r(`Renaming cache: [${e}] to [${t}]`, n), caches.delete(t).then(() => Promise.all([caches.open(e), caches.open(t)]).then((t) => {
          let n = t[0],
            r = t[1]; return n.keys().then(e => Promise.all(e.map(e => n.match(e).then(t => r.put(e, t))))).then(() => caches.delete(e));
        }));
      },
      cache(e, t) { return o(t).then(t => t.add(e)); },
      uncache(e, t) { return o(t).then(t => t.delete(e)); },
      precache(e) { e instanceof Promise || a(e), s.preCacheItems = s.preCacheItems.concat(e); },
      validatePrecacheInput: a,
      isResponseFresh(e, t, n) { if (!e) return !1; if (t) { const r = e.headers.get('date'); if (r && new Date(r).getTime() + 1e3 * t < n) return !1; } return !0; },
    };
  }, { './idb-cache-expiration': 2, './options': 4 }],
  2: [function (e, t, n) {
    let r = 'sw-toolbox-',
      o = 1,
      i = 'store',
      a = 'url',
      c = 'timestamp',
      s = {}; t.exports = {
      getDb(e) { return e in s || (s[e] = (function (e) { return new Promise(((t, n) => { const s = indexedDB.open(r + e, o); s.onupgradeneeded = function () { s.result.createObjectStore(i, { keyPath: a }).createIndex(c, c, { unique: !1 }); }, s.onsuccess = function () { t(s.result); }, s.onerror = function () { n(s.error); }; })); }(e))), s[e]; },
      setTimestampForUrl(e, t, n) { return new Promise(((r, o) => { const a = e.transaction(i, 'readwrite'); a.objectStore(i).put({ url: t, timestamp: n }), a.oncomplete = function () { r(e); }, a.onabort = function () { o(a.error); }; })); },
      expireEntries(e, t, n, r) {
        return (function (e, t, n) {
          return t ? new Promise(((r, o) => {
            let s = 1e3 * t,
              u = [],
              h = e.transaction(i, 'readwrite'),
              f = h.objectStore(i); f.index(c).openCursor().onsuccess = function (e) { const t = e.target.result; if (t && n - s > t.value[c]) { const r = t.value[a]; u.push(r), f.delete(r), t.continue(); } }, h.oncomplete = function () { r(u); }, h.onabort = o;
          })) : Promise.resolve([]);
        }(e, n, r)).then(n => (function (e, t) {
          return t ? new Promise(((n, r) => {
            let o = [],
              s = e.transaction(i, 'readwrite'),
              u = s.objectStore(i),
              h = u.index(c),
              f = h.count(); h.count().onsuccess = function () { const e = f.result; e > t && (h.openCursor().onsuccess = function (n) { const r = n.target.result; if (r) { const i = r.value[a]; o.push(i), u.delete(i), e - o.length > t && r.continue(); } }); }, s.oncomplete = function () { n(o); }, s.onabort = r;
          })) : Promise.resolve([]);
        }(e, t)).then(e => n.concat(e)));
      },
    };
  }, {}],
  3: [function (e, t, n) {
    function r(e) { return e.reduce((e, t) => e.concat(t), []); }e('serviceworker-cache-polyfill'); let o = e('./helpers'),
      i = e('./router'),
      a = e('./options'); t.exports = { fetchListener(e) { const t = i.match(e.request); t ? e.respondWith(t(e.request)) : i.default && e.request.method === 'GET' && e.request.url.indexOf('http') === 0 && e.respondWith(i.default(e.request)); }, activateListener(e) { o.debug('activate event fired'); const t = `${a.cache.name}$$$inactive$$$`; e.waitUntil(o.renameCache(t, a.cache.name)); }, installListener(e) { const t = `${a.cache.name}$$$inactive$$$`; o.debug('install event fired'), o.debug(`creating cache [${t}]`), e.waitUntil(o.openCache({ cache: { name: t } }).then(e => Promise.all(a.preCacheItems).then(r).then(o.validatePrecacheInput).then(t => o.debug(`preCache list: ${t.join(', ') || '(none)'}`), e.addAll(t)))); } };
  }, {
    './helpers': 1, './options': 4, './router': 6, 'serviceworker-cache-polyfill': 16,
  }],
  4: [function (e, t, n) {
    let r; r = self.registration ? self.registration.scope : self.scope || new URL('./', self.location).href, t.exports = {
      cache: { name: `$$$toolbox-cache$$$${r}$$$`, maxAgeSeconds: null, maxEntries: null }, debug: !1, networkTimeoutSeconds: null, preCacheItems: [], successResponses: /^0|([123]\d\d)|(40[14567])|410$/,
    };
  }, {}],
  5: [function (e, t, n) {
    let r = new URL('./', self.location).pathname,
      o = e('path-to-regexp');class i {
      constructor(e, t, n, i) { t instanceof RegExp ? this.fullUrlRegExp = t : (t.indexOf('/') !== 0 && (t = r + t), this.keys = [], this.regexp = o(t, this.keys)), this.method = e, this.options = i, this.handler = n; }
      makeHandler(e) {
      let t; if (this.regexp) {
        const n = this.regexp.exec(e);
        t = {}, this.keys.forEach((e, r) => { t[e.name] = n[r + 1]; });
      } return function (e) { return this.handler(e, t, this.options); }.bind(this);
      }
    }
t.exports = i;
  }, { 'path-to-regexp': 15 }],
  6: [function (e, t, n) {
    let r = e('./route'),
      o = e('./helpers'),
      i = function (e, t) { for (var n = e.entries(), r = n.next(), o = []; !r.done;) { new RegExp(r.value[0]).test(t) && o.push(r.value[1]), r = n.next(); } return o; };class a {
      constructor() { this.routes = new Map(), this.routes.set(RegExp, new Map()), this.default = null; }
      add(e, t, n, i) {
        let a;
        i = i || {}, t instanceof RegExp ? a = RegExp : a = (a = i.origin || self.location.origin) instanceof RegExp ? a.source : (function (e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); } (a)), e = e.toLowerCase();
        const c = new r(e, t, n, i);
        this.routes.has(a) || this.routes.set(a, new Map());
        const s = this.routes.get(a);
        s.has(e) || s.set(e, new Map());
        let u = s.get(e), h = c.regexp || c.fullUrlRegExp;
        u.has(h.source) && o.debug(`"${t}" resolves to same regex as existing route.`), u.set(h.source, c);
      }
      matchMethod(e, t) {
        let n = new URL(t), r = n.origin, o = n.pathname;
        return this._match(e, i(this.routes, r), o) || this._match(e, [this.routes.get(RegExp)], t);
      }
      _match(e, t, n) {
        if (t.length === 0)
          return null;
        for (let r = 0; r < t.length; r++) {
          let o = t[r], a = o && o.get(e.toLowerCase());
          if (a) {
            const c = i(a, n);
            if (c.length > 0)
              return c[0].makeHandler(n);
          }
        }
        return null;
      }
      match(e) { return this.matchMethod(e.method, e.url) || this.matchMethod('any', e.url); }
    }
 ['get', 'post', 'put', 'delete', 'head', 'any'].forEach((e) => { a.prototype[e] = function (t, n, r) { return this.add(e, t, n, r); }; }),,,,, t.exports = new a();
  }, { './helpers': 1, './route': 5 }],
  7: [function (e, t, n) {
    let r = e('../options'),
      o = e('../helpers'); t.exports = function (e, t, n) {
      return n = n || {}, o.debug(`Strategy: cache first [${e.url}]`, n), o.openCache(n).then(t => t.match(e).then((t) => {
        let i = n.cache || r.cache,
          a = Date.now(); return o.isResponseFresh(t, i.maxAgeSeconds, a) ? t : o.fetchAndCache(e, n);
      }));
    };
  }, { '../helpers': 1, '../options': 4 }],
  8: [function (e, t, n) {
    let r = e('../options'),
      o = e('../helpers'); t.exports = function (e, t, n) {
      return n = n || {}, o.debug(`Strategy: cache only [${e.url}]`, n), o.openCache(n).then(t => t.match(e).then((e) => {
        let t = n.cache || r.cache,
          i = Date.now(); if (o.isResponseFresh(e, t.maxAgeSeconds, i)) return e;
      }));
    };
  }, { '../helpers': 1, '../options': 4 }],
  9: [function (e, t, n) {
    let r = e('../helpers'),
      o = e('./cacheOnly'); t.exports = function (e, t, n) {
      return r.debug(`Strategy: fastest [${e.url}]`, n), new Promise(((i, a) => {
        let c = !1,
          s = [],
          u = function (e) { s.push(e.toString()), c ? a(new Error(`Both cache and network failed: "${s.join('", "')}"`)) : c = !0; },
          h = function (e) { e instanceof Response ? i(e) : u('No result returned'); }; r.fetchAndCache(e.clone(), n).then(h, u), o(e, t, n).then(h, u);
      }));
    };
  }, { '../helpers': 1, './cacheOnly': 8 }],
  10: [function (e, t, n) {
    t.exports = {
      networkOnly: e('./networkOnly'), networkFirst: e('./networkFirst'), cacheOnly: e('./cacheOnly'), cacheFirst: e('./cacheFirst'), fastest: e('./fastest'),
    };
  }, {
    './cacheFirst': 7, './cacheOnly': 8, './fastest': 9, './networkFirst': 11, './networkOnly': 12,
  }],
  11: [function (e, t, n) {
    let r = e('../options'),
      o = e('../helpers'); t.exports = function (e, t, n) {
      let i = (n = n || {}).successResponses || r.successResponses,
        a = n.networkTimeoutSeconds || r.networkTimeoutSeconds; return o.debug(`Strategy: network first [${e.url}]`, n), o.openCache(n).then((t) => {
        let c,
          s,
          u = []; if (a) {
          const h = new Promise(((i) => {
            c = setTimeout(() => {
              t.match(e).then((e) => {
                let t = n.cache || r.cache,
                  a = Date.now(),
                  c = t.maxAgeSeconds; o.isResponseFresh(e, c, a) && i(e);
              });
            }, 1e3 * a);
          })); u.push(h);
        } const f = o.fetchAndCache(e, n).then((e) => { if (c && clearTimeout(c), i.test(e.status)) return e; throw o.debug(`Response was an HTTP error: ${e.statusText}`, n), s = e, new Error('Bad response'); }).catch(r => o.debug(`Network or response error, fallback to cache [${e.url}]`, n), t.match(e).then((e) => { if (e) return e; if (s) return s; throw r; })); return u.push(f), Promise.race(u);
      });
    };
  }, { '../helpers': 1, '../options': 4 }],
  12: [function (e, t, n) { const r = e('../helpers'); t.exports = function (e, t, n) { return r.debug(`Strategy: network only [${e.url}]`, n), fetch(e); }; }, { '../helpers': 1 }],
  13: [function (e, t, n) {
    let r = e('./options'),
      o = e('./router'),
      i = e('./helpers'),
      a = e('./strategies'),
      c = e('./listeners'); i.debug('Service Worker Toolbox is loading'), self.addEventListener('install', c.installListener), self.addEventListener('activate', c.activateListener), self.addEventListener('fetch', c.fetchListener), t.exports = {
      networkOnly: a.networkOnly, networkFirst: a.networkFirst, cacheOnly: a.cacheOnly, cacheFirst: a.cacheFirst, fastest: a.fastest, router: o, options: r, cache: i.cache, uncache: i.uncache, precache: i.precache,
    };
  }, {
    './helpers': 1, './listeners': 3, './options': 4, './router': 6, './strategies': 10,
  }],
  14: [function (e, t, n) { t.exports = Array.isArray || function (e) { return Object.prototype.toString.call(e) == '[object Array]'; }; }, {}],
  15: [function (e, t, n) {
    function r(e, t) {
      for (var n, r = [], o = 0, i = 0, a = '', u = t && t.delimiter || '/'; (n = d.exec(e)) != null;) {
        let h = n[0],
          f = n[1],
          l = n.index; if (a += e.slice(i, l), i = l + h.length, f)a += f[1]; else {
          let p = e[i],
            m = n[2],
            g = n[3],
            v = n[4],
            w = n[5],
            x = n[6],
            y = n[7]; a && (r.push(a), a = ''); let b = m != null && p != null && p !== m,
            E = x === '+' || x === '*',
            R = x === '?' || x === '*',
            C = n[2] || u,
            k = v || w; r.push({
            name: g || o++, prefix: m || '', delimiter: C, optional: R, repeat: E, partial: b, asterisk: !!y, pattern: k ? s(k) : y ? '.*' : `[^${c(C)}]+?`,
          });
        }
      } return i < e.length && (a += e.substr(i)), a && r.push(a), r;
    } function o(e) { return encodeURI(e).replace(/[\/?#]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`); } function i(e) { return encodeURI(e).replace(/[?#]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`); } function a(e) {
      for (var t = new Array(e.length), n = 0; n < e.length; n++) typeof e[n] === 'object' && (t[n] = new RegExp(`^(?:${e[n].pattern})$`)); return function (n, r) {
        for (var a = '', c = n || {}, s = (r || {}).pretty ? o : encodeURIComponent, u = 0; u < e.length; u++) {
          const h = e[u]; if (typeof h !== 'string') {
            var f,
              l = c[h.name]; if (l == null) { if (h.optional) { h.partial && (a += h.prefix); continue; } throw new TypeError(`Expected "${h.name}" to be defined`); } if (p(l)) { if (!h.repeat) throw new TypeError(`Expected "${h.name}" to not repeat, but received \`${JSON.stringify(l)}\``); if (l.length === 0) { if (h.optional) continue; throw new TypeError(`Expected "${h.name}" to not be empty`); } for (let d = 0; d < l.length; d++) { if (f = s(l[d]), !t[u].test(f)) throw new TypeError(`Expected all "${h.name}" to match "${h.pattern}", but received \`${JSON.stringify(f)}\``); a += (d === 0 ? h.prefix : h.delimiter) + f; } } else { if (f = h.asterisk ? i(l) : s(l), !t[u].test(f)) throw new TypeError(`Expected "${h.name}" to match "${h.pattern}", but received "${f}"`); a += h.prefix + f; }
          } else a += h;
        } return a;
      };
    } function c(e) { return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1'); } function s(e) { return e.replace(/([=!:$\/()])/g, '\\$1'); } function u(e, t) { return e.keys = t, e; } function h(e) { return e.sensitive ? '' : 'i'; } function f(e, t, n) {
      p(t) || (n = t || n, t = []); for (var r = (n = n || {}).strict, o = !1 !== n.end, i = '', a = 0; a < e.length; a++) {
        const s = e[a]; if (typeof s === 'string')i += c(s); else {
          let f = c(s.prefix),
            l = `(?:${s.pattern})`; t.push(s), s.repeat && (l += `(?:${f}${l})*`), i += l = s.optional ? s.partial ? `${f}(${l})?` : `(?:${f}(${l}))?` : `${f}(${l})`;
        }
      } let d = c(n.delimiter || '/'),
        m = i.slice(-d.length) === d; return r || (i = `${m ? i.slice(0, -d.length) : i}(?:${d}(?=$))?`), i += o ? '$' : r && m ? '' : `(?=${d}|$)`, u(new RegExp(`^${i}`, h(n)), t);
    } function l(e, t, n) {
      return p(t) || (n = t || n, t = []), n = n || {}, e instanceof RegExp ? (function (e, t) {
        const n = e.source.match(/\((?!\?)/g); if (n) {
          for (let r = 0; r < n.length; r++) {
            t.push({
              name: r, prefix: null, delimiter: null, optional: !1, repeat: !1, partial: !1, asterisk: !1, pattern: null,
            });
          }
        } return u(e, t);
      }(e, t)) : p(e) ? (function (e, t, n) { for (var r = [], o = 0; o < e.length; o++)r.push(l(e[o], t, n).source); return u(new RegExp(`(?:${r.join('|')})`, h(n)), t); }(e, t, n)) : (function (e, t, n) { return f(r(e, n), t, n); }(e, t, n));
    } var p = e('isarray'); t.exports = l, t.exports.parse = r, t.exports.compile = function (e, t) { return a(r(e, t)); }, t.exports.tokensToFunction = a, t.exports.tokensToRegExp = f; var d = new RegExp(['(\\\\.)', '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
  }, { isarray: 14 }],
  16: [function (e, t, n) {
    !(function () {
      let e = Cache.prototype.addAll,
        t = navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/); if (t) {
        var n = t[1],
          r = parseInt(t[2]);
      } e && (!t || n === 'Firefox' && r >= 46 || n === 'Chrome' && r >= 50) || (Cache.prototype.addAll = function (e) {class t {
        constructor(e) { this.name = 'NetworkError', this.code = 19, this.message = e; }
      }
 const n = this; return t.prototype = Object.create(Error.prototype), Promise.resolve().then(function () { if (arguments.length < 1) throw new TypeError(); return e = e.map(e => (e instanceof Request ? e : String(e))), Promise.all(e.map((e) => { typeof e === 'string' && (e = new Request(e)); const n = new URL(e.url).protocol; if (n !== 'http:' && n !== 'https:') throw new t('Invalid scheme'); return fetch(e.clone()); })); }).then((r) => { if (r.some(e => !e.ok)) throw new t('Incorrect response status'); return Promise.all(r.map((t, r) => n.put(e[r], t))); }).then(() => {}); }, Cache.prototype.add = function (e) { return this.addAll([e]); });
    }());
  }, {}],
}, {}, [13]))(13))), toolbox.router.get(/[.](png|jpg|css)/, toolbox.fastest, {}), toolbox.router.get(/^http.*/, toolbox.networkFirst, {});
