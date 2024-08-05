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
                config: () => S,
                default: () => p,
                getServerSideProps: () => g,
                getStaticPaths: () => x,
                getStaticProps: () => m,
                reportWebVitals: () => h,
                routeModule: () => j,
                unstable_getServerProps: () => v,
                unstable_getServerSideProps: () => f,
                unstable_getStaticParams: () => _,
                unstable_getStaticPaths: () => b,
                unstable_getStaticProps: () => P,
              });
            var a = r(7093),
              i = r(5244),
              l = r(1323),
              o = r(2899),
              c = r.n(o),
              n = r(6814),
              u = r(961),
              d = e([n, u]);
            [n, u] = d.then ? (await d)() : d;
            let p = (0, l.l)(u, "default"),
              m = (0, l.l)(u, "getStaticProps"),
              x = (0, l.l)(u, "getStaticPaths"),
              g = (0, l.l)(u, "getServerSideProps"),
              S = (0, l.l)(u, "config"),
              h = (0, l.l)(u, "reportWebVitals"),
              P = (0, l.l)(u, "unstable_getStaticProps"),
              b = (0, l.l)(u, "unstable_getStaticPaths"),
              _ = (0, l.l)(u, "unstable_getStaticParams"),
              v = (0, l.l)(u, "unstable_getServerProps"),
              f = (0, l.l)(u, "unstable_getServerSideProps"),
              j = new a.PagesRouteModule({
                definition: {
                  kind: i.x.PAGES,
                  page: "/details/[id]",
                  pathname: "/details/[id]",
                  bundlePath: "",
                  filename: "",
                },
                components: { App: n.default, Document: c() },
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
            r.r(t), r.d(t, { default: () => n, getServerSideProps: () => o.Z });
            var a = r(997);
            r(6689);
            var i = r(2277),
              l = r(3525),
              o = r(4757),
              c = e([i, l, o]);
            [i, l, o] = c.then ? (await c)() : c;
            let n = ({
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
            r.d(t, { Z: () => S });
            var a = r(997),
              i = r(6689),
              l = r(1163),
              o = r(3986),
              c = r(7374),
              n = r(3208),
              u = r(9482),
              d = r(3291),
              p = r(9343),
              m = r(3505),
              x = r.n(m),
              g = e([o, d, p]);
            [o, d, p] = g.then ? (await g)() : g;
            let S = ({ initialPokemonDetails: e }) => {
              let t;
              let r = (0, l.useRouter)(),
                { id: s } = r.query,
                m = (0, i.useRef)(null),
                g = (0, d.useDispatch)(),
                S = (0, d.useSelector)((e) => e.pokemonDetails),
                { data: h, isLoading: P } = (0, o.yQ)(
                  s ? parseInt(s, 10) : -1,
                  { skip: !!e },
                );
              if (
                ((0, c.Z)(m, () => {
                  r.back(), g((0, p.nD)());
                }),
                (0, i.useEffect)(() => {
                  if (e) g((0, p.MV)(e));
                  else if (h) {
                    let e = (0, n.Z)(h.description);
                    g(
                      (0, p.MV)({
                        name: h.name,
                        description: e,
                        imageUrl: h.imageUrl,
                      }),
                    );
                  }
                }, [e, h, g]),
                P && !e)
              )
                t = a.jsx(u.Z, {});
              else {
                let s = e || S;
                t = s
                  ? (0, a.jsxs)("div", {
                      children: [
                        a.jsx("h2", { children: s.name }),
                        a.jsx("img", {
                          src: s.imageUrl,
                          alt: s.name,
                          className: x()["pokemon-image"],
                        }),
                        a.jsx("p", { children: (0, n.Z)(s.description) }),
                        a.jsx("button", {
                          className: x()["close-button"],
                          onClick: () => r.back(),
                          children: "Close",
                        }),
                      ],
                    })
                  : a.jsx("p", { children: "No data available" });
              }
              return a.jsx("div", {
                ref: m,
                className: x()["detailed-card"],
                children: t,
              });
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
