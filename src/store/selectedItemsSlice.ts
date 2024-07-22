import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedItemsState {
  selectedItems: string[]; // Хранение имен выбранных покемонов
}

const initialState: SelectedItemsState = {
  selectedItems: [],
};

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    selectItem: (state, action: PayloadAction<string>) => {
      state.selectedItems.push(action.payload);
    },
    unselectItem: (state, action: PayloadAction<string>) => {
      state.selectedItems = state.selectedItems.filter(item => item !== action.payload);
    },
    clearSelection: (state) => {
      state.selectedItems = [];
    },
  },
});

export const { selectItem, unselectItem, clearSelection } = selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;
