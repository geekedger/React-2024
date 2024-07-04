const BASE_URL = 'https://pokeapi.co/api/v2';

interface PokemonResponse {
  results: { name: string; url: string }[];
}

export const fetchPokemons = async (
  searchTerm: string = ''
): Promise<{ name: string; description: string }[]> => {
  try {
    const url = new URL(`${BASE_URL}/pokemon`);
    url.searchParams.append('limit', '10');
    url.searchParams.append('offset', '0');
    if (searchTerm) {
      url.searchParams.append('name', searchTerm.trim());
    }

    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: PokemonResponse = await response.json();
    return data.results.map((pokemon) => ({
      name: pokemon.name,
      description: pokemon.url,
    }));
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
