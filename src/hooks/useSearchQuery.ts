import { useState, useEffect } from "react";

const useSearchQuery = (key: string, defaultValue: string = "") => {
  const [value, setValue] = useState<string>(defaultValue);

  // Инициализация значения из localStorage при монтировании компонента
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(`Checking localStorage for key: ${key}`);
      const storedValue = localStorage.getItem(key);
      if (storedValue !== null) {
        console.log(`Found value in localStorage: ${storedValue}`);
        setValue(storedValue);
      } else {
        console.log(`No value found in localStorage for key: ${key}`);
      }
    }
  }, [key]);

  // Обновление localStorage при изменении значения
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(`Setting value in localStorage: ${value}`);
      localStorage.setItem(key, value);
    }
  }, [key, value]);

  return [value, setValue] as const;
};

export default useSearchQuery;
