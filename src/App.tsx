import React from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import SearchComponent from './components/SearchComponent/SearchComponent';
import ResultsComponent from './components/ResultsComponent/ResultsComponent';
import FallbackComponent from './components/FallbackComponent/FallbackComponent';
import Loader from './components/Loader/Loader';
import { fetchPokemons } from './api/api';
import './App.css';

interface Pokemon {
  name: string;
  description: string;
}

interface AppState {
  pokemons: Pokemon[];
  error: string | null;
  loading: boolean;
}

class App extends React.Component<Record<string, never>, AppState> {
  state: AppState = {
    pokemons: [],
    error: null,
    loading: false,
  };

  async componentDidMount() {
    const savedSearchTerm = localStorage.getItem('searchTerm') || '';
    this.fetchData(savedSearchTerm);
  }

  fetchData = async (searchTerm: string = '') => {
    this.setState({ loading: true, error: null });
    try {
      const pokemons = await fetchPokemons(searchTerm);
      this.setState({ pokemons, loading: false, error: null });
    } catch (error: unknown) {
      if (error instanceof Error) {
        this.setState({ error: error.message, pokemons: [], loading: false });
      } else {
        this.setState({
          error: 'An unknown error occurred.',
          pokemons: [],
          loading: false,
        });
      }
    }
  };

  handleSearch = (searchTerm: string) => {
    this.fetchData(searchTerm);
  };

  handleRetry = () => {
    this.setState({ error: null });
    const savedSearchTerm = localStorage.getItem('searchTerm') || '';
    this.fetchData(savedSearchTerm);
  };

  render() {
    const { pokemons, error, loading } = this.state;
    return (
      <ErrorBoundary
        fallback={<FallbackComponent onRetry={this.handleRetry} />}
      >
        <div className="app">
          <div className="app-top">
            <SearchComponent onSearch={this.handleSearch} />
            {loading && <Loader />}
            {error && !loading && <p className="error-message">{error}</p>}
          </div>
          <div className={`app-bottom ${pokemons.length === 0 ? 'empty' : ''}`}>
            {!loading && !error && <ResultsComponent pokemons={pokemons} />}
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
