import React from 'react';
import './ResultsComponent.css';
import PokemonCard from '../PokemonCard/PokemonCard';

interface ResultsComponentProps {
  pokemons: { name: string; description: string }[];
}

const ResultsComponent: React.FC<ResultsComponentProps> = ({ pokemons }) => (
  <div className="results">
    {pokemons.length > 0 ? (
      pokemons.map((pokemon, index) => (
        <PokemonCard
          key={index}
          name={pokemon.name}
          description={pokemon.description}
        />
      ))
    ) : (
      <p className="no-results">нет покемонов</p>
    )}
  </div>
);

export default ResultsComponent;
