// components/DetailedCard/DetailedCard.tsx

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useFetchPokemonDetailsQuery } from "../../store/apiSlice";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import sanitizeDescription from "../../utils/sanitizeText";
import Loader from "../Loader/Loader";
import { useDispatch } from "react-redux";
import {
  setPokemonDetails,
  clearPokemonDetails,
} from "../../store/pokemonDetailsSlice";
import styles from "./DetailedCard.module.css";

interface DetailedCardProps {
  id: string;
}

const DetailedCard: React.FC<DetailedCardProps> = () => {
  const router = useRouter();
  const { id } = router.query;
  const cardRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();

  const { data: pokemonDetails, isLoading } = useFetchPokemonDetailsQuery(
    parseInt(id as string, 10),
  );

  const handleClose = () => {
    router.back();
    dispatch(clearPokemonDetails());
  };

  useOutsideAlerter(cardRef, handleClose);

  useEffect(() => {
    if (pokemonDetails) {
      const sanitizedDescription = sanitizeDescription(
        pokemonDetails.description,
      );
      dispatch(
        setPokemonDetails({
          name: pokemonDetails.name,
          description: sanitizedDescription,
          imageUrl: pokemonDetails.imageUrl,
        }),
      );
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
          className={styles["pokemon-image"]}
        />
        <p>{sanitizeDescription(pokemonDetails.description)}</p>
        <button className={styles["close-button"]} onClick={handleClose}>
          Close
        </button>
      </div>
    );
  }

  return (
    <div ref={cardRef} className={styles["detailed-card"]}>
      {content}
    </div>
  );
};

export default DetailedCard;
