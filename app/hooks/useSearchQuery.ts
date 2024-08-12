import { useState, useEffect } from "react";

// Check if we are in a browser environment
const isBrowser = typeof window !== "undefined";

const useSearchQuery = (key: string, defaultValue: string = "") => {
  const [value, setValue] = useState(() => {
    if (isBrowser) {
      return localStorage.getItem(key) || defaultValue;
    }
    return defaultValue;
  });

  useEffect(() => {
    if (isBrowser) {
      localStorage.setItem(key, value);
    }
  }, [key, value]);

  return [value, setValue] as const;
};

export default useSearchQuery;
