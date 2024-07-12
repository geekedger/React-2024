// PokemonCard.tsx

import React from 'react';
import './PokemonCard.css';
import sanitizeDescription from '../../utility/sanitizeText';

interface PokemonCardProps {
  name: string;
  description: string;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ name, description }) => {
  const sanitizedDescription = sanitizeDescription(description);
  return (
    <div className="pokemon-card">
      <h2>{name}</h2>
      <p>{sanitizedDescription}</p>
    </div>
  );
};

export default PokemonCard;
