(exports.id = 617),
  (exports.ids = [617]),
  (exports.modules = {
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
      r.d(t, { default: () => n });
      var o = r(7577),
        a = r.n(o);
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
          return e ? a().cloneElement(t, { onRetry: this.handleRetry }) : r;
        }
      }
      let n = s;
    },
    5713: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => n });
      var o = r(326);
      r(7577);
      var a = r(4291),
        s = r.n(a);
      let n = () =>
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
    6676: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => n });
      var o = r(326);
      r(7577);
      var a = r(8429),
        s = r.n(a);
      let n = () =>
        o.jsx("div", {
          className: s().loader,
          role: "status",
          children: o.jsx("div", { className: s().spinner }),
        });
    },
    6916: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => L });
      var o = r(326),
        a = r(7577),
        s = r(5047),
        n = r(755),
        i = r(6676),
        l = r(9884),
        c = r.n(l),
        d = r(49);
      let m = () => {
          let e = (0, a.useContext)(d.N);
          if (!e) throw Error("useTheme must be used within a ThemeProvider");
          return e;
        },
        p = (e) => {
          (0, a.useEffect)(() => {
            let t = history.pushState;
            return (
              (history.pushState = function (r, o, a) {
                "string" == typeof a && (t.apply(history, [r, o, a]), e(a));
              }),
              () => {
                history.pushState = t;
              }
            );
          }, [e]);
        },
        u = ({ next: e }) => {
          let t = (0, s.useRouter)(),
            r = (0, s.useSearchParams)(),
            { theme: a } = m(),
            n = r.get("page") ? parseInt(r.get("page"), 10) : 1,
            i = r.get("search") || "",
            l = (e) => {
              let r = new URLSearchParams({
                page: e.toString(),
                search: i,
              }).toString();
              window.history.pushState({}, "", `/?${r}`), t.refresh();
            };
          return (
            p((e) => {
              console.log("URL updated:", e);
            }),
            (0, o.jsxs)("div", {
              className: `${c().pagination} ${c()[a]}`,
              children: [
                n > 1 &&
                  o.jsx("button", {
                    onClick: () => l(n - 1),
                    children: "Previous",
                  }),
                (0, o.jsxs)("span", { children: ["Page ", n] }),
                e &&
                  o.jsx("button", {
                    onClick: () => l(n + 1),
                    children: "Next",
                  }),
              ],
            })
          );
        };
      var h = r(5842),
        g = r(9466),
        _ = r(347),
        f = r(6449),
        x = r.n(f),
        k = r(8453);
      let y = ({ pokemon: e }) => {
        let t = (0, s.useRouter)(),
          r = (0, s.useSearchParams)(),
          l = parseInt(e.url.split("/").filter(Boolean).pop()),
          c = r.get("page") || "1",
          { data: d, isFetching: m } = (0, n.yQ)(l),
          p = (0, h.I0)(),
          u = (0, h.v9)((e) => e.selectedItems.items),
          f = (0, h.v9)((e) => e.loading.isLoading);
        (0, a.useEffect)(() => {
          p((0, k.K)(m));
        }, [m, p]);
        let y = u.some((t) => t.name === e.name);
        return (0, o.jsxs)("div", {
          className: x()["pokemon-card"],
          onClick: () => {
            t.push(`/details/${l}?page=${c}`);
          },
          children: [
            o.jsx("input", {
              type: "checkbox",
              checked: y,
              onChange: (t) => {
                if ((t.stopPropagation(), d)) {
                  let t = {
                    name: d.name,
                    url: e.url,
                    description: d.description,
                    details: `https://pokeapi.co/api/v2/pokemon/${l}`,
                    imageUrl: d.imageUrl,
                  };
                  y
                    ? (p((0, g.a7)(t)), 1 === u.length && p((0, _.er)()))
                    : (p((0, g.Gh)(t)), 0 === u.length && p((0, _.m)()));
                }
              },
              className: x()["pokemon-card-checkbox"],
              disabled: m,
              onClick: (e) => e.stopPropagation(),
            }),
            (0, o.jsxs)("div", {
              className: x()["pokemon-card-content"],
              children: [
                o.jsx("h2", { children: e.name }),
                f && o.jsx(i.Z, {}),
              ],
            }),
          ],
        });
      };
      var v = r(6582),
        P = r.n(v);
      let b = ({ pokemons: e, error: t }) =>
        t
          ? o.jsx("p", { children: t })
          : 0 === e.length
            ? o.jsx("p", {
                className: P()["no-pokemon-message"],
                children: "No Pokemon found",
              })
            : o.jsx("ul", {
                className: P()["pokemon-list"],
                children: e.map((e) =>
                  o.jsx(
                    "li",
                    {
                      className: P()["pokemon-list-item"],
                      children: o.jsx(y, { pokemon: e }),
                    },
                    e.name,
                  ),
                ),
              });
      var S = r(2062),
        w = r.n(S);
      let j = ({ searchTerm: e, onSearch: t }) => {
          let [r, s] = (0, a.useState)(e),
            [n, i] = (0, a.useState)(null),
            { theme: l } = m();
          return (
            (0, a.useEffect)(() => {
              s(e);
            }, [e]),
            (0, a.useEffect)(() => {
              if (n) throw n;
            }, [n]),
            (0, o.jsxs)("form", {
              onSubmit: (e) => {
                e.preventDefault(), t(r);
              },
              className: `${w()["search-form"]} ${w()[l]}`,
              children: [
                o.jsx("input", {
                  type: "text",
                  value: r,
                  onChange: (e) => {
                    s(e.target.value);
                  },
                  placeholder: "Search Pok\xe9mon",
                  className: w()["search-input"],
                }),
                o.jsx("button", {
                  type: "submit",
                  className: w()["search-button"],
                  children: "Search",
                }),
                o.jsx("button", {
                  type: "button",
                  onClick: () => {
                    console.log("Throwing error"), i(Error("Simulated error."));
                  },
                  className: w()["throw-error-button"],
                  children: "Throw Error",
                }),
              ],
            })
          );
        },
        C = (e, t = "") => {
          let [r, o] = (0, a.useState)(() => t);
          return (
            (0, a.useEffect)(() => {}, [e]),
            (0, a.useEffect)(() => {}, [e, r]),
            [r, o]
          );
        },
        R = () => {
          let { theme: e, setTheme: t } = m();
          return (0, o.jsxs)("button", {
            className: "theme-toggle-button",
            onClick: () => {
              t("light" === e ? "dark" : "light");
            },
            children: [
              "Switch to ",
              "light" === e ? "dark" : "light",
              " theme",
            ],
          });
        };
      var N = r(112),
        D = r(4887),
        E = r.n(D);
      let $ = () => {
        let e = (0, h.I0)(),
          t = (0, h.v9)((e) => e.selectedItems.items) || [];
        return (0, h.v9)((e) => e.flyout.isVisible)
          ? (0, o.jsxs)("div", {
              className: E().flyout,
              children: [
                (0, o.jsxs)("p", {
                  children: [t.length, " items are selected"],
                }),
                o.jsx("button", {
                  onClick: () => {
                    e((0, g.Ve)()), e((0, _.er)());
                  },
                  children: "Unselect all",
                }),
                o.jsx("button", {
                  onClick: () => {
                    let e = encodeURI(
                        "data:text/csv;charset=utf-8," +
                          t
                            .map((e) => {
                              let t = (0, N.Z)(e.description)
                                .replace(/\n/g, " ")
                                .replace(/\s+/g, " ")
                                .trim();
                              return `"${e.name}","${t}","${e.details}"`;
                            })
                            .join("\n"),
                      ),
                      r = document.createElement("a");
                    r.setAttribute("href", e),
                      r.setAttribute("download", `${t.length}_Pokemons.csv`),
                      document.body.appendChild(r),
                      r.click();
                  },
                  children: "Download",
                }),
              ],
            })
          : null;
      };
      var F = r(6326),
        I = r(4031),
        T = r.n(I);
      let L = ({
        initialPokemons: e,
        initialSearchTerm: t,
        initialPage: r,
        children: l,
      }) => {
        let [c, d] = (0, a.useState)(null),
          [p, g] = C("searchTerm", t),
          [_, f] = C("page", (r || 1).toString()),
          x = (0, s.useRouter)(),
          k = (0, s.useSearchParams)(),
          y = (0, h.I0)(),
          v = (0, h.v9)((e) => e.currentPage.page),
          P = (0, h.v9)((e) => e.currentPage.items),
          S = isNaN(parseInt(_)) ? v : parseInt(_),
          {
            data: w,
            error: N,
            isLoading: D,
          } = (0, n.Of)({ searchTerm: p, page: S });
        (0, a.useEffect)(() => {
          let e = k.get("page"),
            t = k.get("search");
          e && f(e), t && g(t);
        }, [k, f, g]),
          (0, a.useEffect)(() => {
            w?.results
              ? (y((0, F.xE)(w.results)), y((0, F.D4)(S)))
              : e.length > 0 && (y((0, F.xE)(e)), y((0, F.D4)(S)));
          }, [w, e, y, S]),
          (0, a.useEffect)(() => {
            N ? d(N.toString()) : d(null);
          }, [N]);
        let { theme: E } = m();
        return (0, o.jsxs)("div", {
          className: `${T().app} ${T()[E]}`,
          children: [
            (0, o.jsxs)("div", {
              className: T()["app-left"],
              children: [
                (0, o.jsxs)("div", {
                  className: T()["app-top"],
                  children: [
                    o.jsx(R, {}),
                    o.jsx(j, {
                      searchTerm: p,
                      onSearch: (e) => {
                        g(e);
                        let t = `/?search=${encodeURIComponent(e)}&page=1`;
                        x.push(t);
                      },
                    }),
                    D && o.jsx(i.Z, {}),
                    c &&
                      !D &&
                      o.jsx("p", {
                        className: T()["error-message"],
                        children: c,
                      }),
                  ],
                }),
                o.jsx("div", {
                  className: T()["app-bottom"],
                  children:
                    !D &&
                    !c &&
                    (0, o.jsxs)(o.Fragment, {
                      children: [
                        o.jsx(b, { pokemons: P.length ? P : e, error: null }),
                        o.jsx(u, { next: 20 === P.length }),
                        o.jsx($, {}),
                      ],
                    }),
                }),
              ],
            }),
            o.jsx("div", { className: T()["app-right"], children: l }),
          ],
        });
      };
    },
    49: (e, t, r) => {
      "use strict";
      r.d(t, { N: () => o });
      let o = (0, r(7577).createContext)(void 0);
    },
    6900: (e, t, r) => {
      "use strict";
      r.d(t, { ThemeProvider: () => n });
      var o = r(326),
        a = r(7577),
        s = r(49);
      let n = ({ children: e }) => {
        let [t, r] = (0, a.useState)("light");
        return o.jsx(s.N.Provider, {
          value: { theme: t, setTheme: r },
          children: e,
        });
      };
    },
    7400: (e, t, r) => {
      "use strict";
      r.d(t, { StoreProvider: () => k });
      var o = r(326);
      r(7577);
      var a = r(5842),
        s = r(8860),
        n = r(5175),
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
        m = l.reducer;
      var p = r(6326),
        u = r(9466),
        h = r(347),
        g = r(8453),
        _ = r(4934);
      let f = () =>
        (0, s.xC)({
          reducer: {
            [i.hi.reducerPath]: i.hi.reducer,
            theme: m,
            selectedItems: u.ZP,
            flyout: h.ZP,
            currentPage: p.ZP,
            loading: g.Z,
            pokemonDetails: _.ZP,
          },
          middleware: (e) => e().concat(i.hi.middleware),
        });
      (0, n.KV)(f);
      let x = f(),
        k = ({ children: e }) => o.jsx(a.zt, { store: x, children: e });
    },
    755: (e, t, r) => {
      "use strict";
      r.d(t, { Of: () => l, hi: () => i, yQ: () => c });
      var o = r(9119),
        a = r(7509),
        s = r(8453),
        n = r(6326);
      let i = (0, o.LC)({
          reducerPath: "api",
          baseQuery: (0, a.ni)({ baseUrl: "https://pokeapi.co/api/v2" }),
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
                  t((0, n.xE)(e.results));
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
                    e.flavor_text_entries.find((e) => "en" === e.language.name)
                      ?.flavor_text || "No description available",
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
      r.d(t, { D4: () => a, ZP: () => n, xE: () => s });
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
        { setCurrentPage: a, setPageItems: s } = o.actions,
        n = o.reducer;
    },
    347: (e, t, r) => {
      "use strict";
      r.d(t, { ZP: () => n, er: () => s, m: () => a });
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
        { showFlyout: a, hideFlyout: s } = o.actions,
        n = o.reducer;
    },
    8453: (e, t, r) => {
      "use strict";
      r.d(t, { K: () => a, Z: () => s });
      let o = (0, r(8860).oM)({
          name: "loading",
          initialState: { isLoading: !1 },
          reducers: {
            setLoading(e, t) {
              e.isLoading = t.payload;
            },
          },
        }),
        { setLoading: a } = o.actions,
        s = o.reducer;
    },
    4934: (e, t, r) => {
      "use strict";
      r.d(t, { MV: () => a, ZP: () => n, nD: () => s });
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
        { setPokemonDetails: a, clearPokemonDetails: s } = o.actions,
        n = o.reducer;
    },
    9466: (e, t, r) => {
      "use strict";
      r.d(t, { Gh: () => a, Ve: () => n, ZP: () => i, a7: () => s });
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
        { selectItem: a, unselectItem: s, clearSelectedItems: n } = o.actions,
        i = o.reducer;
    },
    112: (e, t, r) => {
      "use strict";
      r.d(t, { Z: () => o });
      let o = (e = "") =>
        Array.from(e)
          .filter((e) => {
            let t = e.charCodeAt(0);
            return t > 31 && t < 127;
          })
          .join("")
          .replace(/([.!?])(?=\S)/g, "$1 ");
    },
    4291: (e) => {
      e.exports = {
        fallback: "FallbackComponent_fallback__GK0Pt",
        "retry-button": "FallbackComponent_retry-button__lvQ6b",
      };
    },
    4887: (e) => {
      e.exports = {
        css: "FlyoutComponent_css__LGJoz",
        flyout: "FlyoutComponent_flyout__qiF1E",
      };
    },
    8429: (e) => {
      e.exports = {
        loader: "Loader_loader__gANhr",
        spinner: "Loader_spinner__RHv3O",
        spin: "Loader_spin__p8FlS",
      };
    },
    3903: (e) => {
      e.exports = {
        "not-found-container": "NotFound_not-found-container__AUVtC",
        "not-found-text": "NotFound_not-found-text__Dg4Qf",
      };
    },
    9884: (e) => {
      e.exports = {
        pagination: "Pagination_pagination__c7olK",
        light: "Pagination_light__8MnhH",
      };
    },
    6449: (e) => {
      e.exports = {
        "pokemon-card": "PokemonCard_pokemon-card__EyuHp",
        "pokemon-card-checkbox": "PokemonCard_pokemon-card-checkbox__RDUZi",
      };
    },
    6582: (e) => {
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
    2062: (e) => {
      e.exports = {
        "search-form": "SearchComponent_search-form__KVl4Q",
        "search-input": "SearchComponent_search-input__JYTDZ",
        dark: "SearchComponent_dark__zt4W4",
        "search-button": "SearchComponent_search-button__fPwcQ",
        "throw-error-button": "SearchComponent_throw-error-button__NSy6t",
        light: "SearchComponent_light__FbBTG",
      };
    },
    4031: (e) => {
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
    646: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, { default: () => v });
      var o = r(9510);
      r(1159);
      var a = r(8570);
      let s = (0, a.createProxy)(
          String.raw`D:\work\React\React-2024\src\components\ErrorBoundary\ErrorBoundary.tsx`,
        ),
        { __esModule: n, $$typeof: i } = s;
      s.default;
      let l = (0, a.createProxy)(
          String.raw`D:\work\React\React-2024\src\components\ErrorBoundary\ErrorBoundary.tsx#default`,
        ),
        c = (0, a.createProxy)(
          String.raw`D:\work\React\React-2024\src\components\FallbackComponent\FallbackComponent.tsx`,
        ),
        { __esModule: d, $$typeof: m } = c;
      c.default;
      let p = (0, a.createProxy)(
          String.raw`D:\work\React\React-2024\src\components\FallbackComponent\FallbackComponent.tsx#default`,
        ),
        u = (0, a.createProxy)(
          String.raw`D:\work\React\React-2024\src\contexts\ThemeProvider.tsx`,
        ),
        { __esModule: h, $$typeof: g } = u;
      u.default;
      let _ = (0, a.createProxy)(
        String.raw`D:\work\React\React-2024\src\contexts\ThemeProvider.tsx#ThemeProvider`,
      );
      r(4315);
      let f = (0, a.createProxy)(
          String.raw`D:\work\React\React-2024\src\store\StoreProvider.tsx`,
        ),
        { __esModule: x, $$typeof: k } = f;
      f.default;
      let y = (0, a.createProxy)(
          String.raw`D:\work\React\React-2024\src\store\StoreProvider.tsx#StoreProvider`,
        ),
        v = ({ children: e }) =>
          o.jsx("html", {
            lang: "en",
            children: o.jsx("body", {
              children: o.jsx(y, {
                children: o.jsx(l, {
                  fallback: o.jsx(p, {}),
                  children: o.jsx(_, { children: e }),
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
      var a = r(3903),
        s = r.n(a);
      let n = () =>
          o.jsx("div", {
            className: s()["not-found-container"],
            children: o.jsx("h2", {
              className: s()["not-found-text"],
              children: "Page not found",
            }),
          }),
        i = () => o.jsx(n, {});
    },
    8536: (e, t, r) => {
      "use strict";
      r.d(t, { ZP: () => i });
      var o = r(8570);
      let a = (0, o.createProxy)(
          String.raw`D:\work\React\React-2024\src\components\MainPage\MainPage.tsx`,
        ),
        { __esModule: s, $$typeof: n } = a;
      a.default;
      let i = (0, o.createProxy)(
        String.raw`D:\work\React\React-2024\src\components\MainPage\MainPage.tsx#default`,
      );
    },
    1861: (e, t, r) => {
      "use strict";
      r.d(t, { r: () => s });
      var o = r(7708);
      let a = "https://pokeapi.co/api/v2";
      async function s({ searchParams: e, pokemons: t = [] }) {
        let r = Array.isArray(e.search) ? e.search[0] : e.search || "",
          s = parseInt(Array.isArray(e.page) ? e.page[0] : e.page || "1", 10),
          n = Array.isArray(e.id) ? e.id[0] : e.id,
          i = n ? parseInt(n, 10) : null,
          l = async () => {
            let e = r
                ? `${a}/pokemon?limit=1000`
                : `${a}/pokemon?limit=20&offset=${(s - 1) * 20}`,
              t = await fetch(e, { cache: "force-cache" });
            if (!t.ok) throw Error("Failed to fetch pokemons");
            let o = await t.json();
            return (
              r &&
                (o.results = o.results.filter((e) =>
                  e.name.toLowerCase().includes(r.toLowerCase()),
                )),
              o.results
            );
          },
          c = async (e) => {
            let t = `${a}/pokemon-species/${e}`,
              r = await fetch(t, { cache: "force-cache" });
            if (!r.ok) throw Error("Failed to fetch pokemon details");
            let o = await r.json(),
              s =
                o.flavor_text_entries?.find((e) => "en" === e.language.name)
                  ?.flavor_text || "Failed to fetch pokemon description",
              n = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e}.png`;
            return { name: o.name, description: s, imageUrl: n };
          },
          d = await l(),
          m = i ? await c(i) : null;
        return (
          i && (0, o.revalidateTag)(`pokemon-${i}`),
          {
            initialPokemons: [...t, ...d],
            initialSearchTerm: r,
            initialPage: s,
            pokemonDetails: m || null,
          }
        );
      }
    },
    4315: () => {},
  });
