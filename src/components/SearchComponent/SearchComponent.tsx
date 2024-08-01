import React, { useState, useEffect } from "react";
import styles from "./SearchComponent.module.css";
import { useTheme } from "../../hooks/useTheme";

interface SearchComponentProps {
  searchTerm: string;
  onSearch: (searchTerm: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  searchTerm: initialSearchTerm,
  onSearch,
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const { theme } = useTheme();

  useEffect(() => {
    setSearchTerm(initialSearchTerm);
  }, [initialSearchTerm]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles["search-form"]} ${styles[theme]}`}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search Pokémon"
        className={styles[`search-input`]}
      />
      <button type="submit" className={styles[`search-button`]}>
        Search
      </button>
    </form>
  );
};

export default SearchComponent;
