import "whatwg-fetch";
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import { useFetchPokemonDetailsQuery } from "../store/apiSlice";
import { selectItem, unselectItem } from "../store/selectedItemsSlice";
import DetailedCard from "../components/DetailedCard/DetailedCard";
import { mockPokemon } from "./mocks/Pokemon.mock";
import { createMockRouter } from "./mocks/Router.mock";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import { hideFlyout, showFlyout } from "../store/flyoutSlice";
import { renderWithStore, store } from "./mocks/render-with-store.mock";
import { Provider } from "react-redux";

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
  const customInitialState = {
    pokemonDetails: {
      name: "Pikachu123",
      description: "A yellow electric-type Pokemon",
      imageUrl: "https://example.com/pikachu.png",
    },
  };

  beforeEach(() => {
    (useFetchPokemonDetailsQuery as jest.Mock).mockImplementation(() => ({
      data: {
        name: "Pikachu",
        description: "A yellow electric-type Pokemon",
        imageUrl: "https://example.com/pikachu.png",
      },
      isFetching: false,
    }));
  });

  test("Ensure that the card component renders the relevant card data", () => {
    const router = createMockRouter({});

    renderWithStore(
      <RouterContext.Provider value={router}>
        <PokemonCard pokemon={mockPokemon} />
      </RouterContext.Provider>,
    );

    const titleElement = screen.getByText(mockPokemon.name);
    expect(titleElement).toBeInTheDocument();
  });

  test("Validate that clicking on a card opens a detailed card component", async () => {
    const router = createMockRouter({
      push: jest.fn(),
    });

    const { getByText } = renderWithStore(
      <RouterContext.Provider value={router}>
        {" "}
        <PokemonCard pokemon={mockPokemon} />
      </RouterContext.Provider>,
      customInitialState,
    );

    const pokemonCardElement = getByText(mockPokemon.name).closest(
      ".pokemon-card",
    );
    expect(pokemonCardElement).toBeInTheDocument();

    fireEvent.click(pokemonCardElement!);

    await waitFor(() => {
      expect(router.push).toHaveBeenCalledWith(
        `/details/${mockPokemon.id}?page=1`,
      );
    });
  });

  test("Check that clicking on the card triggers an additional API call to fetch detailed information", async () => {
    const router = createMockRouter({
      asPath: `/details/${mockPokemon.id}`,
      query: { id: mockPokemon.id.toString() },
    });

    const { getByText, getByAltText } = renderWithStore(
      <RouterContext.Provider value={router}>
        {" "}
        <DetailedCard />
      </RouterContext.Provider>,
      customInitialState,
    );

    await waitFor(() => {
      // Проверка вызова API с ожидаемым id
      expect(useFetchPokemonDetailsQuery).toHaveBeenCalledWith(mockPokemon.id, {
        skip: false,
      });
      expect(getByText("Pikachu")).toBeInTheDocument();
      expect(getByText("A yellow electric-type Pokemon")).toBeInTheDocument();
      expect(getByAltText("Pikachu")).toHaveAttribute(
        "src",
        "https://example.com/pikachu.png",
      );
    });
  });

  it("displays loading state when fetching data", async () => {
    // Мокаем ответ API с состоянием загрузки
    (useFetchPokemonDetailsQuery as jest.Mock).mockReturnValueOnce({
      data: null,
      isFetching: true,
    });

    // Настраиваем начальное состояние для теста
    const initialState = {
      loading: { isLoading: true },
    };

    // Создаем мок-роутер
    const router = createMockRouter({});

    // Рендерим компонент с store и роутером
    renderWithStore(
      <RouterContext.Provider value={router}>
        <PokemonCard pokemon={mockPokemon} />
      </RouterContext.Provider>,
      initialState,
    );

    // Проверка наличия элемента состояния загрузки
    const loaderElement = screen.getByRole("status");
    expect(loaderElement).toBeInTheDocument();
  });

  test("checkbox toggles selected state correctly", () => {
    const router = createMockRouter({});

    renderWithStore(
      <RouterContext.Provider value={router}>
        <PokemonCard pokemon={mockPokemon} />
      </RouterContext.Provider>,
    );

    const checkbox = screen.getByRole("checkbox") as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);

    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });

  test("dispatches correct actions on checkbox change", () => {
    const dispatch = jest.spyOn(store, "dispatch");
    const router = createMockRouter({});

    render(
      <Provider store={store}>
        <RouterContext.Provider value={router}>
          <PokemonCard pokemon={mockPokemon} />
        </RouterContext.Provider>
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
