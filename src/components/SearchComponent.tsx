import React, { Component } from 'react';

interface SearchComponentProps {
  onSearch: (searchTerm: string) => void;
}

interface SearchComponentState {
  searchTerm: string;
  error: string | null;
}

class SearchComponent extends Component<
  SearchComponentProps,
  SearchComponentState
> {
  state: SearchComponentState = {
    searchTerm: '',
    error: null,
  };

  componentDidMount() {
    const savedSearchTerm = localStorage.getItem('searchTerm');
    if (savedSearchTerm) {
      this.setState({ searchTerm: savedSearchTerm });
    }
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem('searchTerm', this.state.searchTerm);
    this.props.onSearch(this.state.searchTerm);
  };

  throwError = () => {
    this.setState({ error: 'My test error' });
  };

  componentDidUpdate(_: SearchComponentProps, prevState: SearchComponentState) {
    if (prevState.error !== this.state.error && this.state.error) {
      throw new Error(this.state.error);
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          placeholder="Search Pokémon"
        />
        <button type="submit">Search</button>
        <button type="button" onClick={this.throwError}>
          Throw Error
        </button>
      </form>
    );
  }
}

export default SearchComponent;
