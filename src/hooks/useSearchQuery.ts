import { useState, useEffect } from 'react';

const useSearchQuery = (key: string, defaultValue: string = '') => {
  // Инициализируем состояние значением из localStorage или значением по умолчанию
  const [searchTerm, setSearchTerm] = useState(
    () => localStorage.getItem(key) || defaultValue
  );

  // Сохраняем состояние в localStorage и удаляем его при размонтировании компонента
  useEffect(() => {
    localStorage.setItem(key, searchTerm);
    return () => {
      localStorage.removeItem(key);
    };
  }, [key, searchTerm]);

  return [searchTerm, setSearchTerm] as const;
};

export default useSearchQuery;
