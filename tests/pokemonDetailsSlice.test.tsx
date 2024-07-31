import pokemonDetailsReducer, {
  setPokemonDetails,
  clearPokemonDetails,
} from "../store/pokemonDetailsSlice";

describe("pokemonDetailsSlice", () => {
  const initialState = {
    name: "",
    description: "",
    imageUrl: "",
  };

  it("should return the initial state", () => {
    expect(pokemonDetailsReducer(undefined, { type: "unknown" })).toEqual(
      initialState,
    );
  });

  it("should handle setPokemonDetails", () => {
    const payload = {
      name: "Pikachu",
      description: "Electric type Pokémon",
      imageUrl: "http://example.com/pikachu.png",
    };
    const expectedState = {
      name: "Pikachu",
      description: "Electric type Pokémon",
      imageUrl: "http://example.com/pikachu.png",
    };
    expect(
      pokemonDetailsReducer(initialState, setPokemonDetails(payload)),
    ).toEqual(expectedState);
  });

  it("should handle clearPokemonDetails", () => {
    const state = {
      name: "Pikachu",
      description: "Electric type Pokémon",
      imageUrl: "http://example.com/pikachu.png",
    };
    expect(pokemonDetailsReducer(state, clearPokemonDetails())).toEqual(
      initialState,
    );
  });
});
