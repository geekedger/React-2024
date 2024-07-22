import React from 'react';
import PokemonCard from '../PokemonCard/PokemonCard';
import './ResultsComponent.css'; // Добавляем импорт CSS файла

interface ResultsComponentProps {
  pokemons: { name: string; url: string }[];
  error: string | null;
}

const ResultsComponent: React.FC<ResultsComponentProps> = ({ pokemons, error }) => {
  return (
    <div>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul className="pokemon-list">
          {pokemons.map((pokemon) => (
            <li key={pokemon.name} className="pokemon-list-item">
              <PokemonCard pokemon={pokemon} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ResultsComponent;
