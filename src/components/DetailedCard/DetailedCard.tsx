// DetailedCard.tsx

import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPokemonDetails } from "../../api/api";
import useOutsideAlerter from "../../hooks/useOutsideAlerter"; // Импортируйте ваш хук
import sanitizeDescription from "../../utility/sanitizeText"; // Импортируем утилиту
import Loader from "../Loader/Loader";
import "./DetailedCard.css";

const DetailedCard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<{
    name: string;
    description: string;
    imageUrl: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const cardRef = useRef<HTMLDivElement>(null); // Создайте реф для карточки

  const handleClose = () => {
    navigate(-1); // Навигация назад
  };

  useOutsideAlerter(cardRef, handleClose);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const pokemonDetails = await fetchPokemonDetails(parseInt(id!));
        const sanitizedDescription = sanitizeDescription(
          pokemonDetails.description,
        ); // Применяем утилиту
        setPokemon({ ...pokemonDetails, description: sanitizedDescription });
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  return (
    <div ref={cardRef} className="detailed-card">
      {loading && <Loader />}
      {error && !loading && <p className="error-message">{error}</p>}
      {pokemon && !loading && !error && (
        <div>
          <h2>{pokemon.name}</h2>
          <img
            src={pokemon.imageUrl}
            alt={pokemon.name}
            className="pokemon-image"
          />
          <p>{pokemon.description}</p>
          <button className="close-button" onClick={handleClose}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default DetailedCard;
