import {
  clearPokemonDetails
} from "/build/_shared/chunk-LONZQZEB.js";
import {
  require_node,
  sanitizeText_default
} from "/build/_shared/chunk-MNCEDGZZ.js";
import {
  useDispatch
} from "/build/_shared/chunk-6PNY6PVL.js";
import {
  useLoaderData,
  useNavigate
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

// app/routes/details.$id.tsx
var import_node = __toESM(require_node(), 1);

// app/components/DetailedCard/DetailedCard.tsx
var import_react2 = __toESM(require_react(), 1);

// app/hooks/useOutsideAlerter.ts
var import_react = __toESM(require_react(), 1);
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\hooks\\useOutsideAlerter.ts"
  );
  import.meta.hot.lastModified = "1723180797605.0786";
}
function useOutsideAlerter(ref, callback) {
  (0, import_react.useEffect)(() => {
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
var useOutsideAlerter_default = useOutsideAlerter;

// app/components/DetailedCard/DetailedCard.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\DetailedCard\\\\DetailedCard.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\DetailedCard\\DetailedCard.tsx"
  );
}
var DetailedCard = ({
  pokemonDetails
}) => {
  _s();
  const navigate = useNavigate();
  const cardRef = (0, import_react2.useRef)(null);
  const dispatch = useDispatch();
  const handleClose = () => {
    navigate(-1);
    dispatch(clearPokemonDetails());
  };
  useOutsideAlerter_default(cardRef, handleClose);
  const sanitizedDescription = sanitizeText_default(pokemonDetails.description);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { ref: cardRef, className: "detailed-card", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h2", { children: pokemonDetails.name }, void 0, false, {
      fileName: "app/components/DetailedCard/DetailedCard.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("img", { src: pokemonDetails.imageUrl, alt: pokemonDetails.name, className: "pokemon-image" }, void 0, false, {
      fileName: "app/components/DetailedCard/DetailedCard.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: sanitizedDescription }, void 0, false, {
      fileName: "app/components/DetailedCard/DetailedCard.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("button", { className: "close-button", onClick: handleClose, children: "Close" }, void 0, false, {
      fileName: "app/components/DetailedCard/DetailedCard.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/DetailedCard/DetailedCard.tsx",
    lineNumber: 42,
    columnNumber: 10
  }, this);
};
_s(DetailedCard, "Kp4zZ0YfJNcWoI0wDAfDj2EiqDM=", false, function() {
  return [useNavigate, useDispatch, useOutsideAlerter_default];
});
_c = DetailedCard;
var DetailedCard_default = DetailedCard;
var _c;
$RefreshReg$(_c, "DetailedCard");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/details.$id.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\details.$id.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\details.$id.tsx"
  );
  import.meta.hot.lastModified = "1723200906445.0774";
}
var DetailedCardPage = () => {
  _s2();
  const data = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(DetailedCard_default, { pokemonDetails: data }, void 0, false, {
    fileName: "app/routes/details.$id.tsx",
    lineNumber: 46,
    columnNumber: 10
  }, this);
};
_s2(DetailedCardPage, "5thj+e1edPyRpKif1JmVRC6KArE=", false, function() {
  return [useLoaderData];
});
_c2 = DetailedCardPage;
var details_id_default = DetailedCardPage;
var _c2;
$RefreshReg$(_c2, "DetailedCardPage");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  details_id_default as default
};
//# sourceMappingURL=/build/routes/details.$id-X23Z24AO.js.map
