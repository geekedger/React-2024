import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ResultsComponent from "../components/ResultsComponent/ResultsComponent";
import { mockPokemons } from "./mocks/CardList.mock";

describe("ResultsComponent component", () => {
  test("Verify that the component renders the specified number of cards", () => {
    const props = {
      pokemons: mockPokemons.results,
      error: null,
    };
    const { container } = render(
      <MemoryRouter>
        <ResultsComponent {...props} />
      </MemoryRouter>,
    );
    const cards = container.querySelectorAll(".pokemon-card");
    expect(cards.length).toBe(25);
  });

  test("Check that an appropriate message is displayed if no cards are present", () => {
    const props = {
      pokemons: [],
      error: null,
    };
    render(
      <MemoryRouter>
        <ResultsComponent {...props} />
      </MemoryRouter>,
    );

    expect(screen.getByText("No Pokemon found")).toBeInTheDocument();
  });
});
