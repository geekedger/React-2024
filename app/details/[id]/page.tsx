import React from "react";
import DetailedCard from "../../../src/components/DetailedCard/DetailedCard";
import MainPage from "../../../src/components/MainPage/MainPage";
import { fetchData } from "../../../src/server/fetchData";

const Page = async ({ params }: { params: { id: string } }) => {
  // Извлечение параметров из URL
  const searchParams = new URLSearchParams();
  searchParams.set("id", params.id);

  // Вызов fetchData для получения данных
  const data = await fetchData({
    searchParams: Object.fromEntries(searchParams.entries()),
  });

  return (
    <MainPage
      initialPokemons={data.initialPokemons}
      initialSearchTerm={data.initialSearchTerm}
      initialPage={data.initialPage}
    >
      {data.pokemonDetails && (
        <DetailedCard initialPokemonDetails={data.pokemonDetails} />
      )}
    </MainPage>
  );
};

export default Page;
