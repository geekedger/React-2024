// src/components/DetailedCard/DetailedCard.tsx

import React, { useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchPokemonDetailsQuery } from "../../store/apiSlice";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import sanitizeDescription from "../../utils/sanitizeText";
import Loader from "../Loader/Loader";
import "./DetailedCard.css";

const DetailedCard: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Получаем ID покемона из URL
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);

  const { data: pokemonDetails, isLoading } = useFetchPokemonDetailsQuery(parseInt(id!, 10));

  const handleClose = () => {
    navigate(-1); 
  };

  useOutsideAlerter(cardRef, handleClose);

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (pokemonDetails) {
    const sanitizedDescription = sanitizeDescription(pokemonDetails.description);
    content = (
      <div>
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
  }

  return (
    <div ref={cardRef} className="detailed-card">
      {content}
    </div>
  );
};

export default DetailedCard;
