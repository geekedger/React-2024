import React, { useState, useEffect } from "react";
import "./SearchComponent.css";
import { useTheme } from "../../contexts/ThemeContext";

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
    <form onSubmit={handleSubmit} className={`search-form ${theme}`}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search Pokémon"
        className={`search-input`}
      />
      <button type="submit" className={`search-button`}>
        Search
      </button>
    </form>
  );
};

export default SearchComponent;
