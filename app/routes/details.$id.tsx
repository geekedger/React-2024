// app/routes/details.$id.tsx
import { json, LoaderFunction } from "@remix-run/node";

import { useLoaderData } from "@remix-run/react";

import React from "react";
import { PokemonDetails, PokemonSpeciesResponse } from "../Interfaces/IPokemondetails";
import DetailedCard from "../components/DetailedCard/DetailedCard";



export const loader: LoaderFunction = async ({ params }) => {
  const id = parseInt(params.id!, 10);
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  const data: PokemonSpeciesResponse = await response.json();
  
  const description =
    data.flavor_text_entries.find(
      (entry) => entry.language.name === "en"
    )?.flavor_text || "No description available";
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;

  const pokemonDetails: PokemonDetails = {
    name: data.name,
    description,
    imageUrl,
  };

  return json(pokemonDetails);
};

const DetailedCardPage: React.FC = () => {
  // Укажите тип данных для useLoaderData
  const data = useLoaderData<PokemonDetails>();
  return <DetailedCard pokemonDetails={data} />;
};

export default DetailedCardPage;
