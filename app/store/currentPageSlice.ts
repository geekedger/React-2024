import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "../Interfaces/IPokemon";

interface CurrentPageState {
  page: number;
  items: Pokemon[];
}

const initialState: CurrentPageState = {
  page: 1,
  items: [],
};

const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setPageItems: (state, action: PayloadAction<Pokemon[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setCurrentPage, setPageItems } = currentPageSlice.actions;
export default currentPageSlice.reducer;
