// api/api.ts

const BASE_URL = "https://pokeapi.co/api/v2";

export interface Pokemon {
  name: string;
  url: string;
}

// Определение интерфейсов для данных API
interface PokemonResponse {
  results: Pokemon[];
}

interface PokemonData {
  name: string;
  flavor_text_entries: { flavor_text: string; language: { name: string } }[];
  sprites: {
    other: {
      "official-artwork": { front_default: string };
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
  searchTerm: string = "",
  page: number = 1,
): Promise<PokemonResponse> => {
  // Формируем URL с параметрами постраничной навигации
  const url = searchTerm
    ? `${BASE_URL}/pokemon?limit=1000` // Загружаем всех покемонов для поиска по имени
    : `${BASE_URL}/pokemon?limit=20&offset=${(page - 1) * 20}`; // Загружаем 20 покемонов на странице

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data: PokemonResponse = await response.json();

  if (searchTerm) {
    data.results = data.results.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }

  return data;
};

// Получение подробной информации о покемоне по имени
export const fetchPokemonDetails = async (
  id: number,
): Promise<PokemonDetails> => {
  const url = `${BASE_URL}/pokemon-species/${id}`;
  const response = await fetch(url);
  const pokemon: PokemonData = await response.json();

  const description =
    pokemon.flavor_text_entries.find((entry) => entry.language.name === "en")
      ?.flavor_text || "No description available";
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return { name: pokemon.name, description, imageUrl };
};
