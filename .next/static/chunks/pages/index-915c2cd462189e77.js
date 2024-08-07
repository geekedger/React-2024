(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(6209);
        },
      ]);
    },
    6209: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return s;
          },
        });
      var o = n(5893);
      n(7294);
      var r = n(8184),
        s = !0;
      t.default = (e) => (0, o.jsx)(r.Z, { ...e });
    },
    9482: function (e, t, n) {
      "use strict";
      var o = n(5893);
      n(7294);
      var r = n(4215),
        s = n.n(r);
      t.Z = () =>
        (0, o.jsx)("div", {
          className: s().loader,
          role: "status",
          children: (0, o.jsx)("div", { className: s().spinner }),
        });
    },
    8184: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return L;
        },
      });
      var o = n(5893),
        r = n(7294),
        s = n(1163),
        a = n(1562),
        l = n(9482),
        c = n(1047),
        i = n.n(c),
        p = n(1503);
      let u = () => {
        let e = (0, r.useContext)(p.N);
        if (!e) throw Error("useTheme must be used within a ThemeProvider");
        return e;
      };
      var m = (e) => {
          let { next: t } = e,
            n = (0, s.useRouter)(),
            { query: r } = n,
            { theme: a } = u(),
            l = r.page ? parseInt(r.page, 10) : 1,
            c = r.search,
            p = (e) => {
              n.push(
                { pathname: "/", query: { page: e, search: c || void 0 } },
                void 0,
                { shallow: !0 },
              );
            };
          return (0, o.jsxs)("div", {
            className: "".concat(i().pagination, " ").concat(i()[a]),
            children: [
              l > 1 &&
                (0, o.jsx)("button", {
                  onClick: () => p(l - 1),
                  children: "Previous",
                }),
              (0, o.jsxs)("span", { children: ["Page ", l] }),
              t &&
                (0, o.jsx)("button", {
                  onClick: () => p(l + 1),
                  children: "Next",
                }),
            ],
          });
        },
        h = n(5007),
        _ = n(9979),
        d = n(888),
        g = n(4494),
        f = n.n(g),
        x = n(6270),
        k = (e) => {
          let { pokemon: t } = e,
            n = (0, s.useRouter)(),
            { query: c } = n,
            i = c.page || "1",
            p = parseInt(t.url.split("/").filter(Boolean).pop()),
            { data: u, isFetching: m } = (0, a.yQ)(p),
            g = (0, h.I0)(),
            k = (0, h.v9)((e) => e.selectedItems.items),
            j = (0, h.v9)((e) => e.loading.isLoading);
          (0, r.useEffect)(() => {
            m ? g((0, x.K)(!0)) : g((0, x.K)(!1));
          }, [m, g]);
          let b = k.some((e) => e.name === t.name);
          return (0, o.jsxs)("div", {
            className: f()["pokemon-card"],
            onClick: () => {
              n.push("/details/".concat(p, "?page=").concat(i));
            },
            children: [
              (0, o.jsx)("input", {
                type: "checkbox",
                checked: b,
                onChange: (e) => {
                  if ((e.stopPropagation(), u)) {
                    let e = {
                      name: u.name,
                      url: t.url,
                      description: u.description,
                      details: "https://pokeapi.co/api/v2/pokemon/".concat(p),
                      imageUrl: u.imageUrl,
                    };
                    b
                      ? (g((0, _.a7)(e)), 1 === k.length && g((0, d.er)()))
                      : (g((0, _.Gh)(e)), 0 === k.length && g((0, d.m)()));
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
        b = n.n(j),
        v = (e) => {
          let { pokemons: t, error: n } = e;
          return n
            ? (0, o.jsx)("p", { children: n })
            : 0 === t.length
              ? (0, o.jsx)("p", {
                  className: b()["no-pokemon-message"],
                  children: "No Pokemon found",
                })
              : (0, o.jsx)("ul", {
                  className: b()["pokemon-list"],
                  children: t.map((e) =>
                    (0, o.jsx)(
                      "li",
                      {
                        className: b()["pokemon-list-item"],
                        children: (0, o.jsx)(k, { pokemon: e }),
                      },
                      e.name,
                    ),
                  ),
                });
        },
        N = n(6449),
        C = n.n(N),
        S = (e) => {
          let { searchTerm: t, onSearch: n } = e,
            [s, a] = (0, r.useState)(t),
            [l, c] = (0, r.useState)(null),
            { theme: i } = u();
          return (
            (0, r.useEffect)(() => {
              a(t);
            }, [t]),
            (0, r.useEffect)(() => {
              if (l) throw l;
            }, [l]),
            (0, o.jsxs)("form", {
              onSubmit: (e) => {
                e.preventDefault(), n(s);
              },
              className: "".concat(C()["search-form"], " ").concat(C()[i]),
              children: [
                (0, o.jsx)("input", {
                  type: "text",
                  value: s,
                  onChange: (e) => {
                    a(e.target.value);
                  },
                  placeholder: "Search Pok\xe9mon",
                  className: C()["search-input"],
                }),
                (0, o.jsx)("button", {
                  type: "submit",
                  className: C()["search-button"],
                  children: "Search",
                }),
                (0, o.jsx)("button", {
                  type: "button",
                  onClick: () => {
                    console.log("Throwing error"), c(Error("Simulated error."));
                  },
                  className: C()["throw-error-button"],
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
          let { theme: e, setTheme: t } = u();
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
          let e = (0, h.I0)(),
            t = (0, h.v9)((e) => e.selectedItems.items) || [];
          return (0, h.v9)((e) => e.flyout.isVisible)
            ? (0, o.jsxs)("div", {
                className: I().flyout,
                children: [
                  (0, o.jsxs)("p", {
                    children: [t.length, " items are selected"],
                  }),
                  (0, o.jsx)("button", {
                    onClick: () => {
                      e((0, _.Ve)()), e((0, d.er)());
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
        q = n.n(T),
        L = (e) => {
          let {
              initialPokemons: t,
              initialSearchTerm: n,
              initialPage: c,
              children: i,
            } = e,
            [p, _] = (0, r.useState)(null),
            [d, g] = y("searchTerm", n),
            [f, x] = y("page", (c || 1).toString()),
            k = (0, s.useRouter)(),
            j = (0, h.I0)(),
            b = (0, h.v9)((e) => e.currentPage.page),
            N = (0, h.v9)((e) => e.currentPage.items),
            C = isNaN(parseInt(f)) ? b : parseInt(f),
            {
              data: w,
              error: P,
              isLoading: I,
            } = (0, a.Of)({ searchTerm: d, page: C }, {});
          (0, r.useEffect)(() => {
            k.query.page && x(k.query.page),
              k.query.search && g(k.query.search);
          }, [k.query.page, k.query.search, x, g]),
            (0, r.useEffect)(() => {
              (null == w ? void 0 : w.results)
                ? (j((0, R.xE)(w.results)), j((0, R.D4)(C)))
                : t.length > 0 && (j((0, R.xE)(t)), j((0, R.D4)(C)));
            }, [w, t, j, C]),
            (0, r.useEffect)(() => {
              P ? _(P.toString()) : _(null);
            }, [P]);
          let { theme: T } = u();
          return (0, o.jsxs)("div", {
            className: "".concat(q().app, " ").concat(q()[T]),
            children: [
              (0, o.jsxs)("div", {
                className: q()["app-left"],
                children: [
                  (0, o.jsxs)("div", {
                    className: q()["app-top"],
                    children: [
                      (0, o.jsx)(E, {}),
                      (0, o.jsx)(S, {
                        searchTerm: d,
                        onSearch: (e) => {
                          g(e),
                            k.push({
                              pathname: "/",
                              query: { search: e, page: "1" },
                            });
                        },
                      }),
                      I && (0, o.jsx)(l.Z, {}),
                      p &&
                        !I &&
                        (0, o.jsx)("p", {
                          className: q()["error-message"],
                          children: p,
                        }),
                    ],
                  }),
                  (0, o.jsx)("div", {
                    className: q()["app-bottom"],
                    children:
                      !I &&
                      !p &&
                      (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)(v, {
                            pokemons: N.length ? N : t,
                            error: null,
                          }),
                          (0, o.jsx)(m, { next: 20 === N.length }),
                          (0, o.jsx)(H, {}),
                        ],
                      }),
                  }),
                ],
              }),
              (0, o.jsx)("div", { className: q()["app-right"], children: i }),
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
      return e((e.s = 8312));
    }),
      (_N_E = e.O());
  },
]);
