// hooks/useSearchQuery.ts

import { useState, useEffect } from "react";

const useSearchQuery = (key: string, defaultValue: string = "") => {
  const [value, setValue] = useState(
    () => localStorage.getItem(key) || defaultValue,
  );

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue] as const;
};

export default useSearchQuery;
