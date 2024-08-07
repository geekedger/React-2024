(() => {
  var e = {};
  (e.id = 585),
    (e.ids = [585, 660]),
    (e.modules = {
      3505: (e) => {
        e.exports = {
          "detailed-card": "DetailedCard_detailed-card__wnpvj",
          "pokemon-image": "DetailedCard_pokemon-image__WOj4Q",
          "close-button": "DetailedCard_close-button__e7WiY",
          "error-message": "DetailedCard_error-message__H9aH1",
        };
      },
      4312: (e, t, r) => {
        "use strict";
        r.a(e, async (e, s) => {
          try {
            r.r(t),
              r.d(t, {
                config: () => h,
                default: () => p,
                getServerSideProps: () => x,
                getStaticPaths: () => g,
                getStaticProps: () => m,
                reportWebVitals: () => S,
                routeModule: () => j,
                unstable_getServerProps: () => b,
                unstable_getServerSideProps: () => f,
                unstable_getStaticParams: () => _,
                unstable_getStaticPaths: () => v,
                unstable_getStaticProps: () => P,
              });
            var a = r(7093),
              i = r(5244),
              l = r(1323),
              o = r(2899),
              n = r.n(o),
              c = r(6814),
              u = r(961),
              d = e([c, u]);
            [c, u] = d.then ? (await d)() : d;
            let p = (0, l.l)(u, "default"),
              m = (0, l.l)(u, "getStaticProps"),
              g = (0, l.l)(u, "getStaticPaths"),
              x = (0, l.l)(u, "getServerSideProps"),
              h = (0, l.l)(u, "config"),
              S = (0, l.l)(u, "reportWebVitals"),
              P = (0, l.l)(u, "unstable_getStaticProps"),
              v = (0, l.l)(u, "unstable_getStaticPaths"),
              _ = (0, l.l)(u, "unstable_getStaticParams"),
              b = (0, l.l)(u, "unstable_getServerProps"),
              f = (0, l.l)(u, "unstable_getServerSideProps"),
              j = new a.PagesRouteModule({
                definition: {
                  kind: i.x.PAGES,
                  page: "/details/[id]",
                  pathname: "/details/[id]",
                  bundlePath: "",
                  filename: "",
                },
                components: { App: c.default, Document: n() },
                userland: u,
              });
            s();
          } catch (e) {
            s(e);
          }
        });
      },
      961: (e, t, r) => {
        "use strict";
        r.a(e, async (e, s) => {
          try {
            r.r(t), r.d(t, { default: () => c, getServerSideProps: () => o.Z });
            var a = r(997);
            r(6689);
            var i = r(2277),
              l = r(3525),
              o = r(4757),
              n = e([i, l, o]);
            [i, l, o] = n.then ? (await n)() : n;
            let c = ({
              searchTerm: e,
              page: t,
              initialPokemons: r,
              pokemonDetails: s,
            }) =>
              a.jsx(l.Z, {
                initialPokemons: r,
                initialSearchTerm: e,
                initialPage: t,
                children: s && a.jsx(i.Z, { initialPokemonDetails: s }),
              });
            s();
          } catch (e) {
            s(e);
          }
        });
      },
      2277: (e, t, r) => {
        "use strict";
        r.a(e, async (e, s) => {
          try {
            r.d(t, { Z: () => h });
            var a = r(997),
              i = r(6689),
              l = r(1163),
              o = r(3986),
              n = r(7374),
              c = r(3208),
              u = r(9482),
              d = r(9343),
              p = r(3505),
              m = r.n(p),
              g = r(3291),
              x = e([o, d, g]);
            [o, d, g] = x.then ? (await x)() : x;
            let h = ({ initialPokemonDetails: e }) => {
              let t = (0, l.useRouter)(),
                { id: r, page: s, search: p } = t.query,
                x = (0, i.useRef)(null),
                h = (0, g.useDispatch)(),
                S = (0, g.useSelector)((e) => e.pokemonDetails),
                {
                  data: P,
                  isLoading: v,
                  error: _,
                } = (0, o.yQ)(r ? parseInt(r, 10) : -1, { skip: !r });
              if (
                ((0, n.Z)(x, () => {
                  t.replace(
                    {
                      pathname: "/",
                      query: { page: s || void 0, search: p || void 0 },
                    },
                    void 0,
                    { shallow: !0 },
                  ),
                    h((0, d.nD)());
                }),
                (0, i.useEffect)(() => {
                  if (e) h((0, d.MV)(e));
                  else if (P && !v) {
                    let e = (0, c.Z)(P.description);
                    h(
                      (0, d.MV)({
                        name: P.name,
                        description: e,
                        imageUrl: P.imageUrl,
                      }),
                    );
                  }
                }, [e, P, v, h]),
                _)
              )
                return a.jsx("div", { children: "Error loading data" });
              if (v && !e) return a.jsx(u.Z, {});
              let b = e || S;
              return b
                ? (0, a.jsxs)("div", {
                    ref: x,
                    className: m()["detailed-card"],
                    children: [
                      a.jsx("h2", { children: b.name }),
                      a.jsx("img", {
                        src: b.imageUrl,
                        alt: b.name,
                        className: m()["pokemon-image"],
                      }),
                      a.jsx("p", { children: (0, c.Z)(b.description) }),
                      a.jsx("button", {
                        className: m()["close-button"],
                        onClick: () => t.back(),
                        children: "Close",
                      }),
                    ],
                  })
                : a.jsx("p", { children: "No data available" });
            };
            s();
          } catch (e) {
            s(e);
          }
        });
      },
      7374: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => s }), r(6689);
        let s = function (e, t) {};
      },
      5648: (e) => {
        "use strict";
        e.exports = require("next-redux-wrapper");
      },
      2785: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");
      },
      6689: (e) => {
        "use strict";
        e.exports = require("react");
      },
      6405: (e) => {
        "use strict";
        e.exports = require("react-dom");
      },
      997: (e) => {
        "use strict";
        e.exports = require("react/jsx-runtime");
      },
      3258: (e) => {
        "use strict";
        e.exports = import("@reduxjs/toolkit");
      },
      9943: (e) => {
        "use strict";
        e.exports = import("@reduxjs/toolkit/query/react");
      },
      3291: (e) => {
        "use strict";
        e.exports = import("react-redux");
      },
      7147: (e) => {
        "use strict";
        e.exports = require("fs");
      },
      1017: (e) => {
        "use strict";
        e.exports = require("path");
      },
      2781: (e) => {
        "use strict";
        e.exports = require("stream");
      },
      9796: (e) => {
        "use strict";
        e.exports = require("zlib");
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [899, 342, 569], () => r(4312));
  module.exports = s;
})();
