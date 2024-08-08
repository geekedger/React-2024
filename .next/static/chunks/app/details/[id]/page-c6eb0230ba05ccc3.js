(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [78],
  {
    1415: function (e, n, a) {
      Promise.resolve().then(a.bind(a, 241)),
        Promise.resolve().then(a.bind(a, 4951));
    },
    241: function (e, n, a) {
      "use strict";
      a.d(n, {
        default: function () {
          return f;
        },
      });
      var t = a(7437),
        r = a(2265),
        i = a(6463),
        o = a(8460),
        s = function (e, n) {
          (0, r.useEffect)(() => {
            function a(a) {
              e.current && !e.current.contains(a.target) && n();
            }
            return (
              document.addEventListener("mousedown", a),
              () => {
                document.removeEventListener("mousedown", a);
              }
            );
          }, [e, n]);
        },
        c = a(9115),
        l = a(5584),
        d = a(2924),
        u = a(4023),
        m = a.n(u),
        p = a(1444),
        f = (e) => {
          let { initialPokemonDetails: n } = e,
            a = (0, i.useRouter)(),
            u = (0, i.useSearchParams)(),
            f = (0, r.useRef)(null),
            g = (0, p.I0)(),
            _ = (0, p.v9)((e) => e.pokemonDetails),
            h = u.get("id"),
            {
              data: k,
              isLoading: v,
              error: b,
            } = (0, o.yQ)(h ? parseInt(h, 10) : -1, { skip: !h }),
            j = "/?page="
              .concat(u.get("page") || "", "&search=")
              .concat(u.get("search") || "");
          if (
            (s(f, () => {
              a.replace(j), g((0, d.nD)());
            }),
            (0, r.useEffect)(() => {
              if (n) g((0, d.MV)(n));
              else if (k && !v) {
                let e = (0, c.Z)(k.description);
                g(
                  (0, d.MV)({
                    name: k.name,
                    description: e,
                    imageUrl: k.imageUrl,
                  }),
                );
              }
            }, [n, k, v, g]),
            b)
          )
            return (0, t.jsx)("div", { children: "Error loading data" });
          if (v && !n) return (0, t.jsx)(l.Z, {});
          let D = n || _;
          return D
            ? (0, t.jsxs)("div", {
                ref: f,
                className: m()["detailed-card"],
                children: [
                  (0, t.jsx)("h2", { children: D.name }),
                  (0, t.jsx)("img", {
                    src: D.imageUrl,
                    alt: D.name,
                    className: m()["pokemon-image"],
                  }),
                  (0, t.jsx)("p", { children: (0, c.Z)(D.description) }),
                  (0, t.jsx)("button", {
                    className: m()["close-button"],
                    onClick: () => a.back(),
                    children: "Close",
                  }),
                ],
              })
            : (0, t.jsx)("p", { children: "No data available" });
        };
    },
    2924: function (e, n, a) {
      "use strict";
      a.d(n, {
        MV: function () {
          return r;
        },
        nD: function () {
          return i;
        },
      });
      let t = (0, a(2351).oM)({
          name: "pokemonDetails",
          initialState: { name: "", description: "", imageUrl: "" },
          reducers: {
            setPokemonDetails: (e, n) => {
              (e.name = n.payload.name),
                (e.description = n.payload.description),
                (e.imageUrl = n.payload.imageUrl);
            },
            clearPokemonDetails: (e) => {
              (e.name = ""), (e.description = ""), (e.imageUrl = "");
            },
          },
        }),
        { setPokemonDetails: r, clearPokemonDetails: i } = t.actions;
      n.ZP = t.reducer;
    },
    4023: function (e) {
      e.exports = {
        "detailed-card": "DetailedCard_detailed-card__wnpvj",
        "pokemon-image": "DetailedCard_pokemon-image__WOj4Q",
        "close-button": "DetailedCard_close-button__e7WiY",
        "error-message": "DetailedCard_error-message__H9aH1",
      };
    },
  },
  function (e) {
    e.O(0, [631, 507, 951, 971, 23, 744], function () {
      return e((e.s = 1415));
    }),
      (_N_E = e.O());
  },
]);
