(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [585],
  {
    3717: function (e, t, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/details/[id]",
        function () {
          return o(3020);
        },
      ]);
    },
    3020: function (e, t, o) {
      "use strict";
      o.r(t),
        o.d(t, {
          __N_SSP: function () {
            return g;
          },
          default: function () {
            return f;
          },
        });
      var n = o(5893),
        r = o(7294),
        a = o(1163),
        s = o(8252),
        l = function (e, t) {
          (0, r.useEffect)(() => {
            function o(o) {
              e.current && !e.current.contains(o.target) && t();
            }
            return (
              document.addEventListener("mousedown", o),
              () => {
                document.removeEventListener("mousedown", o);
              }
            );
          }, [e, t]);
        },
        c = o(3208),
        i = o(9482),
        u = o(5007),
        p = o(9343),
        m = o(2653),
        d = o.n(m),
        h = (e) => {
          let t,
            { initialPokemonDetails: o } = e,
            m = (0, a.useRouter)(),
            { id: h } = m.query,
            _ = (0, r.useRef)(null),
            g = (0, u.I0)(),
            f = (0, u.v9)((e) => e.pokemonDetails),
            { data: x, isLoading: k } = (0, s.yQ)(h ? parseInt(h, 10) : -1, {
              skip: !!o,
            });
          if (
            (l(_, () => {
              m.back(), g((0, p.nD)());
            }),
            (0, r.useEffect)(() => {
              if (o) g((0, p.MV)(o));
              else if (x) {
                let e = (0, c.Z)(x.description);
                g(
                  (0, p.MV)({
                    name: x.name,
                    description: e,
                    imageUrl: x.imageUrl,
                  }),
                );
              }
            }, [o, x, g]),
            k && !o)
          )
            t = (0, n.jsx)(i.Z, {});
          else {
            let e = o || f;
            t = e
              ? (0, n.jsxs)("div", {
                  children: [
                    (0, n.jsx)("h2", { children: e.name }),
                    (0, n.jsx)("img", {
                      src: e.imageUrl,
                      alt: e.name,
                      className: d()["pokemon-image"],
                    }),
                    (0, n.jsx)("p", { children: (0, c.Z)(e.description) }),
                    (0, n.jsx)("button", {
                      className: d()["close-button"],
                      onClick: () => m.back(),
                      children: "Close",
                    }),
                  ],
                })
              : (0, n.jsx)("p", { children: "No data available" });
          }
          return (0, n.jsx)("div", {
            ref: _,
            className: d()["detailed-card"],
            children: t,
          });
        },
        _ = o(8184),
        g = !0,
        f = (e) => {
          let {
            searchTerm: t,
            page: o,
            initialPokemons: r,
            pokemonDetails: a,
          } = e;
          return (0, n.jsx)(_.Z, {
            initialPokemons: r,
            initialSearchTerm: t,
            initialPage: o,
            children: a && (0, n.jsx)(h, { initialPokemonDetails: a }),
          });
        };
    },
    9482: function (e, t, o) {
      "use strict";
      var n = o(5893);
      o(7294);
      var r = o(4215),
        a = o.n(r);
      t.Z = () =>
        (0, n.jsx)("div", {
          className: a().loader,
          role: "status",
          children: (0, n.jsx)("div", { className: a().spinner }),
        });
    },
    8184: function (e, t, o) {
      "use strict";
      o.d(t, {
        Z: function () {
          return Z;
        },
      });
      var n = o(5893),
        r = o(7294),
        a = o(1163),
        s = o(8252),
        l = o(9482),
        c = o(1047),
        i = o.n(c),
        u = (e) => {
          let { next: t } = e,
            o = (0, a.useRouter)(),
            { query: r } = o,
            s = r.page ? parseInt(r.page, 10) : 1,
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
              s > 1 &&
                (0, n.jsx)("button", {
                  onClick: () => c(s - 1),
                  children: "Previous",
                }),
              (0, n.jsxs)("span", { children: ["Page ", s] }),
              t &&
                (0, n.jsx)("button", {
                  onClick: () => c(s + 1),
                  children: "Next",
                }),
            ],
          });
        },
        p = o(5007),
        m = o(9979),
        d = o(888),
        h = o(4494),
        _ = o.n(h),
        g = o(6270),
        f = (e) => {
          let { pokemon: t } = e,
            o = (0, a.useRouter)(),
            { query: c } = o,
            i = c.page || "1",
            u = parseInt(t.url.split("/").filter(Boolean).pop()),
            { data: h, isFetching: f } = (0, s.yQ)(u),
            x = (0, p.I0)(),
            k = (0, p.v9)((e) => e.selectedItems.items),
            j = (0, p.v9)((e) => e.loading.isLoading);
          (0, r.useEffect)(() => {
            f ? x((0, g.K)(!0)) : x((0, g.K)(!1));
          }, [f, x]);
          let v = k.some((e) => e.name === t.name);
          return (0, n.jsxs)("div", {
            className: _()["pokemon-card"],
            onClick: () => {
              o.push("/details/".concat(u, "?page=").concat(i));
            },
            children: [
              (0, n.jsx)("input", {
                type: "checkbox",
                checked: v,
                onChange: (e) => {
                  if ((e.stopPropagation(), h)) {
                    let e = {
                      name: h.name,
                      url: t.url,
                      description: h.description,
                      details: "https://pokeapi.co/api/v2/pokemon/".concat(u),
                      imageUrl: h.imageUrl,
                    };
                    v
                      ? (x((0, m.a7)(e)), 1 === k.length && x((0, d.er)()))
                      : (x((0, m.Gh)(e)), 0 === k.length && x((0, d.m)()));
                  }
                },
                className: _()["pokemon-card-checkbox"],
                disabled: f,
                onClick: (e) => e.stopPropagation(),
              }),
              (0, n.jsxs)("div", {
                className: _()["pokemon-card-content"],
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
        v = o(6449),
        b = o.n(v),
        C = o(1503);
      let N = () => {
        let e = (0, r.useContext)(C.N);
        if (!e) throw Error("useTheme must be used within a ThemeProvider");
        return e;
      };
      var S = (e) => {
          let { searchTerm: t, onSearch: o } = e,
            [a, s] = (0, r.useState)(t),
            [l, c] = (0, r.useState)(null),
            { theme: i } = N();
          return (
            (0, r.useEffect)(() => {
              s(t);
            }, [t]),
            (0, r.useEffect)(() => {
              if (l) throw l;
            }, [l]),
            (0, n.jsxs)("form", {
              onSubmit: (e) => {
                e.preventDefault(), o(a);
              },
              className: "".concat(b()["search-form"], " ").concat(b()[i]),
              children: [
                (0, n.jsx)("input", {
                  type: "text",
                  value: a,
                  onChange: (e) => {
                    s(e.target.value);
                  },
                  placeholder: "Search Pok\xe9mon",
                  className: b()["search-input"],
                }),
                (0, n.jsx)("button", {
                  type: "submit",
                  className: b()["search-button"],
                  children: "Search",
                }),
                (0, n.jsx)("button", {
                  type: "button",
                  onClick: () => {
                    console.log("Throwing error"), c(Error("Simulated error."));
                  },
                  className: b()["throw-error-button"],
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
        I = o.n(P),
        R = () => {
          let e = (0, p.I0)(),
            t = (0, p.v9)((e) => e.selectedItems.items) || [];
          return (0, p.v9)((e) => e.flyout.isVisible)
            ? (0, n.jsxs)("div", {
                className: I().flyout,
                children: [
                  (0, n.jsxs)("p", {
                    children: [t.length, " items are selected"],
                  }),
                  (0, n.jsx)("button", {
                    onClick: () => {
                      e((0, m.Ve)()), e((0, d.er)());
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
        T = o(5172),
        H = o(2003),
        D = o.n(H),
        Z = (e) => {
          let {
              initialPokemons: t,
              initialSearchTerm: o,
              initialPage: c,
              children: i,
            } = e,
            [m, d] = (0, r.useState)(null),
            [h, _] = y("searchTerm", o),
            [g, f] = y("page", (c || 1).toString());
          console.log("Page from localStorage: ".concat(g)),
            console.log("SearchTerm from localStorage: ".concat(h));
          let x = (0, a.useRouter)(),
            k = (0, p.I0)(),
            v = (0, p.v9)((e) => e.currentPage.page),
            b = (0, p.v9)((e) => e.currentPage.items),
            C = isNaN(parseInt(g)) ? v : parseInt(g);
          console.log("Current Page Number to Dispatch:", C);
          let {
            data: w,
            error: P,
            isLoading: I,
          } = (0, s.Of)({ searchTerm: h, page: C }, {});
          (0, r.useEffect)(() => {
            x.query.page && f(x.query.page),
              x.query.search && _(x.query.search);
          }, [x.query.page, x.query.search, f, _]),
            (0, r.useEffect)(() => {
              (null == w ? void 0 : w.results)
                ? (k((0, T.xE)(w.results)), k((0, T.D4)(C)))
                : t.length > 0 && (k((0, T.xE)(t)), k((0, T.D4)(C)));
            }, [w, t, k, C]),
            (0, r.useEffect)(() => {
              P ? d(P.toString()) : d(null);
            }, [P]);
          let { theme: H } = N();
          return (0, n.jsxs)("div", {
            className: "".concat(D().app, " ").concat(D()[H]),
            children: [
              (0, n.jsxs)("div", {
                className: D()["app-left"],
                children: [
                  (0, n.jsxs)("div", {
                    className: D()["app-top"],
                    children: [
                      (0, n.jsx)(E, {}),
                      (0, n.jsx)(S, {
                        searchTerm: h,
                        onSearch: (e) => {
                          _(e),
                            x.push({
                              pathname: "/",
                              query: { search: e, page: "1" },
                            });
                        },
                      }),
                      I && (0, n.jsx)(l.Z, {}),
                      m &&
                        !I &&
                        (0, n.jsx)("p", {
                          className: D()["error-message"],
                          children: m,
                        }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: D()["app-bottom"],
                    children:
                      !I &&
                      !m &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(j, {
                            pokemons: b.length ? b : t,
                            error: null,
                          }),
                          (0, n.jsx)(u, { next: 20 === b.length }),
                          (0, n.jsx)(R, {}),
                        ],
                      }),
                  }),
                ],
              }),
              (0, n.jsx)("div", { className: D()["app-right"], children: i }),
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
      return e((e.s = 3717));
    }),
      (_N_E = e.O());
  },
]);
