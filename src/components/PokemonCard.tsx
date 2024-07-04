import React from 'react';

interface PokemonCardProps {
  name: string;
  description: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, description }) => {
  return (
    <div className="pokemon-card">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
};

export default PokemonCard;
