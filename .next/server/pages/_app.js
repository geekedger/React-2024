(() => {
  var e = {};
  (e.id = 888),
    (e.ids = [888]),
    (e.modules = {
      5653: (e) => {
        e.exports = {
          fallback: "FallbackComponent_fallback__GK0Pt",
          "retry-button": "FallbackComponent_retry-button__lvQ6b",
        };
      },
      6814: (e, t, r) => {
        "use strict";
        r.a(e, async (e, a) => {
          try {
            r.r(t), r.d(t, { default: () => u });
            var s = r(997);
            r(6689);
            var i = r(3291),
              c = r(4091),
              o = r(7815),
              n = r(9900);
            r(108);
            var l = r(7464),
              d = e([i, c]);
            [i, c] = d.then ? (await d)() : d;
            let u = ({ Component: e, ...t }) => {
              let { store: r, props: a } = c.Y.useWrappedStore(t);
              return s.jsx(i.Provider, {
                store: r,
                children: s.jsx(o.Z, {
                  fallback: s.jsx(n.Z, { onRetry: () => {} }),
                  children: s.jsx(l.f, {
                    children: s.jsx(e, { ...a.pageProps }),
                  }),
                }),
              });
            };
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      7815: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => c });
        var a = r(6689),
          s = r.n(a);
        class i extends a.Component {
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
            return e ? s().cloneElement(t, { onRetry: this.handleRetry }) : r;
          }
        }
        let c = i;
      },
      9900: (e, t, r) => {
        "use strict";
        r.d(t, { Z: () => c });
        var a = r(997);
        r(6689);
        var s = r(5653),
          i = r.n(s);
        let c = ({ onRetry: e }) =>
          (0, a.jsxs)("div", {
            className: i().fallback,
            children: [
              a.jsx("p", {
                children:
                  "\uD83D\uDE80 Ta-da! This error was deliberately crafted just for you! Thanks for testing!\uD83C\uDFAD",
              }),
              a.jsx("button", {
                onClick: e,
                className: i().retryButton,
                children: "Retry",
              }),
            ],
          });
      },
      1503: (e, t, r) => {
        "use strict";
        r.d(t, { N: () => a });
        let a = (0, r(6689).createContext)(void 0);
      },
      7464: (e, t, r) => {
        "use strict";
        r.d(t, { f: () => c });
        var a = r(997),
          s = r(6689),
          i = r(1503);
        let c = ({ children: e }) => {
          let [t, r] = (0, s.useState)("light");
          return a.jsx(i.N.Provider, {
            value: { theme: t, setTheme: r },
            children: e,
          });
        };
      },
      3986: (e, t, r) => {
        "use strict";
        r.a(e, async (e, a) => {
          try {
            r.d(t, { Of: () => l, hi: () => n, yQ: () => d });
            var s = r(9943),
              i = r(6270),
              c = r(5172),
              o = e([s, i, c]);
            [s, i, c] = o.then ? (await o)() : o;
            let n = (0, s.createApi)({
                reducerPath: "api",
                baseQuery: (0, s.fetchBaseQuery)({
                  baseUrl: "https://pokeapi.co/api/v2",
                }),
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
                    async onQueryStarted(
                      e,
                      { dispatch: t, queryFulfilled: r },
                    ) {
                      t((0, i.K)(!0));
                      try {
                        let { data: e } = await r;
                        t((0, c.xE)(e.results));
                      } catch (e) {
                        console.error("Failed to fetch pokemons:", e);
                      } finally {
                        t((0, i.K)(!1));
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
                    async onQueryStarted(
                      e,
                      { dispatch: t, queryFulfilled: r },
                    ) {
                      t((0, i.K)(!0));
                      try {
                        await r;
                      } catch (e) {
                        console.error("Failed to fetch pokemon details:", e);
                      } finally {
                        t((0, i.K)(!1));
                      }
                    },
                  }),
                }),
              }),
              { useFetchPokemonsQuery: l, useFetchPokemonDetailsQuery: d } = n;
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      5172: (e, t, r) => {
        "use strict";
        r.a(e, async (e, a) => {
          try {
            r.d(t, { D4: () => o, ZP: () => l, xE: () => n });
            var s = r(3258),
              i = e([s]);
            s = (i.then ? (await i)() : i)[0];
            let c = (0, s.createSlice)({
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
              { setCurrentPage: o, setPageItems: n } = c.actions,
              l = c.reducer;
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      888: (e, t, r) => {
        "use strict";
        r.a(e, async (e, a) => {
          try {
            r.d(t, { ZP: () => l, er: () => n, m: () => o });
            var s = r(3258),
              i = e([s]);
            s = (i.then ? (await i)() : i)[0];
            let c = (0, s.createSlice)({
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
              { showFlyout: o, hideFlyout: n } = c.actions,
              l = c.reducer;
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      6270: (e, t, r) => {
        "use strict";
        r.a(e, async (e, a) => {
          try {
            r.d(t, { K: () => o, Z: () => n });
            var s = r(3258),
              i = e([s]);
            s = (i.then ? (await i)() : i)[0];
            let c = (0, s.createSlice)({
                name: "loading",
                initialState: { isLoading: !1 },
                reducers: {
                  setLoading(e, t) {
                    e.isLoading = t.payload;
                  },
                },
              }),
              { setLoading: o } = c.actions,
              n = c.reducer;
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      9343: (e, t, r) => {
        "use strict";
        r.a(e, async (e, a) => {
          try {
            r.d(t, { MV: () => o, ZP: () => l, nD: () => n });
            var s = r(3258),
              i = e([s]);
            s = (i.then ? (await i)() : i)[0];
            let c = (0, s.createSlice)({
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
              { setPokemonDetails: o, clearPokemonDetails: n } = c.actions,
              l = c.reducer;
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      9979: (e, t, r) => {
        "use strict";
        r.a(e, async (e, a) => {
          try {
            r.d(t, { Gh: () => o, Ve: () => l, ZP: () => d, a7: () => n });
            var s = r(3258),
              i = e([s]);
            s = (i.then ? (await i)() : i)[0];
            let c = (0, s.createSlice)({
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
              {
                selectItem: o,
                unselectItem: n,
                clearSelectedItems: l,
              } = c.actions,
              d = c.reducer;
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      4091: (e, t, r) => {
        "use strict";
        r.a(e, async (e, a) => {
          try {
            r.d(t, { Y: () => y });
            var s = r(3258),
              i = r(5648),
              c = r(3986),
              o = r(4308),
              n = r(5172),
              l = r(9979),
              d = r(888),
              u = r(6270),
              m = r(9343),
              h = e([s, c, o, n, l, d, u, m]);
            [s, c, o, n, l, d, u, m] = h.then ? (await h)() : h;
            let p = () =>
                (0, s.configureStore)({
                  reducer: {
                    [c.hi.reducerPath]: c.hi.reducer,
                    theme: o.ZP,
                    selectedItems: l.ZP,
                    flyout: d.ZP,
                    currentPage: n.ZP,
                    loading: u.Z,
                    pokemonDetails: m.ZP,
                  },
                  middleware: (e) => e().concat(c.hi.middleware),
                }),
              y = (0, i.createWrapper)(p);
            p(), a();
          } catch (e) {
            a(e);
          }
        });
      },
      4308: (e, t, r) => {
        "use strict";
        r.a(e, async (e, a) => {
          try {
            r.d(t, { ZP: () => l });
            var s = r(3258),
              i = e([s]);
            s = (i.then ? (await i)() : i)[0];
            let c = (0, s.createSlice)({
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
              { setTheme: o, toggleTheme: n } = c.actions,
              l = c.reducer;
            a();
          } catch (e) {
            a(e);
          }
        });
      },
      108: () => {},
      5648: (e) => {
        "use strict";
        e.exports = require("next-redux-wrapper");
      },
      6689: (e) => {
        "use strict";
        e.exports = require("react");
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
    });
  var t = require("../webpack-runtime.js");
  t.C(e);
  var r = t((t.s = 6814));
  module.exports = r;
})();
