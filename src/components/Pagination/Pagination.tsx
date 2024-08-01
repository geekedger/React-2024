// components/Pagination/Pagination.tsx

import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./Pagination.module.css";

interface PaginationProps {
  next: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ next }) => {
  const router = useRouter();
  const { query } = router;

  const page = query.page ? parseInt(query.page as string, 10) : 1;
  const searchTerm = query.search as string | undefined;

  return (
    <div className={styles.pagination}>
      {page > 1 && (
        <Link
          href={{
            pathname: "/",
            query: {
              page: page - 1,
              search: searchTerm || undefined,
            },
          }}
        >
          Previous
        </Link>
      )}
      <span>Page {page}</span>
      {next && (
        <Link
          href={{
            pathname: "/",
            query: {
              page: page + 1,
              search: searchTerm || undefined,
            },
          }}
        >
          Next
        </Link>
      )}
    </div>
  );
};

export default Pagination;
