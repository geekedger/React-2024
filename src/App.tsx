import React, { useState, useEffect } from 'react';
import { Outlet, useSearchParams, useNavigate } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import SearchComponent from './components/SearchComponent/SearchComponent';
import ResultsComponent from './components/ResultsComponent/ResultsComponent';
import FallbackComponent from './components/FallbackComponent/FallbackComponent';
import Pagination from './components/Pagination/Pagination';
import Loader from './components/Loader/Loader';
import { fetchPokemons } from './api/api';
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
  const navigate = useNavigate();

  const fetchData = async (searchTerm: string = '', page: number = 1) => {
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
  };

  useEffect(() => {
    const savedSearchTerm = searchParams.get('search') || '';
    const page = searchParams.get('page')
      ? parseInt(searchParams.get('page')!)
      : 1;
    fetchData(savedSearchTerm, page);
  }, [searchParams]);

  const handleSearch = (searchTerm: string) => {
    fetchData(searchTerm);
    navigate(`/?search=${searchTerm}&page=1`);
  };

  const handleRetry = () => {
    setError(null);
    const savedSearchTerm = searchParams.get('search') || '';
    fetchData(savedSearchTerm);
  };

  const handlePageChange = (page: number) => {
    const searchTerm = searchParams.get('search') || '';
    fetchData(searchTerm, page);
    navigate(`/?search=${searchTerm}&page=${page}`);
  };

  return (
    <ErrorBoundary fallback={<FallbackComponent onRetry={handleRetry} />}>
      <div className="app">
        <div className="app-top">
          <SearchComponent onSearch={handleSearch} />
          {loading && <Loader />}
          {error && !loading && <p className="error-message">{error}</p>}
        </div>
        <div className="app-bottom">
          {!loading && !error && (
            <>
              <ResultsComponent pokemons={pokemons} />
              <Pagination onPageChange={handlePageChange} />
              <Outlet />
            </>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default App;
