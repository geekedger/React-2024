import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SelectedItemsState {
  selectedItems: any[];
  isLoading: boolean;
}

const initialState: SelectedItemsState = {
  selectedItems: [],
  isLoading: false,
};

const selectedItemsSlice = createSlice({
  name: 'selectedItems',
  initialState,
  reducers: {
    selectItem: (state, action: PayloadAction<any>) => {
      state.selectedItems.push(action.payload);
    },
    unselectItem: (state, action: PayloadAction<any>) => {
      state.selectedItems = state.selectedItems.filter(
        item => item.name !== action.payload.name
      );
    },
    clearSelectedItems: (state) => {
      state.selectedItems = [];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { selectItem, unselectItem, clearSelectedItems, setLoading } = selectedItemsSlice.actions;
export default selectedItemsSlice.reducer;
