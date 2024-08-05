(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, t, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return o(6209);
        },
      ]);
    },
    6209: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          __N_SSP: function () {
            return s;
          },
        });
      var n = o(5893),
        r = o(8184),
        s = !0;
      t.default = (e) => (0, n.jsx)(r.Z, { ...e });
    },
    9482: function (e, t, o) {
      "use strict";
      var n = o(5893);
      o(7294);
      var r = o(4215),
        s = o.n(r);
      t.Z = () =>
        (0, n.jsx)("div", {
          className: s().loader,
          role: "status",
          children: (0, n.jsx)("div", { className: s().spinner }),
        });
    },
    8184: function (e, t, o) {
      "use strict";
      o.d(t, {
        Z: function () {
          return F;
        },
      });
      var n = o(5893),
        r = o(7294),
        s = o(1163),
        a = o(8252),
        l = o(9482),
        c = o(1047),
        i = o.n(c),
        u = (e) => {
          let { next: t } = e,
            o = (0, s.useRouter)(),
            { query: r } = o,
            a = r.page ? parseInt(r.page, 10) : 1,
            l = r.search,
            c = (e) => {
              o.push(
                { pathname: "/", query: { page: e, search: l || void 0 } },
                void 0,
                { shallow: !0 },
              );
            };
          return (0, n.jsxs)("div", {
            className: i().pagination,
            children: [
              a > 1 &&
                (0, n.jsx)("button", {
                  onClick: () => c(a - 1),
                  children: "Previous",
                }),
              (0, n.jsxs)("span", { children: ["Page ", a] }),
              t &&
                (0, n.jsx)("button", {
                  onClick: () => c(a + 1),
                  children: "Next",
                }),
            ],
          });
        },
        p = o(5007),
        m = o(9979),
        h = o(888),
        _ = o(4494),
        d = o.n(_),
        g = o(6270),
        f = (e) => {
          let { pokemon: t } = e,
            o = (0, s.useRouter)(),
            { query: c } = o,
            i = c.page || "1",
            u = parseInt(t.url.split("/").filter(Boolean).pop()),
            { data: _, isFetching: f } = (0, a.yQ)(u),
            x = (0, p.I0)(),
            k = (0, p.v9)((e) => e.selectedItems.items),
            j = (0, p.v9)((e) => e.loading.isLoading);
          (0, r.useEffect)(() => {
            f ? x((0, g.K)(!0)) : x((0, g.K)(!1));
          }, [f, x]);
          let b = k.some((e) => e.name === t.name);
          return (0, n.jsxs)("div", {
            className: d()["pokemon-card"],
            onClick: () => {
              o.push("/details/".concat(u, "?page=").concat(i));
            },
            children: [
              (0, n.jsx)("input", {
                type: "checkbox",
                checked: b,
                onChange: (e) => {
                  if ((e.stopPropagation(), _)) {
                    let e = {
                      name: _.name,
                      url: t.url,
                      description: _.description,
                      details: "https://pokeapi.co/api/v2/pokemon/".concat(u),
                      imageUrl: _.imageUrl,
                    };
                    b
                      ? (x((0, m.a7)(e)), 1 === k.length && x((0, h.er)()))
                      : (x((0, m.Gh)(e)), 0 === k.length && x((0, h.m)()));
                  }
                },
                className: d()["pokemon-card-checkbox"],
                disabled: f,
                onClick: (e) => e.stopPropagation(),
              }),
              (0, n.jsxs)("div", {
                className: d()["pokemon-card-content"],
                children: [
                  (0, n.jsx)("h2", { children: t.name }),
                  j && (0, n.jsx)(l.Z, {}),
                ],
              }),
            ],
          });
        },
        x = o(7720),
        k = o.n(x),
        j = (e) => {
          let { pokemons: t, error: o } = e;
          return o
            ? (0, n.jsx)("p", { children: o })
            : 0 === t.length
              ? (0, n.jsx)("p", {
                  className: k()["no-pokemon-message"],
                  children: "No Pokemon found",
                })
              : (0, n.jsx)("ul", {
                  className: k()["pokemon-list"],
                  children: t.map((e) =>
                    (0, n.jsx)(
                      "li",
                      {
                        className: k()["pokemon-list-item"],
                        children: (0, n.jsx)(f, { pokemon: e }),
                      },
                      e.name,
                    ),
                  ),
                });
        },
        b = o(6449),
        v = o.n(b),
        S = o(1503);
      let N = () => {
        let e = (0, r.useContext)(S.N);
        if (!e) throw Error("useTheme must be used within a ThemeProvider");
        return e;
      };
      var C = (e) => {
          let { searchTerm: t, onSearch: o } = e,
            [s, a] = (0, r.useState)(t),
            [l, c] = (0, r.useState)(null),
            { theme: i } = N();
          return (
            (0, r.useEffect)(() => {
              a(t);
            }, [t]),
            (0, r.useEffect)(() => {
              if (l) throw l;
            }, [l]),
            (0, n.jsxs)("form", {
              onSubmit: (e) => {
                e.preventDefault(), o(s);
              },
              className: "".concat(v()["search-form"], " ").concat(v()[i]),
              children: [
                (0, n.jsx)("input", {
                  type: "text",
                  value: s,
                  onChange: (e) => {
                    a(e.target.value);
                  },
                  placeholder: "Search Pok\xe9mon",
                  className: v()["search-input"],
                }),
                (0, n.jsx)("button", {
                  type: "submit",
                  className: v()["search-button"],
                  children: "Search",
                }),
                (0, n.jsx)("button", {
                  type: "button",
                  onClick: () => {
                    console.log("Throwing error"), c(Error("Simulated error."));
                  },
                  className: v()["throw-error-button"],
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
            [o, n] = (0, r.useState)(t);
          return (
            (0, r.useEffect)(() => {
              {
                console.log("Checking localStorage for key: ".concat(e));
                let t = localStorage.getItem(e);
                null !== t
                  ? (console.log("Found value in localStorage: ".concat(t)),
                    n(t))
                  : console.log(
                      "No value found in localStorage for key: ".concat(e),
                    );
              }
            }, [e]),
            (0, r.useEffect)(() => {
              console.log("Setting value in localStorage: ".concat(o)),
                localStorage.setItem(e, o);
            }, [e, o]),
            [o, n]
          );
        },
        E = () => {
          let { theme: e, setTheme: t } = N();
          return (0, n.jsxs)("button", {
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
        w = o(3208),
        P = o(2783),
        T = o.n(P),
        I = () => {
          let e = (0, p.I0)(),
            t = (0, p.v9)((e) => e.selectedItems.items) || [];
          return (0, p.v9)((e) => e.flyout.isVisible)
            ? (0, n.jsxs)("div", {
                className: T().flyout,
                children: [
                  (0, n.jsxs)("p", {
                    children: [t.length, " items are selected"],
                  }),
                  (0, n.jsx)("button", {
                    onClick: () => {
                      e((0, m.Ve)()), e((0, h.er)());
                    },
                    children: "Unselect all",
                  }),
                  (0, n.jsx)("button", {
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
                        o = document.createElement("a");
                      o.setAttribute("href", e),
                        o.setAttribute(
                          "download",
                          "".concat(t.length, "_Pokemons.csv"),
                        ),
                        document.body.appendChild(o),
                        o.click();
                    },
                    children: "Download",
                  }),
                ],
              })
            : null;
        },
        R = o(5172),
        H = o(2003),
        q = o.n(H),
        F = (e) => {
          let {
              initialPokemons: t,
              initialSearchTerm: o,
              initialPage: c,
              children: i,
            } = e,
            [m, h] = (0, r.useState)(null),
            [_, d] = y("searchTerm", o),
            [g, f] = y("page", (c || 1).toString());
          console.log("Page from localStorage: ".concat(g)),
            console.log("SearchTerm from localStorage: ".concat(_));
          let x = (0, s.useRouter)(),
            k = (0, p.I0)(),
            b = (0, p.v9)((e) => e.currentPage.page),
            v = (0, p.v9)((e) => e.currentPage.items),
            S = isNaN(parseInt(g)) ? b : parseInt(g);
          console.log("Current Page Number to Dispatch:", S);
          let {
            data: w,
            error: P,
            isLoading: T,
          } = (0, a.Of)({ searchTerm: _, page: S }, {});
          (0, r.useEffect)(() => {
            x.query.page && f(x.query.page),
              x.query.search && d(x.query.search);
          }, [x.query.page, x.query.search, f, d]),
            (0, r.useEffect)(() => {
              (null == w ? void 0 : w.results)
                ? (k((0, R.xE)(w.results)), k((0, R.D4)(S)))
                : t.length > 0 && (k((0, R.xE)(t)), k((0, R.D4)(S)));
            }, [w, t, k, S]),
            (0, r.useEffect)(() => {
              P ? h(P.toString()) : h(null);
            }, [P]);
          let { theme: H } = N();
          return (0, n.jsxs)("div", {
            className: "".concat(q().app, " ").concat(q()[H]),
            children: [
              (0, n.jsxs)("div", {
                className: q()["app-left"],
                children: [
                  (0, n.jsxs)("div", {
                    className: q()["app-top"],
                    children: [
                      (0, n.jsx)(E, {}),
                      (0, n.jsx)(C, {
                        searchTerm: _,
                        onSearch: (e) => {
                          d(e),
                            x.push({
                              pathname: "/",
                              query: { search: e, page: "1" },
                            });
                        },
                      }),
                      T && (0, n.jsx)(l.Z, {}),
                      m &&
                        !T &&
                        (0, n.jsx)("p", {
                          className: q()["error-message"],
                          children: m,
                        }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: q()["app-bottom"],
                    children:
                      !T &&
                      !m &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(j, {
                            pokemons: v.length ? v : t,
                            error: null,
                          }),
                          (0, n.jsx)(u, { next: 20 === v.length }),
                          (0, n.jsx)(I, {}),
                        ],
                      }),
                  }),
                ],
              }),
              (0, n.jsx)("div", { className: q()["app-right"], children: i }),
            ],
          });
        };
    },
    3208: function (e, t) {
      "use strict";
      t.Z = (e) =>
        Array.from(e)
          .filter((e) => {
            let t = e.charCodeAt(0);
            return t > 31 && t < 127;
          })
          .join("")
          .replace(/([.!?])(?=\S)/g, "$1 ");
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
      e.exports = { pagination: "Pagination_pagination__c7olK" };
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
