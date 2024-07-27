import 'whatwg-fetch';
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchPokemonDetailsQuery, useFetchPokemonsQuery } from "../store/apiSlice";
import { Provider } from "react-redux";
import { ReactNode } from "react";
import store from "../store/store";
import fetchMock from "jest-fetch-mock";
import { mockPokemonDetails } from "./mocks/PokemonCard.mock";
import { mockPokemons } from "./mocks/CardList.mock";

fetchMock.enableMocks();

function Wrapper(props: { children: ReactNode }) {
  return <Provider store={store}>{props.children}</Provider>;
}

beforeEach(() => {
  fetchMock.resetMocks();
});

describe("ApiSlice", () => {
  test("check if useFetchPokemonDetailsQuery hook works correctly", async () => {
    fetchMock.mockOnceIf(
      `https://pokeapi.co/api/v2/pokemon-species/1`,
      () =>
        Promise.resolve({
          status: 200,
          body: JSON.stringify({
            id: 1,
            name: mockPokemonDetails.name,
            flavor_text_entries: [
              {
                flavor_text: mockPokemonDetails.description,
                language: { name: 'en' },
              },
            ],
            sprites: {
              other: {
                'official-artwork': { front_default: mockPokemonDetails.imageUrl },
              },
            },
          }),
        })
    );

    const { result } = renderHook(() => useFetchPokemonDetailsQuery(1), {
      wrapper: Wrapper,
    });

    expect(result.current).toMatchObject({
      status: "pending",
      endpointName: "fetchPokemonDetails",
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(fetchMock.mock.calls.length).toBe(1);

    expect(result.current).toMatchObject({
      status: "fulfilled",
      endpointName: "fetchPokemonDetails",
      data: mockPokemonDetails,
      isLoading: false,
      isSuccess: true,
      isError: false,
      currentData: mockPokemonDetails,
      isFetching: false,
    });
  });

  test("check if useFetchPokemonsQuery hook works correctly", async () => {
    fetchMock.mockOnceIf(
      `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`,
      () =>
        Promise.resolve({
          status: 200,
          body: JSON.stringify({
            results: mockPokemons.results,
          }),
        })
    );

    const { result } = renderHook(() => useFetchPokemonsQuery({ page: 1 }), {
      wrapper: Wrapper,
    });

    expect(result.current).toMatchObject({
      status: "pending",
      endpointName: "fetchPokemons",
      isLoading: true,
      isSuccess: false,
      isError: false,
      isFetching: true,
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(fetchMock.mock.calls.length).toBe(1);

    expect(result.current).toMatchObject({
      status: "fulfilled",
      endpointName: "fetchPokemons",
      data: mockPokemons,
      isLoading: false,
      isSuccess: true,
      isError: false,
      currentData: {},
      isFetching: false,
    });
  });
});
