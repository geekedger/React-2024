import { Pokemon } from "../../Interfaces/IPokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

// Fetch list of Pokémon
export async function fetchPokemons(searchTerm = "", page = 1) {
  const url = searchTerm
    ? `${BASE_URL}/pokemon?limit=1000`
    : `${BASE_URL}/pokemon?limit=20&offset=${(page - 1) * 20}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch pokemons");
  }

  const dataFromServer = await res.json();

  // Filter by searchTerm if provided
  if (searchTerm) {
    dataFromServer.results = dataFromServer.results.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }

  return {
    dataFromServer: {
      results: dataFromServer.results,
    },
  };
}

// Fetch details of a single Pokémon
export async function fetchPokemonDetails(id: number) {
  const url = `${BASE_URL}/pokemon-species/${id}`;

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch pokemon details");
  }

  const dataFromServer = await res.json();

  const description =
    dataFromServer.flavor_text_entries?.find(
      (entry: { language: { name: string }; flavor_text: string }) =>
        entry.language.name === "en",
    )?.flavor_text || "No description available";

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return {
    dataFromServer: {
      name: dataFromServer.name,
      description,
      imageUrl,
    },
  };
}

// Main function to fetch data and combine responses
export async function fetchData({
  searchParams,
  pokemons = [],
}: {
  searchParams: Record<string, string | string[] | undefined>;
  pokemons?: Pokemon[];
}) {
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

  try {
    // Fetch Pokémon data
    const { dataFromServer: pokemonsData } = await fetchPokemons(
      searchTerm,
      page,
    );

    // Fetch Pokémon details if an ID is provided
    const pokemonDetailsData = extractedId
      ? await fetchPokemonDetails(extractedId)
      : { dataFromServer: { name: "", description: "", imageUrl: "" } };

    const finalData = {
      initialPokemons: [...pokemons, ...pokemonsData.results],
      initialSearchTerm: searchTerm,
      initialPage: page,
      initialPokemonDetails: pokemonDetailsData.dataFromServer,
    };

    return {
      dataFromServer: finalData,
      success: true,
    };
  } catch (error) {
    let errorMessage = "An unknown error occurred";

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error("Error fetching data:", errorMessage);

    return {
      dataFromServer: {
        initialPokemons: pokemons,
        initialSearchTerm: searchTerm,
        initialPage: page,
        initialPokemonDetails: null,
      },
      success: false,
      error: errorMessage,
    };
  }
}
