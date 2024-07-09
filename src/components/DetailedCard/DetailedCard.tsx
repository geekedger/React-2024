import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPokemons } from '../../api/api';
import Loader from '../Loader/Loader';
import './DetailedCard.css';

const DetailedCard: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<{
    name: string;
    description: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const pokemons = await fetchPokemons(id || '');
        setPokemon(pokemons[0]);
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
    <div className="detailed-card">
      {loading && <Loader />}
      {error && <p className="error-message">{error}</p>}
      {pokemon && (
        <div>
          <h2>{pokemon.name}</h2>
          <p>{pokemon.description}</p>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default DetailedCard;
