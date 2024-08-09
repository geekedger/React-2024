// app/components/DetailedCard/DetailedCard.tsx
import React, { useRef } from "react";
import { useNavigate } from "@remix-run/react";
import { useDispatch } from "react-redux";
import "./DetailedCard.css";
import { clearPokemonDetails } from "../../store/pokemonDetailsSlice";
import sanitizeDescription from "../../utils/sanitizeText";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

interface DetailedCardProps {
  pokemonDetails: {
    name: string;
    description: string;
    imageUrl: string;
  };
}

const DetailedCard: React.FC<DetailedCardProps> = ({ pokemonDetails }) => {
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const handleClose = () => {
    navigate(-1);
    dispatch(clearPokemonDetails());
  };

  useOutsideAlerter(cardRef, handleClose);

  const sanitizedDescription = sanitizeDescription(pokemonDetails.description);

  return (
    <div ref={cardRef} className="detailed-card">
      <h2>{pokemonDetails.name}</h2>
      <img
        src={pokemonDetails.imageUrl}
        alt={pokemonDetails.name}
        className="pokemon-image"
      />
      <p>{sanitizedDescription}</p>
      <button className="close-button" onClick={handleClose}>
        Close
      </button>
    </div>
  );
};

export default DetailedCard;
