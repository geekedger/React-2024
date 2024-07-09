import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import './Pagination.css';

interface PaginationProps {
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ onPageChange }) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const page = searchParams.get('page')
    ? parseInt(searchParams.get('page')!)
    : 1;

  const handlePageChange = (newPage: number) => {
    if (newPage > 0) {
      onPageChange(newPage);
      navigate(`/?search=${searchParams.get('search') || ''}&page=${newPage}`);
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
