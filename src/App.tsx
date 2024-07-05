import React, { Component } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import SearchComponent from './components/SearchComponent';
import ResultsComponent from './components/ResultsComponent';
import FallbackComponent from './components/FallbackComponent';
import { fetchPokemons } from './api/api';

interface Pokemon {
  name: string;
  description: string;
}

interface AppState {
  pokemons: Pokemon[];
  error: string | null;
  loading: boolean;
}

class App extends Component<Record<string, never>, AppState> {
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
      this.setState({ pokemons, loading: false });
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
          <SearchComponent onSearch={this.handleSearch} />
          {loading && <p>Loading...</p>}
          {error && !loading && <p>{error}</p>}
          {!loading && !error && <ResultsComponent pokemons={pokemons} />}
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
