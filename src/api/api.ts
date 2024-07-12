// api/api.ts

const BASE_URL = 'https://pokeapi.co/api/v2';

// Определение интерфейсов для данных API
interface PokemonResponse {
  results: { name: string; url: string }[];
  next: string | null;
  previous: string | null;
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

// Получение подробной информации о покемоне
const getPokemonDetails = async (pokemon: {
  name: string;
  url: string;
}): Promise<{ name: string; description: string }> => {
  try {
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
      (entry) => entry.language.name === 'en'
    );
    const description = flavorTextEntry
      ? flavorTextEntry.flavor_text
      : 'No description available';
    return { name: pokemon.name, description };
  } catch (error) {
    console.error('Error fetching Pokémon details:', (error as Error).message);
    throw error; // Переправляем ошибку выше
  }
};

// Получение списка покемонов с фильтрацией по имени
export const fetchPokemons = async (
  searchTerm: string = '',
  page: number = 1
): Promise<{ name: string; description: string }[]> => {
  try {
    let url = `${BASE_URL}/pokemon?limit=20&offset=${(page - 1) * 20}`;
    if (searchTerm) {
      url = `${BASE_URL}/pokemon?limit=1000`; // Загружаем всех покемонов для поиска по имени
    }
    console.log(`Fetching from URL: ${url}`); // Логирование URL

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data: PokemonResponse = await response.json();
    const filteredResults = searchTerm
      ? data.results.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : data.results;

    if (filteredResults.length === 0) {
      throw new Error('No Pokémon found');
    }

    // Получение деталей покемонов и формирование результата
    const pokemons = await Promise.all(filteredResults.map(getPokemonDetails));

    return pokemons;
  } catch (error) {
    console.error('Error fetching Pokémon list:', (error as Error).message);
    throw error; // Переправляем ошибку выше
  }
};

// Получение подробной информации о покемоне по имени
export const fetchPokemonDetails = async (
  name: string
): Promise<PokemonDetails> => {
  try {
    const url = `${BASE_URL}/pokemon/${name}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const pokemon: PokemonData = await response.json();
    const speciesResponse = await fetch(pokemon.species.url);
    if (!speciesResponse.ok) {
      throw new Error(`HTTP error! Status: ${speciesResponse.status}`);
    }

    const speciesData: PokemonSpecies = await speciesResponse.json();
    const flavorTextEntry = speciesData.flavor_text_entries.find(
      (entry) => entry.language.name === 'en'
    );
    const description = flavorTextEntry
      ? flavorTextEntry.flavor_text
      : 'No description available';
    const imageUrl = pokemon.sprites.other['official-artwork'].front_default;

    return { name: pokemon.name, description, imageUrl };
  } catch (error) {
    console.error('Error fetching Pokémon details:', (error as Error).message);
    throw error; // Переправляем ошибку выше
  }
};
