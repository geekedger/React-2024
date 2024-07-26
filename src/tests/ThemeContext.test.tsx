// src/tests/ThemeContext.test.tsx

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useTheme, ThemeProvider } from "../contexts/ThemeContext";

// Определяем Wrapper прямо в тесте
const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
);

// Создайте компонент-обертку для тестирования контекста
const ThemeConsumer: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme("dark")}>Switch to Dark</button>
    </div>
  );
};

// Определяем TestComponent для тестирования использования useTheme
const TestComponent: React.FC = () => {
  const { theme } = useTheme();
  return <div>{`Theme is ${theme}`}</div>;
};

const ErrorThrowingComponent = () => {
  useTheme(); // This should throw an error if used outside of ThemeProvider
  return null; // or any other component logic
};

describe("ThemeContext", () => {
  it("should provide the correct initial theme", () => {
    render(
      <Wrapper>
        <ThemeConsumer />
      </Wrapper>,
    );

    // Проверяем, что начальная тема светлая
    expect(screen.getByText("Current theme: light")).toBeInTheDocument();
  });

  it("should update the theme when setTheme is called", () => {
    render(
      <Wrapper>
        <ThemeConsumer />
      </Wrapper>,
    );

    // Изменяем тему
    fireEvent.click(screen.getByText("Switch to Dark"));

    // Проверяем, что тема изменилась на темную
    expect(screen.getByText("Current theme: dark")).toBeInTheDocument();
  });

  test("should not throw error if useTheme is used within ThemeProvider", () => {
    // Тестируем, что ошибки нет, если компонент обернут в ThemeProvider
    expect(() => {
      render(
        <ThemeProvider>
          <TestComponent />
        </ThemeProvider>,
      );
    }).not.toThrow(); // Ожидаем отсутствие ошибок
  });
  test("should throw error if useTheme is used outside ThemeProvider", () => {
    // Мокаем функцию console.error для предотвращения вывода ошибки в консоль
    const consoleError = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    // Проверяем, что ошибка выбрасывается
    expect(() => {
      render(<ErrorThrowingComponent />);
    }).toThrow("useTheme must be used within a ThemeProvider");

    // Восстанавливаем оригинальное console.error
    consoleError.mockRestore();
  });
});
