import 'whatwg-fetch';
import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { api } from '../store/apiSlice';
import PokemonCard from "../components/PokemonCard/PokemonCard";
import { pokemonMock } from "./mocks/Pokemon.mock";
import { useFetchPokemonDetailsQuery } from '../store/apiSlice';
import selectedItemsReducer, { selectItem, unselectItem } from "../store/selectedItemsSlice";
import loadingReducer, { setLoading } from "../store/loadingSlice";
import DetailedCard from '../components/DetailedCard/DetailedCard';
import flyoutSlice, { hideFlyout, showFlyout } from '../store/flyoutSlice';
import selectedItemsSlice from '../store/selectedItemsSlice';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    selectedItems: selectedItemsReducer,
    loading: loadingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});


jest.mock('../store/apiSlice', () => ({
  ...jest.requireActual('../store/apiSlice'),
  useFetchPokemonDetailsQuery: jest.fn().mockReturnValue({
    data: {
      name: 'Pikachu',
      description: 'An Electric-type Pokémon.',
      imageUrl: 'https://example.com/pikachu.png',
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
        imageUrl: "https://example.com/pikachu.png"
      },
      isFetching: false,
    }));

    // jest.mock('../store/selectedItemsSlice', () => ({
    //     ...jest.requireActual('../store/selectedItemsSlice'),
    //     selectItem: jest.fn(),
    //     unselectItem: jest.fn(),
    //   }));
    //   jest.mock('../store/flyoutSlice', () => ({
    //     ...jest.requireActual('../store/flyoutSlice'),
    //     showFlyout: jest.fn(),
    //     hideFlyout: jest.fn(),
    //   }));
    
    jest.clearAllMocks(); // Clear mock call count before each test
  });

  test("Ensure that the card component renders the relevant card data", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonCard pokemon={pokemonMock} />
        </MemoryRouter>
      </Provider>,
    );
    const titleElement = screen.getByText(pokemonMock.name);
    expect(titleElement).toBeInTheDocument();
  });

  test("Validate that clicking on a card opens a detailed card component", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<PokemonCard pokemon={pokemonMock} />} />
            <Route path="/details/:id" element={<DetailedCard />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const pokemonCardElement = screen.getByText(pokemonMock.name).closest('.pokemon-card');
    expect(pokemonCardElement).toBeInTheDocument();

    fireEvent.click(pokemonCardElement!);

    await waitFor(() => {
      expect(screen.getByText('Pikachu')).toBeInTheDocument();
      expect(screen.getByText('A yellow electric-type Pokemon')).toBeInTheDocument();
      expect(screen.getByAltText('Pikachu')).toHaveAttribute('src', 'https://example.com/pikachu.png');
    });
  });

  test("Check that clicking on the card triggers an additional API call to fetch detailed information", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<PokemonCard pokemon={pokemonMock} />} />
            <Route path="/details/:id" element={<DetailedCard />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    const pokemonCardElement = screen.getByText(pokemonMock.name).closest('.pokemon-card');
    expect(pokemonCardElement).toBeInTheDocument();

    fireEvent.click(pokemonCardElement!);

    await waitFor(() => {
      expect(useFetchPokemonDetailsQuery).toHaveBeenCalledWith(pokemonMock.id);
    });

    await waitFor(() => {
      expect(screen.getByText('Pikachu')).toBeInTheDocument();
      expect(screen.getByText('A yellow electric-type Pokemon')).toBeInTheDocument();
      expect(screen.getByAltText('Pikachu')).toHaveAttribute('src', 'https://example.com/pikachu.png');
    });
  });



  test("displays loading state when fetching data", () => {
    (useFetchPokemonDetailsQuery as jest.Mock).mockReturnValueOnce({
      data: null,
      isFetching: true,
    });
  
    // Устанавливаем глобальное состояние загрузки
    store.dispatch(setLoading(true));
  
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonCard pokemon={pokemonMock} />
        </MemoryRouter>
      </Provider>
    );
  
    const loaderElement = screen.getByRole('status');
    expect(loaderElement).toBeInTheDocument();
  });
  
  test("checkbox toggles selected state correctly", () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonCard pokemon={pokemonMock} />
        </MemoryRouter>
      </Provider>
    );
  
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });
  

  
  test("dispatches correct actions on checkbox change", () => {
    const dispatch = jest.spyOn(store, 'dispatch');
  
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PokemonCard pokemon={pokemonMock} />
        </MemoryRouter>
      </Provider>
    );
  
    const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
    fireEvent.click(checkbox);
  
    const expectedPokemonDetails = {
      name: 'Pikachu',
      url: pokemonMock.url,
      description: 'A yellow electric-type Pokemon',
      details: `https://pokeapi.co/api/v2/pokemon/${pokemonMock.id}`,
      imageUrl: 'https://example.com/pikachu.png',
    };
  
    // Проверяем вызовы dispatch
    expect(dispatch).toHaveBeenCalledWith(selectItem(expectedPokemonDetails));
  
    fireEvent.click(checkbox);
    expect(dispatch).toHaveBeenCalledWith(unselectItem(expectedPokemonDetails));
  
    // Проверяем отображение и скрытие флайаута
    expect(dispatch).toHaveBeenCalledWith(showFlyout());
    expect(dispatch).toHaveBeenCalledWith(hideFlyout());

  });
});
