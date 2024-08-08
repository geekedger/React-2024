(() => {
  var e = {};
  (e.id = 409),
    (e.ids = [409]),
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
      6797: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => a.a,
            __next_app__: () => m,
            originalPathname: () => u,
            pages: () => d,
            routeModule: () => p,
            tree: () => c,
          }),
          r(5866),
          r(4200),
          r(646);
        var o = r(3191),
          n = r(8716),
          s = r(7922),
          a = r.n(s),
          i = r(5231),
          l = {};
        for (let e in i)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (l[e] = () => i[e]);
        r.d(t, l);
        let c = [
            "",
            {
              children: [
                "/_not-found",
                {
                  children: [
                    "__PAGE__",
                    {},
                    {
                      page: [
                        () => Promise.resolve().then(r.bind(r, 4200)),
                        "D:\\work\\React\\React-2024\\app\\not-found.tsx",
                      ],
                    },
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
          d = [],
          u = "/_not-found/page",
          m = { require: r, loadChunk: () => Promise.resolve() },
          p = new o.AppPageRouteModule({
            definition: {
              kind: n.x.APP_PAGE,
              page: "/_not-found/page",
              pathname: "/_not-found",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      9348: (e, t, r) => {
        Promise.resolve().then(r.t.bind(r, 2994, 23)),
          Promise.resolve().then(r.t.bind(r, 6114, 23)),
          Promise.resolve().then(r.t.bind(r, 9727, 23)),
          Promise.resolve().then(r.t.bind(r, 9671, 23)),
          Promise.resolve().then(r.t.bind(r, 1868, 23)),
          Promise.resolve().then(r.t.bind(r, 4759, 23));
      },
      9365: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 639)),
          Promise.resolve().then(r.bind(r, 5713)),
          Promise.resolve().then(r.bind(r, 6900)),
          Promise.resolve().then(r.bind(r, 7400));
      },
      4368: () => {},
      639: (e, t, r) => {
        "use strict";
        r.d(t, { default: () => a });
        var o = r(7577),
          n = r.n(o);
        class s extends o.Component {
          constructor(e) {
            super(e), (this.state = { hasError: !1 });
          }
          static getDerivedStateFromError() {
            return { hasError: !0 };
          }
          componentDidCatch(e, t) {
            console.error("ErrorBoundary caught an error", e, t);
          }
          handleRetry = () => {
            this.setState({ hasError: !1 });
          };
          render() {
            let { hasError: e } = this.state,
              { fallback: t, children: r } = this.props;
            return e ? n().cloneElement(t, { onRetry: this.handleRetry }) : r;
          }
        }
        let a = s;
      },
      5713: (e, t, r) => {
        "use strict";
        r.d(t, { default: () => a });
        var o = r(326);
        r(7577);
        var n = r(4291),
          s = r.n(n);
        let a = () =>
          (0, o.jsxs)("div", {
            className: s().fallback,
            children: [
              o.jsx("p", {
                children:
                  "\uD83D\uDE80 Ta-da! This error was deliberately crafted just for you! Thanks for testing!\uD83C\uDFAD",
              }),
              o.jsx("button", {
                onClick: () => {
                  window.location.reload();
                },
                className: s().retryButton,
                children: "Retry",
              }),
            ],
          });
      },
      49: (e, t, r) => {
        "use strict";
        r.d(t, { N: () => o });
        let o = (0, r(7577).createContext)(void 0);
      },
      6900: (e, t, r) => {
        "use strict";
        r.d(t, { ThemeProvider: () => a });
        var o = r(326),
          n = r(7577),
          s = r(49);
        let a = ({ children: e }) => {
          let [t, r] = (0, n.useState)("light");
          return o.jsx(s.N.Provider, {
            value: { theme: t, setTheme: r },
            children: e,
          });
        };
      },
      7400: (e, t, r) => {
        "use strict";
        r.d(t, { StoreProvider: () => P });
        var o = r(326);
        r(7577);
        var n = r(5842),
          s = r(8860),
          a = r(5175),
          i = r(755);
        let l = (0, s.oM)({
            name: "theme",
            initialState: { theme: "light" },
            reducers: {
              setTheme: (e, t) => {
                e.theme = t.payload;
              },
              toggleTheme: (e) => {
                e.theme = "light" === e.theme ? "dark" : "light";
              },
            },
          }),
          { setTheme: c, toggleTheme: d } = l.actions,
          u = l.reducer;
        var m = r(6326),
          p = r(9466),
          h = r(347),
          f = r(8453),
          x = r(4934);
        let g = () =>
          (0, s.xC)({
            reducer: {
              [i.hi.reducerPath]: i.hi.reducer,
              theme: u,
              selectedItems: p.ZP,
              flyout: h.ZP,
              currentPage: m.ZP,
              loading: f.Z,
              pokemonDetails: x.ZP,
            },
            middleware: (e) => e().concat(i.hi.middleware),
          });
        (0, a.KV)(g);
        let y = g(),
          P = ({ children: e }) => o.jsx(n.zt, { store: y, children: e });
      },
      755: (e, t, r) => {
        "use strict";
        r.d(t, { Of: () => l, hi: () => i, yQ: () => c });
        var o = r(9119),
          n = r(7509),
          s = r(8453),
          a = r(6326);
        let i = (0, o.LC)({
            reducerPath: "api",
            baseQuery: (0, n.ni)({ baseUrl: "https://pokeapi.co/api/v2" }),
            endpoints: (e) => ({
              fetchPokemons: e.query({
                query: ({ searchTerm: e = "", page: t = 1 }) =>
                  e
                    ? "/pokemon?limit=1000"
                    : `/pokemon?limit=20&offset=${(t - 1) * 20}`,
                transformResponse: (e, t, { searchTerm: r = "" }) => (
                  r &&
                    (e.results = e.results.filter((e) =>
                      e.name.toLowerCase().includes(r.toLowerCase()),
                    )),
                  e
                ),
                async onQueryStarted(e, { dispatch: t, queryFulfilled: r }) {
                  t((0, s.K)(!0));
                  try {
                    let { data: e } = await r;
                    t((0, a.xE)(e.results));
                  } catch (e) {
                    console.error("Failed to fetch pokemons:", e);
                  } finally {
                    t((0, s.K)(!1));
                  }
                },
              }),
              fetchPokemonDetails: e.query({
                query: (e) => `/pokemon-species/${e}`,
                transformResponse: (e) => {
                  let t =
                      e.flavor_text_entries.find(
                        (e) => "en" === e.language.name,
                      )?.flavor_text || "No description available",
                    r = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.id}.png`;
                  return { name: e.name, description: t, imageUrl: r };
                },
                async onQueryStarted(e, { dispatch: t, queryFulfilled: r }) {
                  t((0, s.K)(!0));
                  try {
                    await r;
                  } catch (e) {
                    console.error("Failed to fetch pokemon details:", e);
                  } finally {
                    t((0, s.K)(!1));
                  }
                },
              }),
            }),
          }),
          { useFetchPokemonsQuery: l, useFetchPokemonDetailsQuery: c } = i;
      },
      6326: (e, t, r) => {
        "use strict";
        r.d(t, { D4: () => n, ZP: () => a, xE: () => s });
        let o = (0, r(8860).oM)({
            name: "currentPage",
            initialState: { page: 1, items: [] },
            reducers: {
              setCurrentPage: (e, t) => {
                e.page = t.payload;
              },
              setPageItems: (e, t) => {
                e.items = t.payload;
              },
            },
          }),
          { setCurrentPage: n, setPageItems: s } = o.actions,
          a = o.reducer;
      },
      347: (e, t, r) => {
        "use strict";
        r.d(t, { ZP: () => a, er: () => s, m: () => n });
        let o = (0, r(8860).oM)({
            name: "flyout",
            initialState: { isVisible: !1 },
            reducers: {
              showFlyout: (e) => {
                e.isVisible = !0;
              },
              hideFlyout: (e) => {
                e.isVisible = !1;
              },
            },
          }),
          { showFlyout: n, hideFlyout: s } = o.actions,
          a = o.reducer;
      },
      8453: (e, t, r) => {
        "use strict";
        r.d(t, { K: () => n, Z: () => s });
        let o = (0, r(8860).oM)({
            name: "loading",
            initialState: { isLoading: !1 },
            reducers: {
              setLoading(e, t) {
                e.isLoading = t.payload;
              },
            },
          }),
          { setLoading: n } = o.actions,
          s = o.reducer;
      },
      4934: (e, t, r) => {
        "use strict";
        r.d(t, { MV: () => n, ZP: () => a, nD: () => s });
        let o = (0, r(8860).oM)({
            name: "pokemonDetails",
            initialState: { name: "", description: "", imageUrl: "" },
            reducers: {
              setPokemonDetails: (e, t) => {
                (e.name = t.payload.name),
                  (e.description = t.payload.description),
                  (e.imageUrl = t.payload.imageUrl);
              },
              clearPokemonDetails: (e) => {
                (e.name = ""), (e.description = ""), (e.imageUrl = "");
              },
            },
          }),
          { setPokemonDetails: n, clearPokemonDetails: s } = o.actions,
          a = o.reducer;
      },
      9466: (e, t, r) => {
        "use strict";
        r.d(t, { Gh: () => n, Ve: () => a, ZP: () => i, a7: () => s });
        let o = (0, r(8860).oM)({
            name: "selectedItems",
            initialState: { items: [] },
            reducers: {
              selectItem: (e, t) => {
                e.items.push(t.payload);
              },
              unselectItem: (e, t) => {
                e.items = e.items.filter((e) => e.name !== t.payload.name);
              },
              clearSelectedItems: (e) => {
                e.items = [];
              },
            },
          }),
          { selectItem: n, unselectItem: s, clearSelectedItems: a } = o.actions,
          i = o.reducer;
      },
      4291: (e) => {
        e.exports = {
          fallback: "FallbackComponent_fallback__GK0Pt",
          "retry-button": "FallbackComponent_retry-button__lvQ6b",
        };
      },
      3903: (e) => {
        e.exports = {
          "not-found-container": "NotFound_not-found-container__AUVtC",
          "not-found-text": "NotFound_not-found-text__Dg4Qf",
        };
      },
      646: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => v });
        var o = r(9510);
        r(1159);
        var n = r(8570);
        let s = (0, n.createProxy)(
            String.raw`D:\work\React\React-2024\src\components\ErrorBoundary\ErrorBoundary.tsx`,
          ),
          { __esModule: a, $$typeof: i } = s;
        s.default;
        let l = (0, n.createProxy)(
            String.raw`D:\work\React\React-2024\src\components\ErrorBoundary\ErrorBoundary.tsx#default`,
          ),
          c = (0, n.createProxy)(
            String.raw`D:\work\React\React-2024\src\components\FallbackComponent\FallbackComponent.tsx`,
          ),
          { __esModule: d, $$typeof: u } = c;
        c.default;
        let m = (0, n.createProxy)(
            String.raw`D:\work\React\React-2024\src\components\FallbackComponent\FallbackComponent.tsx#default`,
          ),
          p = (0, n.createProxy)(
            String.raw`D:\work\React\React-2024\src\contexts\ThemeProvider.tsx`,
          ),
          { __esModule: h, $$typeof: f } = p;
        p.default;
        let x = (0, n.createProxy)(
          String.raw`D:\work\React\React-2024\src\contexts\ThemeProvider.tsx#ThemeProvider`,
        );
        r(4315);
        let g = (0, n.createProxy)(
            String.raw`D:\work\React\React-2024\src\store\StoreProvider.tsx`,
          ),
          { __esModule: y, $$typeof: P } = g;
        g.default;
        let b = (0, n.createProxy)(
            String.raw`D:\work\React\React-2024\src\store\StoreProvider.tsx#StoreProvider`,
          ),
          v = ({ children: e }) =>
            o.jsx("html", {
              lang: "en",
              children: o.jsx("body", {
                children: o.jsx(b, {
                  children: o.jsx(l, {
                    fallback: o.jsx(m, {}),
                    children: o.jsx(x, { children: e }),
                  }),
                }),
              }),
            });
      },
      4200: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => i });
        var o = r(9510);
        r(1159);
        var n = r(3903),
          s = r.n(n);
        let a = () =>
            o.jsx("div", {
              className: s()["not-found-container"],
              children: o.jsx("h2", {
                className: s()["not-found-text"],
                children: "Page not found",
              }),
            }),
          i = () => o.jsx(a, {});
      },
      5866: (e, t, r) => {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }),
          Object.defineProperty(t, "default", {
            enumerable: !0,
            get: function () {
              return s;
            },
          }),
          r(3370);
        let o = r(9510);
        r(1159);
        let n = {
          error: {
            fontFamily:
              'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
            height: "100vh",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          },
          desc: { display: "inline-block" },
          h1: {
            display: "inline-block",
            margin: "0 20px 0 0",
            padding: "0 23px 0 0",
            fontSize: 24,
            fontWeight: 500,
            verticalAlign: "top",
            lineHeight: "49px",
          },
          h2: { fontSize: 14, fontWeight: 400, lineHeight: "49px", margin: 0 },
        };
        function s() {
          return (0, o.jsxs)(o.Fragment, {
            children: [
              (0, o.jsx)("title", {
                children: "404: This page could not be found.",
              }),
              (0, o.jsx)("div", {
                style: n.error,
                children: (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)("style", {
                      dangerouslySetInnerHTML: {
                        __html:
                          "body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}",
                      },
                    }),
                    (0, o.jsx)("h1", {
                      className: "next-error-h1",
                      style: n.h1,
                      children: "404",
                    }),
                    (0, o.jsx)("div", {
                      style: n.desc,
                      children: (0, o.jsx)("h2", {
                        style: n.h2,
                        children: "This page could not be found.",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        }
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
      },
      4315: () => {},
      3370: (e, t, r) => {
        "use strict";
        function o(e) {
          return e && e.__esModule ? e : { default: e };
        }
        r.r(t), r.d(t, { _: () => o, _interop_require_default: () => o });
      },
    });
  var t = require("../../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    o = t.X(0, [386], () => r(6797));
  module.exports = o;
})();
