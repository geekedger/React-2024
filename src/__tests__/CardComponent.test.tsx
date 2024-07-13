// PokemonCard.test.tsx

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PokemonCard from '../components/PokemonCard/PokemonCard';

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
