// ThemeToggleButton.tsx
import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

const ThemeToggleButton: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button className="button" onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"} theme
    </button>
  );
};

export default ThemeToggleButton;
