import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";
import { mockPokemons } from "./__ mocks __/CardList.mock";

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
    window.fetch = mockFetch(mockPokemons) as jest.Mock;
  });

  test("Ensure that the card component renders the relevant card data", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
  });
});
