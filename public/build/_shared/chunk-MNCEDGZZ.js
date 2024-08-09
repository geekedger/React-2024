import {
  createHotContext
} from "/build/_shared/chunk-L4EAG7OO.js";
import {
  __commonJS
} from "/build/_shared/chunk-PNG5AS42.js";

// empty-module:@remix-run/node
var require_node = __commonJS({
  "empty-module:@remix-run/node"(exports, module) {
    module.exports = {};
  }
});

// app/utils/sanitizeText.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\utils\\sanitizeText.ts"
  );
  import.meta.hot.lastModified = "1723180798416.578";
}
var sanitizeDescription = (description) => {
  const cleanDescription = Array.from(description).filter((char) => {
    const code = char.charCodeAt(0);
    return code > 31 && code < 127;
  }).join("");
  const spacedDescription = cleanDescription.replace(/([.!?])(?=\S)/g, "$1 ");
  return spacedDescription;
};
var sanitizeText_default = sanitizeDescription;

export {
  require_node,
  sanitizeText_default
};
//# sourceMappingURL=/build/_shared/chunk-MNCEDGZZ.js.map
