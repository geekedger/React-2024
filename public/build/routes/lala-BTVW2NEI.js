import {
  createHotContext
} from "/build/_shared/chunk-L4EAG7OO.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/lala.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\lala.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\lala.tsx"
  );
  import.meta.hot.lastModified = "1723204991740.077";
}
function Postid() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: "A Blog Post" }, void 0, false, {
    fileName: "app/routes/lala.tsx",
    lineNumber: 23,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/lala.tsx",
    lineNumber: 22,
    columnNumber: 10
  }, this);
}
_c = Postid;
var _c;
$RefreshReg$(_c, "Postid");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Postid as default
};
//# sourceMappingURL=/build/routes/lala-BTVW2NEI.js.map
