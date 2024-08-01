import { useState, useEffect } from "react";

const useSearchQuery = (key: string, defaultValue: string = "") => {
  const [value, setValue] = useState<string>(defaultValue);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        setValue(storedValue);
      }
    }
  }, [key]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, value);
    }
  }, [key, value]);

  return [value, setValue] as const;
};

export default useSearchQuery;
