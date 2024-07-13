// api/api.ts

const BASE_URL = 'https://pokeapi.co/api/v2';

// Определение интерфейсов для данных API
interface PokemonResponse {
  results: { name: string; url: string }[];
}

interface PokemonSpecies {
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
}

interface PokemonData {
  name: string;
  species: { url: string };
  sprites: {
    other: {
      'official-artwork': { front_default: string };
    };
  };
}

interface PokemonDetails {
  name: string;
  description: string;
  imageUrl: string;
}

// Получение списка покемонов с фильтрацией по имени
export const fetchPokemons = async (
  searchTerm: string = '',
  page: number = 1
): Promise<{ name: string; description: string }[]> => {
  // Формируем URL с параметрами постраничной навигации
  const url = searchTerm
    ? `${BASE_URL}/pokemon?limit=1000` // Загружаем всех покемонов для поиска по имени
    : `${BASE_URL}/pokemon?limit=20&offset=${(page - 1) * 20}`; // Загружаем 20 покемонов на странице

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data: PokemonResponse = await response.json();
  const filteredResults = data.results.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Получаем описание для каждого покемона
  const pokemons = await Promise.all(
    filteredResults.map(async (pokemon) => {
      const pokemonResponse = await fetch(pokemon.url);
      const pokemonData: PokemonData = await pokemonResponse.json();
      const speciesResponse = await fetch(pokemonData.species.url);
      const speciesData: PokemonSpecies = await speciesResponse.json();
      const description =
        speciesData.flavor_text_entries.find(
          (entry) => entry.language.name === 'en'
        )?.flavor_text || 'No description available';
      return { name: pokemon.name, description };
    })
  );

  return pokemons;
};

// Получение подробной информации о покемоне по имени
export const fetchPokemonDetails = async (
  name: string
): Promise<PokemonDetails> => {
  const url = `${BASE_URL}/pokemon/${name}`;
  const response = await fetch(url);
  const pokemon: PokemonData = await response.json();
  const speciesResponse = await fetch(pokemon.species.url);
  const speciesData: PokemonSpecies = await speciesResponse.json();
  const description =
    speciesData.flavor_text_entries.find(
      (entry) => entry.language.name === 'en'
    )?.flavor_text || 'No description available';
  const imageUrl = pokemon.sprites.other['official-artwork'].front_default;

  return { name: pokemon.name, description, imageUrl };
};
