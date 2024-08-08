(() => {
  var e = {};
  (e.id = 931),
    (e.ids = [931]),
    (e.modules = {
      7849: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/action-async-storage.external");
      },
      2934: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/action-async-storage.external.js");
      },
      5403: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external");
      },
      4580: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/request-async-storage.external.js");
      },
      4749: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external");
      },
      5869: (e) => {
        "use strict";
        e.exports = require("next/dist/client/components/static-generation-async-storage.external.js");
      },
      399: (e) => {
        "use strict";
        e.exports = require("next/dist/compiled/next-server/app-page.runtime.prod.js");
      },
      7147: (e) => {
        "use strict";
        e.exports = require("fs");
      },
      2781: (e) => {
        "use strict";
        e.exports = require("stream");
      },
      9796: (e) => {
        "use strict";
        e.exports = require("zlib");
      },
      6963: (e, t, r) => {
        "use strict";
        r.r(t),
          r.d(t, {
            GlobalError: () => o.a,
            __next_app__: () => d,
            originalPathname: () => l,
            pages: () => u,
            routeModule: () => x,
            tree: () => c,
          }),
          r(908),
          r(646),
          r(4200);
        var s = r(3191),
          a = r(8716),
          n = r(7922),
          o = r.n(n),
          i = r(5231),
          p = {};
        for (let e in i)
          0 >
            [
              "default",
              "tree",
              "pages",
              "GlobalError",
              "originalPathname",
              "__next_app__",
              "routeModule",
            ].indexOf(e) && (p[e] = () => i[e]);
        r.d(t, p);
        let c = [
            "",
            {
              children: [
                "__PAGE__",
                {},
                {
                  page: [
                    () => Promise.resolve().then(r.bind(r, 908)),
                    "D:\\work\\React\\React-2024\\app\\page.tsx",
                  ],
                },
              ],
            },
            {
              layout: [
                () => Promise.resolve().then(r.bind(r, 646)),
                "D:\\work\\React\\React-2024\\app\\layout.tsx",
              ],
              "not-found": [
                () => Promise.resolve().then(r.bind(r, 4200)),
                "D:\\work\\React\\React-2024\\app\\not-found.tsx",
              ],
            },
          ],
          u = ["D:\\work\\React\\React-2024\\app\\page.tsx"],
          l = "/page",
          d = { require: r, loadChunk: () => Promise.resolve() },
          x = new s.AppPageRouteModule({
            definition: {
              kind: a.x.APP_PAGE,
              page: "/page",
              pathname: "/",
              bundlePath: "",
              filename: "",
              appPaths: [],
            },
            userland: { loaderTree: c },
          });
      },
      8819: (e, t, r) => {
        Promise.resolve().then(r.bind(r, 6916));
      },
      908: (e, t, r) => {
        "use strict";
        r.r(t), r.d(t, { default: () => o });
        var s = r(9510);
        r(1159);
        var a = r(8536),
          n = r(1861);
        let o = async ({ searchParams: e }) => {
          let t = await (0, n.r)({ searchParams: e });
          return s.jsx(a.ZP, { ...t });
        };
      },
    });
  var t = require("../webpack-runtime.js");
  t.C(e);
  var r = (e) => t((t.s = e)),
    s = t.X(0, [386, 656, 617], () => r(6963));
  module.exports = s;
})();
