import {
  pokemonDetailsSlice_default
} from "/build/_shared/chunk-LONZQZEB.js";
import {
  ThemeContext,
  api,
  currentPageSlice_default,
  flyoutSlice_default,
  loadingSlice_default,
  selectedItemsSlice_default
} from "/build/_shared/chunk-Q3E2V6OZ.js";
import {
  Provider_default,
  configureStore,
  createSlice
} from "/build/_shared/chunk-6PNY6PVL.js";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-FOGKI2AE.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import {
  createHotContext
} from "/build/_shared/chunk-L4EAG7OO.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import {
  require_react
} from "/build/_shared/chunk-7M6SC7J5.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/components/ErrorBoundary/ErrorBoundary.tsx
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ErrorBoundary\\ErrorBoundary.tsx"
  );
  import.meta.hot.lastModified = "1723180797126.5774";
}
var ErrorBoundary = class extends import_react.Component {
  constructor(props) {
    super(props);
    this.handleRetry = () => {
      this.setState({ hasError: false });
    };
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }
  render() {
    const { hasError } = this.state;
    const { fallback, children } = this.props;
    if (hasError) {
      return import_react.default.cloneElement(fallback, { onRetry: this.handleRetry });
    }
    return children;
  }
};
var ErrorBoundary_default = ErrorBoundary;

// app/components/FallbackComponent/FallbackComponent.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\FallbackComponent\\\\FallbackComponent.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\FallbackComponent\\FallbackComponent.tsx"
  );
}
var FallbackComponent = () => /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "fallback", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "\u{1F680} Ta-da! This error was deliberately crafted just for you! Thanks for testing!\u{1F3AD}" }, void 0, false, {
  fileName: "app/components/FallbackComponent/FallbackComponent.tsx",
  lineNumber: 23,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/FallbackComponent/FallbackComponent.tsx",
  lineNumber: 22,
  columnNumber: 33
}, this);
_c = FallbackComponent;
var FallbackComponent_default = FallbackComponent;
var _c;
$RefreshReg$(_c, "FallbackComponent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/contexts/ThemeProvider.tsx
var import_react2 = __toESM(require_react(), 1);
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\contexts\\\\ThemeProvider.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\contexts\\ThemeProvider.tsx"
  );
  import.meta.hot.lastModified = "1723180797535.078";
}
var ThemeProvider = ({
  children
}) => {
  _s();
  const [theme, setTheme2] = (0, import_react2.useState)("light");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(ThemeContext.Provider, { value: {
    theme,
    setTheme: setTheme2
  }, children }, void 0, false, {
    fileName: "app/contexts/ThemeProvider.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
};
_s(ThemeProvider, "1NR3O0/bzzhjlLyt740h+JhxH9c=");
_c2 = ThemeProvider;
var _c2;
$RefreshReg$(_c2, "ThemeProvider");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/store/themeSlice.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\store\\themeSlice.ts"
  );
  import.meta.hot.lastModified = "1723180798042.0774";
}
var initialState = {
  theme: "light"
};
var themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    }
  }
});
var { setTheme, toggleTheme } = themeSlice.actions;
var themeSlice_default = themeSlice.reducer;

// app/store/store.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\store\\store.ts"
  );
  import.meta.hot.lastModified = "1723180798033.5767";
}
var store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    theme: themeSlice_default,
    selectedItems: selectedItemsSlice_default,
    flyout: flyoutSlice_default,
    currentPage: currentPageSlice_default,
    loading: loadingSlice_default,
    pokemonDetails: pokemonDetailsSlice_default
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});
var store_default = store;

// app/styles/global.css
var global_default = "/build/_assets/global-IGCG6YD2.css";

// app/root.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\root.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\root.tsx"
  );
}
var links = () => {
  return [{
    rel: "stylesheet",
    href: global_default
  }];
};
function Root() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Meta, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Links, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Provider_default, { store: store_default, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ThemeProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ErrorBoundary_default, { fallback: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(FallbackComponent_default, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 38
      }, this), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Outlet, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 45,
        columnNumber: 16
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 44,
        columnNumber: 13
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this) }, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 42,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ScrollRestoration, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 49,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Scripts, {}, void 0, false, {
        fileName: "app/root.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/root.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/root.tsx",
    lineNumber: 36,
    columnNumber: 10
  }, this);
}
_c3 = Root;
var _c3;
$RefreshReg$(_c3, "Root");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Root as default,
  links
};
//# sourceMappingURL=/build/root-OUM5EFYG.js.map
