import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { selectItem, unselectItem } from '../../store/selectedItemsSlice';
import { showFlyout, hideFlyout } from '../../store/flyoutSlice';
import { useFetchPokemonDetailsQuery } from '../../store/apiSlice';

import "./PokemonCard.css";
import { Pokemon } from "../../Interfaces/IPokemon";
import { setLoading } from "../../store/loadingSlice";
import Loader from "../Loader/Loader";

interface PokemonCardProps {
  pokemon: Pokemon;
}


const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const [params] = useSearchParams();
  const page = params.get("page") || 1;
  const id = parseInt(pokemon.url.split('/').filter(Boolean).pop()!);
  const { data: details, isFetching } = useFetchPokemonDetailsQuery(id);
  const dispatch = useDispatch();
  const selectedItems = useSelector((state: RootState) => state.selectedItems.items);

  const navigate = useNavigate();

  // Глобальное состояние загрузки
  const globalLoading = useSelector((state: RootState) => state.loading.isLoading);

  useEffect(() => {
    if (isFetching) {
      dispatch(setLoading(true)); // Обновите глобальное состояние загрузки
    } else {
      dispatch(setLoading(false)); // Отключите состояние загрузки
    }
  }, [isFetching, dispatch]);

  const isSelected = selectedItems.some(item => item.name === pokemon.name);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation(); // Останавливаем всплытие события, чтобы клик не приводил к переходу

    if (details) {
      const pokemonDetails = {
        name: details.name,
        url: pokemon.url,
        description: details.description,
        details: `https://pokeapi.co/api/v2/pokemon/${id}`,
        imageUrl: details.imageUrl,
      };

      if (isSelected) {
        dispatch(unselectItem(pokemonDetails));
        if (selectedItems.length === 1) {
          dispatch(hideFlyout());
        }
      } else {
        dispatch(selectItem(pokemonDetails));
        if (selectedItems.length === 0) {
          dispatch(showFlyout());
        }
      }
    }
  };

  const handleCardClick = () => {
    navigate(`/details/${id}?page=${page}`);
 
  };

  return (
    <div className="pokemon-card" onClick={handleCardClick}>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
        className="pokemon-card-checkbox"
        disabled={isFetching}
        onClick={(e) => e.stopPropagation()} // Останавливаем всплытие события, чтобы клик не приводил к переходу
      />
      <div className="pokemon-card-content">
        <h2>{pokemon.name}</h2>
        {/* Показ глобального состояния загрузки */}
        {globalLoading && <Loader />}
      </div>
    </div>
  );
};

export default PokemonCard;
