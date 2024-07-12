import React, { useCallback, useEffect, useState } from 'react';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import SearchComponent from './components/SearchComponent/SearchComponent';
import ResultsComponent from './components/ResultsComponent/ResultsComponent';
import FallbackComponent from './components/FallbackComponent/FallbackComponent';
import Pagination from './components/Pagination/Pagination';
import Loader from './components/Loader/Loader';
import { fetchPokemons } from './api/api';
import useSearchQuery from './hooks/useSearchQuery';
import './App.css';

interface Pokemon {
  name: string;
  description: string;
}

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useSearchQuery('searchTerm', '');
  const [currentPage, setCurrentPage] = useSearchQuery('currentPage', '1');
  const navigate = useNavigate();

  const fetchData = useCallback(
    async (searchTerm: string = '', page: number = 1) => {
      setLoading(true);
      setError(null);
      try {
        const pokemons = await fetchPokemons(searchTerm, page);
        setPokemons(pokemons);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    const savedSearchTerm = searchParams.get('search') || searchTerm;
    const savedPage = searchParams.get('page')
      ? parseInt(searchParams.get('page')!)
      : parseInt(currentPage);

    setSearchTerm(savedSearchTerm);
    setCurrentPage(savedPage.toString());

    fetchData(savedSearchTerm, savedPage);
  }, [
    searchParams,
    searchTerm,
    currentPage,
    setSearchTerm,
    setCurrentPage,
    fetchData,
  ]);

  const handleSearch = (newSearchTerm: string) => {
    setSearchTerm(newSearchTerm);
    setCurrentPage('1');
    setPokemons([]); // Очистить список покемонов перед новым поиском
    navigate(`/?search=${newSearchTerm}&page=1`); // Убираем параметр details
  };

  const handleRetry = () => {
    setError(null);
    fetchData(searchTerm, parseInt(currentPage));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page.toString());
    navigate(`/?search=${searchTerm}&page=${page}`); // Убираем параметр details
  };

  const handleCardClick = (name: string) => {
    navigate(`/details/${name}?search=${searchTerm}&page=${currentPage}`);
  };

  return (
    <ErrorBoundary fallback={<FallbackComponent onRetry={handleRetry} />}>
      <div className="app">
        <div className="app-left">
          <div className="app-top">
            <SearchComponent onSearch={handleSearch} />
            {loading && <Loader />}
            {error && !loading && <p className="error-message">{error}</p>}
          </div>
          <div className="app-bottom">
            {!loading && !error && (
              <>
                <ResultsComponent
                  pokemons={pokemons}
                  onCardClick={handleCardClick}
                  error={null}
                />
                <Pagination onPageChange={handlePageChange} />
              </>
            )}
          </div>
        </div>
        <div className="app-right">
          <Outlet />
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
