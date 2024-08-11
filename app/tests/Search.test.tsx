import "whatwg-fetch";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import React, { useState } from "react";

import { ThemeProvider } from "../contexts/ThemeProvider";
import SearchComponent from "../components/SearchComponent/SearchComponent";

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

const mockedUsedNavigate = jest.fn();

jest.mock("@remix-run/react", () => ({
  useNavigate: () => mockedUsedNavigate,
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

describe("App", () => {
  beforeEach(() => {
    localStorageMock.clear();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  test("renders without error", () => {
    <ThemeProvider>
      render(
      <SearchComponent searchTerm="" onSearch={() => {}} />
      );
    </ThemeProvider>;
  });

  test("calls onSearch with correct search term on form submit", () => {
    const onSearchMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <ThemeProvider>
        <SearchComponent searchTerm="" onSearch={onSearchMock} />
      </ThemeProvider>,
    );

    const inputElement = getByPlaceholderText("Search Pokemon");
    const submitButton = getByText("Search");

    fireEvent.change(inputElement, { target: { value: "pikachu" } });
    fireEvent.click(submitButton);

    expect(onSearchMock).toHaveBeenCalledWith("pikachu");
  });

  test("throws error on button click", () => {
    const { getByText } = render(
      <ThemeProvider>
        <SearchComponent searchTerm="" onSearch={() => {}} />
      </ThemeProvider>,
    );

    const throwErrorButton = getByText("Throw Error");

    expect(() => {
      fireEvent.click(throwErrorButton);
    }).toThrow("Simulated error.");
  });

  test("calls onSearch with empty search term on form submit if input is cleared", () => {
    const onSearchMock = jest.fn();
    const { getByPlaceholderText, getByText } = render(
      <ThemeProvider>
        <SearchComponent searchTerm="pikachu" onSearch={onSearchMock} />
      </ThemeProvider>,
    );

    const inputElement = getByPlaceholderText("Search Pokemon");
    const submitButton = getByText("Search");

    fireEvent.change(inputElement, { target: { value: "" } });
    fireEvent.click(submitButton);

    expect(onSearchMock).toHaveBeenCalledWith("");
  });
});
