(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    2431: function () {},
    3478: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 945)),
        Promise.resolve().then(r.bind(r, 7758)),
        Promise.resolve().then(r.bind(r, 7382)),
        Promise.resolve().then(r.bind(r, 7209)),
        Promise.resolve().then(r.t.bind(r, 5204, 23));
    },
    945: function (e, t, r) {
      "use strict";
      var n = r(7431),
        i = r(2265);
      class o extends i.Component {
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          console.error("ErrorBoundary caught an error", e, t);
        }
        render() {
          let { hasError: e } = this.state,
            { fallback: t, children: r } = this.props;
          return e ? i.cloneElement(t, { onRetry: this.handleRetry }) : r;
        }
        constructor(e) {
          super(e),
            (0, n._)(this, "handleRetry", () => {
              this.setState({ hasError: !1 });
            }),
            (this.state = { hasError: !1 });
        }
      }
      t.default = o;
    },
    7758: function (e, t, r) {
      "use strict";
      var n = r(7437);
      r(2265);
      var i = r(5331),
        o = r.n(i);
      t.default = () =>
        (0, n.jsxs)("div", {
          className: o().fallback,
          children: [
            (0, n.jsx)("p", {
              children:
                "\uD83D\uDE80 Ta-da! This error was deliberately crafted just for you! Thanks for testing!\uD83C\uDFAD",
            }),
            (0, n.jsx)("button", {
              onClick: () => {
                window.location.reload();
              },
              className: o().retryButton,
              children: "Retry",
            }),
          ],
        });
    },
    5064: function (e, t, r) {
      "use strict";
      r.d(t, {
        N: function () {
          return n;
        },
      });
      let n = (0, r(2265).createContext)(void 0);
    },
    7382: function (e, t, r) {
      "use strict";
      r.d(t, {
        ThemeProvider: function () {
          return a;
        },
      });
      var n = r(7437),
        i = r(2265),
        o = r(5064);
      let a = (e) => {
        let { children: t } = e,
          [r, a] = (0, i.useState)("light");
        return (0, n.jsx)(o.N.Provider, {
          value: { theme: r, setTheme: a },
          children: t,
        });
      };
    },
    7209: function (e, t, r) {
      "use strict";
      r.d(t, {
        StoreProvider: function () {
          return v;
        },
      });
      var n = r(7437);
      r(2265);
      var i = r(1444),
        o = r(2351),
        a = r(3989),
        s = r(8460);
      let c = (0, o.oM)({
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
        { setTheme: l, toggleTheme: u } = c.actions;
      var d = c.reducer,
        m = r(2605),
        f = r(6403),
        h = r(78),
        p = r(7445),
        y = r(2924);
      let P = () =>
        (0, o.xC)({
          reducer: {
            [s.hi.reducerPath]: s.hi.reducer,
            theme: d,
            selectedItems: f.ZP,
            flyout: h.ZP,
            currentPage: m.ZP,
            loading: p.Z,
            pokemonDetails: y.ZP,
          },
          middleware: (e) => e().concat(s.hi.middleware),
        });
      (0, a.KV)(P);
      let g = P(),
        v = (e) => {
          let { children: t } = e;
          return (0, n.jsx)(i.zt, { store: g, children: t });
        };
    },
    8460: function (e, t, r) {
      "use strict";
      r.d(t, {
        Of: function () {
          return c;
        },
        hi: function () {
          return s;
        },
        yQ: function () {
          return l;
        },
      });
      var n = r(8507),
        i = r(6074),
        o = r(7445),
        a = r(2605);
      let s = (0, n.LC)({
          reducerPath: "api",
          baseQuery: (0, i.ni)({ baseUrl: "https://pokeapi.co/api/v2" }),
          endpoints: (e) => ({
            fetchPokemons: e.query({
              query: (e) => {
                let { searchTerm: t = "", page: r = 1 } = e;
                return t
                  ? "/pokemon?limit=1000"
                  : "/pokemon?limit=20&offset=".concat((r - 1) * 20);
              },
              transformResponse: (e, t, r) => {
                let { searchTerm: n = "" } = r;
                return (
                  n &&
                    (e.results = e.results.filter((e) =>
                      e.name.toLowerCase().includes(n.toLowerCase()),
                    )),
                  e
                );
              },
              async onQueryStarted(e, t) {
                let { dispatch: r, queryFulfilled: n } = t;
                r((0, o.K)(!0));
                try {
                  let { data: e } = await n;
                  r((0, a.xE)(e.results));
                } catch (e) {
                  console.error("Failed to fetch pokemons:", e);
                } finally {
                  r((0, o.K)(!1));
                }
              },
            }),
            fetchPokemonDetails: e.query({
              query: (e) => "/pokemon-species/".concat(e),
              transformResponse: (e) => {
                var t;
                let r =
                    (null ===
                      (t = e.flavor_text_entries.find(
                        (e) => "en" === e.language.name,
                      )) || void 0 === t
                      ? void 0
                      : t.flavor_text) || "No description available",
                  n =
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(
                      e.id,
                      ".png",
                    );
                return { name: e.name, description: r, imageUrl: n };
              },
              async onQueryStarted(e, t) {
                let { dispatch: r, queryFulfilled: n } = t;
                r((0, o.K)(!0));
                try {
                  await n;
                } catch (e) {
                  console.error("Failed to fetch pokemon details:", e);
                } finally {
                  r((0, o.K)(!1));
                }
              },
            }),
          }),
        }),
        { useFetchPokemonsQuery: c, useFetchPokemonDetailsQuery: l } = s;
    },
    2605: function (e, t, r) {
      "use strict";
      r.d(t, {
        D4: function () {
          return i;
        },
        xE: function () {
          return o;
        },
      });
      let n = (0, r(2351).oM)({
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
        { setCurrentPage: i, setPageItems: o } = n.actions;
      t.ZP = n.reducer;
    },
    78: function (e, t, r) {
      "use strict";
      r.d(t, {
        er: function () {
          return o;
        },
        m: function () {
          return i;
        },
      });
      let n = (0, r(2351).oM)({
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
        { showFlyout: i, hideFlyout: o } = n.actions;
      t.ZP = n.reducer;
    },
    7445: function (e, t, r) {
      "use strict";
      r.d(t, {
        K: function () {
          return i;
        },
      });
      let n = (0, r(2351).oM)({
          name: "loading",
          initialState: { isLoading: !1 },
          reducers: {
            setLoading(e, t) {
              e.isLoading = t.payload;
            },
          },
        }),
        { setLoading: i } = n.actions;
      t.Z = n.reducer;
    },
    2924: function (e, t, r) {
      "use strict";
      r.d(t, {
        MV: function () {
          return i;
        },
        nD: function () {
          return o;
        },
      });
      let n = (0, r(2351).oM)({
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
        { setPokemonDetails: i, clearPokemonDetails: o } = n.actions;
      t.ZP = n.reducer;
    },
    6403: function (e, t, r) {
      "use strict";
      r.d(t, {
        Gh: function () {
          return i;
        },
        Ve: function () {
          return a;
        },
        a7: function () {
          return o;
        },
      });
      let n = (0, r(2351).oM)({
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
        { selectItem: i, unselectItem: o, clearSelectedItems: a } = n.actions;
      t.ZP = n.reducer;
    },
    5204: function () {},
    5331: function (e) {
      e.exports = {
        fallback: "FallbackComponent_fallback__GK0Pt",
        "retry-button": "FallbackComponent_retry-button__lvQ6b",
      };
    },
  },
  function (e) {
    e.O(0, [857, 507, 446, 971, 23, 744], function () {
      return e((e.s = 3478));
    }),
      (_N_E = e.O());
  },
]);
