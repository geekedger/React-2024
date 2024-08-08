import "whatwg-fetch";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "../contexts/ThemeProvider";
import store from "../store/store";
import MainPage from "../components/MainPage/MainPage";
import { Provider } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";

// Mock useRouter and useSearchParams from next/navigation
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
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

// Mock localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: string) {
      store[key] = value;
    },
    clear() {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: localStorageMock });

describe("MainPage Component", () => {
  beforeEach(() => {
    localStorageMock.clear();

    // Mocking useRouter to return necessary router functions
    (useRouter as jest.Mock).mockReturnValue({
      push: jest.fn(),
      replace: jest.fn(),
      query: {},
    });

    // Mocking useSearchParams to return necessary functions
    (useSearchParams as jest.Mock).mockReturnValue({
      get: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it("should save the search term to local storage on submit", async () => {
    render(
      <Provider store={store}>
        <ThemeProvider>
          <MainPage
            initialPokemons={[]}
            initialSearchTerm={""}
            initialPage={0}
          />
        </ThemeProvider>
      </Provider>,
    );

    expect(screen.getByPlaceholderText(/Search Pokémon/i)).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText(/Search Pokémon/i), {
      target: { value: "Pikachu" },
    });

    fireEvent.click(screen.getByText(/Search/i));

    await waitFor(() =>
      expect(localStorage.getItem("searchTerm")).toBe("Pikachu"),
    );
  });

  it("should retrieve the search term from local storage upon mounting", async () => {
    localStorage.setItem("searchTerm", "Pikachu");

    render(
      <Provider store={store}>
        <ThemeProvider>
          <MainPage
            initialPokemons={[]}
            initialSearchTerm={""}
            initialPage={0}
          />
        </ThemeProvider>
      </Provider>,
    );

    expect(screen.getByPlaceholderText(/Search Pokémon/i)).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();

    const input = screen.getByPlaceholderText(
      /Search Pokémon/i,
    ) as HTMLInputElement;

    await waitFor(() => expect(input.value).toBe("Pikachu"));
  });
});
