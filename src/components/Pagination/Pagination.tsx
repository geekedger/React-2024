import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import styles from "./Pagination.module.css";
import { useTheme } from "../../hooks/useTheme";
interface PaginationProps {
  next: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ next }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { theme } = useTheme();

  const page = searchParams.get("page")
    ? parseInt(searchParams.get("page") as string, 10)
    : 1;
  const searchTerm = searchParams.get("search") || "";

  const handlePagination = (newPage: number) => {
    const newSearchParams = new URLSearchParams({
      page: newPage.toString(),
      search: searchTerm,
    }).toString();

    window.history.pushState({}, "", `/?${newSearchParams}`);
    router.refresh();
  };

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
