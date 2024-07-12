// components/SearchComponent/SearchComponent.tsx

import React, { useState } from 'react';
import useSearchQuery from '../../hooks/useSearchQuery';
import './SearchComponent.css';

interface SearchComponentProps {
  onSearch: (searchTerm: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useSearchQuery('searchTerm', '');
  const [error, setError] = useState<string | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  const throwError = () => {
    // Устанавливаем ошибку и также передаем её родителю, если нужно.
    setError('My test error');
  };

  if (error) {
    throw new Error(error); // Позволяет ErrorBoundary перехватить ошибку
  }

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search Pokémon"
        className="search-input"
      />
      <button type="submit" className="search-button">
        Search
      </button>
      <button type="button" onClick={throwError} className="throw-error-button">
        Throw Error
      </button>
    </form>
  );
};

export default SearchComponent;
