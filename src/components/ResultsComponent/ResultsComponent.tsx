// ResultsComponent.tsx

import React from "react";
import "./ResultsComponent.css";
import PokemonCard from "../PokemonCard/PokemonCard";
import { Pokemon } from "../../api/api";

interface ResultsComponentProps {
  pokemons: Pokemon[];
  error: string | null; // Сообщение об ошибке
}

const ResultsComponent: React.FC<ResultsComponentProps> = ({
  pokemons,
  error,
}) => (
  <div className="results">
    {error ? (
      <p className="error-message">{error}</p> // Отображаем сообщение об ошибке
    ) : pokemons.length > 0 ? (
      pokemons.map((pokemon, index) => (
        <div key={index}>
          <PokemonCard pokemon={pokemon} />
        </div>
      ))
    ) : (
      <p className="no-results">No Pokemon found</p> // Сообщение, если покемоны не найдены
    )}
  </div>
);

export default ResultsComponent;
