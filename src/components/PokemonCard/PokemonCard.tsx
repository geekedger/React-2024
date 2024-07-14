// PokemonCard.tsx

import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { Pokemon } from "../../api/api";
import "./PokemonCard.css";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const [params] = useSearchParams();
  const page = params.get("page") || 1;

  const id = pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/", "");

  return (
    <NavLink to={`/details/${id}?page=${page}`} className="pokemon-card-link">
      <div className="pokemon-card">
        <h2>{pokemon.name}</h2>
      </div>
    </NavLink>
  );
};

export default PokemonCard;
