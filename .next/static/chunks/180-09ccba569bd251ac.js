(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [180],
  {
    6463: function (e, t, n) {
      "use strict";
      var o = n(1169);
      n.o(o, "useRouter") &&
        n.d(t, {
          useRouter: function () {
            return o.useRouter;
          },
        }),
        n.o(o, "useSearchParams") &&
          n.d(t, {
            useSearchParams: function () {
              return o.useSearchParams;
            },
          });
    },
    5584: function (e, t, n) {
      "use strict";
      var o = n(7437);
      n(2265);
      var r = n(2753),
        s = n.n(r);
      t.Z = () =>
        (0, o.jsx)("div", {
          className: s().loader,
          role: "status",
          children: (0, o.jsx)("div", { className: s().spinner }),
        });
    },
    4180: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return T;
        },
      });
      var o = n(7437),
        r = n(2265),
        s = n(6463),
        a = n(8460),
        i = n(5584),
        c = n(6836),
        l = n.n(c),
        u = n(5064);
      let p = () => {
        let e = (0, r.useContext)(u.N);
        if (!e) throw Error("useTheme must be used within a ThemeProvider");
        return e;
      };
      var m = (e) => {
          let { next: t } = e,
            n = (0, s.useRouter)(),
            r = (0, s.useSearchParams)(),
            { theme: a } = p(),
            i = r.get("page") ? parseInt(r.get("page"), 10) : 1,
            c = r.get("search") || "",
            u = (e) => {
              let t = new URLSearchParams({
                page: e.toString(),
                search: c,
              }).toString();
              window.history.pushState({}, "", "/?".concat(t)), n.refresh();
            };
          return (0, o.jsxs)("div", {
            className: "".concat(l().pagination, " ").concat(l()[a]),
            children: [
              i > 1 &&
                (0, o.jsx)("button", {
                  onClick: () => u(i - 1),
                  children: "Previous",
                }),
              (0, o.jsxs)("span", { children: ["Page ", i] }),
              t &&
                (0, o.jsx)("button", {
                  onClick: () => u(i + 1),
                  children: "Next",
                }),
            ],
          });
        },
        d = n(1444),
        h = n(6403),
        _ = n(78),
        f = n(194),
        g = n.n(f),
        k = n(7445),
        x = (e) => {
          let { pokemon: t } = e,
            n = (0, s.useRouter)(),
            c = (0, s.useSearchParams)(),
            l = parseInt(t.url.split("/").filter(Boolean).pop()),
            u = c.get("page") || "1",
            { data: p, isFetching: m } = (0, a.yQ)(l),
            f = (0, d.I0)(),
            x = (0, d.v9)((e) => e.selectedItems.items),
            b = (0, d.v9)((e) => e.loading.isLoading);
          (0, r.useEffect)(() => {
            f((0, k.K)(m));
          }, [m, f]);
          let S = x.some((e) => e.name === t.name);
          return (0, o.jsxs)("div", {
            className: g()["pokemon-card"],
            onClick: () => {
              n.push("/details/".concat(l, "?page=").concat(u));
            },
            children: [
              (0, o.jsx)("input", {
                type: "checkbox",
                checked: S,
                onChange: (e) => {
                  if ((e.stopPropagation(), p)) {
                    let e = {
                      name: p.name,
                      url: t.url,
                      description: p.description,
                      details: "https://pokeapi.co/api/v2/pokemon/".concat(l),
                      imageUrl: p.imageUrl,
                    };
                    S
                      ? (f((0, h.a7)(e)), 1 === x.length && f((0, _.er)()))
                      : (f((0, h.Gh)(e)), 0 === x.length && f((0, _.m)()));
                  }
                },
                className: g()["pokemon-card-checkbox"],
                disabled: m,
                onClick: (e) => e.stopPropagation(),
              }),
              (0, o.jsxs)("div", {
                className: g()["pokemon-card-content"],
                children: [
                  (0, o.jsx)("h2", { children: t.name }),
                  b && (0, o.jsx)(i.Z, {}),
                ],
              }),
            ],
          });
        },
        b = n(1094),
        S = n.n(b),
        v = (e) => {
          let { pokemons: t, error: n } = e;
          return n
            ? (0, o.jsx)("p", { children: n })
            : 0 === t.length
              ? (0, o.jsx)("p", {
                  className: S()["no-pokemon-message"],
                  children: "No Pokemon found",
                })
              : (0, o.jsx)("ul", {
                  className: S()["pokemon-list"],
                  children: t.map((e) =>
                    (0, o.jsx)(
                      "li",
                      {
                        className: S()["pokemon-list-item"],
                        children: (0, o.jsx)(x, { pokemon: e }),
                      },
                      e.name,
                    ),
                  ),
                });
        },
        j = n(3277),
        y = n.n(j),
        C = (e) => {
          let { searchTerm: t, onSearch: n } = e,
            [s, a] = (0, r.useState)(t),
            [i, c] = (0, r.useState)(null),
            { theme: l } = p();
          return (
            (0, r.useEffect)(() => {
              a(t);
            }, [t]),
            (0, r.useEffect)(() => {
              if (i) throw i;
            }, [i]),
            (0, o.jsxs)("form", {
              onSubmit: (e) => {
                e.preventDefault(), n(s);
              },
              className: "".concat(y()["search-form"], " ").concat(y()[l]),
              children: [
                (0, o.jsx)("input", {
                  type: "text",
                  value: s,
                  onChange: (e) => {
                    a(e.target.value);
                  },
                  placeholder: "Search Pok\xe9mon",
                  className: y()["search-input"],
                }),
                (0, o.jsx)("button", {
                  type: "submit",
                  className: y()["search-button"],
                  children: "Search",
                }),
                (0, o.jsx)("button", {
                  type: "button",
                  onClick: () => {
                    console.log("Throwing error"), c(Error("Simulated error."));
                  },
                  className: y()["throw-error-button"],
                  children: "Throw Error",
                }),
              ],
            })
          );
        },
        P = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            [n, o] = (0, r.useState)(() => {
              {
                let n = localStorage.getItem(e);
                return null !== n ? n : t;
              }
            });
          return (
            (0, r.useEffect)(() => {
              {
                let t = localStorage.getItem(e);
                null !== t && o(t);
              }
            }, [e]),
            (0, r.useEffect)(() => {
              localStorage.setItem(e, n);
            }, [e, n]),
            [n, o]
          );
        },
        N = () => {
          let { theme: e, setTheme: t } = p();
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
        },
        w = n(9115),
        I = n(9995),
        R = n.n(I),
        E = () => {
          let e = (0, d.I0)(),
            t = (0, d.v9)((e) => e.selectedItems.items) || [];
          return (0, d.v9)((e) => e.flyout.isVisible)
            ? (0, o.jsxs)("div", {
                className: R().flyout,
                children: [
                  (0, o.jsxs)("p", {
                    children: [t.length, " items are selected"],
                  }),
                  (0, o.jsx)("button", {
                    onClick: () => {
                      e((0, h.Ve)()), e((0, _.er)());
                    },
                    children: "Unselect all",
                  }),
                  (0, o.jsx)("button", {
                    onClick: () => {
                      let e = encodeURI(
                          "data:text/csv;charset=utf-8," +
                            t
                              .map((e) => {
                                let t = (0, w.Z)(e.description)
                                  .replace(/\n/g, " ")
                                  .replace(/\s+/g, " ")
                                  .trim();
                                return '"'
                                  .concat(e.name, '","')
                                  .concat(t, '","')
                                  .concat(e.details, '"');
                              })
                              .join("\n"),
                        ),
                        n = document.createElement("a");
                      n.setAttribute("href", e),
                        n.setAttribute(
                          "download",
                          "".concat(t.length, "_Pokemons.csv"),
                        ),
                        document.body.appendChild(n),
                        n.click();
                    },
                    children: "Download",
                  }),
                ],
              })
            : null;
        },
        L = n(2605),
        H = n(1085),
        F = n.n(H),
        T = (e) => {
          let {
              initialPokemons: t,
              initialSearchTerm: n,
              initialPage: c,
              children: l,
            } = e,
            [u, h] = (0, r.useState)(null),
            [_, f] = P("searchTerm", n),
            [g, k] = P("page", (c || 1).toString()),
            x = (0, s.useRouter)(),
            b = (0, s.useSearchParams)(),
            S = (0, d.I0)(),
            j = (0, d.v9)((e) => e.currentPage.page),
            y = (0, d.v9)((e) => e.currentPage.items),
            w = isNaN(parseInt(g)) ? j : parseInt(g),
            {
              data: I,
              error: R,
              isLoading: H,
            } = (0, a.Of)({ searchTerm: _, page: w });
          (0, r.useEffect)(() => {
            let e = b.get("page"),
              t = b.get("search");
            e && k(e), t && f(t);
          }, [b, k, f]),
            (0, r.useEffect)(() => {
              (null == I ? void 0 : I.results)
                ? (S((0, L.xE)(I.results)), S((0, L.D4)(w)))
                : t.length > 0 && (S((0, L.xE)(t)), S((0, L.D4)(w)));
            }, [I, t, S, w]),
            (0, r.useEffect)(() => {
              R ? h(R.toString()) : h(null);
            }, [R]);
          let { theme: T } = p();
          return (0, o.jsxs)("div", {
            className: "".concat(F().app, " ").concat(F()[T]),
            children: [
              (0, o.jsxs)("div", {
                className: F()["app-left"],
                children: [
                  (0, o.jsxs)("div", {
                    className: F()["app-top"],
                    children: [
                      (0, o.jsx)(N, {}),
                      (0, o.jsx)(C, {
                        searchTerm: _,
                        onSearch: (e) => {
                          f(e);
                          let t = "/?search=".concat(
                            encodeURIComponent(e),
                            "&page=1",
                          );
                          x.push(t);
                        },
                      }),
                      H && (0, o.jsx)(i.Z, {}),
                      u &&
                        !H &&
                        (0, o.jsx)("p", {
                          className: F()["error-message"],
                          children: u,
                        }),
                    ],
                  }),
                  (0, o.jsx)("div", {
                    className: F()["app-bottom"],
                    children:
                      !H &&
                      !u &&
                      (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)(v, {
                            pokemons: y.length ? y : t,
                            error: null,
                          }),
                          (0, o.jsx)(m, { next: 20 === y.length }),
                          (0, o.jsx)(E, {}),
                        ],
                      }),
                  }),
                ],
              }),
              (0, o.jsx)("div", { className: F()["app-right"], children: l }),
            ],
          });
        };
    },
    5064: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return o;
        },
      });
      let o = (0, n(2265).createContext)(void 0);
    },
    8460: function (e, t, n) {
      "use strict";
      n.d(t, {
        Of: function () {
          return c;
        },
        hi: function () {
          return i;
        },
        yQ: function () {
          return l;
        },
      });
      var o = n(8507),
        r = n(6074),
        s = n(7445),
        a = n(2605);
      let i = (0, o.LC)({
          reducerPath: "api",
          baseQuery: (0, r.ni)({ baseUrl: "https://pokeapi.co/api/v2" }),
          endpoints: (e) => ({
            fetchPokemons: e.query({
              query: (e) => {
                let { searchTerm: t = "", page: n = 1 } = e;
                return t
                  ? "/pokemon?limit=1000"
                  : "/pokemon?limit=20&offset=".concat((n - 1) * 20);
              },
              transformResponse: (e, t, n) => {
                let { searchTerm: o = "" } = n;
                return (
                  o &&
                    (e.results = e.results.filter((e) =>
                      e.name.toLowerCase().includes(o.toLowerCase()),
                    )),
                  e
                );
              },
              async onQueryStarted(e, t) {
                let { dispatch: n, queryFulfilled: o } = t;
                n((0, s.K)(!0));
                try {
                  let { data: e } = await o;
                  n((0, a.xE)(e.results));
                } catch (e) {
                  console.error("Failed to fetch pokemons:", e);
                } finally {
                  n((0, s.K)(!1));
                }
              },
            }),
            fetchPokemonDetails: e.query({
              query: (e) => "/pokemon-species/".concat(e),
              transformResponse: (e) => {
                var t;
                let n =
                    (null ===
                      (t = e.flavor_text_entries.find(
                        (e) => "en" === e.language.name,
                      )) || void 0 === t
                      ? void 0
                      : t.flavor_text) || "No description available",
                  o =
                    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/".concat(
                      e.id,
                      ".png",
                    );
                return { name: e.name, description: n, imageUrl: o };
              },
              async onQueryStarted(e, t) {
                let { dispatch: n, queryFulfilled: o } = t;
                n((0, s.K)(!0));
                try {
                  await o;
                } catch (e) {
                  console.error("Failed to fetch pokemon details:", e);
                } finally {
                  n((0, s.K)(!1));
                }
              },
            }),
          }),
        }),
        { useFetchPokemonsQuery: c, useFetchPokemonDetailsQuery: l } = i;
    },
    2605: function (e, t, n) {
      "use strict";
      n.d(t, {
        D4: function () {
          return r;
        },
        xE: function () {
          return s;
        },
      });
      let o = (0, n(2351).oM)({
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
        { setCurrentPage: r, setPageItems: s } = o.actions;
      t.ZP = o.reducer;
    },
    78: function (e, t, n) {
      "use strict";
      n.d(t, {
        er: function () {
          return s;
        },
        m: function () {
          return r;
        },
      });
      let o = (0, n(2351).oM)({
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
        { showFlyout: r, hideFlyout: s } = o.actions;
      t.ZP = o.reducer;
    },
    7445: function (e, t, n) {
      "use strict";
      n.d(t, {
        K: function () {
          return r;
        },
      });
      let o = (0, n(2351).oM)({
          name: "loading",
          initialState: { isLoading: !1 },
          reducers: {
            setLoading(e, t) {
              e.isLoading = t.payload;
            },
          },
        }),
        { setLoading: r } = o.actions;
      t.Z = o.reducer;
    },
    6403: function (e, t, n) {
      "use strict";
      n.d(t, {
        Gh: function () {
          return r;
        },
        Ve: function () {
          return a;
        },
        a7: function () {
          return s;
        },
      });
      let o = (0, n(2351).oM)({
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
        { selectItem: r, unselectItem: s, clearSelectedItems: a } = o.actions;
      t.ZP = o.reducer;
    },
    9115: function (e, t) {
      "use strict";
      t.Z = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return Array.from(e)
          .filter((e) => {
            let t = e.charCodeAt(0);
            return t > 31 && t < 127;
          })
          .join("")
          .replace(/([.!?])(?=\S)/g, "$1 ");
      };
    },
    9995: function (e) {
      e.exports = {
        css: "FlyoutComponent_css__LGJoz",
        flyout: "FlyoutComponent_flyout__qiF1E",
      };
    },
    2753: function (e) {
      e.exports = {
        loader: "Loader_loader__gANhr",
        spinner: "Loader_spinner__RHv3O",
        spin: "Loader_spin__p8FlS",
      };
    },
    6836: function (e) {
      e.exports = {
        pagination: "Pagination_pagination__c7olK",
        light: "Pagination_light__8MnhH",
      };
    },
    194: function (e) {
      e.exports = {
        "pokemon-card": "PokemonCard_pokemon-card__EyuHp",
        "pokemon-card-checkbox": "PokemonCard_pokemon-card-checkbox__RDUZi",
      };
    },
    1094: function (e) {
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
    3277: function (e) {
      e.exports = {
        "search-form": "SearchComponent_search-form__KVl4Q",
        "search-input": "SearchComponent_search-input__JYTDZ",
        dark: "SearchComponent_dark__zt4W4",
        "search-button": "SearchComponent_search-button__fPwcQ",
        "throw-error-button": "SearchComponent_throw-error-button__NSy6t",
        light: "SearchComponent_light__FbBTG",
      };
    },
    1085: function (e) {
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
  },
]);
