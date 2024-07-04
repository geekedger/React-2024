import React, { Component } from 'react';
import { fetchPokemons } from './api/api';
import SearchComponent from './components/SearchComponent';
import ResultsComponent from './components/ResultsComponent';
import ErrorBoundary from './components/ErrorBoundary';

interface State {
  results: { name: string; description: string }[];
  loading: boolean;
}

class App extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      results: [],
      loading: true,
    };
  }

  componentDidMount() {
    const savedTerm = localStorage.getItem('searchTerm') || '';
    this.searchPokemons(savedTerm);
  }

  searchPokemons = async (searchTerm: string) => {
    this.setState({ loading: true });
    try {
      const results = await fetchPokemons(searchTerm);
      this.setState({ results, loading: false });
    } catch (error) {
      this.setState({ loading: false });
    }
  };

  render() {
    const { results, loading } = this.state;
    return (
      <ErrorBoundary>
        <div>
          <div style={{ height: '20%' }}>
            <SearchComponent onSearch={this.searchPokemons} />
          </div>
          <div style={{ height: '80%' }}>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <ResultsComponent results={results} />
            )}
          </div>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
