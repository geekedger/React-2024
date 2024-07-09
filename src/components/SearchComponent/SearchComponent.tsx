import React, { useState, useEffect } from 'react';
import './SearchComponent.css';

interface SearchComponentProps {
  onSearch: (searchTerm: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  // Загружаем сохраненный searchTerm из localStorage при монтировании компонента
  useEffect(() => {
    const savedSearchTerm = localStorage.getItem('searchTerm');
    if (savedSearchTerm) {
      setSearchTerm(savedSearchTerm);
    }
  }, []);

  // Обработка ошибок: выбрасываем ошибку, если есть ошибка в состоянии
  useEffect(() => {
    if (error) {
      throw new Error(error);
    }
  }, [error]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('searchTerm', searchTerm);
    onSearch(searchTerm);
  };

  // Метод для тестирования обработки ошибок
  const throwError = () => {
    setError('My test error');
  };

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
