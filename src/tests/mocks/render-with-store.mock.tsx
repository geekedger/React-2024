import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { RootState } from "../../store/store";
import { api } from "../../store/apiSlice";
import themeReducer from "../../store/themeSlice";
import currentPageReducer from "../../store/currentPageSlice";
import selectedItemsReducer from "../../store/selectedItemsSlice";
import flyoutReducer from "../../store/flyoutSlice";
import loadingReducer from "../../store/loadingSlice";
import pokemonDetailsReducer from "../../store/pokemonDetailsSlice";

let store: ReturnType<typeof configureStore>;

export const createTestStore = (state: Partial<RootState>) => {
  store = configureStore({
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
    preloadedState: state as RootState,
  });
  return store;
};

export const renderWithStore = (
  component: React.ReactElement,
  initialState?: Partial<RootState>,
) => {
  const store = createTestStore(initialState || {});
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <Provider store={store}>{children}</Provider>
  );
  return {
    ...render(component, { wrapper: Wrapper }),
    store,
  };
};

export { store };
