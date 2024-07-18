import React from "react";
import { useTheme } from "../../ThemeContext";

const ThemeToggler: React.FC = () => {
  const { toggleTheme } = useTheme();

  return <button onClick={toggleTheme}>Переключить тему</button>;
};

export default ThemeToggler;
