import React from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import "./Pagination.css";

interface PaginationProps {
  next: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ next }) => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page")
    ? parseInt(searchParams.get("page")!)
    : 1;

  const searchTerm = searchParams.get("search");

  return (
    <div className="pagination">
      {page > 1 && (
        <NavLink
          to={`?page=${page - 1}${searchTerm ? `&search=${searchTerm}` : ""}`}
        >
          Previous
        </NavLink>
      )}
      <span>Page {page}</span>
      {next && (
        <NavLink
          to={`?page=${page + 1}${searchTerm ? `&search=${searchTerm}` : ""}`}
        >
          Next
        </NavLink>
      )}
    </div>
  );
};

export default Pagination;
