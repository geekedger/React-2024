// src/server/fetchData.ts
import { Pokemon } from "../Interfaces/IPokemon";
import { PokemonDetails } from "../Interfaces/IPokemondetails";
import { revalidateTag } from "next/cache";

const BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchData({
  searchParams,
  pokemons = [],
}: {
  searchParams: Record<string, string | string[] | undefined>;
  pokemons?: Pokemon[];
}) {
  // Извлечение параметров из searchParams
  const searchTerm = Array.isArray(searchParams.search)
    ? searchParams.search[0]
    : searchParams.search || "";
  const page = parseInt(
    Array.isArray(searchParams.page)
      ? searchParams.page[0]
      : searchParams.page || "1",
    10,
  );
  const idParam = Array.isArray(searchParams.id)
    ? searchParams.id[0]
    : searchParams.id;
  const extractedId = idParam ? parseInt(idParam, 10) : null;

  const fetchPokemons = async () => {
    const url = searchTerm
      ? `${BASE_URL}/pokemon?limit=1000`
      : `${BASE_URL}/pokemon?limit=20&offset=${(page - 1) * 20}`;

    const response = await fetch(url, { cache: "force-cache" });
    if (!response.ok) {
      throw new Error("Failed to fetch pokemons");
    }
    const data = await response.json();
    if (searchTerm) {
      data.results = data.results.filter((pokemon: Pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }
    return data.results;
  };

  const fetchPokemonDetails = async (id: number) => {
    const url = `${BASE_URL}/pokemon-species/${id}`;
    const response = await fetch(url, { cache: "force-cache" });
    if (!response.ok) {
      throw new Error("Failed to fetch pokemon details");
    }
    const data = await response.json();
    const description =
      data.flavor_text_entries?.find(
        (entry: { language: { name: string }; flavor_text: string }) =>
          entry.language.name === "en",
      )?.flavor_text || "Failed to fetch pokemon description";
    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    return {
      name: data.name,
      description,
      imageUrl,
    } as PokemonDetails;
  };

  const fetchedPokemons = await fetchPokemons();
  const pokemonDetails = extractedId
    ? await fetchPokemonDetails(extractedId)
    : null;

  if (extractedId) {
    revalidateTag(`pokemon-${extractedId}`);
  }

  return {
    initialPokemons: [...pokemons, ...fetchedPokemons],
    initialSearchTerm: searchTerm,
    initialPage: page,
    pokemonDetails: pokemonDetails || null,
  };
}
