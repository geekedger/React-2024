import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { selectItem, unselectItem } from "../../store/selectedItemsSlice";
import { showFlyout, hideFlyout } from "../../store/flyoutSlice";
import { useFetchPokemonDetailsQuery } from "../../store/apiSlice";

import styles from "./PokemonCard.module.css";
import { Pokemon } from "../../Interfaces/IPokemon";
import { setLoading } from "../../store/loadingSlice";
import Loader from "../Loader/Loader";

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const router = useRouter();
  const { query } = router;
  const page = query.page || "1";
  const id = parseInt(pokemon.url.split("/").filter(Boolean).pop()!);
  const { data: details, isFetching } = useFetchPokemonDetailsQuery(id);
  const dispatch = useDispatch();
  const selectedItems = useSelector(
    (state: RootState) => state.selectedItems.items,
  );

  const globalLoading = useSelector(
    (state: RootState) => state.loading.isLoading,
  );

  useEffect(() => {
    if (isFetching) {
      dispatch(setLoading(true));
    } else {
      dispatch(setLoading(false));
    }
  }, [isFetching, dispatch]);

  const isSelected = selectedItems.some((item) => item.name === pokemon.name);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.stopPropagation();

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
    router.push(`/details/${id}?page=${page}`);
  };

  return (
    <div className={styles["pokemon-card"]} onClick={handleCardClick}>
      <input
        type="checkbox"
        checked={isSelected}
        onChange={handleCheckboxChange}
        className={styles["pokemon-card-checkbox"]}
        disabled={isFetching}
        onClick={(e) => e.stopPropagation()}
      />
      <div className={styles["pokemon-card-content"]}>
        <h2>{pokemon.name}</h2>
        {globalLoading && <Loader />}
      </div>
    </div>
  );
};

export default PokemonCard;
