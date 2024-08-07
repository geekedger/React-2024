(exports.id = 569),
  (exports.ids = [569]),
  (exports.modules = {
    5653: (e) => {
      e.exports = {
        fallback: "FallbackComponent_fallback__GK0Pt",
        "retry-button": "FallbackComponent_retry-button__lvQ6b",
      };
    },
    8614: (e) => {
      e.exports = {
        css: "FlyoutComponent_css__LGJoz",
        flyout: "FlyoutComponent_flyout__qiF1E",
      };
    },
    2808: (e) => {
      e.exports = {
        loader: "Loader_loader__gANhr",
        spinner: "Loader_spinner__RHv3O",
        spin: "Loader_spin__p8FlS",
      };
    },
    5163: (e) => {
      e.exports = {
        pagination: "Pagination_pagination__c7olK",
        light: "Pagination_light__8MnhH",
      };
    },
    7668: (e) => {
      e.exports = {
        "pokemon-card": "PokemonCard_pokemon-card__EyuHp",
        "pokemon-card-checkbox": "PokemonCard_pokemon-card-checkbox__RDUZi",
      };
    },
    420: (e) => {
      e.exports = {
        results: "ResultsComponent_results__wrM9S",
        "no-results": "ResultsComponent_no-results__2LlCV",
        light: "ResultsComponent_light__LdTr6",
        dark: "ResultsComponent_dark__rSbrO",
        "pokemon-list": "ResultsComponent_pokemon-list__U46We",
        "pokemon-list-item": "ResultsComponent_pokemon-list-item__r_vRX",
        "no-pokemon-message": "ResultsComponent_no-pokemon-message__08TOn",
      };
    },
    1868: (e) => {
      e.exports = {
        "search-form": "SearchComponent_search-form__KVl4Q",
        "search-input": "SearchComponent_search-input__JYTDZ",
        dark: "SearchComponent_dark__zt4W4",
        "search-button": "SearchComponent_search-button__fPwcQ",
        "throw-error-button": "SearchComponent_throw-error-button__NSy6t",
        light: "SearchComponent_light__FbBTG",
      };
    },
    1652: (e) => {
      e.exports = {
        app: "Home_app__8F103",
        light: "Home_light__u2_05",
        dark: "Home_dark__8QFcO",
        "app-left": "Home_app-left__Kkuze",
        "app-top": "Home_app-top__TpV89",
        "app-bottom": "Home_app-bottom__BSdSW",
        "app-right": "Home_app-right__KLIdP",
        empty: "Home_empty__60I1x",
        button: "Home_button__Mzpzz",
        loading: "Home_loading__fXh_b",
        "error-message": "Home_error-message__bXfAf",
      };
    },
    6814: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.r(t), r.d(t, { default: () => p });
          var s = r(997);
          r(6689);
          var o = r(3291),
            n = r(4091),
            i = r(7815),
            l = r(9900);
          r(108);
          var c = r(7464),
            u = e([o, n]);
          [o, n] = u.then ? (await u)() : u;
          let p = ({ Component: e, ...t }) => {
            let { store: r, props: a } = n.Y.useWrappedStore(t);
            return s.jsx(o.Provider, {
              store: r,
              children: s.jsx(i.Z, {
                fallback: s.jsx(l.Z, { onRetry: () => {} }),
                children: s.jsx(c.f, {
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
      r.d(t, { Z: () => n });
      var a = r(6689),
        s = r.n(a);
      class o extends a.Component {
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
      let n = o;
    },
    9900: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => n });
      var a = r(997);
      r(6689);
      var s = r(5653),
        o = r.n(s);
      let n = ({ onRetry: e }) =>
        (0, a.jsxs)("div", {
          className: o().fallback,
          children: [
            a.jsx("p", {
              children:
                "\uD83D\uDE80 Ta-da! This error was deliberately crafted just for you! Thanks for testing!\uD83C\uDFAD",
            }),
            a.jsx("button", {
              onClick: e,
              className: o().retryButton,
              children: "Retry",
            }),
          ],
        });
    },
    4831: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { Z: () => d });
          var s = r(997);
          r(6689);
          var o = r(3291),
            n = r(9979),
            i = r(888),
            l = r(3208),
            c = r(8614),
            u = r.n(c),
            p = e([o, n, i]);
          [o, n, i] = p.then ? (await p)() : p;
          let d = () => {
            let e = (0, o.useDispatch)(),
              t = (0, o.useSelector)((e) => e.selectedItems.items) || [];
            return (0, o.useSelector)((e) => e.flyout.isVisible)
              ? (0, s.jsxs)("div", {
                  className: u().flyout,
                  children: [
                    (0, s.jsxs)("p", {
                      children: [t.length, " items are selected"],
                    }),
                    s.jsx("button", {
                      onClick: () => {
                        e((0, n.Ve)()), e((0, i.er)());
                      },
                      children: "Unselect all",
                    }),
                    s.jsx("button", {
                      onClick: () => {
                        let e =
                            "data:text/csv;charset=utf-8," +
                            t
                              .map((e) => {
                                let t = (0, l.Z)(e.description)
                                  .replace(/\n/g, " ")
                                  .replace(/\s+/g, " ")
                                  .trim();
                                return `"${e.name}","${t}","${e.details}"`;
                              })
                              .join("\n"),
                          r = encodeURI(e),
                          a = document.createElement("a");
                        a.setAttribute("href", r),
                          a.setAttribute(
                            "download",
                            `${t.length}_Pokemons.csv`,
                          ),
                          document.body.appendChild(a),
                          a.click();
                      },
                      children: "Download",
                    }),
                  ],
                })
              : null;
          };
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    9482: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => n });
      var a = r(997);
      r(6689);
      var s = r(2808),
        o = r.n(s);
      let n = () =>
        a.jsx("div", {
          className: o().loader,
          role: "status",
          children: a.jsx("div", { className: o().spinner }),
        });
    },
    3525: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { Z: () => v });
          var s = r(997),
            o = r(6689),
            n = r(1163),
            i = r(3986),
            l = r(9482),
            c = r(6291),
            u = r(8355),
            p = r(4217),
            d = r(5874),
            h = r(2533),
            m = r(4831),
            _ = r(5172),
            g = r(3890),
            y = r(1652),
            f = r.n(y),
            x = r(3291),
            k = e([i, u, m, _, x]);
          [i, u, m, _, x] = k.then ? (await k)() : k;
          let v = ({
            initialPokemons: e,
            initialSearchTerm: t,
            initialPage: r,
            children: a,
          }) => {
            let [y, k] = (0, o.useState)(null),
              [v, b] = (0, d.Z)("searchTerm", t),
              [S, j] = (0, d.Z)("page", (r || 1).toString()),
              P = (0, n.useRouter)(),
              C = (0, x.useDispatch)(),
              w = (0, x.useSelector)((e) => e.currentPage.page),
              Z = (0, x.useSelector)((e) => e.currentPage.items),
              N = isNaN(parseInt(S)) ? w : parseInt(S),
              {
                data: D,
                error: E,
                isLoading: F,
              } = (0, i.Of)({ searchTerm: v, page: N }, {});
            (0, o.useEffect)(() => {
              P.query.page && j(P.query.page),
                P.query.search && b(P.query.search);
            }, [P.query.page, P.query.search, j, b]),
              (0, o.useEffect)(() => {
                D?.results
                  ? (C((0, _.xE)(D.results)), C((0, _.D4)(N)))
                  : e.length > 0 && (C((0, _.xE)(e)), C((0, _.D4)(N)));
              }, [D, e, C, N]),
              (0, o.useEffect)(() => {
                E ? k(E.toString()) : k(null);
              }, [E]);
            let { theme: R } = (0, g.F)();
            return (0, s.jsxs)("div", {
              className: `${f().app} ${f()[R]}`,
              children: [
                (0, s.jsxs)("div", {
                  className: f()["app-left"],
                  children: [
                    (0, s.jsxs)("div", {
                      className: f()["app-top"],
                      children: [
                        s.jsx(h.Z, {}),
                        s.jsx(p.Z, {
                          searchTerm: v,
                          onSearch: (e) => {
                            b(e),
                              P.push({
                                pathname: "/",
                                query: { search: e, page: "1" },
                              });
                          },
                        }),
                        F && s.jsx(l.Z, {}),
                        y &&
                          !F &&
                          s.jsx("p", {
                            className: f()["error-message"],
                            children: y,
                          }),
                      ],
                    }),
                    s.jsx("div", {
                      className: f()["app-bottom"],
                      children:
                        !F &&
                        !y &&
                        (0, s.jsxs)(s.Fragment, {
                          children: [
                            s.jsx(u.Z, {
                              pokemons: Z.length ? Z : e,
                              error: null,
                            }),
                            s.jsx(c.Z, { next: 20 === Z.length }),
                            s.jsx(m.Z, {}),
                          ],
                        }),
                    }),
                  ],
                }),
                s.jsx("div", { className: f()["app-right"], children: a }),
              ],
            });
          };
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    6291: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => l });
      var a = r(997);
      r(6689);
      var s = r(1163),
        o = r(5163),
        n = r.n(o),
        i = r(3890);
      let l = ({ next: e }) => {
        let t = (0, s.useRouter)(),
          { query: r } = t,
          { theme: o } = (0, i.F)(),
          l = r.page ? parseInt(r.page, 10) : 1,
          c = r.search,
          u = (e) => {
            t.push(
              { pathname: "/", query: { page: e, search: c || void 0 } },
              void 0,
              { shallow: !0 },
            );
          };
        return (0, a.jsxs)("div", {
          className: `${n().pagination} ${n()[o]}`,
          children: [
            l > 1 &&
              a.jsx("button", {
                onClick: () => u(l - 1),
                children: "Previous",
              }),
            (0, a.jsxs)("span", { children: ["Page ", l] }),
            e && a.jsx("button", { onClick: () => u(l + 1), children: "Next" }),
          ],
        });
      };
    },
    8053: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { Z: () => g });
          var s = r(997),
            o = r(6689),
            n = r(1163),
            i = r(3291),
            l = r(9979),
            c = r(888),
            u = r(3986),
            p = r(7668),
            d = r.n(p),
            h = r(6270),
            m = r(9482),
            _ = e([i, l, c, u, h]);
          [i, l, c, u, h] = _.then ? (await _)() : _;
          let g = ({ pokemon: e }) => {
            let t = (0, n.useRouter)(),
              { query: r } = t,
              a = r.page || "1",
              p = parseInt(e.url.split("/").filter(Boolean).pop()),
              { data: _, isFetching: g } = (0, u.yQ)(p),
              y = (0, i.useDispatch)(),
              f = (0, i.useSelector)((e) => e.selectedItems.items),
              x = (0, i.useSelector)((e) => e.loading.isLoading);
            (0, o.useEffect)(() => {
              g ? y((0, h.K)(!0)) : y((0, h.K)(!1));
            }, [g, y]);
            let k = f.some((t) => t.name === e.name);
            return (0, s.jsxs)("div", {
              className: d()["pokemon-card"],
              onClick: () => {
                t.push(`/details/${p}?page=${a}`);
              },
              children: [
                s.jsx("input", {
                  type: "checkbox",
                  checked: k,
                  onChange: (t) => {
                    if ((t.stopPropagation(), _)) {
                      let t = {
                        name: _.name,
                        url: e.url,
                        description: _.description,
                        details: `https://pokeapi.co/api/v2/pokemon/${p}`,
                        imageUrl: _.imageUrl,
                      };
                      k
                        ? (y((0, l.a7)(t)), 1 === f.length && y((0, c.er)()))
                        : (y((0, l.Gh)(t)), 0 === f.length && y((0, c.m)()));
                    }
                  },
                  className: d()["pokemon-card-checkbox"],
                  disabled: g,
                  onClick: (e) => e.stopPropagation(),
                }),
                (0, s.jsxs)("div", {
                  className: d()["pokemon-card-content"],
                  children: [
                    s.jsx("h2", { children: e.name }),
                    x && s.jsx(m.Z, {}),
                  ],
                }),
              ],
            });
          };
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    8355: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { Z: () => c });
          var s = r(997);
          r(6689);
          var o = r(8053),
            n = r(420),
            i = r.n(n),
            l = e([o]);
          o = (l.then ? (await l)() : l)[0];
          let c = ({ pokemons: e, error: t }) =>
            t
              ? s.jsx("p", { children: t })
              : 0 === e.length
                ? s.jsx("p", {
                    className: i()["no-pokemon-message"],
                    children: "No Pokemon found",
                  })
                : s.jsx("ul", {
                    className: i()["pokemon-list"],
                    children: e.map((e) =>
                      s.jsx(
                        "li",
                        {
                          className: i()["pokemon-list-item"],
                          children: s.jsx(o.Z, { pokemon: e }),
                        },
                        e.name,
                      ),
                    ),
                  });
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    4217: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => l });
      var a = r(997),
        s = r(6689),
        o = r(1868),
        n = r.n(o),
        i = r(3890);
      let l = ({ searchTerm: e, onSearch: t }) => {
        let [r, o] = (0, s.useState)(e),
          [l, c] = (0, s.useState)(null),
          { theme: u } = (0, i.F)();
        return (
          (0, s.useEffect)(() => {
            o(e);
          }, [e]),
          (0, s.useEffect)(() => {
            if (l) throw l;
          }, [l]),
          (0, a.jsxs)("form", {
            onSubmit: (e) => {
              e.preventDefault(), t(r);
            },
            className: `${n()["search-form"]} ${n()[u]}`,
            children: [
              a.jsx("input", {
                type: "text",
                value: r,
                onChange: (e) => {
                  o(e.target.value);
                },
                placeholder: "Search Pok\xe9mon",
                className: n()["search-input"],
              }),
              a.jsx("button", {
                type: "submit",
                className: n()["search-button"],
                children: "Search",
              }),
              a.jsx("button", {
                type: "button",
                onClick: () => {
                  console.log("Throwing error"), c(Error("Simulated error."));
                },
                className: n()["throw-error-button"],
                children: "Throw Error",
              }),
            ],
          })
        );
      };
    },
    2533: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => o });
      var a = r(997);
      r(6689);
      var s = r(3890);
      let o = () => {
        let { theme: e, setTheme: t } = (0, s.F)();
        return (0, a.jsxs)("button", {
          className: "theme-toggle-button",
          onClick: () => {
            t("light" === e ? "dark" : "light");
          },
          children: ["Switch to ", "light" === e ? "dark" : "light", " theme"],
        });
      };
    },
    1503: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => a });
      let a = (0, r(6689).createContext)(void 0);
    },
    7464: (e, t, r) => {
      "use strict";
      r.d(t, { f: () => n });
      var a = r(997),
        s = r(6689),
        o = r(1503);
      let n = ({ children: e }) => {
        let [t, r] = (0, s.useState)("light");
        return a.jsx(o.N.Provider, {
          value: { theme: t, setTheme: r },
          children: e,
        });
      };
    },
    5874: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => s });
      var a = r(6689);
      let s = (e, t = "") => {
        let [r, s] = (0, a.useState)(() => t);
        return (
          (0, a.useEffect)(() => {}, [e]),
          (0, a.useEffect)(() => {}, [e, r]),
          [r, s]
        );
      };
    },
    3890: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => o });
      var a = r(6689),
        s = r(1503);
      let o = () => {
        let e = (0, a.useContext)(s.N);
        if (!e) throw Error("useTheme must be used within a ThemeProvider");
        return e;
      };
    },
    4757: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { Z: () => i });
          var s = r(4091),
            o = r(3986),
            n = e([s, o]);
          [s, o] = n.then ? (await n)() : n;
          let i = s.Y.getServerSideProps((e) => async (t) => {
            let r = Array.isArray(t.query.search)
                ? t.query.search[0]
                : t.query.search || "",
              a = Array.isArray(t.query.page)
                ? parseInt(t.query.page[0])
                : parseInt(t.query.page) || 1,
              s = t.query.id,
              n = [],
              i = null;
            try {
              if (s)
                i =
                  (
                    await e.dispatch(
                      o.hi.endpoints.fetchPokemonDetails.initiate(
                        parseInt(s, 10),
                      ),
                    )
                  ).data || null;
              else {
                let t = await e.dispatch(
                  o.hi.endpoints.fetchPokemons.initiate({
                    searchTerm: r,
                    page: a,
                  }),
                );
                n = t.data ? t.data.results : [];
              }
            } catch (e) {
              console.error("Failed to fetch data:", e);
            }
            return {
              props: {
                initialSearchTerm: r,
                initialPage: a,
                initialPokemons: n,
                pokemonDetails: i,
              },
            };
          });
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    3986: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { Of: () => c, hi: () => l, yQ: () => u });
          var s = r(9943),
            o = r(6270),
            n = r(5172),
            i = e([s, o, n]);
          [s, o, n] = i.then ? (await i)() : i;
          let l = (0, s.createApi)({
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
                  async onQueryStarted(e, { dispatch: t, queryFulfilled: r }) {
                    t((0, o.K)(!0));
                    try {
                      let { data: e } = await r;
                      t((0, n.xE)(e.results));
                    } catch (e) {
                      console.error("Failed to fetch pokemons:", e);
                    } finally {
                      t((0, o.K)(!1));
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
                    t((0, o.K)(!0));
                    try {
                      await r;
                    } catch (e) {
                      console.error("Failed to fetch pokemon details:", e);
                    } finally {
                      t((0, o.K)(!1));
                    }
                  },
                }),
              }),
            }),
            { useFetchPokemonsQuery: c, useFetchPokemonDetailsQuery: u } = l;
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
          r.d(t, { D4: () => i, ZP: () => c, xE: () => l });
          var s = r(3258),
            o = e([s]);
          s = (o.then ? (await o)() : o)[0];
          let n = (0, s.createSlice)({
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
            { setCurrentPage: i, setPageItems: l } = n.actions,
            c = n.reducer;
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
          r.d(t, { ZP: () => c, er: () => l, m: () => i });
          var s = r(3258),
            o = e([s]);
          s = (o.then ? (await o)() : o)[0];
          let n = (0, s.createSlice)({
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
            { showFlyout: i, hideFlyout: l } = n.actions,
            c = n.reducer;
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
          r.d(t, { K: () => i, Z: () => l });
          var s = r(3258),
            o = e([s]);
          s = (o.then ? (await o)() : o)[0];
          let n = (0, s.createSlice)({
              name: "loading",
              initialState: { isLoading: !1 },
              reducers: {
                setLoading(e, t) {
                  e.isLoading = t.payload;
                },
              },
            }),
            { setLoading: i } = n.actions,
            l = n.reducer;
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
          r.d(t, { MV: () => i, ZP: () => c, nD: () => l });
          var s = r(3258),
            o = e([s]);
          s = (o.then ? (await o)() : o)[0];
          let n = (0, s.createSlice)({
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
            { setPokemonDetails: i, clearPokemonDetails: l } = n.actions,
            c = n.reducer;
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
          r.d(t, { Gh: () => i, Ve: () => c, ZP: () => u, a7: () => l });
          var s = r(3258),
            o = e([s]);
          s = (o.then ? (await o)() : o)[0];
          let n = (0, s.createSlice)({
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
              selectItem: i,
              unselectItem: l,
              clearSelectedItems: c,
            } = n.actions,
            u = n.reducer;
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
          r.d(t, { Y: () => _ });
          var s = r(3258),
            o = r(5648),
            n = r(3986),
            i = r(4308),
            l = r(5172),
            c = r(9979),
            u = r(888),
            p = r(6270),
            d = r(9343),
            h = e([s, n, i, l, c, u, p, d]);
          [s, n, i, l, c, u, p, d] = h.then ? (await h)() : h;
          let m = () =>
              (0, s.configureStore)({
                reducer: {
                  [n.hi.reducerPath]: n.hi.reducer,
                  theme: i.ZP,
                  selectedItems: c.ZP,
                  flyout: u.ZP,
                  currentPage: l.ZP,
                  loading: p.Z,
                  pokemonDetails: d.ZP,
                },
                middleware: (e) => e().concat(n.hi.middleware),
              }),
            _ = (0, o.createWrapper)(m);
          m(), a();
        } catch (e) {
          a(e);
        }
      });
    },
    4308: (e, t, r) => {
      "use strict";
      r.a(e, async (e, a) => {
        try {
          r.d(t, { ZP: () => c });
          var s = r(3258),
            o = e([s]);
          s = (o.then ? (await o)() : o)[0];
          let n = (0, s.createSlice)({
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
            { setTheme: i, toggleTheme: l } = n.actions,
            c = n.reducer;
          a();
        } catch (e) {
          a(e);
        }
      });
    },
    3208: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => a });
      let a = (e = "") =>
        Array.from(e)
          .filter((e) => {
            let t = e.charCodeAt(0);
            return t > 31 && t < 127;
          })
          .join("")
          .replace(/([.!?])(?=\S)/g, "$1 ");
    },
    108: () => {},
  });
