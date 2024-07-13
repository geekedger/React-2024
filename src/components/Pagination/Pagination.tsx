// components/Pagination/Pagination.tsx
import React from 'react';
// import '@testing-library/jest-dom'
import { useSearchParams } from 'react-router-dom';
import './Pagination.css';

interface PaginationProps {
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ onPageChange }) => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page')
    ? parseInt(searchParams.get('page')!)
    : 1;

  const handlePageChange = (newPage: number) => {
    if (newPage > 0) {
      onPageChange(newPage);
    }
  };

  return (
    <div className="pagination">
      <button onClick={() => handlePageChange(page - 1)} disabled={page <= 1}>
        Previous
      </button>
      <span>Page {page}</span>
      <button onClick={() => handlePageChange(page + 1)}>Next</button>
    </div>
  );
};

export default Pagination;
