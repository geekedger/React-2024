import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import Pagination from "../components/Pagination/Pagination";
import { createMockRouter } from "./mocks/Router.mock"; // обновите путь, если нужно
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";
import { ThemeProvider } from "../contexts/ThemeProvider";

describe("Pagination Component", () => {
  it("should render Pagination component", () => {
    const mockRouter = createMockRouter({ query: { page: "2" } });

    render(
      <ThemeProvider>
        <RouterContext.Provider value={mockRouter}>
          <Pagination next={true} />
        </RouterContext.Provider>
        ,
      </ThemeProvider>,
    );

    expect(screen.getByText(/Page 2/i)).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  it("should change url when clicking next", () => {
    const mockRouter = createMockRouter({ query: { page: "2" } });

    render(
      <ThemeProvider>
        <RouterContext.Provider value={mockRouter}>
          <Pagination next={true} />
        </RouterContext.Provider>
        ,
      </ThemeProvider>,
    );

    fireEvent.click(screen.getByText("Next"));
    expect(mockRouter.push).toHaveBeenCalledWith(
      {
        pathname: "/",
        query: {
          page: 3,
          search: undefined,
        },
      },
      undefined,
      { shallow: true },
    );
  });
});
