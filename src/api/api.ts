const BASE_URL = 'https://pokeapi.co/api/v2';
interface PokemonResponse {
  results: { name: string; url: string }[];
}
interface PokemonSpecies {
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
}
interface PokemonData {
  name: string;
  species: { url: string };
}
export const fetchPokemons = async (
  searchTerm: string = '',
): Promise<{ name: string; description: string }[]> => {
  try {
    if (searchTerm) {
      const searchUrl = new URL(
        `${BASE_URL}/pokemon/${searchTerm.trim().toLowerCase()}`,
      );
      const response = await fetch(searchUrl.toString());
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('No Pokémon found');
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      }
      const pokemon: PokemonData = await response.json();
      const speciesResponse = await fetch(pokemon.species.url);
      if (!speciesResponse.ok) {
        throw new Error(`HTTP error! Status: ${speciesResponse.status}`);
      }
      const speciesData: PokemonSpecies = await speciesResponse.json();
      const flavorTextEntry = speciesData.flavor_text_entries.find(
        (entry) => entry.language.name === 'en',
      );
      const description = flavorTextEntry
        ? flavorTextEntry.flavor_text
        : 'No description available';
      return [{ name: pokemon.name, description }];
    } else {
      const url = new URL(`${BASE_URL}/pokemon`);
      url.searchParams.append('limit', '20');
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data: PokemonResponse = await response.json();
      if (data.results.length === 0) {
        throw new Error('No Pokémon found');
      }
      const pokemons = await Promise.all(
        data.results.map(async (pokemon) => {
          const pokemonResponse = await fetch(pokemon.url);
          if (!pokemonResponse.ok) {
            throw new Error(`HTTP error! Status: ${pokemonResponse.status}`);
          }
          const pokemonData: PokemonData = await pokemonResponse.json();
          const speciesResponse = await fetch(pokemonData.species.url);
          if (!speciesResponse.ok) {
            throw new Error(`HTTP error! Status: ${speciesResponse.status}`);
          }
          const speciesData: PokemonSpecies = await speciesResponse.json();
          const flavorTextEntry = speciesData.flavor_text_entries.find(
            (entry) => entry.language.name === 'en',
          );
          const description = flavorTextEntry
            ? flavorTextEntry.flavor_text
            : 'No description available';
          return { name: pokemon.name, description };
        }),
      );
      return pokemons;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error fetching data:', error.message);
      if (error.message === 'No Pokémon found') {
        throw new Error('No Pokémon found');
      } else {
        throw new Error('An unexpected error occurred.');
      }
    } else {
      console.error('Unexpected error:', error);
      throw new Error('An unexpected error occurred.');
    }
  }
};
