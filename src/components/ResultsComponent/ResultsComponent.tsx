// ResultsComponent.tsx

import React from 'react';
import './ResultsComponent.css';
import PokemonCard from '../PokemonCard/PokemonCard';

interface ResultsComponentProps {
  pokemons: { name: string; description: string }[];
  error: string | null; // Сообщение об ошибке
  onCardClick: (name: string) => void;
}

const ResultsComponent: React.FC<ResultsComponentProps> = ({
  pokemons,
  error,
  onCardClick,
}) => (
  <div className="results">
    {error ? (
      <p className="error-message">{error}</p> // Отображаем сообщение об ошибке
    ) : pokemons.length > 0 ? (
      pokemons.map((pokemon, index) => (
        <div key={index} onClick={() => onCardClick(pokemon.name)}>
          <PokemonCard name={pokemon.name} description={pokemon.description} />
        </div>
      ))
    ) : (
      <p className="no-results">No Pokémon found</p> // Сообщение, если покемоны не найдены
    )}
  </div>
);

export default ResultsComponent;
