import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import selectedItemsReducer, {
  clearSelectedItems,
} from "../store/selectedItemsSlice";
import flyoutReducer, { hideFlyout } from "../store/flyoutSlice";
import FlyoutComponent from "./../components/FlyoutComponent/FlyoutComponent";

// Mock the dispatch function
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

// Define the shape of the state for the test
type TestRootState = {
  selectedItems: ReturnType<typeof selectedItemsReducer>;
  flyout: ReturnType<typeof flyoutReducer>;
};

// Helper function to render the component with the store
const renderWithStore = (initialState: Partial<TestRootState>) => {
  const store = configureStore({
    reducer: {
      selectedItems: selectedItemsReducer,
      flyout: flyoutReducer,
    },
    preloadedState: initialState as TestRootState,
  });

  return render(
    <Provider store={store}>
      <FlyoutComponent />
    </Provider>,
  );
};

describe("FlyoutComponent", () => {
  beforeEach(() => {
    mockDispatch.mockClear();
  });

  it("should render null when flyout is not visible", () => {
    renderWithStore({ flyout: { isVisible: false } });

    expect(screen.queryByText(/items are selected/i)).toBeNull();
  });

  it("should display the correct number of selected items", () => {
    renderWithStore({
      flyout: { isVisible: true },
      selectedItems: {
        items: [
          {
            name: "Pikachu",
            url: "",
            description: "Electric type",
            details: "Some details",
            imageUrl: "",
          },
          {
            name: "Bulbasaur",
            url: "",
            description: "Grass type",
            details: "Some details",
            imageUrl: "",
          },
        ],
      },
    });

    expect(screen.getByText(/2 items are selected/i)).toBeInTheDocument();
  });

  it('should dispatch clearSelectedItems and hideFlyout on clicking "Unselect all"', () => {
    renderWithStore({
      flyout: { isVisible: true },
      selectedItems: {
        items: [
          {
            name: "Pikachu",
            url: "",
            description: "Electric type",
            details: "Some details",
            imageUrl: "",
          },
        ],
      },
    });

    fireEvent.click(screen.getByText(/unselect all/i));

    expect(mockDispatch).toHaveBeenCalledWith(clearSelectedItems());
    expect(mockDispatch).toHaveBeenCalledWith(hideFlyout());
  });

  it('should create a CSV file with selected items on clicking "Download"', () => {
    const { getByText } = renderWithStore({
      flyout: { isVisible: true },
      selectedItems: {
        items: [
          {
            name: "Pikachu",
            url: "",
            description: "Electric type",
            details: "Some details",
            imageUrl: "",
          },
        ],
      },
    });

    // Mock document.createElement
    const mockCreateElement = document.createElement;
    document.createElement = jest.fn().mockReturnValue({
      setAttribute: jest.fn(),
      click: jest.fn(),
    });

    const mockAppendChild = jest.fn();
    Object.defineProperty(document.body, "appendChild", {
      value: mockAppendChild,
    });

    fireEvent.click(getByText(/download/i));

    expect(document.createElement).toHaveBeenCalledWith("a");
    expect(mockAppendChild).toHaveBeenCalled();

    document.createElement = mockCreateElement; // Restore the original function
  });
});
