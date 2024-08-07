import "whatwg-fetch";
import "@testing-library/jest-dom";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import ResultsComponent from "../components/ResultsComponent/ResultsComponent";
import { mockPokemons } from "./mocks/CardList.mock";
import { Provider } from "react-redux";

import { createMockRouter } from "./mocks/Router.mock"; // обновите путь, если нужно
import { createTestStore, store } from "./mocks/render-with-store.mock";
import { RootState } from "../store/store";

const initialState: Partial<RootState> = {
  // Начальное состояние для theme
  selectedItems: { items: [] }, // Начальное состояние для selectedItems
  flyout: { isVisible: false }, // Начальное состояние для flyout
  currentPage: { page: 1, items: [] }, // Начальное состояние для currentPage
  loading: { isLoading: false }, // Начальное состояние для loading
  pokemonDetails: {
    // Начальное состояние для pokemonDetails
    name: "",
    description: "",
    imageUrl: "",
  },
};

describe("ResultsComponent component", () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  test("Verify that the component renders the specified number of cards", async () => {
    const props = {
      pokemons: mockPokemons.results,
      error: null,
    };

    const store = createTestStore(initialState);

    render(
      <Provider store={store}>
        <RouterContext.Provider value={createMockRouter({})}>
          <ResultsComponent {...props} />
        </RouterContext.Provider>
      </Provider>,
    );

    // Wait for the cards to be rendered
    const cards = await waitFor(() => screen.getAllByRole("listitem"));
    expect(cards.length).toBe(25);
  });

  test("Check that an appropriate message is displayed if no cards are present", async () => {
    const props = {
      pokemons: [],
      error: null,
    };

    render(
      <Provider store={store}>
        <RouterContext.Provider value={createMockRouter({})}>
          <ResultsComponent {...props} />
        </RouterContext.Provider>
      </Provider>,
    );

    // Ensure the "No Pokemon found" message is displayed
    const message = await waitFor(() => screen.getByText("No Pokemon found"));
    expect(message).toBeInTheDocument();
  });
});
