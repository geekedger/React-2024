// pages/details/[id].tsx
import React from "react";
import DetailedCard from "../../src/components/DetailedCard/DetailedCard";
import MainPage from "../../src/components/MainPage/MainPage";
import getServerSideProps from "../../src/server/getServerSideProps";
import { Pokemon } from "../../src/Interfaces/IPokemon";
import { PokemonDetails } from "../../src/Interfaces/IPokemondetails";

interface DetailPageProps {
  searchTerm: string;
  page: number;
  initialPokemons: Pokemon[];
  pokemonDetails: PokemonDetails | null;
}

const DetailPage: React.FC<DetailPageProps> = ({
  searchTerm,
  page,
  initialPokemons,
  pokemonDetails,
}) => {
  return (
    <MainPage
      initialPokemons={initialPokemons}
      initialSearchTerm={searchTerm}
      initialPage={page}
    >
      {pokemonDetails && (
        <DetailedCard initialPokemonDetails={pokemonDetails} />
      )}
    </MainPage>
  );
};

// Экспортируйте getServerSideProps
export { getServerSideProps };

export default DetailPage;
/* eslint-enable react-refresh/only-export-components */
