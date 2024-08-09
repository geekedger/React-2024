import {
  ThemeContext,
  clearSelectedItems,
  hideFlyout,
  selectItem,
  setLoading,
  showFlyout,
  unselectItem,
  useFetchPokemonDetailsQuery
} from "/build/_shared/chunk-Q3E2V6OZ.js";
import {
  require_node,
  sanitizeText_default
} from "/build/_shared/chunk-MNCEDGZZ.js";
import {
  useDispatch,
  useSelector
} from "/build/_shared/chunk-6PNY6PVL.js";
import {
  NavLink,
  Outlet,
  init_dist,
  useLoaderData,
  useNavigate,
  useSearchParams
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

// app/routes/_index.tsx
var import_node = __toESM(require_node(), 1);

// app/components/Pagination/Pagination.tsx
init_dist();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Pagination\\\\Pagination.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Pagination\\Pagination.tsx"
  );
}
var Pagination = ({
  next
}) => {
  _s();
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ? parseInt(searchParams.get("page")) : 1;
  const searchTerm = searchParams.get("search");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "pagination", children: [
    page > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: `?page=${page - 1}${searchTerm ? `&search=${searchTerm}` : ""}`, children: "Previous" }, void 0, false, {
      fileName: "app/components/Pagination/Pagination.tsx",
      lineNumber: 32,
      columnNumber: 20
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("span", { children: [
      "Page ",
      page
    ] }, void 0, true, {
      fileName: "app/components/Pagination/Pagination.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    next && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(NavLink, { to: `?page=${page + 1}${searchTerm ? `&search=${searchTerm}` : ""}`, children: "Next" }, void 0, false, {
      fileName: "app/components/Pagination/Pagination.tsx",
      lineNumber: 38,
      columnNumber: 16
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/Pagination/Pagination.tsx",
    lineNumber: 31,
    columnNumber: 10
  }, this);
};
_s(Pagination, "HWxNQEGJGSlsPJ3ubBB3081mtng=", false, function() {
  return [useSearchParams];
});
_c = Pagination;
var Pagination_default = Pagination;
var _c;
$RefreshReg$(_c, "Pagination");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/PokemonCard/PokemonCard.tsx
var import_react = __toESM(require_react(), 1);
init_dist();

// app/components/Loader/Loader.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\Loader\\\\Loader.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\Loader\\Loader.tsx"
  );
}
var Loader = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "loader", role: "status", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "spinner" }, void 0, false, {
  fileName: "app/components/Loader/Loader.tsx",
  lineNumber: 23,
  columnNumber: 5
}, this) }, void 0, false, {
  fileName: "app/components/Loader/Loader.tsx",
  lineNumber: 22,
  columnNumber: 22
}, this);
_c2 = Loader;
var Loader_default = Loader;
var _c2;
$RefreshReg$(_c2, "Loader");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/PokemonCard/PokemonCard.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\PokemonCard\\\\PokemonCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\PokemonCard\\PokemonCard.tsx"
  );
}
var PokemonCard = ({
  pokemon
}) => {
  _s2();
  const [params] = useSearchParams();
  const page = params.get("page") || 1;
  const id = parseInt(pokemon.url.split("/").filter(Boolean).pop());
  const {
    data: details,
    isFetching
  } = useFetchPokemonDetailsQuery(id);
  const dispatch = useDispatch();
  const selectedItems = useSelector((state) => state.selectedItems.items);
  const navigate = useNavigate();
  const globalLoading = useSelector((state) => state.loading.isLoading);
  (0, import_react.useEffect)(() => {
    if (isFetching) {
      dispatch(setLoading(true));
    } else {
      dispatch(setLoading(false));
    }
  }, [isFetching, dispatch]);
  const isSelected = selectedItems.some((item) => item.name === pokemon.name);
  const handleCheckboxChange = (event) => {
    event.stopPropagation();
    if (details) {
      const pokemonDetails = {
        name: details.name,
        url: pokemon.url,
        description: details.description,
        details: `https://pokeapi.co/api/v2/pokemon/${id}`,
        imageUrl: details.imageUrl
      };
      if (isSelected) {
        dispatch(unselectItem(pokemonDetails));
        if (selectedItems.length === 1) {
          dispatch(hideFlyout());
        }
      } else {
        dispatch(selectItem(pokemonDetails));
        if (selectedItems.length === 0) {
          dispatch(showFlyout());
        }
      }
    }
  };
  const handleCardClick = () => {
    navigate(`/details/${id}?page=${page}`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "pokemon-card", onClick: handleCardClick, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("input", { type: "checkbox", checked: isSelected, onChange: handleCheckboxChange, className: "pokemon-card-checkbox", disabled: isFetching, onClick: (e) => e.stopPropagation() }, void 0, false, {
      fileName: "app/components/PokemonCard/PokemonCard.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "pokemon-card-content", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h2", { children: pokemon.name }, void 0, false, {
        fileName: "app/components/PokemonCard/PokemonCard.tsx",
        lineNumber: 83,
        columnNumber: 9
      }, this),
      globalLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Loader_default, {}, void 0, false, {
        fileName: "app/components/PokemonCard/PokemonCard.tsx",
        lineNumber: 84,
        columnNumber: 27
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/PokemonCard/PokemonCard.tsx",
      lineNumber: 82,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/PokemonCard/PokemonCard.tsx",
    lineNumber: 79,
    columnNumber: 10
  }, this);
};
_s2(PokemonCard, "rOAU5rjwjCy4IS5XUH4TRNTjEcI=", false, function() {
  return [useSearchParams, useFetchPokemonDetailsQuery, useDispatch, useSelector, useNavigate, useSelector];
});
_c3 = PokemonCard;
var PokemonCard_default = PokemonCard;
var _c3;
$RefreshReg$(_c3, "PokemonCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/ResultsComponent/ResultsComponent.module.css
var ResultsComponent_module_default = { "results": "ResultsComponent-module__results__Tq7rp", "no-results": "ResultsComponent-module__no-results__XZUG5", "light": "ResultsComponent-module__light__mc6w5", "dark": "ResultsComponent-module__dark__INhve", "pokemon-list": "ResultsComponent-module__pokemon-list__BBREX", "pokemon-list-item": "ResultsComponent-module__pokemon-list-item__N2VHL", "no-pokemon-message": "ResultsComponent-module__no-pokemon-message__hGYYz" };

// app/components/ResultsComponent/ResultsComponent.tsx
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\ResultsComponent\\\\ResultsComponent.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\ResultsComponent\\ResultsComponent.tsx"
  );
}
var ResultsComponent = ({
  pokemons,
  error
}) => {
  if (error) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { children: error }, void 0, false, {
      fileName: "app/components/ResultsComponent/ResultsComponent.tsx",
      lineNumber: 29,
      columnNumber: 12
    }, this);
  }
  if (pokemons.length === 0) {
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "no-pokemon-message", children: "No Pokemon found" }, void 0, false, {
      fileName: "app/components/ResultsComponent/ResultsComponent.tsx",
      lineNumber: 32,
      columnNumber: 12
    }, this);
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: ResultsComponent_module_default["pokemon-list"], children: pokemons.map((pokemon) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { className: "pokemon-list-item", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PokemonCard_default, { pokemon }, void 0, false, {
    fileName: "app/components/ResultsComponent/ResultsComponent.tsx",
    lineNumber: 36,
    columnNumber: 11
  }, this) }, pokemon.name, false, {
    fileName: "app/components/ResultsComponent/ResultsComponent.tsx",
    lineNumber: 35,
    columnNumber: 32
  }, this)) }, void 0, false, {
    fileName: "app/components/ResultsComponent/ResultsComponent.tsx",
    lineNumber: 34,
    columnNumber: 10
  }, this);
};
_c4 = ResultsComponent;
var ResultsComponent_default = ResultsComponent;
var _c4;
$RefreshReg$(_c4, "ResultsComponent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/SearchComponent/SearchComponent.tsx
var import_react3 = __toESM(require_react(), 1);

// app/hooks/useTheme.ts
var import_react2 = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\hooks\\useTheme.ts"
  );
  import.meta.hot.lastModified = "1723180797635.0789";
}
var useTheme = () => {
  const context = (0, import_react2.useContext)(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// app/components/SearchComponent/SearchComponent.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\SearchComponent\\\\SearchComponent.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s3 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\SearchComponent\\SearchComponent.tsx"
  );
}
var SearchComponent = ({
  searchTerm: initialSearchTerm,
  onSearch
}) => {
  _s3();
  const [searchTerm, setSearchTerm] = (0, import_react3.useState)(initialSearchTerm);
  const {
    theme
  } = useTheme();
  (0, import_react3.useEffect)(() => {
    setSearchTerm(initialSearchTerm);
  }, [initialSearchTerm]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("form", { onSubmit: handleSubmit, className: `search-form ${theme}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("input", { type: "text", value: searchTerm, onChange: handleChange, placeholder: "Search Pok\xE9mon", className: `search-input` }, void 0, false, {
      fileName: "app/components/SearchComponent/SearchComponent.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { type: "submit", className: `search-button`, children: "Search" }, void 0, false, {
      fileName: "app/components/SearchComponent/SearchComponent.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/SearchComponent/SearchComponent.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
};
_s3(SearchComponent, "/ekTOeLGXAreAYHmTmd2rmKNANc=", false, function() {
  return [useTheme];
});
_c5 = SearchComponent;
var SearchComponent_default = SearchComponent;
var _c5;
$RefreshReg$(_c5, "SearchComponent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/components/FlyoutComponent/FlyoutComponent.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\FlyoutComponent\\\\FlyoutComponent.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s4 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\FlyoutComponent\\FlyoutComponent.tsx"
  );
}
var FlyoutComponent = () => {
  _s4();
  const dispatch = useDispatch();
  const selectedItems = useSelector((state) => state.selectedItems.items) || [];
  const isVisible = useSelector((state) => state.flyout.isVisible);
  if (!isVisible)
    return null;
  const handleUnselectAll = () => {
    dispatch(clearSelectedItems());
    dispatch(hideFlyout());
  };
  const handleDownload = () => {
    const csvContent = "data:text/csv;charset=utf-8," + selectedItems.map((e) => {
      const sanitizedDescription = sanitizeText_default(e.description).replace(/\n/g, " ").replace(/\s+/g, " ").trim();
      return `"${e.name}","${sanitizedDescription}","${e.details}"`;
    }).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${selectedItems.length}_Pokemons.csv`);
    document.body.appendChild(link);
    link.click();
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flyout", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: [
      selectedItems.length,
      " items are selected"
    ] }, void 0, true, {
      fileName: "app/components/FlyoutComponent/FlyoutComponent.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { onClick: handleUnselectAll, children: "Unselect all" }, void 0, false, {
      fileName: "app/components/FlyoutComponent/FlyoutComponent.tsx",
      lineNumber: 51,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("button", { onClick: handleDownload, children: "Download" }, void 0, false, {
      fileName: "app/components/FlyoutComponent/FlyoutComponent.tsx",
      lineNumber: 52,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/FlyoutComponent/FlyoutComponent.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
};
_s4(FlyoutComponent, "zONNgcO25xq/taZO6rJJNBdKy98=", false, function() {
  return [useDispatch, useSelector, useSelector];
});
_c6 = FlyoutComponent;
var FlyoutComponent_default = FlyoutComponent;
var _c6;
$RefreshReg$(_c6, "FlyoutComponent");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/styles/App.css
var App_default = "/build/_assets/App-5AMJOGGD.css";

// app/routes/_index.tsx
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s5 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
}
var links = () => {
  return [{
    rel: "stylesheet",
    href: App_default
  }];
};
var IndexPage = () => {
  _s5();
  const data = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const {
    theme
  } = useTheme();
  const handleSearch = (newSearchTerm) => {
    searchParams.set("search", newSearchTerm);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
    navigate(`/?search=${newSearchTerm}&page=1`);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: `app ${theme}`, children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "app-left", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "app-top", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(SearchComponent_default, { searchTerm: searchParams.get("search") || "", onSearch: handleSearch }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 73,
          columnNumber: 11
        }, this),
        data.error && !data.pokemons.length && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "error-message", children: data.error }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 74,
          columnNumber: 51
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "app-bottom", children: !data.error && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(ResultsComponent_default, { pokemons: data.pokemons, error: null }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 78,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Pagination_default, { next: data.next }, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 79,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(FlyoutComponent_default, {}, void 0, false, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 80,
          columnNumber: 15
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 77,
        columnNumber: 27
      }, this) }, void 0, false, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 76,
        columnNumber: 9
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 71,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "app-right", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Outlet, {}, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 86,
      columnNumber: 9
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 85,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 70,
    columnNumber: 10
  }, this);
};
_s5(IndexPage, "+7eJm3xGO8hciQnzB3n3607V09A=", false, function() {
  return [useLoaderData, useSearchParams, useNavigate, useTheme];
});
_c7 = IndexPage;
var index_default = IndexPage;
var _c7;
$RefreshReg$(_c7, "IndexPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  index_default as default,
  links
};
//# sourceMappingURL=/build/routes/_index-KXZB52RX.js.map
