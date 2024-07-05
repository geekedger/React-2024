const BASE_URL = 'https://pokeapi.co/api/v2';

interface PokemonResponse {
  results: { name: string; url: string }[];
}

interface PokemonDetailResponse {
  name: string;
  species: { url: string };
}

export const fetchPokemons = async (
  searchTerm: string = ''
): Promise<{ name: string; description: string }[]> => {
  try {
    if (searchTerm) {
      // Фильтр по имени покемона
      const searchUrl = new URL(
        `${BASE_URL}/pokemon/${searchTerm.trim().toLowerCase()}`
      );
      const response = await fetch(searchUrl.toString());

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('No Pokémon found'); // Сообщение об ошибке для невалидного запроса
        } else {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
      }

      // Получаем данные покемона
      const pokemon: PokemonDetailResponse = await response.json();
      return [{ name: pokemon.name, description: pokemon.species.url }];
    } else {
      // Запрос всех покемонов с `limit`
      const url = new URL(`${BASE_URL}/pokemon`);
      url.searchParams.append('limit', '20'); // Устанавливаем лимит на количество возвращаемых покемонов

      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: PokemonResponse = await response.json();
      if (data.results.length === 0) {
        throw new Error('No Pokémon found'); // Ошибка, если нет покемонов
      }

      // Возвращаем список покемонов
      return data.results.map((pokemon) => ({
        name: pokemon.name,
        description: pokemon.url,
      }));
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
