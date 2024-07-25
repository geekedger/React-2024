import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Pagination from "../components/Pagination/Pagination";

describe("Pagination Component", () => {
  it("should render Pagination component", () => {
    jest.spyOn(URLSearchParams.prototype, "get").mockReturnValue("2");

    const { getByText } = render(
      <MemoryRouter>
        <Pagination next={true} />
      </MemoryRouter>,
    );

    expect(getByText(/Page 2/i)).toBeInTheDocument(); // Check if Page 1 text is in the document
    expect(getByText("Next")).toBeInTheDocument(); // Check if Previous button is disabled
  });

  it("should change url when clicking next", () => {
    Object.defineProperty(window, "location", {
      value: new URL("https://yourtesturl.com/some-path?page=3"),
      writable: true,
    });

    render(
      <MemoryRouter>
        <Pagination next={true} />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByText("Next"));
    expect(window.location.search).toBe("?page=3");
  });
});
