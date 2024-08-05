"use strict";
(() => {
  var e = {};
  (e.id = 405),
    (e.ids = [405, 660]),
    (e.modules = {
      1420: (e, t, r) => {
        r.a(e, async (e, a) => {
          try {
            r.r(t),
              r.d(t, {
                config: () => P,
                default: () => c,
                getServerSideProps: () => g,
                getStaticPaths: () => S,
                getStaticProps: () => x,
                reportWebVitals: () => m,
                routeModule: () => f,
                unstable_getServerProps: () => q,
                unstable_getServerSideProps: () => _,
                unstable_getStaticParams: () => h,
                unstable_getStaticPaths: () => v,
                unstable_getStaticProps: () => b,
              });
            var s = r(7093),
              i = r(5244),
              o = r(1323),
              u = r(2899),
              p = r.n(u),
              l = r(6814),
              n = r(6209),
              d = e([l, n]);
            [l, n] = d.then ? (await d)() : d;
            let c = (0, o.l)(n, "default"),
              x = (0, o.l)(n, "getStaticProps"),
              S = (0, o.l)(n, "getStaticPaths"),
              g = (0, o.l)(n, "getServerSideProps"),
              P = (0, o.l)(n, "config"),
              m = (0, o.l)(n, "reportWebVitals"),
              b = (0, o.l)(n, "unstable_getStaticProps"),
              v = (0, o.l)(n, "unstable_getStaticPaths"),
              h = (0, o.l)(n, "unstable_getStaticParams"),
              q = (0, o.l)(n, "unstable_getServerProps"),
              _ = (0, o.l)(n, "unstable_getServerSideProps"),
              f = new s.PagesRouteModule({
                definition: {
                  kind: i.x.PAGES,
                  page: "/index",
                  pathname: "/",
                  bundlePath: "",
                  filename: "",
                },
                components: { App: l.default, Document: p() },
                userland: n,
              });
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      6209: (e, t, r) => {
        r.a(e, async (e, a) => {
          try {
            r.r(t), r.d(t, { default: () => p, getServerSideProps: () => o.Z });
            var s = r(997),
              i = r(3525),
              o = r(4757),
              u = e([i, o]);
            [i, o] = u.then ? (await u)() : u;
            let p = (e) => s.jsx(i.Z, { ...e });
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      5648: (e) => {
        e.exports = require("next-redux-wrapper");
      },
      2785: (e) => {
        e.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");
      },
      6689: (e) => {
        e.exports = require("react");
      },
      6405: (e) => {
        e.exports = require("react-dom");
      },
      997: (e) => {
        e.exports = require("react/jsx-runtime");
      },
      3258: (e) => {
        e.exports = import("@reduxjs/toolkit");
      },
      9943: (e) => {
        e.exports = import("@reduxjs/toolkit/query/react");
      },
      3291: (e) => {
        e.exports = import("react-redux");
      },
      7147: (e) => {
        e.exports = require("fs");
      },
      1017: (e) => {
        e.exports = require("path");
      },
      2781: (e) => {
        e.exports = require("stream");
      },
      9796: (e) => {
        e.exports = require("zlib");
      },
    });
  var t = require("../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    a = t.X(0, [899, 342, 569], () => r(1420));
  module.exports = a;
})();
