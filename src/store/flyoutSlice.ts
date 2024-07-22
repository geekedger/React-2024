import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon } from '../api/api';

interface FlyoutState {
  isVisible: boolean;
  selectedItems: Pokemon[];
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
    setSelectedItems: (state, action: PayloadAction<Pokemon[]>) => {
      state.selectedItems = action.payload;
    },
    clearSelectedItems: (state) => {
      state.selectedItems = [];
    },
  },
});

export const { showFlyout, hideFlyout, setSelectedItems, clearSelectedItems } = flyoutSlice.actions;
export default flyoutSlice.reducer;
