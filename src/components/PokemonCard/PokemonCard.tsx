// PokemonCard.tsx

import React from 'react';
import './PokemonCard.css';
import sanitizeDescription from '../../utility/sanitizeText';

interface PokemonCardProps {
  name: string;
  description: string;
  onClick?: () => void; // Add the onClick prop as optional
}

const PokemonCard: React.FC<PokemonCardProps> = ({
  name,
  description,
  onClick,
}) => {
  const sanitizedDescription = sanitizeDescription(description);

  return (
    <div className="pokemon-card" onClick={onClick}>
      {' '}
      {/* Add onClick handler */}
      <h2>{name}</h2>
      <p>{sanitizedDescription}</p>
    </div>
  );
};

export default PokemonCard;
