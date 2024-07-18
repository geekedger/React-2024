import React, { createContext, useContext, useState, ReactNode } from "react";

type Theme = {
  backgroundColor: string;
  color: string;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const lightTheme: Theme = {
  backgroundColor: "#ffffff",
  color: "#000000",
};

const darkTheme: Theme = {
  backgroundColor: "#000000",
  color: "#ffffff",
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme,
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
