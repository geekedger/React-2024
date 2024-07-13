// PokemonCard.test.tsx

// import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonCard from '../components/PokemonCard/PokemonCard';
import sanitizeDescription from '../utility/sanitizeText';
// import DetailedCard from '../components/DetailedCard/DetailedCard';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import App from '../App';
// import * as api from '../api/api'

// Mock the sanitizeDescription function
jest.mock('../utility/sanitizeText', () => ({
  __esModule: true,
  default: jest.fn((description) => description), // Pass through for simple tests
}));

describe('PokemonCard', () => {
  test('renders card with name and description', () => {
    const name = 'Pikachu';
    const description = 'Electric-type Pokémon';

    render(<PokemonCard name={name} description={description} />);

    // Check if the name is rendered
    expect(screen.getByText(name)).toBeInTheDocument();

    // Check if the description is rendered
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});

test('sanitizes the description', () => {
  const name = 'Pikachu';
  const description = 'Electric-type Pokémon';

  render(<PokemonCard name={name} description={description} />);

  expect(sanitizeDescription).toHaveBeenCalledWith(description);
});

describe('PokemonCard Interactions', () => {
  test('clicking the card triggers a function (assuming we add onClick prop)', () => {
    const name = 'Pikachu';
    const description = 'Electric-type Pokémon';
    const onClick = jest.fn(); // Mock function for testing

    render(
      <PokemonCard name={name} description={description} onClick={onClick} />
    );

    // Simulate a click event
    fireEvent.click(screen.getByText(name));

    // Check if the mock function is called
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
