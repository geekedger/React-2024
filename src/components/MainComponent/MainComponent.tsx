import React, { ReactNode } from "react";
import { useTheme, useThemeUpdate } from "../../ThemeContext";

interface MainComponentProps {
  children: ReactNode;
}

const MainComponent: React.FC<MainComponentProps> = ({ children }) => {
  const { theme } = useTheme();
  const toggleTheme = useThemeUpdate(); // Правильно используем функцию toggleTheme из контекста темы

  const containerStyle: React.CSSProperties = {
    background: theme === "light" ? "#FFF" : "#333",
    color: theme === "light" ? "#000" : "#FFF",
    minHeight: "100vh",

    transition: "background 0.3s, color 0.3s",
  };

  const buttonStyle: React.CSSProperties = {
    background: theme === "light" ? "#333" : "#FFF",
    color: theme === "light" ? "#FFF" : "#333",
    border: "none",

    cursor: "pointer",
    marginTop: "20px",
    transition: "background 0.3s, color 0.3s",
  };

  const handleToggleTheme = () => {
    toggleTheme(); // Вызываем функцию toggleTheme при клике на кнопку
  };

  return (
    <div style={containerStyle}>
      <h1>The current theme is {theme}</h1>
      <button style={buttonStyle} onClick={handleToggleTheme}>
        Toggle to {theme === "light" ? "dark" : "light"} mode
      </button>
      {children}
    </div>
  );
};

export default MainComponent;
