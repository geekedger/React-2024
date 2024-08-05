// components/Pagination/Pagination.tsx

import React from "react";
import { useRouter } from "next/router";
import styles from "./Pagination.module.css";

interface PaginationProps {
  next: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ next }) => {
  const router = useRouter();
  const { query } = router;

  const page = query.page ? parseInt(query.page as string, 10) : 1;
  const searchTerm = query.search as string | undefined;

  const handlePagination = (newPage: number) => {
    // Используйте shallow навигацию для обновления URL
    router.push(
      {
        pathname: "/",
        query: {
          page: newPage,
          search: searchTerm || undefined,
        },
      },
      undefined,
      { shallow: true },
    );
  };

  return (
    <div className={styles.pagination}>
      {page > 1 && (
        <button onClick={() => handlePagination(page - 1)}>Previous</button>
      )}
      <span>Page {page}</span>
      {next && <button onClick={() => handlePagination(page + 1)}>Next</button>}
    </div>
  );
};

export default Pagination;
