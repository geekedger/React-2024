// src/store/apiSlice.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setPageItems } from './currentPageSlice'; // Импортируем action
import { AppDispatch } from './store'; // Импортируем тип AppDispatch

// Define interfaces
export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonResponse {
  results: Pokemon[];
}

export interface PokemonDetails {
  name: string;
  description: string;
  imageUrl: string;
}

// Create the API slice
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2' }),
  endpoints: (builder) => ({
    fetchPokemons: builder.query<PokemonResponse, { searchTerm?: string; page?: number }>({
      query: ({ searchTerm = '', page = 1 }) => {
        const url = searchTerm
          ? `/pokemon?limit=1000` // Загружаем всех покемонов для поиска по имени
          : `/pokemon?limit=20&offset=${(page - 1) * 20}`; // Загружаем 20 покемонов на странице
        return url;
      },
      transformResponse: (response: PokemonResponse) => response,
      async onQueryStarted({ searchTerm, page }, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // Save page items in store
          dispatch(setPageItems(data.results));
        } catch (err) {
          console.error('Failed to fetch Pokémon data:', err);
        }
      },
    }),
    fetchPokemonDetails: builder.query<PokemonDetails, number>({
      query: (id: number) => `/pokemon-species/${id}`,
      transformResponse: (response: {
        name: string;
        flavor_text_entries: {
          flavor_text: string;
          language: { name: string };
        }[];
        sprites: {
          other: {
            'official-artwork': { front_default: string };
          };
        };
      }) => {
        const description =
          response.flavor_text_entries.find(
            (entry) => entry.language.name === 'en',
          )?.flavor_text || 'No description available';
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${response.name}.png`;

        return { name: response.name, description, imageUrl };
      },
    }),
  }),
});

export const { useFetchPokemonsQuery, useFetchPokemonDetailsQuery } = api;
