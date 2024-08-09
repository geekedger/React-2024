import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable, json } from "@remix-run/node";
import { RemixServer, useLoaderData, useSearchParams as useSearchParams$1, useNavigate as useNavigate$1, Outlet, Meta, Links, ScrollRestoration, Scripts } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import React, { Component, createContext, useState, useContext, useEffect, useRef } from "react";
import { useDispatch, useSelector, Provider } from "react-redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useSearchParams, useNavigate, NavLink } from "react-router-dom";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  let prohibitOutOfOrderStreaming = isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode;
  return prohibitOutOfOrderStreaming ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
class ErrorBoundary extends Component {
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
      return React.cloneElement(fallback, { onRetry: this.handleRetry });
    }
    return children;
  }
}
const FallbackComponent = () => /* @__PURE__ */ jsx("div", { className: "fallback", children: /* @__PURE__ */ jsx("p", { children: "🚀 Ta-da! This error was deliberately crafted just for you! Thanks for testing!🎭" }) });
const ThemeContext = createContext(
  void 0
);
const ThemeProvider = ({
  children
}) => {
  const [theme, setTheme] = useState("light");
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value: { theme, setTheme }, children });
};
const initialState$5 = {
  isLoading: false
};
const loadingSlice = createSlice({
  name: "loading",
  initialState: initialState$5,
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    }
  }
});
const { setLoading } = loadingSlice.actions;
const loadingReducer = loadingSlice.reducer;
const initialState$4 = {
  page: 1,
  items: []
};
const currentPageSlice = createSlice({
  name: "currentPage",
  initialState: initialState$4,
  reducers: {
    setCurrentPage: (state, action) => {
      state.page = action.payload;
    },
    setPageItems: (state, action) => {
      state.items = action.payload;
    }
  }
});
const { setCurrentPage, setPageItems } = currentPageSlice.actions;
const currentPageReducer = currentPageSlice.reducer;
const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
  endpoints: (builder) => ({
    fetchPokemons: builder.query({
      query: ({ searchTerm = "", page = 1 }) => {
        const url = searchTerm ? `/pokemon?limit=1000` : `/pokemon?limit=20&offset=${(page - 1) * 20}`;
        return url;
      },
      transformResponse: (response, _meta, { searchTerm = "" }) => {
        if (searchTerm) {
          response.results = response.results.filter(
            (pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
        }
        return response;
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setLoading(true));
        try {
          const { data } = await queryFulfilled;
          dispatch(setPageItems(data.results));
        } catch (err) {
          console.error("Failed to fetch pokemons:", err);
        } finally {
          dispatch(setLoading(false));
        }
      }
    }),
    fetchPokemonDetails: builder.query({
      query: (id) => `/pokemon-species/${id}`,
      transformResponse: (response) => {
        var _a;
        const description = ((_a = response.flavor_text_entries.find(
          (entry2) => entry2.language.name === "en"
        )) == null ? void 0 : _a.flavor_text) || "No description available";
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.id}.png`;
        return { name: response.name, description, imageUrl };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setLoading(true));
        try {
          await queryFulfilled;
        } catch (err) {
          console.error("Failed to fetch pokemon details:", err);
        } finally {
          dispatch(setLoading(false));
        }
      }
    })
  })
});
const { useFetchPokemonsQuery, useFetchPokemonDetailsQuery } = api;
const initialState$3 = {
  theme: "light"
};
const themeSlice = createSlice({
  name: "theme",
  initialState: initialState$3,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    }
  }
});
themeSlice.actions;
const themeReducer = themeSlice.reducer;
const initialState$2 = {
  items: []
};
const selectedItemsSlice = createSlice({
  name: "selectedItems",
  initialState: initialState$2,
  reducers: {
    selectItem: (state, action) => {
      state.items.push(action.payload);
    },
    unselectItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload.name
      );
    },
    clearSelectedItems: (state) => {
      state.items = [];
    }
  }
});
const { selectItem, unselectItem, clearSelectedItems } = selectedItemsSlice.actions;
const selectedItemsReducer = selectedItemsSlice.reducer;
const initialState$1 = {
  isVisible: false
};
const flyoutSlice = createSlice({
  name: "flyout",
  initialState: initialState$1,
  reducers: {
    showFlyout: (state) => {
      state.isVisible = true;
    },
    hideFlyout: (state) => {
      state.isVisible = false;
    }
  }
});
const { showFlyout, hideFlyout } = flyoutSlice.actions;
const flyoutReducer = flyoutSlice.reducer;
const initialState = {
  name: "",
  description: "",
  imageUrl: ""
};
const pokemonDetailsSlice = createSlice({
  name: "pokemonDetails",
  initialState,
  reducers: {
    setPokemonDetails: (state, action) => {
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.imageUrl = action.payload.imageUrl;
    },
    clearPokemonDetails: (state) => {
      state.name = "";
      state.description = "";
      state.imageUrl = "";
    }
  }
});
const { setPokemonDetails, clearPokemonDetails } = pokemonDetailsSlice.actions;
const pokemonDetailsReducer = pokemonDetailsSlice.reducer;
const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    theme: themeReducer,
    selectedItems: selectedItemsReducer,
    flyout: flyoutReducer,
    currentPage: currentPageReducer,
    loading: loadingReducer,
    pokemonDetails: pokemonDetailsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
});
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
const SearchComponent = ({
  searchTerm: initialSearchTerm,
  onSearch
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const { theme } = useTheme();
  useEffect(() => {
    setSearchTerm(initialSearchTerm);
  }, [initialSearchTerm]);
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };
  return /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: `search-form ${theme}`, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        value: searchTerm,
        onChange: handleChange,
        placeholder: "Search Pokemon",
        className: `search-input`
      }
    ),
    /* @__PURE__ */ jsx("button", { type: "submit", className: `search-button`, children: "Search" })
  ] });
};
const Loader = () => /* @__PURE__ */ jsx("div", { className: "loader", role: "status", children: /* @__PURE__ */ jsx("div", { className: "spinner" }) });
const PokemonCard = ({ pokemon }) => {
  const [params] = useSearchParams();
  const page = params.get("page") || 1;
  const id = parseInt(pokemon.url.split("/").filter(Boolean).pop());
  const { data: details, isFetching } = useFetchPokemonDetailsQuery(id);
  const dispatch = useDispatch();
  const selectedItems = useSelector(
    (state) => state.selectedItems.items
  );
  const navigate = useNavigate();
  const globalLoading = useSelector(
    (state) => state.loading.isLoading
  );
  useEffect(() => {
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
  return /* @__PURE__ */ jsxs("div", { className: "pokemon-card", onClick: handleCardClick, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "checkbox",
        checked: isSelected,
        onChange: handleCheckboxChange,
        className: "pokemon-card-checkbox",
        disabled: isFetching,
        onClick: (e) => e.stopPropagation()
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "pokemon-card-content", children: [
      /* @__PURE__ */ jsx("h2", { children: pokemon.name }),
      globalLoading && /* @__PURE__ */ jsx(Loader, {})
    ] })
  ] });
};
const results = "_results_1q55z_1";
const light = "_light_1q55z_22";
const dark = "_dark_1q55z_27";
const styles = {
  results,
  "no-results": "_no-results_1q55z_9",
  light,
  dark,
  "pokemon-list": "_pokemon-list_1q55z_32",
  "pokemon-list-item": "_pokemon-list-item_1q55z_41",
  "no-pokemon-message": "_no-pokemon-message_1q55z_46"
};
const ResultsComponent = ({
  pokemons,
  error
}) => {
  if (error) {
    return /* @__PURE__ */ jsx("p", { children: error });
  }
  if (pokemons.length === 0) {
    return /* @__PURE__ */ jsx("p", { className: "no-pokemon-message", children: "No Pokemon found" });
  }
  return /* @__PURE__ */ jsx("ul", { className: styles["pokemon-list"], children: pokemons.map((pokemon) => /* @__PURE__ */ jsx("li", { className: "pokemon-list-item", children: /* @__PURE__ */ jsx(PokemonCard, { pokemon }) }, pokemon.name)) });
};
const sanitizeDescription = (description) => {
  const cleanDescription = Array.from(description).filter((char) => {
    const code = char.charCodeAt(0);
    return code > 31 && code < 127;
  }).join("");
  const spacedDescription = cleanDescription.replace(/([.!?])(?=\S)/g, "$1 ");
  return spacedDescription;
};
const FlyoutComponent = () => {
  const dispatch = useDispatch();
  const selectedItems = useSelector((state) => state.selectedItems.items) || [];
  const isVisible = useSelector((state) => state.flyout.isVisible);
  if (!isVisible) return null;
  const handleUnselectAll = () => {
    dispatch(clearSelectedItems());
    dispatch(hideFlyout());
  };
  const handleDownload = () => {
    const csvContent = "data:text/csv;charset=utf-8," + selectedItems.map((e) => {
      const sanitizedDescription = sanitizeDescription(e.description).replace(/\n/g, " ").replace(/\s+/g, " ").trim();
      return `"${e.name}","${sanitizedDescription}","${e.details}"`;
    }).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${selectedItems.length}_Pokemons.csv`);
    document.body.appendChild(link);
    link.click();
  };
  return /* @__PURE__ */ jsxs("div", { className: "flyout", children: [
    /* @__PURE__ */ jsxs("p", { children: [
      selectedItems.length,
      " items are selected"
    ] }),
    /* @__PURE__ */ jsx("button", { onClick: handleUnselectAll, children: "Unselect all" }),
    /* @__PURE__ */ jsx("button", { onClick: handleDownload, children: "Download" })
  ] });
};
const Pagination = ({ next }) => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") ? parseInt(searchParams.get("page")) : 1;
  const searchTerm = searchParams.get("search");
  return /* @__PURE__ */ jsxs("div", { className: "pagination", children: [
    page > 1 && /* @__PURE__ */ jsx(
      NavLink,
      {
        to: `?page=${page - 1}${searchTerm ? `&search=${searchTerm}` : ""}`,
        children: "Previous"
      }
    ),
    /* @__PURE__ */ jsxs("span", { children: [
      "Page ",
      page
    ] }),
    next && /* @__PURE__ */ jsx(
      NavLink,
      {
        to: `?page=${page + 1}${searchTerm ? `&search=${searchTerm}` : ""}`,
        children: "Next"
      }
    )
  ] });
};
const IndexPage = () => {
  const data = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams$1();
  const navigate = useNavigate$1();
  const { theme } = useTheme();
  const handleSearch = (newSearchTerm) => {
    searchParams.set("search", newSearchTerm);
    searchParams.set("page", "1");
    setSearchParams(searchParams);
    navigate(`/?search=${newSearchTerm}&page=1`);
  };
  return /* @__PURE__ */ jsxs("div", { className: `app ${theme}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "app-left", children: [
      /* @__PURE__ */ jsxs("div", { className: "app-top", children: [
        /* @__PURE__ */ jsx(SearchComponent, { searchTerm: searchParams.get("search") || "", onSearch: handleSearch }),
        data.error && !data.pokemons.length && /* @__PURE__ */ jsx("p", { className: "error-message", children: data.error })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "app-bottom", children: !data.error && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(ResultsComponent, { pokemons: data.pokemons, error: null }),
        /* @__PURE__ */ jsx(Pagination, { next: data.next }),
        /* @__PURE__ */ jsx(FlyoutComponent, {})
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "app-right", children: /* @__PURE__ */ jsx(Outlet, {}) })
  ] });
};
const links = () => {
  return [
    { rel: "stylesheet", href: "/app/styles/global.css" }
  ];
};
function Root() {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Provider, { store, children: /* @__PURE__ */ jsx(ThemeProvider, { children: /* @__PURE__ */ jsx(ErrorBoundary, { fallback: /* @__PURE__ */ jsx(FallbackComponent, {}), children: /* @__PURE__ */ jsx(IndexPage, {}) }) }) }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function useOutsideAlerter(ref, callback) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
}
const DetailedCard = ({ pokemonDetails }) => {
  const navigate = useNavigate$1();
  const cardRef = useRef(null);
  const dispatch = useDispatch();
  const handleClose = () => {
    navigate(-1);
    dispatch(clearPokemonDetails());
  };
  useOutsideAlerter(cardRef, handleClose);
  const sanitizedDescription = sanitizeDescription(pokemonDetails.description);
  return /* @__PURE__ */ jsxs("div", { ref: cardRef, className: "detailed-card", children: [
    /* @__PURE__ */ jsx("h2", { children: pokemonDetails.name }),
    /* @__PURE__ */ jsx(
      "img",
      {
        src: pokemonDetails.imageUrl,
        alt: pokemonDetails.name,
        className: "pokemon-image"
      }
    ),
    /* @__PURE__ */ jsx("p", { children: sanitizedDescription }),
    /* @__PURE__ */ jsx("button", { className: "close-button", onClick: handleClose, children: "Close" })
  ] });
};
const loader = async ({ params }) => {
  var _a;
  const id = parseInt(params.id, 10);
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  const data = await response.json();
  const description = ((_a = data.flavor_text_entries.find(
    (entry2) => entry2.language.name === "en"
  )) == null ? void 0 : _a.flavor_text) || "No description available";
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
  const pokemonDetails = {
    name: data.name,
    description,
    imageUrl
  };
  return json(pokemonDetails);
};
const DetailedCardPage = () => {
  const data = useLoaderData();
  return /* @__PURE__ */ jsx(DetailedCard, { pokemonDetails: data });
};
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DetailedCardPage,
  loader
}, Symbol.toStringTag, { value: "Module" }));
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BmmWmaq2.js", "imports": ["/assets/components-BVVbkmnK.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-CJOtVFDV.js", "imports": ["/assets/components-BVVbkmnK.js", "/assets/sanitizeText-C0WguaYA.js"], "css": ["/assets/root-I37BZ-7e.css"] }, "routes/details.$id": { "id": "routes/details.$id", "parentId": "root", "path": "details/:id", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/details._id-CSvcE3i1.js", "imports": ["/assets/components-BVVbkmnK.js", "/assets/sanitizeText-C0WguaYA.js"], "css": ["/assets/details-C1qH7YD9.css"] }, "routes/404": { "id": "routes/404", "parentId": "root", "path": "404", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/404-l0sNRNKZ.js", "imports": [], "css": [] } }, "url": "/assets/manifest-3c726a9a.js", "version": "3c726a9a" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "unstable_singleFetch": false, "unstable_lazyRouteDiscovery": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/details.$id": {
    id: "routes/details.$id",
    parentId: "root",
    path: "details/:id",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/404": {
    id: "routes/404",
    parentId: "root",
    path: "404",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
