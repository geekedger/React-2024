"use client";
import React, { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useFetchPokemonDetailsQuery } from "../../store/apiSlice";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import sanitizeDescription from "../../utils/sanitizeText";
import Loader from "../Loader/Loader";
import { RootState } from "../../store/store";
import {
  setPokemonDetails,
  clearPokemonDetails,
} from "../../store/pokemonDetailsSlice";
import styles from "./DetailedCard.module.css";
import { useDispatch, useSelector } from "react-redux";

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
  const searchParams = useSearchParams();
  const cardRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const pokemonDetails = useSelector(
    (state: RootState) => state.pokemonDetails,
  );

  const id = searchParams.get("id"); // Получаем ID
  const {
    data: fetchedPokemonDetails,
    isLoading,
    error,
  } = useFetchPokemonDetailsQuery(id ? parseInt(id, 10) : -1, {
    skip: !id,
  });

  // Формируем строку URL для замены
  const newUrl = `/?page=${searchParams.get("page") || ""}&search=${searchParams.get("search") || ""}`;

  useOutsideAlerter(cardRef, () => {
    router.replace(newUrl);
    dispatch(clearPokemonDetails());
  });

  useEffect(() => {
    if (initialPokemonDetails) {
      dispatch(setPokemonDetails(initialPokemonDetails));
    } else if (fetchedPokemonDetails && !isLoading) {
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
  }, [initialPokemonDetails, fetchedPokemonDetails, isLoading, dispatch]);

  if (error) {
    return <div>Error loading data</div>;
  }

  if (isLoading && !initialPokemonDetails) {
    return <Loader />;
  }

  const detailsToDisplay = initialPokemonDetails || pokemonDetails;

  if (!detailsToDisplay) {
    return <p>No data available</p>;
  }

  return (
    <div ref={cardRef} className={styles["detailed-card"]}>
      <h2>{detailsToDisplay.name}</h2>
      <img
        src={detailsToDisplay.imageUrl}
        alt={detailsToDisplay.name}
        className={styles["pokemon-image"]}
      />
      <p>{sanitizeDescription(detailsToDisplay.description)}</p>
      <button className={styles["close-button"]} onClick={() => router.back()}>
        Close
      </button>
    </div>
  );
};

export default DetailedCard;
