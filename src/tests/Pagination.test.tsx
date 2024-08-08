import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Pagination from "../components/Pagination/Pagination";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import { ThemeProvider } from "../contexts/ThemeProvider";
import { createMockRouter } from "./mocks/Router.mock";

const mockRouter = createMockRouter({ query: { page: "2" } });
mockRouter.refresh = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => mockRouter,
  useSearchParams: () => ({
    get: jest.fn((key) => (key === "page" ? "2" : "")),
  }),
}));

describe("Pagination Component", () => {
  let pushStateMock: jest.Mock;

  beforeEach(() => {
    // Ensure pushState is mocked directly
    pushStateMock = jest.fn();
    jest.spyOn(window.history, "pushState").mockImplementation(pushStateMock);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should render Pagination component", () => {
    render(
      <ThemeProvider>
        <RouterContext.Provider value={mockRouter}>
          <Pagination next={true} />
        </RouterContext.Provider>
      </ThemeProvider>,
    );

    expect(screen.getByText(/Page 2/i)).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  it("should change url when clicking next", () => {
    render(
      <ThemeProvider>
        <RouterContext.Provider value={mockRouter}>
          <Pagination next={true} />
        </RouterContext.Provider>
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText("Next"));

    // Check that history.pushState was called with the correct parameters
    expect(pushStateMock).toHaveBeenCalledWith({}, "", "/?page=3&search=");

    // Check that refresh was called
    expect(mockRouter.refresh).toHaveBeenCalled();
  });
});
