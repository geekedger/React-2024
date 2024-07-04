import React from 'react';

interface ResultsComponentProps {
  pokemons: { name: string; description: string }[];
}

const ResultsComponent: React.FC<ResultsComponentProps> = ({ pokemons }) => (
  <div className="results">
    {pokemons.length > 0 ? (
      pokemons.map((pokemon, index) => (
        <div key={index} className="pokemon-card">
          <h2>{pokemon.name}</h2>
          <p>{pokemon.description}</p>
        </div>
      ))
    ) : (
      <p>No Pokémon found</p>
    )}
  </div>
);

export default ResultsComponent;
