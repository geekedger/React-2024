import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setLoading } from "./loadingSlice";
import { setPageItems } from "./currentPageSlice";
import { Pokemon } from "../Interfaces/IPokemon";
import { PokemonDetails } from "../Interfaces/IPokemondetails";

export interface PokemonResponse {
  results: Pokemon[];
}

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2" }),
  endpoints: (builder) => ({
    fetchPokemons: builder.query<
      PokemonResponse,
      { searchTerm?: string; page?: number }
    >({
      query: ({ searchTerm = "", page = 1 }) => {
        const url = searchTerm
          ? `/pokemon?limit=1000`
          : `/pokemon?limit=20&offset=${(page - 1) * 20}`;
        return url;
      },
      transformResponse: (
        response: PokemonResponse,
        _meta,
        { searchTerm = "" },
      ) => {
        if (searchTerm) {
          response.results = response.results.filter((pokemon) =>
            pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
          );
        }
        return response;
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setLoading(true));
        try {
          const { data } = await queryFulfilled;
          dispatch(setPageItems(data.results));
        } catch (err) {
          console.error("Failed to fetch pokemons:", err);
        } finally {
          dispatch(setLoading(false));
        }
      },
    }),
    fetchPokemonDetails: builder.query<PokemonDetails, number>({
      query: (id: number) => `/pokemon-species/${id}`,
      transformResponse: (response: {
        id: number;
        name: string;
        flavor_text_entries: {
          flavor_text: string;
          language: { name: string };
        }[];
        sprites: {
          other: {
            "official-artwork": { front_default: string };
          };
        };
      }) => {
        const description =
          response.flavor_text_entries.find(
            (entry) => entry.language.name === "en",
          )?.flavor_text || "No description available";
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.id}.png`;

        return { name: response.name, description, imageUrl };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(setLoading(true));
        try {
          await queryFulfilled;
        } catch (err) {
          console.error("Failed to fetch pokemon details:", err);
        } finally {
          dispatch(setLoading(false));
        }
      },
    }),
  }),
});

export const { useFetchPokemonsQuery, useFetchPokemonDetailsQuery } = api;
