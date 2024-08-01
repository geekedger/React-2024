import themeReducer, {
  setTheme,
  toggleTheme,
  ThemeState,
} from "../src/store/themeSlice";

describe("themeSlice", () => {
  const initialState: ThemeState = {
    theme: "light",
  };

  it("should return the initial state", () => {
    expect(themeReducer(undefined, { type: "unknown" })).toEqual(initialState);
  });

  it("should handle setTheme", () => {
    const payload = "dark";
    const expectedState = {
      theme: "dark",
    };
    expect(themeReducer(initialState, setTheme(payload))).toEqual(
      expectedState,
    );
  });

  it("should handle toggleTheme from light to dark", () => {
    expect(themeReducer(initialState, toggleTheme())).toEqual({
      theme: "dark",
    });
  });

  it("should handle toggleTheme from dark to light", () => {
    const state: ThemeState = {
      theme: "dark",
    };
    expect(themeReducer(state, toggleTheme())).toEqual({
      theme: "light",
    });
  });
});
