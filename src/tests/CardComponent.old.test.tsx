import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import PokemonCard from "../components/PokemonCard/PokemonCard";
import { pokemonMock } from "./mocks/Pokemon.mock";
import DetailedCard from "../components/DetailedCard/DetailedCard";
import { Provider } from "react-redux";

export function mockFetch(data: unknown) {
  return jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(data),
      ok: true,
    }),
  );
}

describe("Pokemon component", () => {
  beforeEach(() => {
    window.fetch = mockFetch(pokemonMock) as jest.Mock;
  });

  test("Ensure that the card component renders the relevant card data", () => {
    render(
      <MemoryRouter>
        <PokemonCard pokemon={pokemonMock} />
      </MemoryRouter>,
    );
    const titleElement = screen.getByText(pokemonMock.name);
    expect(titleElement).toBeInTheDocument();
  });

  test("Validate that clicking on a card opens a detailed card component", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<PokemonCard pokemon={pokemonMock} />} />
          <Route path="/details/:id" element={<DetailedCard />} />
        </Routes>
      </MemoryRouter>,
    );
    const pokemonLinkElement = document.querySelector(".pokemon-card-link");
    expect(pokemonLinkElement).toBeInTheDocument();
    fireEvent.click(pokemonLinkElement as HTMLElement);
    await waitFor(() => {
      expect(document.querySelector(".detailed-card")).toBeInTheDocument();
    });
  });

  test("Check that clicking on the card triggers an additional API call to fetch detailed information.", async () => {
    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<PokemonCard pokemon={pokemonMock} />} />
          <Route path="/details/:id" element={<DetailedCard />} />
        </Routes>
      </MemoryRouter>,
    );
    const pokemonCardElement = document.querySelector(".pokemon-card-link");
    expect(pokemonCardElement).toBeInTheDocument();
    fireEvent.click(pokemonCardElement as HTMLElement);
    await waitFor(() => {
      expect(window.fetch).toHaveBeenCalledTimes(1);
    });
  });
});


