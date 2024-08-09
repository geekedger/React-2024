import React, { useState, useEffect } from "react";
import "./SearchComponent.css";
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
  const [error, setError] = useState<Error | null>(null);

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


  const throwError = () => {
    console.log("Throwing error");
    setError(new Error("Simulated error."));
  };

  useEffect(() => {
    if (error) {
      throw error;
    }
  }, [error]);

  return (
    <form onSubmit={handleSubmit} className={`search-form ${theme}`}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search Pokemon"
        className={`search-input`}
      />
      <button type="submit" className={`search-button`}>
        Search
      </button>
      <button
        type="button"
        onClick={throwError}
        className="throw-error-button">
        Throw Error
      </button>

    </form>
  );
};

export default SearchComponent;
