import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import { Pokemon } from "../../Interfaces/IPokemon";
import "./ResultsComponent.css";

interface ResultsComponentProps {
  pokemons: Pokemon[];  // Make sure this is always an array
  error: string | null;
}

const ResultsComponent: React.FC<ResultsComponentProps> = ({
  pokemons = [],  // Provide a default value to prevent undefined issues
  error,
}) => {
  if (error) {
    return <p>{error}</p>;
  }

  if (pokemons.length === 0) {
    return <p className="no-pokemon-message">No Pokemon found</p>;
  }

  return (
    <ul className="pokemon-list">
      {pokemons.map((pokemon) => (
        <li key={pokemon.name} className="pokemon-list-item">
          <PokemonCard pokemon={pokemon} />
        </li>
      ))}
    </ul>
  );
};

export default ResultsComponent;
