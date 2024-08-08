import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./Pagination.module.css";
import { useTheme } from "../../hooks/useTheme";
import { usePushStateListener } from "../../hooks/usePushStateListener"; // Adjust the path as needed

interface PaginationProps {
  next: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ next }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { theme } = useTheme();

  // Получение параметров из searchParams
  const page = searchParams.get("page")
    ? parseInt(searchParams.get("page") as string, 10)
    : 1;
  const searchTerm = searchParams.get("search") || "";

  // Функция для обработки пагинации
  const handlePagination = (newPage: number) => {
    const newSearchParams = new URLSearchParams({
      page: newPage.toString(),
      search: searchTerm,
    }).toString();

    // Обновление URL без перезагрузки страницы
    window.history.pushState({}, "", `/?${newSearchParams}`);
    router.refresh(); // Обновление данных на странице при изменении URL
  };

  // Использование хука для прослушивания изменений в URL
  usePushStateListener((url) => {
    // Вы можете обработать обновления URL здесь, если необходимо
    console.log("URL updated:", url);
  });

  return (
    <div className={`${styles["pagination"]} ${styles[theme]}`}>
      {page > 1 && (
        <button onClick={() => handlePagination(page - 1)}>Previous</button>
      )}
      <span>Page {page}</span>
      {next && <button onClick={() => handlePagination(page + 1)}>Next</button>}
    </div>
  );
};

export default Pagination;
