(() => {
  var e = {};
  (e.id = 78),
    (e.ids = [78]),
    (e.modules = {
      7849: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/action-async-storage.external");
      },
      2934: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/action-async-storage.external.js");
      },
      5403: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external");
      },
      4580: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external.js");
      },
      4749: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external");
      },
      5869: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external.js");
      },
      399: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      7147: (e) => {
        "use strict";
        e.exports = require("fs");
      },
      2781: (e) => {
        "use strict";
        e.exports = require("stream");
      },
      9796: (e) => {
        "use strict";
        e.exports = require("zlib");
      },
      9121: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => n.a,
            __next_app__: () => u,
            originalPathname: () => p,
            pages: () => c,
            routeModule: () => m,
            tree: () => d,
          }),
          r(534),
          r(646),
          r(4200);
        var a = r(3191),
          i = r(8716),
          s = r(7922),
          n = r.n(s),
          o = r(5231),
          l = {};
        for (let e in o)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (l[e] = () => o[e]);
        r.d(t, l);
        let d = [
            "",
            {
              children: [
                "details",
                {
                  children: [
                    "[id]",
                    {
                      children: [
                        "__PAGE__",
                        {},
                        {
                          page: [
                            () => Promise.resolve().then(r.bind(r, 534)),
                            "D:\\work\\React\\React-2024\\app\\details\\[id]\\page.tsx",
                          ],
                        },
                      ],
                    },
                    {},
                  ],
                },
                {},
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 646)),
                "D:\\work\\React\\React-2024\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(r.bind(r, 4200)),
                "D:\\work\\React\\React-2024\\app\\not-found.tsx",
              ],
            },
          ],
          c = ["D:\\work\\React\\React-2024\\app\\details\\[id]\\page.tsx"],
          p = "/details/[id]/page",
          u = { require: r, loadChunk: () => Promise.resolve() },
          m = new a.AppPageRouteModule({
            definition: {
              kind: i.x.APP_PAGE,
              page: "/details/[id]/page",
              pathname: "/details/[id]",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: d },
          });
      },
      6342: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 8321)),
          Promise.resolve().then(r.bind(r, 618));
      },
      8321: (e, t, r) => {
        "use strict";
        r.d(t, { default: () => x });
        var a = r(326),
          i = r(7577),
          s = r(5047),
          n = r(755);
        let o = function (e, t) {};
        var l = r(112),
          d = r(6676),
          c = r(4934),
          p = r(7983),
          u = r.n(p),
          m = r(5842);
        let x = ({ initialPokemonDetails: e }) => {
          let t = (0, s.useRouter)(),
            r = (0, s.useSearchParams)(),
            p = (0, i.useRef)(null),
            x = (0, m.I0)(),
            g = (0, m.v9)((e) => e.pokemonDetails),
            h = r.get("id"),
            {
              data: _,
              isLoading: P,
              error: f,
            } = (0, n.yQ)(h ? parseInt(h, 10) : -1, { skip: !h }),
            k = `/?page=${r.get("page") || ""}&search=${r.get("search") || ""}`;
          if (
            (o(p, () => {
              t.replace(k), x((0, c.nD)());
            }),
            (0, i.useEffect)(() => {
              if (e) x((0, c.MV)(e));
              else if (_ && !P) {
                let e = (0, l.Z)(_.description);
                x(
                  (0, c.MV)({
                    name: _.name,
                    description: e,
                    imageUrl: _.imageUrl,
                  }),
                );
              }
            }, [e, _, P, x]),
            f)
          )
            return a.jsx("div", { children: "Error loading data" });
          if (P && !e) return a.jsx(d.Z, {});
          let v = e || g;
          return v
            ? (0, a.jsxs)("div", {
                ref: p,
                className: u()["detailed-card"],
                children: [
                  a.jsx("h2", { children: v.name }),
                  a.jsx("img", {
                    src: v.imageUrl,
                    alt: v.name,
                    className: u()["pokemon-image"],
                  }),
                  a.jsx("p", { children: (0, l.Z)(v.description) }),
                  a.jsx("button", {
                    className: u()["close-button"],
                    onClick: () => t.back(),
                    children: "Close",
                  }),
                ],
              })
            : a.jsx("p", { children: "No data available" });
        };
      },
      7983: (e) => {
        e.exports = {
          "detailed-card": "DetailedCard_detailed-card__wnpvj",
          "pokemon-image": "DetailedCard_pokemon-image__WOj4Q",
          "close-button": "DetailedCard_close-button__e7WiY",
          "error-message": "DetailedCard_error-message__H9aH1",
        };
      },
      534: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => p });
        var a = r(9510);
        r(1159);
        var i = r(8570);
        let s = (0, i.createProxy)(
            String.raw`D:\work\React\React-2024\src\components\DetailedCard\DetailedCard.tsx`,
          ),
          { __esModule: n, $$typeof: o } = s;
        s.default;
        let l = (0, i.createProxy)(
          String.raw`D:\work\React\React-2024\src\components\DetailedCard\DetailedCard.tsx#default`,
        );
        var d = r(8536),
          c = r(1861);
        let p = async ({ params: e }) => {
          let t = new URLSearchParams();
          t.set("id", e.id);
          let r = await (0, c.r)({
            searchParams: Object.fromEntries(t.entries()),
          });
          return a.jsx(d.ZP, {
            initialPokemons: r.initialPokemons,
            initialSearchTerm: r.initialSearchTerm,
            initialPage: r.initialPage,
            children:
              r.pokemonDetails &&
              a.jsx(l, { initialPokemonDetails: r.pokemonDetails }),
          });
        };
      },
    });
  var t = require("../../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    a = t.X(0, [386, 656, 309], () => r(9121));
  module.exports = a;
})();
