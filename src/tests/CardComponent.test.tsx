import "whatwg-fetch";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { api } from "../store/apiSlice";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import { useFetchPokemonDetailsQuery } from "../store/apiSlice";
import selectedItemsReducer, {
  selectItem,
  unselectItem,
} from "../store/selectedItemsSlice";
import loadingReducer, { setLoading } from "../store/loadingSlice";
import DetailedCard from "../components/DetailedCard/DetailedCard";
import { hideFlyout, showFlyout } from "../store/flyoutSlice";
import { mockPokemon } from "./mocks/Pokemon.mock";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    selectedItems: selectedItemsReducer,
    loading: loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

jest.mock("../store/apiSlice", () => ({
  ...jest.requireActual("../store/apiSlice"),
  useFetchPokemonDetailsQuery: jest.fn().mockReturnValue({
    data: {
      name: "Pikachu",
      description: "An Electric-type Pokémon.",
      imageUrl: "https://example.com/pikachu.png",
    },
    isFetching: false,
  }),
}));

describe("PokemonCard component", () => {
  beforeEach(() => {
    (useFetchPokemonDetailsQuery as jest.Mock).mockImplementation(() => ({
      data: {
        name: "Pikachu",
        description: "A yellow electric-type Pokemon",
        imageUrl: "https://example.com/pikachu.png",
      },
      isFetching: false,
    }));

    jest.clearAllMocks();
  });

  test("Ensure that the card component renders the relevant card data", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonCard pokemon={mockPokemon} />
        </MemoryRouter>
      </Provider>,
    );
    const titleElement = screen.getByText(mockPokemon.name);
    expect(titleElement).toBeInTheDocument();
  });

  test("Validate that clicking on a card opens a detailed card component", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<PokemonCard pokemon={mockPokemon} />} />
            <Route path="/details/:id" element={<DetailedCard />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    const pokemonCardElement = screen
      .getByText(mockPokemon.name)
      .closest(".pokemon-card");
    expect(pokemonCardElement).toBeInTheDocument();

    fireEvent.click(pokemonCardElement!);

    await waitFor(() => {
      expect(screen.getByText("Pikachu")).toBeInTheDocument();
      expect(
        screen.getByText("A yellow electric-type Pokemon"),
      ).toBeInTheDocument();
      expect(screen.getByAltText("Pikachu")).toHaveAttribute(
        "src",
        "https://example.com/pikachu.png",
      );
    });
  });

  test("Check that clicking on the card triggers an additional API call to fetch detailed information", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<PokemonCard pokemon={mockPokemon} />} />
            <Route path="/details/:id" element={<DetailedCard />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    const pokemonCardElement = screen
      .getByText(mockPokemon.name)
      .closest(".pokemon-card");
    expect(pokemonCardElement).toBeInTheDocument();

    fireEvent.click(pokemonCardElement!);

    await waitFor(() => {
      expect(useFetchPokemonDetailsQuery).toHaveBeenCalledWith(mockPokemon.id);
    });

    await waitFor(() => {
      expect(screen.getByText("Pikachu")).toBeInTheDocument();
      expect(
        screen.getByText("A yellow electric-type Pokemon"),
      ).toBeInTheDocument();
      expect(screen.getByAltText("Pikachu")).toHaveAttribute(
        "src",
        "https://example.com/pikachu.png",
      );
    });
  });

  test("displays loading state when fetching data", () => {
    (useFetchPokemonDetailsQuery as jest.Mock).mockReturnValueOnce({
      data: null,
      isFetching: true,
    });

    store.dispatch(setLoading(true));

    render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonCard pokemon={mockPokemon} />
        </MemoryRouter>
      </Provider>,
    );

    const loaderElement = screen.getByRole("status");
    expect(loaderElement).toBeInTheDocument();
  });

  test("checkbox toggles selected state correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonCard pokemon={mockPokemon} />
        </MemoryRouter>
      </Provider>,
    );

    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });

  test("dispatches correct actions on checkbox change", () => {
    const dispatch = jest.spyOn(store, "dispatch");

    render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonCard pokemon={mockPokemon} />
        </MemoryRouter>
      </Provider>,
    );

    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    fireEvent.click(checkbox);

    const expectedPokemonDetails = {
      name: "Pikachu",
      url: mockPokemon.url,
      description: "A yellow electric-type Pokemon",
      details: `https://pokeapi.co/api/v2/pokemon/${mockPokemon.id}`,
      imageUrl: "https://example.com/pikachu.png",
    };

    expect(dispatch).toHaveBeenCalledWith(selectItem(expectedPokemonDetails));

    fireEvent.click(checkbox);
    expect(dispatch).toHaveBeenCalledWith(unselectItem(expectedPokemonDetails));

    expect(dispatch).toHaveBeenCalledWith(showFlyout());
    expect(dispatch).toHaveBeenCalledWith(hideFlyout());
  });
});
