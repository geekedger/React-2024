import { GetServerSideProps } from "next";
import { wrapper } from "../store/store";
import { api } from "../store/apiSlice";
import { Pokemon } from "../Interfaces/IPokemon";
import { PokemonDetails } from "../Interfaces/IPokemondetails";

interface Props {
  initialSearchTerm: string;
  initialPage: number;
  initialPokemons: Pokemon[];
  pokemonDetails: PokemonDetails | null; // Должно быть null
}

const getServerSideProps: GetServerSideProps<Props> =
  wrapper.getServerSideProps((store) => async (context) => {
    const searchTerm = Array.isArray(context.query.search)
      ? context.query.search[0]
      : context.query.search || "";
    const page = Array.isArray(context.query.page)
      ? parseInt(context.query.page[0])
      : parseInt(context.query.page as string) || 1;
    const id = context.query.id as string | undefined;

    let pokemons: Pokemon[] = [];
    let pokemonDetails: PokemonDetails | null = null;

    // console.log('Context query:', context.query);

    try {
      if (id) {
        // console.log(`Fetching details for Pokemon ID: ${id}`);
        const result = await store.dispatch(
          api.endpoints.fetchPokemonDetails.initiate(parseInt(id, 10)),
        );
        pokemonDetails = result.data || null;
        // console.log('Fetched Pokemon Details:', pokemonDetails);
      } else {
        // console.log(`Fetching pokemons with searchTerm: ${searchTerm} and page: ${page}`);
        const result = await store.dispatch(
          api.endpoints.fetchPokemons.initiate({ searchTerm, page }),
        );
        pokemons = result.data ? result.data.results : [];
        // console.log('Fetched Pokemons:', pokemons);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }

    return {
      props: {
        initialSearchTerm: searchTerm,
        initialPage: page,
        initialPokemons: pokemons,
        pokemonDetails,
      },
    };
  });

export default getServerSideProps;
