import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { api, Pokemon } from "./apiSlice";
import themeReducer, { ThemeState } from "./ThemeSlice";
import currentPageReducer from './currentPageSlice';
import selectedItemsReducer from './selectedItemsSlice';
import flyoutReducer from './flyoutSlice';

const store: EnhancedStore<{
  selectedItems: any;
  api: ReturnType<typeof api.reducer>;
  theme: ThemeState;
  currentPage: {
    page: number;
    items: Pokemon[];
  };
  flyout: any;
}> = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // RTK Query API reducer
    theme: themeReducer, // редуктор темы
    selectedItems: selectedItemsReducer,
    flyout: flyoutReducer,
    currentPage: currentPageReducer, // Новый редуктор текущей страницы
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware), // RTK Query middleware
});

// Определяем тип RootState
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
