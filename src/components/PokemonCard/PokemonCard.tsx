import React, { useEffect } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { selectItem, unselectItem, setLoading } from '../../store/selectedItemsSlice';
import { showFlyout, hideFlyout } from '../../store/flyoutSlice';
import { useFetchPokemonDetailsQuery } from '../../store/apiSlice';
import { Pokemon } from "../../api/api";
import "./PokemonCard.css";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const [params] = useSearchParams();
  const page = params.get("page") || 1;
  const id = parseInt(pokemon.url.split('/').filter(Boolean).pop()!);
  const { data: details, isFetching } = useFetchPokemonDetailsQuery(id);
  const dispatch = useDispatch();
  const selectedItems = useSelector((state: RootState) => state.selectedItems.selectedItems);
  const isLoading = useSelector((state: RootState) => state.selectedItems.isLoading);

  useEffect(() => {
    dispatch(setLoading(isFetching));
  }, [isFetching, dispatch]);

  const isSelected = selectedItems.some(item => item.name === pokemon.name);

  const handleCheckboxChange = () => {
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

  return (
    <div className="pokemon-card">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
        className="pokemon-card-checkbox"
        disabled={isFetching} // Disable checkbox if details are being fetched
      />
      <NavLink to={`/details/${id}?page=${page}`} className="pokemon-card-link">
        <div className="pokemon-card-content">
          <h2>{pokemon.name}</h2>
          {isLoading && <p>Loading...</p>} {/* Show loading indicator if data is being loaded */}
        </div>
      </NavLink>
    </div>
  );
};

export default PokemonCard;
