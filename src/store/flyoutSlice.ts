import { createSlice } from '@reduxjs/toolkit';

interface FlyoutState {
  isVisible: boolean;
}

const initialState: FlyoutState = {
  isVisible: false,
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
  },
});

export const { showFlyout, hideFlyout } = flyoutSlice.actions;
export default flyoutSlice.reducer;
