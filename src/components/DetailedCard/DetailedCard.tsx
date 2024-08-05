// components/DetailedCard/DetailedCard.tsx

import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useFetchPokemonDetailsQuery } from "../../store/apiSlice";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import sanitizeDescription from "../../utils/sanitizeText";
import Loader from "../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import {
  setPokemonDetails,
  clearPokemonDetails,
} from "../../store/pokemonDetailsSlice";
import styles from "./DetailedCard.module.css";

interface DetailedCardProps {
  initialPokemonDetails?: {
    name: string;
    description: string;
    imageUrl: string;
  };
}

const DetailedCard: React.FC<DetailedCardProps> = ({
  initialPokemonDetails,
}) => {
  const router = useRouter();
  const { id } = router.query;
  const cardRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const pokemonDetails = useSelector(
    (state: RootState) => state.pokemonDetails,
  );

  // Используйте данные из props или загружайте через хук
  const { data: fetchedPokemonDetails, isLoading } =
    useFetchPokemonDetailsQuery(id ? parseInt(id as string, 10) : -1, {
      skip: !!initialPokemonDetails, // Если начальные данные есть, пропускаем запрос
    });

  useOutsideAlerter(cardRef, () => {
    router.back();
    dispatch(clearPokemonDetails());
  });

  useEffect(() => {
    if (initialPokemonDetails) {
      dispatch(setPokemonDetails(initialPokemonDetails));
    } else if (fetchedPokemonDetails) {
      const sanitizedDescription = sanitizeDescription(
        fetchedPokemonDetails.description,
      );
      dispatch(
        setPokemonDetails({
          name: fetchedPokemonDetails.name,
          description: sanitizedDescription,
          imageUrl: fetchedPokemonDetails.imageUrl,
        }),
      );
    }
  }, [initialPokemonDetails, fetchedPokemonDetails, dispatch]);

  let content;

  if (isLoading && !initialPokemonDetails) {
    content = <Loader />;
  } else {
    const detailsToDisplay = initialPokemonDetails || pokemonDetails;
    content = detailsToDisplay ? (
      <div>
        <h2>{detailsToDisplay.name}</h2>
        <img
          src={detailsToDisplay.imageUrl}
          alt={detailsToDisplay.name}
          className={styles["pokemon-image"]}
        />
        <p>{sanitizeDescription(detailsToDisplay.description)}</p>
        <button
          className={styles["close-button"]}
          onClick={() => router.back()}
        >
          Close
        </button>
      </div>
    ) : (
      <p>No data available</p>
    );
  }

  return (
    <div ref={cardRef} className={styles["detailed-card"]}>
      {content}
    </div>
  );
};

export default DetailedCard;
