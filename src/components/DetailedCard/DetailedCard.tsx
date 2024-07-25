// src/components/DetailedCard/DetailedCard.tsx
import React, { useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFetchPokemonDetailsQuery } from "../../store/apiSlice";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import sanitizeDescription from "../../utils/sanitizeText";
import Loader from "../Loader/Loader";
import { useDispatch } from "react-redux";
import { setPokemonDetails, clearPokemonDetails } from "../../store/pokemonDetailsSlice";
import "./DetailedCard.css";

const DetailedCard: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Получаем ID покемона из URL
  const navigate = useNavigate();
  const cardRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const { data: pokemonDetails, isLoading } = useFetchPokemonDetailsQuery(parseInt(id!, 10));

  const handleClose = () => {
    navigate(-1); 
    dispatch(clearPokemonDetails());
  };

  useOutsideAlerter(cardRef, handleClose);

  useEffect(() => {
    if (pokemonDetails) {
      const sanitizedDescription = sanitizeDescription(pokemonDetails.description);
      dispatch(setPokemonDetails({
        name: pokemonDetails.name,
        description: sanitizedDescription,
        imageUrl: pokemonDetails.imageUrl
      }));
    }
  }, [pokemonDetails, dispatch]);

  let content;

  if (isLoading) {
    content = <Loader />;
  } else if (pokemonDetails) {
    content = (
      <div>
        <h2>{pokemonDetails.name}</h2>
        <img
          src={pokemonDetails.imageUrl}
          alt={pokemonDetails.name}
          className="pokemon-image"
        />
        <p>{sanitizeDescription(pokemonDetails.description)}</p>
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
