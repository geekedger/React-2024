// src/store/flyoutSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FlyoutState {
  isVisible: boolean;
  selectedItems: string[];
}

const initialState: FlyoutState = {
  isVisible: false,
  selectedItems: [],
};

const flyoutSlice = createSlice({
  name: 'flyout',
  initialState,
  reducers: {
    showFlyout: (state) => {
      state.isVisible = true;
    },
    hideFlyout: (state) => {
      state.isVisible = false;
    },
    setSelectedItems: (state, action: PayloadAction<string[]>) => {
      state.selectedItems = action.payload;
    },
    clearSelectedItems: (state) => {
      state.selectedItems = [];
    },
  },
});

export const { showFlyout, hideFlyout, setSelectedItems, clearSelectedItems } = flyoutSlice.actions;
export default flyoutSlice.reducer;
