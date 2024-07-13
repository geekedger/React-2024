import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Pagination from '../components/Pagination/Pagination';
import '@testing-library/jest-dom';

describe('Pagination Component', () => {
  it('should render Pagination component', () => {
    const mockOnPageChange = jest.fn();
    const { getByText, getByRole } = render(
      <MemoryRouter>
        <Pagination onPageChange={mockOnPageChange} />
      </MemoryRouter>
    );

    expect(getByText(/Page 1/i)).toBeInTheDocument(); // Check if Page 1 text is in the document
    expect(getByRole('button', { name: /Previous/i })).toBeDisabled(); // Check if Previous button is disabled
  });

  it('should call onPageChange with correct page number', () => {
    const mockOnPageChange = jest.fn();
    const { getByRole } = render(
      <MemoryRouter>
        <Pagination onPageChange={mockOnPageChange} />
      </MemoryRouter>
    );

    getByRole('button', { name: /Next/i }).click();
    expect(mockOnPageChange).toHaveBeenCalledWith(2); // Check if onPageChange is called with page number 2
  });

  it('should not allow going to previous page when on page 1', () => {
    const mockOnPageChange = jest.fn();
    const { getByRole } = render(
      <MemoryRouter>
        <Pagination onPageChange={mockOnPageChange} />
      </MemoryRouter>
    );

    expect(getByRole('button', { name: /Previous/i })).toBeDisabled(); // Check if Previous button is disabled
  });
});
