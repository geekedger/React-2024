import { Pokemon } from "../../Interfaces/IPokemon";

const BASE_URL = "https://pokeapi.co/api/v2";

// Fetch list of Pokémon
export async function fetchPokemons(searchTerm = "", page = 1) {
  let url = searchTerm
    ? `${BASE_URL}/pokemon?limit=1000`
    : `${BASE_URL}/pokemon?limit=20&offset=${(page - 1) * 20}`;

  console.log("Fetching Pokemons with URL:", url);

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch pokemons");
  }

  const dataFromServer = await res.json();
  console.log("Pokemons API Response:", dataFromServer);

  // Filter by searchTerm if provided
  if (searchTerm) {
    dataFromServer.results = dataFromServer.results.filter((pokemon: Pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Filtered Pokemons by searchTerm:", dataFromServer.results);
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
  
  console.log("Fetching Pokemon details with URL:", url);

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch pokemon details");
  }

  const dataFromServer = await res.json();
  console.log("Pokemon Details API Response:", dataFromServer);

  const description =
    dataFromServer.flavor_text_entries?.find(
      (entry: { language: { name: string }; flavor_text: string }) =>
        entry.language.name === "en"
    )?.flavor_text || "No description available";
  
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  console.log("Parsed Pokemon Details:", {
    name: dataFromServer.name,
    description,
    imageUrl,
  });

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

    console.log("Received searchParams:", searchParams);
    
    const searchTerm = Array.isArray(searchParams.search)
      ? searchParams.search[0]
      : searchParams.search || "";
    const page = parseInt(
      Array.isArray(searchParams.page)
        ? searchParams.page[0]
        : searchParams.page || "1",
      10
    );
    const idParam = Array.isArray(searchParams.id)
      ? searchParams.id[0]
      : searchParams.id;
    const extractedId = idParam ? parseInt(idParam, 10) : null;

    console.log("Parsed searchTerm:", searchTerm);
    console.log("Parsed page:", page);
    console.log("Parsed extractedId:", extractedId);
  
    try {
      // Fetch Pokémon data
      const { dataFromServer: pokemonsData } = await fetchPokemons(searchTerm, page);
      console.log("Fetched Pokemons Data:", pokemonsData);
      
      // Fetch Pokémon details if an ID is provided
      const pokemonDetailsData = extractedId
        ? await fetchPokemonDetails(extractedId)
        : { dataFromServer: { name: "", description: "", imageUrl: "" } };
      
      console.log("Fetched Pokemon Details Data:", pokemonDetailsData);
  
      const finalData = {
        initialPokemons: [...pokemons, ...pokemonsData.results],
        initialSearchTerm: searchTerm,
        initialPage: page,
        initialPokemonDetails: pokemonDetailsData.dataFromServer,
      };

      console.log("Final Data from Server:", finalData);

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
