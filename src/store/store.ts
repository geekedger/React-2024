import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { api } from "./apiSlice";
import themeReducer from "./themeSlice";
import currentPageReducer from "./currentPageSlice";
import selectedItemsReducer from "./selectedItemsSlice";
import flyoutReducer from "./flyoutSlice";
import loadingReducer from "./loadingSlice";
import pokemonDetailsReducer from "./pokemonDetailsSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [api.reducerPath]: api.reducer,
      theme: themeReducer,
      selectedItems: selectedItemsReducer,
      flyout: flyoutReducer,
      currentPage: currentPageReducer,
      loading: loadingReducer,
      pokemonDetails: pokemonDetailsReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const wrapper = createWrapper<AppStore>(makeStore);
const store = makeStore();
export default store;
