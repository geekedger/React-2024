(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [585],
  {
    3717: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/details/[id]",
        function () {
          return n(3020);
        },
      ]);
    },
    3020: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return g;
          },
          default: function () {
            return f;
          },
        });
      var o = n(5893),
        r = n(7294),
        a = n(1163),
        s = n(1562),
        l = function (e, t) {
          (0, r.useEffect)(() => {
            function n(n) {
              e.current && !e.current.contains(n.target) && t();
            }
            return (
              document.addEventListener("mousedown", n),
              () => {
                document.removeEventListener("mousedown", n);
              }
            );
          }, [e, t]);
        },
        i = n(3208),
        c = n(9482),
        u = n(9343),
        p = n(2653),
        m = n.n(p),
        d = n(5007),
        h = (e) => {
          let { initialPokemonDetails: t } = e,
            n = (0, a.useRouter)(),
            { id: p, page: h, search: _ } = n.query,
            g = (0, r.useRef)(null),
            f = (0, d.I0)(),
            x = (0, d.v9)((e) => e.pokemonDetails),
            {
              data: k,
              isLoading: j,
              error: v,
            } = (0, s.yQ)(p ? parseInt(p, 10) : -1, { skip: !p });
          if (
            (l(g, () => {
              n.replace(
                {
                  pathname: "/",
                  query: { page: h || void 0, search: _ || void 0 },
                },
                void 0,
                { shallow: !0 },
              ),
                f((0, u.nD)());
            }),
            (0, r.useEffect)(() => {
              if (t) f((0, u.MV)(t));
              else if (k && !j) {
                let e = (0, i.Z)(k.description);
                f(
                  (0, u.MV)({
                    name: k.name,
                    description: e,
                    imageUrl: k.imageUrl,
                  }),
                );
              }
            }, [t, k, j, f]),
            v)
          )
            return (0, o.jsx)("div", { children: "Error loading data" });
          if (j && !t) return (0, o.jsx)(c.Z, {});
          let b = t || x;
          return b
            ? (0, o.jsxs)("div", {
                ref: g,
                className: m()["detailed-card"],
                children: [
                  (0, o.jsx)("h2", { children: b.name }),
                  (0, o.jsx)("img", {
                    src: b.imageUrl,
                    alt: b.name,
                    className: m()["pokemon-image"],
                  }),
                  (0, o.jsx)("p", { children: (0, i.Z)(b.description) }),
                  (0, o.jsx)("button", {
                    className: m()["close-button"],
                    onClick: () => n.back(),
                    children: "Close",
                  }),
                ],
              })
            : (0, o.jsx)("p", { children: "No data available" });
        },
        _ = n(8184),
        g = !0,
        f = (e) => {
          let {
            searchTerm: t,
            page: n,
            initialPokemons: r,
            pokemonDetails: a,
          } = e;
          return (0, o.jsx)(_.Z, {
            initialPokemons: r,
            initialSearchTerm: t,
            initialPage: n,
            children: a && (0, o.jsx)(h, { initialPokemonDetails: a }),
          });
        };
    },
    9482: function (e, t, n) {
      "use strict";
      var o = n(5893);
      n(7294);
      var r = n(4215),
        a = n.n(r);
      t.Z = () =>
        (0, o.jsx)("div", {
          className: a().loader,
          role: "status",
          children: (0, o.jsx)("div", { className: a().spinner }),
        });
    },
    8184: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Z;
        },
      });
      var o = n(5893),
        r = n(7294),
        a = n(1163),
        s = n(1562),
        l = n(9482),
        i = n(1047),
        c = n.n(i),
        u = n(1503);
      let p = () => {
        let e = (0, r.useContext)(u.N);
        if (!e) throw Error("useTheme must be used within a ThemeProvider");
        return e;
      };
      var m = (e) => {
          let { next: t } = e,
            n = (0, a.useRouter)(),
            { query: r } = n,
            { theme: s } = p(),
            l = r.page ? parseInt(r.page, 10) : 1,
            i = r.search,
            u = (e) => {
              n.push(
                { pathname: "/", query: { page: e, search: i || void 0 } },
                void 0,
                { shallow: !0 },
              );
            };
          return (0, o.jsxs)("div", {
            className: "".concat(c().pagination, " ").concat(c()[s]),
            children: [
              l > 1 &&
                (0, o.jsx)("button", {
                  onClick: () => u(l - 1),
                  children: "Previous",
                }),
              (0, o.jsxs)("span", { children: ["Page ", l] }),
              t &&
                (0, o.jsx)("button", {
                  onClick: () => u(l + 1),
                  children: "Next",
                }),
            ],
          });
        },
        d = n(5007),
        h = n(9979),
        _ = n(888),
        g = n(4494),
        f = n.n(g),
        x = n(6270),
        k = (e) => {
          let { pokemon: t } = e,
            n = (0, a.useRouter)(),
            { query: i } = n,
            c = i.page || "1",
            u = parseInt(t.url.split("/").filter(Boolean).pop()),
            { data: p, isFetching: m } = (0, s.yQ)(u),
            g = (0, d.I0)(),
            k = (0, d.v9)((e) => e.selectedItems.items),
            j = (0, d.v9)((e) => e.loading.isLoading);
          (0, r.useEffect)(() => {
            m ? g((0, x.K)(!0)) : g((0, x.K)(!1));
          }, [m, g]);
          let v = k.some((e) => e.name === t.name);
          return (0, o.jsxs)("div", {
            className: f()["pokemon-card"],
            onClick: () => {
              n.push("/details/".concat(u, "?page=").concat(c));
            },
            children: [
              (0, o.jsx)("input", {
                type: "checkbox",
                checked: v,
                onChange: (e) => {
                  if ((e.stopPropagation(), p)) {
                    let e = {
                      name: p.name,
                      url: t.url,
                      description: p.description,
                      details: "https://pokeapi.co/api/v2/pokemon/".concat(u),
                      imageUrl: p.imageUrl,
                    };
                    v
                      ? (g((0, h.a7)(e)), 1 === k.length && g((0, _.er)()))
                      : (g((0, h.Gh)(e)), 0 === k.length && g((0, _.m)()));
                  }
                },
                className: f()["pokemon-card-checkbox"],
                disabled: m,
                onClick: (e) => e.stopPropagation(),
              }),
              (0, o.jsxs)("div", {
                className: f()["pokemon-card-content"],
                children: [
                  (0, o.jsx)("h2", { children: t.name }),
                  j && (0, o.jsx)(l.Z, {}),
                ],
              }),
            ],
          });
        },
        j = n(7720),
        v = n.n(j),
        b = (e) => {
          let { pokemons: t, error: n } = e;
          return n
            ? (0, o.jsx)("p", { children: n })
            : 0 === t.length
              ? (0, o.jsx)("p", {
                  className: v()["no-pokemon-message"],
                  children: "No Pokemon found",
                })
              : (0, o.jsx)("ul", {
                  className: v()["pokemon-list"],
                  children: t.map((e) =>
                    (0, o.jsx)(
                      "li",
                      {
                        className: v()["pokemon-list-item"],
                        children: (0, o.jsx)(k, { pokemon: e }),
                      },
                      e.name,
                    ),
                  ),
                });
        },
        C = n(6449),
        N = n.n(C),
        S = (e) => {
          let { searchTerm: t, onSearch: n } = e,
            [a, s] = (0, r.useState)(t),
            [l, i] = (0, r.useState)(null),
            { theme: c } = p();
          return (
            (0, r.useEffect)(() => {
              s(t);
            }, [t]),
            (0, r.useEffect)(() => {
              if (l) throw l;
            }, [l]),
            (0, o.jsxs)("form", {
              onSubmit: (e) => {
                e.preventDefault(), n(a);
              },
              className: "".concat(N()["search-form"], " ").concat(N()[c]),
              children: [
                (0, o.jsx)("input", {
                  type: "text",
                  value: a,
                  onChange: (e) => {
                    s(e.target.value);
                  },
                  placeholder: "Search Pok\xe9mon",
                  className: N()["search-input"],
                }),
                (0, o.jsx)("button", {
                  type: "submit",
                  className: N()["search-button"],
                  children: "Search",
                }),
                (0, o.jsx)("button", {
                  type: "button",
                  onClick: () => {
                    console.log("Throwing error"), i(Error("Simulated error."));
                  },
                  className: N()["throw-error-button"],
                  children: "Throw Error",
                }),
              ],
            })
          );
        },
        y = function (e) {
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
        E = () => {
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
        w = n(3208),
        P = n(2783),
        I = n.n(P),
        H = () => {
          let e = (0, d.I0)(),
            t = (0, d.v9)((e) => e.selectedItems.items) || [];
          return (0, d.v9)((e) => e.flyout.isVisible)
            ? (0, o.jsxs)("div", {
                className: I().flyout,
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
        R = n(5172),
        T = n(2003),
        D = n.n(T),
        Z = (e) => {
          let {
              initialPokemons: t,
              initialSearchTerm: n,
              initialPage: i,
              children: c,
            } = e,
            [u, h] = (0, r.useState)(null),
            [_, g] = y("searchTerm", n),
            [f, x] = y("page", (i || 1).toString()),
            k = (0, a.useRouter)(),
            j = (0, d.I0)(),
            v = (0, d.v9)((e) => e.currentPage.page),
            C = (0, d.v9)((e) => e.currentPage.items),
            N = isNaN(parseInt(f)) ? v : parseInt(f),
            {
              data: w,
              error: P,
              isLoading: I,
            } = (0, s.Of)({ searchTerm: _, page: N }, {});
          (0, r.useEffect)(() => {
            k.query.page && x(k.query.page),
              k.query.search && g(k.query.search);
          }, [k.query.page, k.query.search, x, g]),
            (0, r.useEffect)(() => {
              (null == w ? void 0 : w.results)
                ? (j((0, R.xE)(w.results)), j((0, R.D4)(N)))
                : t.length > 0 && (j((0, R.xE)(t)), j((0, R.D4)(N)));
            }, [w, t, j, N]),
            (0, r.useEffect)(() => {
              P ? h(P.toString()) : h(null);
            }, [P]);
          let { theme: T } = p();
          return (0, o.jsxs)("div", {
            className: "".concat(D().app, " ").concat(D()[T]),
            children: [
              (0, o.jsxs)("div", {
                className: D()["app-left"],
                children: [
                  (0, o.jsxs)("div", {
                    className: D()["app-top"],
                    children: [
                      (0, o.jsx)(E, {}),
                      (0, o.jsx)(S, {
                        searchTerm: _,
                        onSearch: (e) => {
                          g(e),
                            k.push({
                              pathname: "/",
                              query: { search: e, page: "1" },
                            });
                        },
                      }),
                      I && (0, o.jsx)(l.Z, {}),
                      u &&
                        !I &&
                        (0, o.jsx)("p", {
                          className: D()["error-message"],
                          children: u,
                        }),
                    ],
                  }),
                  (0, o.jsx)("div", {
                    className: D()["app-bottom"],
                    children:
                      !I &&
                      !u &&
                      (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)(b, {
                            pokemons: C.length ? C : t,
                            error: null,
                          }),
                          (0, o.jsx)(m, { next: 20 === C.length }),
                          (0, o.jsx)(H, {}),
                        ],
                      }),
                  }),
                ],
              }),
              (0, o.jsx)("div", { className: D()["app-right"], children: c }),
            ],
          });
        };
    },
    3208: function (e, t) {
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
    2653: function (e) {
      e.exports = {
        "detailed-card": "DetailedCard_detailed-card__wnpvj",
        "pokemon-image": "DetailedCard_pokemon-image__WOj4Q",
        "close-button": "DetailedCard_close-button__e7WiY",
        "error-message": "DetailedCard_error-message__H9aH1",
      };
    },
    2783: function (e) {
      e.exports = {
        css: "FlyoutComponent_css__LGJoz",
        flyout: "FlyoutComponent_flyout__qiF1E",
      };
    },
    4215: function (e) {
      e.exports = {
        loader: "Loader_loader__gANhr",
        spinner: "Loader_spinner__RHv3O",
        spin: "Loader_spin__p8FlS",
      };
    },
    1047: function (e) {
      e.exports = {
        pagination: "Pagination_pagination__c7olK",
        light: "Pagination_light__8MnhH",
      };
    },
    4494: function (e) {
      e.exports = {
        "pokemon-card": "PokemonCard_pokemon-card__EyuHp",
        "pokemon-card-checkbox": "PokemonCard_pokemon-card-checkbox__RDUZi",
      };
    },
    7720: function (e) {
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
    6449: function (e) {
      e.exports = {
        "search-form": "SearchComponent_search-form__KVl4Q",
        "search-input": "SearchComponent_search-input__JYTDZ",
        dark: "SearchComponent_dark__zt4W4",
        "search-button": "SearchComponent_search-button__fPwcQ",
        "throw-error-button": "SearchComponent_throw-error-button__NSy6t",
        light: "SearchComponent_light__FbBTG",
      };
    },
    2003: function (e) {
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
  function (e) {
    e.O(0, [888, 774, 179], function () {
      return e((e.s = 3717));
    }),
      (_N_E = e.O());
  },
]);
