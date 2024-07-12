import React, { useRef, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPokemonDetails } from '../../api/api';
import Loader from '../Loader/Loader';
import useOutsideAlerter from '../../hooks/useOutsideAlerter'; // Импортируйте ваш хук
import './DetailedCard.css';

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

  useOutsideAlerter(cardRef, () => {
    navigate(-1); // Навигация назад при клике вне карточки
  });

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const pokemonDetails = await fetchPokemonDetails(id || '');
        setPokemon(pokemonDetails);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  const handleClose = () => {
    navigate('/');
  };

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
