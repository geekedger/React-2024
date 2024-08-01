// src/components/ResultsComponent/ResultsComponent.tsx
import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import styles from "./ResultsComponent.module.css";
import { Pokemon } from "../../Interfaces/IPokemon";

interface ResultsComponentProps {
  pokemons: Pokemon[];
  error: string | null;
}

const ResultsComponent: React.FC<ResultsComponentProps> = ({
  pokemons,
  error,
}) => {
  if (error) {
    return <p>{error}</p>;
  }

  if (pokemons.length === 0) {
    return <p className={styles["no-pokemon-message"]}>No Pokemon found</p>;
  }

  return (
    <ul className={styles["pokemon-list"]}>
      {pokemons.map((pokemon) => (
        <li key={pokemon.name} className={styles["pokemon-list-item"]}>
          <PokemonCard pokemon={pokemon} />
        </li>
      ))}
    </ul>
  );
};

export default ResultsComponent;
