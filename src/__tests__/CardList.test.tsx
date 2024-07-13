import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ResultsComponent from '../components/ResultsComponent/ResultsComponent';
import { mockPokemons } from './__ mocks __/CardList.mock';
// import PokemonCard from '../components/PokemonCard/PokemonCard';

// Mock the PokemonCard component
jest.mock('../components/PokemonCard/PokemonCard', () => ({
  __esModule: true,
  default: ({ name, description }: { name: string; description: string }) => (
    <div data-testid="pokemon-card">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  ),
}));

describe('ResultsComponent', () => {
  test('renders exactly 20 Pokémon cards on the page', () => {
    // Преобразуем mockPokemons для теста
    const pokemons = mockPokemons.results.slice(0, 20).map((pokemon) => ({
      name: pokemon.name,
      description: `Description for ${pokemon.name}`,
    }));
    const onCardClick = jest.fn();

    render(
      <ResultsComponent
        pokemons={pokemons}
        error={null}
        onCardClick={onCardClick}
      />
    );

    // Assert that exactly 20 Pokémon cards are rendered
    const cards = screen.getAllByTestId('pokemon-card');
    expect(cards).toHaveLength(20);
  });
  test('displays a "No Pokémon found" message when no Pokémon are present', () => {
    const pokemons: { name: string; description: string }[] = [];
    const onCardClick = jest.fn();

    render(
      <ResultsComponent
        pokemons={pokemons}
        error={null}
        onCardClick={onCardClick}
      />
    );

    // Assert that the "No Pokémon found" message is displayed
    expect(screen.getByText(/No Pokémon found/i)).toBeInTheDocument();
  });
  test('displays an error message when there is an error', () => {
    const pokemons = mockPokemons.results.map((pokemon) => ({
      name: pokemon.name,
      description: `Description for ${pokemon.name}`,
    }));
    const onCardClick = jest.fn();
    const errorMessage = 'An error occurred';

    render(
      <ResultsComponent
        pokemons={pokemons}
        error={errorMessage}
        onCardClick={onCardClick}
      />
    );

    // Assert that the error message is displayed
    expect(screen.getByText(errorMessage)).toBeInTheDocument();
  });
});
