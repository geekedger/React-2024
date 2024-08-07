import "whatwg-fetch";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import { ThemeProvider } from "../contexts/ThemeProvider";
import store from "../store/store";
import MainPage from "../components/MainPage/MainPage";
import { createMockRouter } from "./mocks/Router.mock"; // обновите путь, если нужно
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import { Provider } from "react-redux";

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
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it("should save the search term to local storage on submit", async () => {
    const mockRouter = createMockRouter({ query: { page: "1" } });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <RouterContext.Provider value={mockRouter}>
            <MainPage
              initialPokemons={[]}
              initialSearchTerm={""}
              initialPage={0}
            />
          </RouterContext.Provider>
        </ThemeProvider>
      </Provider>,
    );

    // Ensure that the form is rendered
    expect(screen.getByPlaceholderText(/Search Pokémon/i)).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText(/Search Pokémon/i), {
      target: { value: "Pikachu" },
    });

    fireEvent.click(screen.getByText(/Search/i));

    // Wait for localStorage to be updated
    await waitFor(() =>
      expect(localStorage.getItem("searchTerm")).toBe("Pikachu"),
    );
  });

  it("should retrieve the search term from local storage upon mounting", async () => {
    localStorage.setItem("searchTerm", "Pikachu");
    const mockRouter = createMockRouter({ query: { page: "1" } });

    render(
      <Provider store={store}>
        <ThemeProvider>
          <RouterContext.Provider value={mockRouter}>
            <MainPage
              initialPokemons={[]}
              initialSearchTerm={""}
              initialPage={0}
            />
          </RouterContext.Provider>
        </ThemeProvider>
      </Provider>,
    );

    // Ensure that the form is rendered
    expect(screen.getByPlaceholderText(/Search Pokémon/i)).toBeInTheDocument();
    expect(screen.getByText(/Search/i)).toBeInTheDocument();

    const input = screen.getByPlaceholderText(
      /Search Pokémon/i,
    ) as HTMLInputElement;

    // Wait for the input value to be set from localStorage
    await waitFor(() => expect(input.value).toBe("Pikachu"));
  });
});
