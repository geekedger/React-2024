import React, { Component } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import SearchComponent from './components/SearchComponent';
import ResultsComponent from './components/ResultsComponent';
import { fetchPokemons } from './api/api';

interface AppState {
  pokemons: { name: string; description: string }[];
  error: string | null;
  loading: boolean;
}

class App extends Component<{}, AppState> {
  state: AppState = {
    pokemons: [],
    error: null,
    loading: false,
  };

  async componentDidMount() {
    this.fetchData();
  }

  fetchData = async (searchTerm: string = '') => {
    this.setState({ loading: true, error: null });

    try {
      const pokemons = await fetchPokemons(searchTerm);
      this.setState({ pokemons, loading: false });
    } catch (error) {
      this.setState({ error: error.message, pokemons: [], loading: false });
    }
  };

  handleSearch = (searchTerm: string) => {
    if (searchTerm.trim() === '') {
      this.setState({ error: 'No Pokémon found', pokemons: [], loading: false });
    } else {
      this.fetchData(searchTerm);
    }
  };

  render() {
    const { pokemons, error, loading } = this.state;

    return (
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <div className="app">
          <SearchComponent onSearch={this.handleSearch} />
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && <ResultsComponent pokemons={pokemons} />}
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
