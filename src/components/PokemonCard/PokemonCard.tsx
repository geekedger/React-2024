// src/components/PokemonCard.tsx
import React from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { selectItem, unselectItem } from '../../store/selectedItemsSlice';
import { showFlyout, setSelectedItems, hideFlyout } from '../../store/flyoutSlice'; // Import the actions
import { Pokemon } from "../../api/api";
import "./PokemonCard.css";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const [params] = useSearchParams();
  const page = params.get("page") || 1;
  const id = pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/", "");
  const dispatch = useDispatch();
  const selectedItems = useSelector((state: RootState) => state.selectedItems.selectedItems);

  const isSelected = selectedItems.includes(pokemon.name);

  const handleCheckboxChange = () => {
    if (isSelected) {
      dispatch(unselectItem(pokemon.name));
    } else {
      dispatch(selectItem(pokemon.name));
    }
    // Update the flyout state when selection changes
    dispatch(setSelectedItems(selectedItems));
    if (selectedItems.length > 0) {
      dispatch(showFlyout());
    } else {
      dispatch(hideFlyout());
    }
  };

  return (
    <div className="pokemon-card">
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
        className="pokemon-card-checkbox"
      />
      <NavLink to={`/details/${id}?page=${page}`} className="pokemon-card-link">
        <div className="pokemon-card-content">
          <h2>{pokemon.name}</h2>
        </div>
      </NavLink>
    </div>
  );
};

export default PokemonCard;
