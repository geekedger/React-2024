// src/store/store.ts
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import counterReducer from "./slices";
import { api } from "./apiSlice";
import themeReducer, { ThemeState } from "./ThemeSlice";
import { CounterState } from "./slices";
import selectedItemsReducer from './selectedItemsSlice';
import flyoutReducer from './flyoutSlice';


const store: EnhancedStore<{
  selectedItems: any;
  api: ReturnType<typeof api.reducer>;
  theme: ThemeState;
  counter: CounterState;
}> = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // RTK Query API reducer
    theme: themeReducer, // Your theme reducer
    counter: counterReducer, // Your counter reducer
    selectedItems: selectedItemsReducer,
    flyout: flyoutReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // RTK Query middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
