import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider } from "../contexts/ThemeProvider";
import { useTheme } from "../hooks/useTheme";

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

const ThemeConsumer: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme("dark")}>Switch to Dark</button>
    </div>
  );
};

const TestComponent: React.FC = () => {
  const { theme } = useTheme();
  return <div>{`Theme is ${theme}`}</div>;
};

const ErrorThrowingComponent = () => {
  useTheme();
  return null;
};

describe("ThemeContext", () => {
  it("should provide the correct initial theme", () => {
    render(
      <Wrapper>
        <ThemeConsumer />
      </Wrapper>,
    );

    expect(screen.getByText("Current theme: light")).toBeInTheDocument();
  });

  it("should update the theme when setTheme is called", () => {
    render(
      <Wrapper>
        <ThemeConsumer />
      </Wrapper>,
    );

    fireEvent.click(screen.getByText("Switch to Dark"));

    expect(screen.getByText("Current theme: dark")).toBeInTheDocument();
  });

  test("should not throw error if useTheme is used within ThemeProvider", () => {
    expect(() => {
      render(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>,
      );
    }).not.toThrow();
  });
  test("should throw error if useTheme is used outside ThemeProvider", () => {
    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    expect(() => {
      render(<ErrorThrowingComponent />);
    }).toThrow("useTheme must be used within a ThemeProvider");

    consoleError.mockRestore();
  });
});
