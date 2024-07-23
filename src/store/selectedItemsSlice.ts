import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonDetails {
  name: string;
  url: string;
  description: string;
  details: string;
  imageUrl: string;
}

interface SelectedItemsState {
  items: PokemonDetails[];
}

const initialState: SelectedItemsState = {
  items: [],
};

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    selectItem: (state, action: PayloadAction<PokemonDetails>) => {
      state.items.push(action.payload);
    },
    unselectItem: (state, action: PayloadAction<PokemonDetails>) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
    },
    clearSelectedItems: (state) => {
      state.items = [];
    },
  },
});

export const { selectItem, unselectItem, clearSelectedItems } = selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;
