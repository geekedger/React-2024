import "whatwg-fetch";
import "@testing-library/jest-dom";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ResultsComponent from "../components/ResultsComponent/ResultsComponent";
import { mockPokemons } from "./mocks/CardList.mock";
import { Provider } from "react-redux";
import store from "../store/store";
import React, { useState } from "react";

let mockSearchParam = "page=1";

jest.mock("@remix-run/react", () => ({
  Link: ({ children, ...props }: { children: React.ReactNode }) => (
    <a {...props}>{children}</a>
  ),
  useSearchParams: () => {
    const [params, setParams] = useState(new URLSearchParams(mockSearchParam));
    return [
      params,
      (newParams: string) => {
        mockSearchParam = newParams;
        setParams(new URLSearchParams(newParams));
      },
    ];
  },
}));

// Mock useSearchQuery hook
jest.mock("../hooks/useSearchQuery", () => {
  return jest.fn((key: string, defaultValue: string = "") => {
    const [value, setValue] = React.useState(
      () => localStorage.getItem(key) || defaultValue,
    );

    React.useEffect(() => {
      localStorage.setItem(key, value);
    }, [key, value]);

    return [value, setValue] as const;
  });
});

describe("ResultsComponent component", () => {
  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  test("Verify that the component renders the specified number of cards", async () => {
    const props = {
      pokemons: mockPokemons.results,
      error: null,
    };

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ResultsComponent {...props} />
        </MemoryRouter>
      </Provider>,
    );

    // Wait for the cards to be rendered
    const cards = await waitFor(() => screen.getAllByRole("listitem"));
    expect(cards.length).toBe(25);
  });

  test("Check that an appropriate message is displayed if no cards are present", async () => {
    const props = {
      pokemons: [],
      error: null,
    };

    render(
      <Provider store={store}>
        <MemoryRouter>
          <ResultsComponent {...props} />
        </MemoryRouter>
      </Provider>,
    );

    // Ensure the "No Pokemon found" message is displayed
    const message = await waitFor(() => screen.getByText("No Pokemon found"));
    expect(message).toBeInTheDocument();
  });
});
