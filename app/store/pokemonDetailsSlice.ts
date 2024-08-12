// src/store/pokemonDetailsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonDetailsState {
  name: string;
  description: string;
  imageUrl: string;
}

const initialState: PokemonDetailsState = {
  name: "",
  description: "",
  imageUrl: "",
};

const pokemonDetailsSlice = createSlice({
  name: "pokemonDetails",
  initialState,
  reducers: {
    setPokemonDetails: (state, action: PayloadAction<PokemonDetailsState>) => {
      state.name = action.payload.name;
      state.description = action.payload.description;
      state.imageUrl = action.payload.imageUrl;
    },
    clearPokemonDetails: (state) => {
      state.name = "";
      state.description = "";
      state.imageUrl = "";
    },
  },
});

export const { setPokemonDetails, clearPokemonDetails } =
  pokemonDetailsSlice.actions;
export default pokemonDetailsSlice.reducer;
