// src/store/store.ts
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { api } from "./apiSlice";
import themeReducer, { ThemeState } from "./themeSlice";
import currentPageReducer from './currentPageSlice';
import selectedItemsReducer from './selectedItemsSlice';
import flyoutReducer from './flyoutSlice';
import loadingReducer from './loadingSlice';
import pokemonDetailsReducer from './pokemonDetailsSlice'; // Импортируйте pokemonDetailsReducer

const store: EnhancedStore<{
  selectedItems: ReturnType<typeof selectedItemsReducer>;
  api: ReturnType<typeof api.reducer>;
  theme: ThemeState;
  currentPage: ReturnType<typeof currentPageReducer>;
  flyout: ReturnType<typeof flyoutReducer>;
  loading: ReturnType<typeof loadingReducer>;
  pokemonDetails: ReturnType<typeof pokemonDetailsReducer>; // Добавьте pokemonDetails в типы
}> = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    theme: themeReducer,
    selectedItems: selectedItemsReducer,
    flyout: flyoutReducer,
    currentPage: currentPageReducer,
    loading: loadingReducer,
    pokemonDetails: pokemonDetailsReducer, // Добавьте pokemonDetailsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
