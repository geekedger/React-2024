import {
  createSlice
} from "/build/_shared/chunk-6PNY6PVL.js";
import {
  createHotContext
} from "/build/_shared/chunk-L4EAG7OO.js";

// app/store/pokemonDetailsSlice.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\store\\pokemonDetailsSlice.ts"
  );
  import.meta.hot.lastModified = "1723180797910.077";
}
var initialState = {
  name: "",
  description: "",
  imageUrl: ""
};
var pokemonDetailsSlice = createSlice({
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
var { setPokemonDetails, clearPokemonDetails } = pokemonDetailsSlice.actions;
var pokemonDetailsSlice_default = pokemonDetailsSlice.reducer;

export {
  clearPokemonDetails,
  pokemonDetailsSlice_default
};
//# sourceMappingURL=/build/_shared/chunk-LONZQZEB.js.map
