import React, { Component } from 'react';

interface SearchComponentProps {
  onSearch: (searchTerm: string) => void;
}

interface SearchComponentState {
  searchTerm: string;
}

class SearchComponent extends Component<SearchComponentProps, SearchComponentState> {
  state: SearchComponentState = {
    searchTerm: '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onSearch(this.state.searchTerm);
  };

  throwError = () => {
    throw new Error('Test error');
  };

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
